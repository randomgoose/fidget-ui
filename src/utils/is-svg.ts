export function isSvg(obj: any) {
    if (typeof obj === "object") {
        if ("type" in obj && obj.type === "SVG") {
            return true;
        }
    }
    return false;
}