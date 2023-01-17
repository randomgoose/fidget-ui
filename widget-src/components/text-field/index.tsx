import { colors } from "../../styles";
import { renderChildren } from "../../utils";
import { IconXIconMark } from "../icons";
import { TextFieldProps } from "./interface";
import { getTextFieldStyles } from "./styles";

const { widget } = figma
const { Input, AutoLayout } = widget

export function TextField(
    {
        width,
        onTextEditEnd,
        value,
        placeholder,
        size = "md",
        variant = "outline",
        leftElement,
        rightElement,
        leftAddon,
        rightAddon,
        disabled = false,
        onClear,
        ...rest
    }: TextFieldProps
) {

    const {
        field,
        text,
        clearIcon: clearIconStyles,
        leftAddon: leftAddonStyles,
        rightAddon: rightAddonStyles,
        input
    } = getTextFieldStyles({
        variant, size, leftElement, rightElement, disabled, leftAddon, rightAddon
    });

    const clearIcon = <IconXIconMark
        {...clearIconStyles}
        name="Input Clear Icon"
        onClick={() => onClear && onClear()}
    />

    return <AutoLayout
        width={width}
        name="Input Group"
        overflow="visible"
        {...field}
    >

        {leftAddon ?
            <AutoLayout
                name="Input Left Addon"
                {...leftAddonStyles}
            >
                {renderChildren(leftAddon, {
                    textProps: {
                        fontSize: text.fontSize,
                        lineHeight: text.lineHeight,
                        fill: colors.neutral[700]
                    }
                })}
            </AutoLayout> : null}

        <AutoLayout
            name="Input Container"
            {...input}
        >
            <Input
                {...text}
                width={"fill-parent"}
                name="Input"
                onTextEditEnd={onTextEditEnd}
                inputBehavior={"multiline"}
                value={value}
                placeholder={placeholder}
                inputFrameProps={{
                    name: "Input Container",
                }}
                {...rest}
            />
        </AutoLayout>
        {value?.length && value.length > 0 ? clearIcon : null}

        {rightAddon
            ? <AutoLayout
                name="Input Right Addon"
                {...rightAddonStyles}
            >
                {renderChildren(rightAddon, {
                    textProps: {
                        fontSize: text.fontSize,
                        lineHeight: text.lineHeight,
                        fill: colors.neutral[700]
                    }
                })}
            </AutoLayout>
            : null
        }

        <AutoLayout
            name={"Left Element Container"}
            width={16}
            height={16}
            positioning={"absolute"}
            x={{ type: 'left', offset: 8 }}
            y={{ type: 'center', offset: 0 }}
        >
            {leftElement ? leftElement : null}
        </AutoLayout>

        <AutoLayout
            name={"Right Element Container"}
            width={16}
            height={16}
            positioning={"absolute"}
            x={{ type: 'right', offset: 8 }}
            y={{ type: 'center', offset: 0 }}
        >
            {rightElement ? rightElement : null}
        </AutoLayout>
    </AutoLayout>
}