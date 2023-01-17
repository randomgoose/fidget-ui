import { colors } from "../../styles"
import { IconUser } from "../icons"
import { AvatarProps } from "./interface"
import { getAvatarStyles } from "./styles"

const { widget } = figma
const { Image, AutoLayout } = widget

export function Avatar({
    src,
    size = "md",
    fill
}: AvatarProps) {
    const { container: { padding, ...rest } } = getAvatarStyles({ size })
    const anonymousAvatar = (
        <AutoLayout
            name="Avatar"
            fill={fill || colors.neutral[300]}
            padding={padding}
            {...rest}
        >
            <IconUser color={colors.white} />
        </AutoLayout>
    )

    return src
        ? <AutoLayout
            name="Avatar"
            width={"hug-contents"}
            height={"hug-contents"}
            stroke={{ r: 0, g: 0, b: 0, a: 0.04 }}
            cornerRadius={100}
            overflow={"hidden"}
        >
            <Image
                name="Avatar"
                src={src || ""}
                {...rest}
            />
        </AutoLayout>
        : anonymousAvatar
}

export function AvatarGroup() {
    return null
}