import { EditorView } from 'codeMirror';
import { highlightTree } from '@lezer/highlight';
import { EditorState } from '@codemirror/state';
import { ensureSyntaxTree, defaultHighlightStyle } from '@codemirror/language';
import { basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface Style {
  color: string;
  weight: string;
}

interface Token {
  i: number;
  x: number;
  y: number;
  text: string;
  style: Style;
}

// interface Message {
//   type: 'text';
//   width: number;
//   height: number;
//   text: string;
//   tokens: Token[];
//   language: string;
// }

const language = () => javascript({ jsx: true, typescript: true });

const editor = new EditorView({
  parent: document.body,
  state: EditorState.create({
    doc: 'const a = 12;',
    extensions: [[basicSetup, language()]],
  }),
});

function highlight(doc: string) {
  const transaction = editor.state.update({
    changes: { from: 0, to: editor.state.doc.length, insert: doc },
  });
  editor.dispatch(transaction);

  const docContents = editor.state.doc.toString();
  const highlighting: [number, number, string][] = [];

  const STYLE_CACHE = {};

  function getStyle(className: string): Style {
    // Check if the style is cached to avoid unnecessary computation
    if (STYLE_CACHE[className] != null) {
      return STYLE_CACHE[className];
    }

    // Create a temporary element
    const tmpElem = document.createElement('div');
    tmpElem.className = className;
    document.body.appendChild(tmpElem);
    // Update the cache with the computed style
    const computed = getComputedStyle(tmpElem);
    STYLE_CACHE[className] = {
      color: computed.color,
      weight: computed.fontWeight,
    };
    document.body.removeChild(tmpElem);

    // Return getStyle, which will retrieve from cache now
    return getStyle(className);
  }

  const sytnaxTree = ensureSyntaxTree(
    editor.state,
    editor.state.doc.length,
    (() => false) as unknown as number
  );

  if (sytnaxTree) {
    highlightTree(sytnaxTree, defaultHighlightStyle, (from, to, classes) =>
      highlighting.push([from, to, classes])
    );
  }

  const tokens: Token[] = [];
  let x = 0;
  let y = 0;
  let width = 0;

  for (let i = 0; i < docContents?.length; i++) {
    const text = docContents.charAt(i);
    tokens.push({ i, x, y, text, style: { color: '', weight: '' } });
    if (text === '\n') {
      // Line feed, advance newline
      x = 0;
      y++;
    } else {
      // Advance character
      x++;
      if (x > width) {
        // Note new max width
        width = x;
      }
    }
  }

  const height = y + 1;

  for (const highlight of highlighting) {
    for (let i = highlight[0]; i < highlight[1]; i++) {
      tokens[i].style = getStyle(highlight[2]);
    }
  }

  const newTokens: Token[] = [];
  let prevToken: Token | null = null;
  let currentRun: Token[] = [];

  const flushTokens = () => {
    if (currentRun.length > 0) {
      // Flush out current tokens
      const firstToken = currentRun[0];
      let combinedTokenText = '';
      for (const token of currentRun) {
        combinedTokenText += token.text;
      }
      newTokens.push({
        i: firstToken.i,
        x: firstToken.x,
        y: firstToken.y,
        style: firstToken.style,
        text: combinedTokenText,
      });
      // Set current run
      currentRun = [];
    }
  };

  for (const token of tokens) {
    if (token.text === '\n') {
      // Newline token always ends the current run
      flushTokens();
    } else {
      // Check the previous token
      if (prevToken != null) {
        if (
          prevToken.style.color !== token.style.color ||
          prevToken.style.weight !== token.style.weight
        ) {
          // If the tokens don't match, flush the current run
          flushTokens();
        }
      }
      // No matter what, increment the current run
      currentRun.push(token);
    }

    // Set the previous token
    prevToken = token;
  }
  // Flush any remaining tokens
  flushTokens();

  return {
    width,
    height,
    text: doc,
    tokens: newTokens,
  };
}

window.onmessage = (msg) => {
  switch (msg.data.pluginMessage.type) {
    case 'COPY':
      copy(msg.data.pluginMessage.payload);
      break;
    case 'HIGHLIGHT':
      const tokens = highlight(msg.data.pluginMessage.payload.doc || '');

      window.parent.postMessage(
        {
          pluginMessage: {
            type: 'SYNTAX_HIGHLIGHTED',
            payload: {
              tokens,
              id: msg.data.pluginMessage.payload.id,
            },
          },
        },
        '*'
      );
      break;
  }
};

function copy(text) {
  const input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = text;
  input.select();
  input.setSelectionRange(0, 99999);

  document.execCommand('copy');

  // The plugin cannot write content to the clipboard
  // if closed immediately
  setInterval(() => {
    window.parent.postMessage({ pluginMessage: { type: 'CODE_COPIED' } }, '*');
  }, 500);
}
