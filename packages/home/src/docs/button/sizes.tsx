import { Heading, Tabs, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre, Code } from '../typography';

export default function ButtonSizes() {
  return (
    <>
      <Heading as={'h5'}>Sizes</Heading>
      <P>
        Button component comes in with 3 sizes: <Pre>lg(40px), md(32px)</Pre> and{' '}
        <Pre>sm(28px)</Pre>. The default value is <Pre>md</Pre>.
      </P>

      <Tabs
        id="button/sizes"
        items={[
          {
            key: 'Design',
            tab: 'Preview',
            name: '',
            children: (
              <Case spacing={8} height={240}>
                <Button size="lg">size=lg</Button>
                <Button size="md">size=md</Button>
                <Button size="sm">size=sm</Button>
              </Case>
            ),
          },
          {
            key: 'Code',
            tab: 'Code',
            name: '',
            children: (
              <Code height={240}>
                {`<Button size="lg">size=lg</Button>
<Button size="md">size=md</Button>
<Button size="sm">size=sm</Button>
`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
