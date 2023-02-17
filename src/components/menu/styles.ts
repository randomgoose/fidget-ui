import { colors, shadows } from "../../styles";
import { MenuItemProps, MenuProps } from "./interface";

export const getMenuStyles = ({
  disabled,
  placement = "bottom",
}: Pick<MenuItemProps, "disabled"> & Pick<MenuProps, "placement">): {
  list: AutoLayoutProps;
  item: AutoLayoutProps;
  text: TextProps;
  command: TextProps;
  icon: Omit<SVGProps, "src">;
  chevron: Omit<SVGProps, "src"> & { color: string };
  positioner: AutoLayoutProps;
} => {
  /* ---- Positioner ---- */
  let x: AutoLayoutProps["x"];
  let y: AutoLayoutProps["y"];

  switch (placement) {
  }

  return {
    list: {
      fill: colors.white,
      padding: 4,
      stroke: colors.neutral[100],
      cornerRadius: 8,
      effect: [...shadows.lg],
      direction: "vertical",
      positioning: "absolute",
      y: { type: "top", offset: 0 },
      width: 240,
    },
    item: {
      width: "fill-parent",
      overflow: "visible",
      cornerRadius: 4,
      padding: { horizontal: 8, vertical: 5 },
      hoverStyle: disabled
        ? undefined
        : {
            fill: colors.neutral[100],
          },
      verticalAlignItems: "center",
      spacing: 4,
      opacity: disabled ? 0.3 : 1,
    },
    text: {
      fontSize: 14,
      lineHeight: 22,
      width: "fill-parent",
    },
    command: {
      fontSize: 12,
      lineHeight: 20,
      fill: colors.neutral[500],
    },
    icon: {
      width: 16,
      height: 16,
      fill: colors.neutral[900],
      stroke: colors.neutral[900],
    },
    chevron: {
      width: 12,
      height: 12,
      color: colors.neutral[500],
    },
    positioner: {
      overflow: "scroll",
      height: 1,
      width: 1,
    },
  };
};

// export const getMenuItemStyles
