//@ts-nocheck
import { IconCheckCircleSolid, IconExclamationCircleSolid, IconInformationCircleSolid, IconXCircleSolid } from "../../icons"
import { isSvg, renderChildren, renderIcon } from "../../utils"
import { NoticeProps } from "./interface"
import { getNoticeStyles } from "./styles"

const { AutoLayout } = figma.widget

export function Notice({
    variant,
    status,
    icon = true,
    title,
    description,
    ...rest
}: NoticeProps) {

    const { container, title: titleStyle, description: descriptionStyle, icon: iconStyle } = getNoticeStyles({ variant, status });

    const renderIconNode = () => {
        if (typeof icon === "boolean") {
            if (!icon) {
                return null
            } else {
                switch (status) {
                    case "warning":
                        return <IconExclamationCircleSolid width={iconStyle.width} height={iconStyle.height} color={iconStyle.fill as string} />
                    case "error":
                        return <IconXCircleSolid width={iconStyle.width} height={iconStyle.height} color={iconStyle.fill as string} />
                    case "success":
                        return <IconCheckCircleSolid width={iconStyle.width} height={iconStyle.height} color={iconStyle.fill as string} />
                    default:
                        return <IconInformationCircleSolid width={iconStyle.width} height={iconStyle.height} color={iconStyle.fill as string} />
                }
            }
        } else if (icon) {
            if (isSvg(icon)) {
                return renderIcon({
                    svg: icon,
                    options: {
                        stroke: iconStyle.stroke,
                        fill: iconStyle.fill
                    }
                })
            }
        }
    }

    return (
        <AutoLayout {...container} {...rest} name="Notice">

            {
                icon
                    ? <AutoLayout name="Notice Icon Container" padding={{ top: 2 }}>
                        {renderIconNode()}
                    </AutoLayout>
                    : null
            }

            <AutoLayout name="Notice Content" direction={"vertical"} width={"fill-parent"}>
                {renderChildren(title, { textProps: titleStyle })}
                {renderChildren(description, { textProps: descriptionStyle })}
            </AutoLayout>
        </AutoLayout>
    )
}