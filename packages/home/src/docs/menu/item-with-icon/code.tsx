import { Button, Menu, MenuDivider, MenuItem, MenuList, MenuTrigger, colors } from 'fidget-ui';
import { IconArrowDownTray, IconCodeBracket, IconTrash, IconUser } from 'fidget-ui/icons';

export function MenuItemWithIcon() {
  return (
    <Menu id="tw12" placement="top-start">
      <MenuTrigger>
        <Button>Menu Trigger</Button>
      </MenuTrigger>
      <MenuList width={180}>
        <MenuItem icon={<IconUser />}>Edit Profile</MenuItem>
        <MenuItem icon={<IconCodeBracket />}>Copy Code</MenuItem>
        <MenuItem icon={<IconArrowDownTray />}>Download</MenuItem>
        <MenuDivider />
        <MenuItem icon={<IconTrash />} color={colors.red[500]}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
