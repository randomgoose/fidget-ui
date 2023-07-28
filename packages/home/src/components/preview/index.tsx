import { IconButton, Tabs } from 'fidget-ui';
import { IconDocument } from 'fidget-ui/icons';
import { ControlledRadioGroup } from '../../docs/radio/controlled-radio-group';

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

interface PreviewProps {
  id: string;
  children: FigmaDeclarativeNode;
  code: string;
}

const { useSyncedState, AutoLayout, Text } = figma.widget;

export function Preview({ id, children, code }: PreviewProps) {
  const [tokens] = useSyncedState(`__fidget_ui_Preview_${id}_tokens`, {
    width: 1,
    height: 1,
    text: '',
    tokens: [],
  });

  function getFill(style: string) {
    const defaultColor = {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    };

    try {
      if (style.startsWith('rgb')) {
        const numbers = style
          .split(/[^0-9]+/)
          .filter((x) => x.trim().length > 0)
          .map((x) => parseInt(x));
        if (numbers.length >= 3) {
          return {
            r: numbers[0] / 255,
            g: numbers[1] / 255,
            b: numbers[2] / 255,
            a: numbers.length >= 4 ? numbers[3] : 1,
          };
        }
      }
      return defaultColor;
    } catch (e) {
      return defaultColor;
    }
  }

  function fillMode(color: Color, mode: string): Color {
    if (mode === 'light') return color;
    return {
      r: 1 - color.r,
      g: 1 - color.g,
      b: 1 - color.b,
      a: color.a,
    };
  }

  return (
    <Tabs
      key={id}
      onChange={async (key) =>
        new Promise((resolve) => {
          if (key === 'code') {
            figma.showUI(__html__, { visible: false });
            figma.ui.postMessage({
              type: 'HIGHLIGHT',
              payload: {
                doc: code,
                id: `__fidget_ui_Preview_${id}_tokens`,
              },
            });
          } else {
            resolve();
          }
        })
      }
      id={id}
      items={[
        {
          key: 'preview',
          tab: 'Preview',
          children,
        },
        {
          key: 'code',
          tab: 'Code',
          children: (
            <AutoLayout
              cornerRadius={6}
              padding={16}
              fill={'#000'}
              width={'fill-parent'}
              height={'fill-parent'}
            >
              <AutoLayout width={'fill-parent'} height={((tokens.height * 12) / 24) * 30}>
                {tokens.tokens.length > 0 &&
                  tokens.tokens?.map((token: any) => (
                    <Text
                      fontSize={12}
                      fontFamily="Source Code Pro"
                      positioning="absolute"
                      fill={fillMode(getFill(token.style.color), 'dark')}
                      x={{ type: 'left', offset: token.x * 12 * 0.6 }}
                      y={{ type: 'top', offset: ((token.y * 12) / 24) * 30 }}
                      key={token?.text}
                    >
                      {token?.text}
                    </Text>
                  ))}
              </AutoLayout>

              <IconButton
                positioning="absolute"
                x={{ type: 'right', offset: 8 }}
                y={{ type: 'bottom', offset: 8 }}
                icon={<IconDocument />}
                onClick={() =>
                  new Promise(() => {
                    figma.showUI(__html__, {
                      position: { x: -99999, y: -99999 },
                      width: 0,
                      height: 0,
                    });
                    figma.ui.postMessage({
                      type: 'COPY',
                      payload: ControlledRadioGroup,
                    });
                  })
                }
              />
            </AutoLayout>
          ),
        },
      ]}
    />
  );
}
