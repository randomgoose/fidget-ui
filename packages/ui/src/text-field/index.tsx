import { colors } from '../styles';
import { renderChildren } from '../utils';
import { IconXMark } from '../icons';
import { getFieldStyles } from '../_field/styles';
import { TextFieldProps } from './interface';

const { widget } = figma;
const { Input, AutoLayout } = widget;

export function TextField({
  width = 'fill-parent',
  value,
  onTextEditEnd,
  placeholder,
  size = 'md',
  variant = 'outline',
  elementLeft,
  elementRight,
  addonLeft,
  addonRight,
  disabled = false,
  onClear,
  ...rest
}: TextFieldProps) {
  const {
    field,
    text,
    clearIcon: clearIconStyles,
    leftAddon: leftAddonStyles,
    rightAddon: rightAddonStyles,
    element,
    input,
  } = getFieldStyles({
    variant,
    size,
    elementLeft,
    elementRight,
    disabled,
    addonLeft,
    addonRight,
  });

  const clearIcon = (
    <IconXMark {...clearIconStyles} name="Input Clear Icon" onClick={() => onClear && onClear()} />
  );

  return (
    <AutoLayout width={width} name="Input Group" overflow="visible" {...field}>
      {addonLeft ? (
        <AutoLayout name="Input Left Addon" {...leftAddonStyles}>
          {renderChildren(addonLeft, {
            textProps: {
              fontSize: text.fontSize,
              lineHeight: text.lineHeight,
              fill: colors.neutral[700],
            },
          })}
        </AutoLayout>
      ) : null}

      <AutoLayout name="Input Container" {...input}>
        <Input
          {...text}
          width="fill-parent"
          name="Input"
          onTextEditEnd={onTextEditEnd}
          inputBehavior="multiline"
          placeholder={placeholder}
          inputFrameProps={{
            name: 'Input Container',
          }}
          {...rest}
          value={value}
        />
      </AutoLayout>
      {value?.length && value.length > 0 && rest.showClearIcon ? clearIcon : null}

      {addonRight ? (
        <AutoLayout name="Input Right Addon" {...rightAddonStyles}>
          {renderChildren(addonRight, {
            textProps: {
              fontSize: text.fontSize,
              lineHeight: text.lineHeight,
              fill: colors.neutral[700],
            },
          })}
        </AutoLayout>
      ) : null}

      <AutoLayout
        name="Left Element Container"
        width={element.width}
        height={element.width}
        positioning="absolute"
        x={{ type: 'left', offset: 0 }}
        y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        {elementLeft || null}
      </AutoLayout>

      <AutoLayout
        name="Right Element Container"
        width={element.width}
        height={element.width}
        positioning="absolute"
        x={{ type: 'right', offset: 0 }}
        y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        {elementRight || null}
      </AutoLayout>
    </AutoLayout>
  );
}
