import {
  Avatar,
  Button,
  Divider,
  Heading,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuTrigger,
  colors,
} from 'fidget-ui';
import { docStyle } from './styles';
import { IconArrowDownTray, IconCodeBracket, IconDocument, IconTrash } from 'fidget-ui/icons';
import { Case } from '../components/case';
import { Code, P } from './typography';

const { widget } = figma;
const { AutoLayout } = widget;

export function MenuDoc() {
  return (
    <AutoLayout {...docStyle} name={'Menu Doc'}>
      <Heading as={'h1'}>Menu</Heading>
      <Divider />
      <Heading as={'h5'}>Usage</Heading>
      <P>
        {`Compose a Menu with the following comopnents:
- <Menu />, the wrapper component.
- <MenuTrigger />, the trigger to toggle the menu list. Menu Trigger can contain any clickable nodes.
- <MenuList />, the container of menu items.
- <MenuItem />, must be a child of MenuList.
- <MenuDivider />, must be a child of MenuList.`}
      </P>

      <Case height={240}>
        <Menu id="md93" placement="top-start">
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
        </Menu>
      </Case>

      <Code>
        {` <Menu id="md93" placement="top-start">
  <MenuTrigger>
    <Avatar fill={colors.indigo[500]} />
  </MenuTrigger>
  <MenuList width={180}>
    <MenuItem icon={<IconDocument />}>Edit Profile</MenuItem>
    <MenuItem icon={<IconCodeBracket />}>Copy Code</MenuItem>
    <MenuItem icon={<IconArrowDownTray />}>Download</MenuItem>
    <MenuDivider />
    <MenuItem color={colors.red[500]} icon={<IconTrash />}>Delete</MenuItem>
  </MenuList>
</Menu>`}
      </Code>

      <Heading as={'h5'}>Placement</Heading>

      <Case height={240}>
        <Menu id="j42n">
          <MenuTrigger>
            <Button>Menu</Button>
          </MenuTrigger>
          <MenuList>
            <MenuItem padding={{ horizontal: 16 }}>Menu</MenuItem>
          </MenuList>
        </Menu>
      </Case>
    </AutoLayout>
  );
}
