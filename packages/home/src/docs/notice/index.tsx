import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import NoticeUsage from './usage';
import NoticeTitleDescription from './title-description';
import NoticeStatus from './status';
import NoticeIcon from './icon';
import { APIs } from '../../components';

const { AutoLayout } = figma.widget;

export function NoticeDoc() {
  return (
    <AutoLayout {...docStyle} name="Notice Doc">
      <Heading as="h1">Notice</Heading>
      <P>Use Notice components to communicate important messages.</P>
      <Divider />

      <NoticeUsage />
      <NoticeTitleDescription />
      <NoticeStatus />
      <NoticeIcon />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}
