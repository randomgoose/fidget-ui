import { colors } from '../styles';
import { renderChildren } from '../utils';
import { IconXMark } from '../icons';
import { getFieldStyles } from '../_field/styles';
import { TextFieldProps } from './interface';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

const { widget } = figma;
const { Input, AutoLayout } = widget;

const NODE_NAME_MAP = {
  containerLeft: '',
  containerRight: '',
  iconClear: 'Input Clear Icon',
  inputGroup: 'Input Group',
  inputContainer: 'Input Container',
  addonLeft: 'Input Addon Left',
  addonRight: 'Input Addon Right',
};

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
  style,
  ...rest
}: TextFieldProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getFieldStyles({
      variant,
      size,
      elementLeft,
      elementRight,
      disabled,
      addonLeft,
      addonRight,
    }),
    globalStyle: globalConfig.Field?.style,
    propStyle: style,
    variant,
    size,
  });

  const clearIcon = (
    <IconXMark name={NODE_NAME_MAP.iconClear} {...styles.clearIcon} onClick={() => onClear?.()} />
  );

  return (
    <AutoLayout width={width} name={NODE_NAME_MAP.inputGroup} overflow="visible" {...styles.field}>
      {addonLeft ? (
        <AutoLayout name={NODE_NAME_MAP.addonLeft} {...styles.leftAddon}>
          {renderChildren(addonLeft, {
            textProps: {
              fontSize: styles.text.fontSize,
              lineHeight: styles.text.lineHeight,
              fill: colors.neutral[700],
            },
          })}
        </AutoLayout>
      ) : null}

      <AutoLayout name={NODE_NAME_MAP.inputContainer} {...styles.input}>
        <Input
          {...styles.text}
          width="fill-parent"
          name="Input"
          onTextEditEnd={onTextEditEnd}
          inputBehavior="multiline"
          placeholder={placeholder}
          inputFrameProps={{
            name: NODE_NAME_MAP.inputContainer,
          }}
          {...rest}
          value={value}
        />
      </AutoLayout>
      {value?.length && value.length > 0 && rest.showClearIcon ? clearIcon : null}

      {addonRight ? (
        <AutoLayout name={NODE_NAME_MAP.addonRight} {...styles.rightAddon}>
          {renderChildren(addonRight, {
            textProps: {
              fontSize: styles.text.fontSize,
              lineHeight: styles.text.lineHeight,
              fill: colors.neutral[700],
            },
          })}
        </AutoLayout>
      ) : null}

      <AutoLayout
        name={NODE_NAME_MAP.containerLeft}
        width={styles.element.width}
        height={styles.element.width}
        positioning="absolute"
        x={{ type: 'left', offset: 0 }}
        y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        {elementLeft || null}
      </AutoLayout>

      <AutoLayout
        name={NODE_NAME_MAP.containerRight}
        width={styles.element.width}
        height={styles.element.width}
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
