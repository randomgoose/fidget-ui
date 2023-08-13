import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TabsUsage } from './code';
import { P, Pre } from '../../typography';

const { AutoLayout } = figma.widget;

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>
        Pass an array of tab objects to the <Pre>items</Pre> prop. Each tab object contains:
      </P>

      <AutoLayout name="Col" direction={'vertical'} width={'fill-parent'}>
        <P>
          · <Pre>key(required)</Pre>: Each tab should have a unique key.
        </P>
        <P>
          · <Pre>tab</Pre>: the label of each tab.{' '}
        </P>
        <P>
          · <Pre>content</Pre>: the content in each tab panel.
        </P>
      </AutoLayout>

      <P>
        You can pass a <Pre>defaultActiveKey</Pre> prop to initially enable a tab.
      </P>

      <Preview id="tabs/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72}>
          <TabsUsage />
        </Case>
      </Preview>
    </>
  );
}
