const { widget } = figma;
const { h, SVG } = widget;

export function renderIcon(
    { svg, options }: {
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
            src: (svg as any)?.props?.src.replace("stroke='#000000'", `stroke='${options.stroke}'`),
            width: 16,
            height: 16,
        })
    } else {
        return null;
    }
}