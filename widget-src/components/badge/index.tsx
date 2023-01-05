const { widget } = figma
const { AutoLayout } = widget

export interface BadgeProps {
    children: string;
}

export function Badge({ children }: BadgeProps) {
    return <AutoLayout name="Badge">
        {children}
    </AutoLayout>
}