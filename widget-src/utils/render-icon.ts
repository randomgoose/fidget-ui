const { widget } = figma;
const { h, SVG } = widget;

export function renderIcon(
    { svg, options }: {
        svg: { type: 'SVG'; children: any[]; props: { [key: string]: any } };
        options: {
            stroke?: SVGProps['stroke'];
            fill?: SVGProps['fill']
        }
    }
) {
    return h(SVG, {
        src: (svg as any)?.props?.src.replace("stroke='#000000'", `stroke='${options.stroke}'`),
        width: 'fill-parent',
        height: 'fill-parent',
        // stroke: options.stroke ? options.stroke : "#000000",
        // fill: options.fill ? options.fill : "#000000"
    })
}