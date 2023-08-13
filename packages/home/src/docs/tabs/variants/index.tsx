import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TabsVariants } from './code';
import { P, Pre } from '../../typography';

export default function () {
  return (
    <>
      <Heading as="h5">Variants and color schemes</Heading>
      <P>
        The Tabs component has four variants: <Pre>line, enclosed, soft-rounded</Pre> and{' '}
        <Pre>solid-rounded</Pre>.
      </P>

      <Preview id="tabs/variants" code={`__FIDGET_DEMO_CODE`}>
        <Case
          height={240}
          direction="vertical"
          spacing={48}
          horizontalAlignItems="start"
          padding={72}
        >
          <TabsVariants />
        </Case>
      </Preview>
    </>
  );
}
