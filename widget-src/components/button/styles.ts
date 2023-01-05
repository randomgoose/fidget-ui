import { ButtonProps } from "./interface"

export const getButtonStyles = (
    variant: ButtonProps['variant'],
    colorScheme: ButtonProps['colorScheme']
): {
    container: AutoLayoutProps,
    text: TextProps
} => {
    switch (variant) {
        case "filled":
            return {
                container: {
                    
                },
                text: {

                }
            }

        default:
            return { container: {}, text: {} }

    }
}