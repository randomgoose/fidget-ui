import { flattenDeep } from 'lodash-es';

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
      return flattenDeep(children).map((child) => {
        if (typeof child === 'string') {
          return (
            <Text name="Text" {...options?.textProps}>
              {child}
            </Text>
          );
        } else {
          return child;
        }
      });
    } else {
      return children;
    }
  }

  return null;
}
