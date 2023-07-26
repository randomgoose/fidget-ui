import {
  Button,
  Heading,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuTrigger,
  Tabs,
  colors,
} from 'fidget-ui';
import { IconArrowDownTray, IconCodeBracket, IconTrash, IconUser } from 'fidget-ui/icons';
import { Case } from '../../components/case';

export function MenuItemWithIcon() {
  return (
    <>
      <Heading as="h5">MenuItem with icon</Heading>

      <Tabs
        id="menu/item-with-icon"
        overflow="visible"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
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
              </Case>
            ),
          },
        ]}
      />
    </>
  );
}
