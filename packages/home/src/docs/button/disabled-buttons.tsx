import { Heading, Tabs, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function DisabledButtons() {
  return (
    <>
      <Heading as="h5">Disabled buttons</Heading>

      <Tabs
        id="button/disabled-buttons"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <Button variant="filled" colorScheme="blue" disabled>
                  Disabled
                </Button>
                <Button variant="outline" colorScheme="red" disabled>
                  Disabled
                </Button>
                <Button disabled variant="ghost">
                  Disabled
                </Button>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Button variant="filled" colorScheme="blue" disabled>Disabled</Button>
<Button variant="outline" colorScheme="red" disabled>Disabled</Button>
<Button disabled variant="ghost">Disabled</Button>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
