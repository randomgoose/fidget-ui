import { colors } from "../../styles";
import { IconXIconMark } from "../icons";
import { TextFieldProps } from "./interface";
import { getTextFieldStyles } from "./styles";

const { widget } = figma
const { Input, AutoLayout, Frame } = widget

export function TextField(
    {
        width,
        onTextEditEnd,
        value,
        placeholder,
        size = "md",
        variant = "outline",
        leftElement,
        disabled = false,
        ...rest
    }: TextFieldProps
) {

    const { container } = getTextFieldStyles({
        size, leftElement
    });

    const clearIcon = <IconXIconMark
        name="Input Clear Icon"
        positioning={"absolute"}
        width={12}
        height={12}
        color={colors.neutral[300]}
        y={{ offset: 0, type: "center" }}
        x={{ offset: 8, type: "right" }}
        onClick={() => { }}
    />

    return <AutoLayout
        width={width}
        name="Input Group"
        overflow="visible"
    >
        <Input
            width={"fill-parent"}
            name="Input"
            onTextEditEnd={onTextEditEnd}
            inputBehavior={"multiline"}
            value={value}
            placeholder={placeholder}
            fontSize={size === "md" ? 14 : size === "lg" ? 16 : 12}
            lineHeight={size === "md" ? 22 : size === "lg" ? 24 : 20}
            inputFrameProps={{
                name: "Input Container",
                ...container.base,
                ...container[variant]
            }}
            {...rest}
        />
        {value?.length && value.length > 0 ? clearIcon : null}

        <AutoLayout
            name={"Left Element Container"}
            width={16}
            height={16}
            positioning={"absolute"}
            x={{ type: 'left', offset: 8 }}
            y={{ type: 'top', offset: 8 }}
        >
            {leftElement ? leftElement : null}
        </AutoLayout>
    </AutoLayout>
}