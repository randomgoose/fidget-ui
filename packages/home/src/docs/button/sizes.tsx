import { Heading, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export default function ButtonSizes() {
  return (
    <>
      <Heading as={'h5'}>Sizes</Heading>
      <P>
        Button component comes in with 3 sizes: <Pre>lg(40px), md(32px)</Pre> and{' '}
        <Pre>sm(28px)</Pre>. The default value is <Pre>md</Pre>.
      </P>

      <Preview
        id="button/sizes"
        code={`() => <>
  <Button size="lg">size=lg</Button>
  <Button size="md">size=md</Button>
  <Button size="sm">size=sm</Button>
</>`}
      >
        <Case height={240} spacing={8}>
          <Button size="lg">size=lg</Button>
          <Button size="md">size=md</Button>
          <Button size="sm">size=sm</Button>
        </Case>
      </Preview>
    </>
  );
}
