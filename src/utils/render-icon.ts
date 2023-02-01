const { widget } = figma;
const { h, SVG } = widget;

export function renderIcon(
    { svg, options = { stroke: "#000000", fill: "#000000" } }: {
        svg: { type: string; children: any[]; props: { [key: string]: any } };
        options: Omit<SVGProps, "src" | "width" | "height"> & {
            width?: SVGProps['width'];
            height?: SVGProps['height']
        }
    }
) {
    if (svg?.type === "SVG") {
        return h(SVG, {
            name: "Icon",
            src:
                (svg as any)?.
                    props
                    ?.src
                    .replace("stroke='#000000'", `stroke='${options.stroke}'`)
                    .replace("fill='#000000'", `fill='${options.fill}'`),
            width: options.width || 16,
            height: options.width || 16,
        })
    } else {
        return null;
    }
}