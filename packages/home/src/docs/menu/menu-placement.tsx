import { Button, Heading, Menu, MenuItem, MenuList, MenuTrigger, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export function MenuPlacement() {
  return (
    <>
      <Heading as={'h5'}>Placement</Heading>

      <Tabs
        id="menu/placement"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Menu id="j42n" placement="bottom-start">
                  <MenuTrigger>
                    <Button>Menu</Button>
                  </MenuTrigger>
                  <MenuList>
                    <MenuItem>Exit</MenuItem>
                  </MenuList>
                </Menu>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}></Code>,
          },
        ]}
      />
    </>
  );
}
