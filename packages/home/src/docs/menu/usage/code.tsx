import { Button, Menu, MenuDivider, MenuItem, MenuList, MenuTrigger, colors } from 'fidget-ui';

export function MenuUsage() {
  return (
    <>
      <Menu id="md93" placement="top-start">
        <MenuTrigger>
          <Button>Menu Trigger</Button>
        </MenuTrigger>
        <MenuList width={180}>
          <MenuItem fontSize={12}>Edit Profile</MenuItem>
          <MenuItem>Copy Code</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuDivider />
          <MenuItem color={colors.red[500]}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
