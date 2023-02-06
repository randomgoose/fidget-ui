export const shadows: {
    [key: string]: WidgetJSX.Effect[]
} = {
    sm: [
        { type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 2, color: { r: 0, g: 0, b: 0, a: 0.05 } }
    ],
    base: [
        { type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 3, color: { r: 0, g: 0, b: 0, a: 0.1 } },
        { type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 2, spread: -1, color: { r: 0, g: 0, b: 0, a: 0.1 } }
    ],
    md: [
        { type: "drop-shadow", offset: { x: 0, y: 4 }, blur: 6, spread: -1, color: { r: 0, g: 0, b: 0, a: 0.1 } },
        { type: "drop-shadow", offset: { x: 0, y: 2 }, blur: 4, spread: -2, color: { r: 0, g: 0, b: 0, a: 0.1 } }
    ],
    lg: [
        { type: "drop-shadow", offset: { x: 0, y: 10 }, blur: 15, spread: -3, color: { r: 0, g: 0, b: 0, a: 0.1 } },
        { type: "drop-shadow", offset: { x: 0, y: 4 }, blur: 6, spread: -4, color: { r: 0, g: 0, b: 0, a: 0.1 } }
    ],
    xl: [
        { type: "drop-shadow", offset: { x: 0, y: 20 }, blur: 25, spread: -5, color: { r: 0, g: 0, b: 0, a: 0.1 } },
        { type: "drop-shadow", offset: { x: 0, y: 8 }, blur: 10, spread: -6, color: { r: 0, g: 0, b: 0, a: 0.1 } }
    ],
    "2xl": [
        { type: "drop-shadow", offset: { x: 0, y: 25 }, blur: 50, spread: -12, color: { r: 0, g: 0, b: 0, a: 0.25 } }
    ],
    inner: [
        { type: "inner-shadow", offset: { x: 0, y: 2 }, blur: 4, color: { r: 0, g: 0, b: 0, a: 0.05 } }
    ],
    none: []
}