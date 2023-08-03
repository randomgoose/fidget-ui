export const NODE_NAME_MAP = {
  container: 'Menu',
  item: 'Menu Item',
  divider: 'Menu Divider',
  trigger: 'Menu Trigger',
  list: 'Menu List',
  listLocator: 'Menu List Locator',
};

export function isMenuItem(child: any): boolean {
  return child?.props?.name === NODE_NAME_MAP.item;
}

export function isMenuDivider(child: any): boolean {
  return child?.props?.name === NODE_NAME_MAP.divider;
}
