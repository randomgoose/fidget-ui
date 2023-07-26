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
import { Case } from '../../components/case';
import { Code, P } from '../typography';

export function MenuUsage() {
  return (
    <>
      <Heading as={'h5'}>Usage</Heading>
      <P>
        {`Compose a Menu with the following comopnents:
· <Menu />, the wrapper component.
· <MenuTrigger />, the trigger to toggle the menu list. Menu Trigger can contain any clickable nodes.
· <MenuList />, the container of menu items.
· <MenuItem />, must be a child of MenuList.
· <MenuDivider />, must be a child of MenuList.`}
      </P>

      <Tabs
        id="menu/usage"
        overflow="visible"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Menu id="md93" placement="top-start">
                  <MenuTrigger>
                    <Button>Menu Trigger</Button>
                  </MenuTrigger>
                  <MenuList width={180}>
                    <MenuItem>Edit Profile</MenuItem>
                    <MenuItem>Copy Code</MenuItem>
                    <MenuItem>Download</MenuItem>
                    <MenuDivider />
                    <MenuItem color={colors.red[500]}>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<Menu id="md93" placement="top-start">
    <MenuTrigger>
        <Avatar fill={colors.indigo[500]} />
    </MenuTrigger>
    <MenuList width={180}>
        <MenuItem icon={<IconDocument />}>Edit Profile</MenuItem>
        <MenuItem icon={<IconCodeBracket />}>Copy Code</MenuItem>
        <MenuItem icon={<IconArrowDownTray />}>Download</MenuItem>
        <MenuDivider />
        <MenuItem color={colors.red[500]} icon={<IconTrash />}>
            Delete
        </MenuItem>
    </MenuList>
</Menu>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
