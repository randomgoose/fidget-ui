export const copy = async (text: string) => {
  return new Promise(() => {
    figma.showUI(__html__, { visible: false });
    figma.ui.postMessage({
      type: 'COPY',
      payload: text,
    });
  });
};
