import { Heading, Tabs, Button } from 'fidget-ui';
import { IconAcademicCap } from 'fidget-ui/icons';
import { Case } from '../../components/case';
import { P, Pre, Code } from '../typography';

export default function ButtonWithIcon() {
  return (
    <>
      <Heading as="h5">Button with icon</Heading>
      <P>
        Add left and right icons to Button components with <Pre>leftIcon</Pre> and{' '}
        <Pre>rightIcon</Pre> props. You can pass in Heroicons or custom <Pre>Svg</Pre> component.
      </P>

      <Tabs
        id="button/button-with-icon"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <Button leftIcon={<IconAcademicCap />}>Share</Button>
                <Button rightIcon={<IconAcademicCap />} variant={'outline'} colorScheme={'blue'}>
                  Share
                </Button>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Button leftIcon={<IconAcademicCap />}>Share</Button>
<Button rightIcon={<IconAcademicCap />} variant={'outline'} colorScheme={'blue'}>
  Share
</Button>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
