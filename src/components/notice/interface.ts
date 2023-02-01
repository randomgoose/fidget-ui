export type NoticeStatus = "info" | "error" | "warning" | "success"
export type NoticeVariant = "subtle" | "solid"

export interface NoticeProps extends AutoLayoutProps {
    icon?: FigmaDeclarativeNode | boolean;
    title?: FigmaDeclarativeNode;
    description?: FigmaDeclarativeNode;
    status?: NoticeStatus
    variant?: NoticeVariant
    children?: FigmaDeclarativeNode
}