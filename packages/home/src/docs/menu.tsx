import { Divider, Heading, Menu, MenuDivider, MenuItem, colors } from 'fidget-ui';
import { docStyle } from './styles';
import { IconArrowDownTray, IconCodeBracket, IconDocument, IconDocumentText, IconTrash } from 'fidget-ui/icons';
import { Case } from '../components/case';

const { widget } = figma;
const { AutoLayout } = widget;

export function MenuDoc() {
  return (
    <AutoLayout {...docStyle} name={'Menu Doc'}>
      <Heading as={'h1'}>Menu</Heading>
      <Divider />
      <Heading as={'h5'}>Usage</Heading>

      <Case>
        <Menu
          id="wu4l"
          items={[
            { label: 'Copy SVG', icon: <IconDocumentText /> },
            { label: 'Copy Code', icon: <IconCodeBracket /> },
            { label: 'Export', icon: <IconArrowDownTray /> },
            { type: 'divider' },
            { label: 'Delete', icon: <IconTrash />, color: colors.red[500] },
          ]}
          placement="top-end"
        ></Menu>
      </Case>


      <Case>
        <Menu id='md93' placement='top-start'>
          <MenuItem
            onClick={() => { figma.notify("Message!") }}
            icon={<IconDocument />}>Copy SVG
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconCodeBracket />}>Copy Code</MenuItem>
          <MenuItem icon={<IconArrowDownTray />}>Download</MenuItem>
        </Menu>
      </Case>

      <Heading as='h5'>Custom Menu Trigger</Heading>
    </AutoLayout >
  );
}
