const { widget } = figma;
const { Text } = widget;

export function renderChildren(
  children: FigmaDeclarativeNode,
  options?: {
    textProps?: TextProps;
  }
): FigmaDeclarativeNode {
  if (typeof children === 'string') {
    return (
      <Text name="Text" {...options?.textProps}>
        {children}
      </Text>
    );
  }

  if (typeof children === 'object') {
    if (Array.isArray(children)) {
      if (children.length === 1 && typeof children[0] === 'string') {
        return (
          <Text name="Text" {...options?.textProps}>
            {children[0]}
          </Text>
        );
      } else {
        return children;
      }
    } else {
      return children;
    }
  }

  return null;
}
