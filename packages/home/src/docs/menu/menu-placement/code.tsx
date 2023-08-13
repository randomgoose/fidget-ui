import { Button, Menu, MenuItem, MenuList, MenuTrigger } from 'fidget-ui';

export function MenuPlacement() {
  return (
    <Menu id="j42n" placement="bottom-start">
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuList>
        <MenuItem>Exit</MenuItem>
      </MenuList>
    </Menu>
  );
}
