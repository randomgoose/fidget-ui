import { merge } from 'lodash-es';
import type { ComponentStyle } from '../types';

function flatUserStyle({
  style,
  size,
  variant,
}: {
  style: ComponentStyle | undefined;
  size: string | undefined;
  variant: string | undefined;
}) {
  style = style || {};
  return merge(
    style.baseStyle || {},
    variant ? style.variants?.[variant] : {},
    size ? style.sizes?.[size] : {}
  );
}

export function mergeUserDefinedStyles({
  defaultStyle,
  globalStyle,
  propStyle,
  size,
  variant,
}: {
  defaultStyle: Record<string, any>;
  globalStyle: ComponentStyle | undefined;
  propStyle: ComponentStyle | undefined;
  size?: string | undefined;
  variant?: string | undefined;
}): typeof defaultStyle {
  return merge(
    defaultStyle,
    flatUserStyle({ size, variant, style: globalStyle }),
    flatUserStyle({ size, variant, style: propStyle })
  );
}
