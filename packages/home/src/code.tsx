import { Heading, colors } from 'fidget-ui';
import {
  IconButtonDoc,
  HeadingDoc,
  ColorsDoc,
  DescriptionListDoc,
  ButtonDoc,
  TextFieldDoc,
  AccordionDoc,
  TabsDoc,
  RadioDoc,
  DividerDoc,
  CheckboxDoc,
  TagDoc,
  AvatarDoc,
  Intro,
  SelectDoc,
  SimpleGridDoc,
  SwitchDoc,
  Issue,
  Todo,
  IconsDoc,
  TimePickerDoc,
  NoticeDoc,
  Changelog,
  CardDoc,
  MenuDoc,
  StepperDoc,
} from './docs';
import { paginationStyle } from './docs/styles';
import { Sidebar } from './components/sidebar';
import { COMPONENTS } from './data';
import { Header } from './components/header';
import { ShadowsDoc } from './docs/shadows';
import { DatePickerDoc } from './docs/date-picker';

const { widget } = figma;
const { AutoLayout, usePropertyMenu, useSyncedState, Text, useEffect, useWidgetId } = widget;

function Widget() {
  const [currentPage, setCurrentPage] = useSyncedState('currentPage', 'intro');
  const index = COMPONENTS.findIndex((item) => item.option === currentPage);

  const widgetId = useWidgetId();

  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'CODE_COPIED') {
        figma.notify('Code copied!');
        figma.closePlugin();
      }
      if (msg.type === 'SYNTAX_HIGHLIGHTED') {
        const node = figma.getNodeById(widgetId);

        if (node?.type === 'WIDGET') {
          node?.setWidgetSyncedState({
            ...node.widgetSyncedState,
            [msg.payload.id]: msg.payload.tokens,
          });

          figma.closePlugin();
        }
      }
    };
  });

  const COMPONENT_DOC: { [key: string]: FigmaDeclarativeNode } = {
    intro: <Intro />,
    changelog: <Changelog />,
    icons: <IconsDoc />,
    heading: <HeadingDoc />,
    button: <ButtonDoc />,
    'icon-button': <IconButtonDoc />,
    menu: <MenuDoc />,
    tag: <TagDoc />,
    radio: <RadioDoc />,
    checkbox: <CheckboxDoc />,
    switch: <SwitchDoc />,
    'text-field': <TextFieldDoc />,
    accordion: <AccordionDoc />,
    tabs: <TabsDoc />,
    divider: <DividerDoc />,
    avatar: <AvatarDoc />,
    select: <SelectDoc />,
    'time-picker': <TimePickerDoc />,
    'date-picker': <DatePickerDoc />,
    colors: <ColorsDoc />,
    shadows: <ShadowsDoc />,
    'description-list': <DescriptionListDoc />,
    'simple-grid': <SimpleGridDoc />,
    stepper: <StepperDoc />,
    card: <CardDoc />,
    notice: <NoticeDoc />,
    demo1: <Todo />,
    demo2: <Issue />,
  };

  usePropertyMenu(
    [
      {
        propertyName: 'Repository',
        itemType: 'link',
        href: 'https://www.github.com',
        tooltip: 'Repository',
      },
    ],
    (e) => {
      if (e.propertyName === 'Components' && e.propertyValue) {
        setCurrentPage(e.propertyValue);
      }
    }
  );

  const pagination = (
    <AutoLayout width={'fill-parent'} overflow={'hidden'} spacing={16} padding={{ top: 48 }}>
      {index > 0 ? (
        <AutoLayout
          {...paginationStyle}
          onClick={() => setCurrentPage(COMPONENTS[index - 1]?.option)}
        >
          <Text fill={colors.neutral[400]} fontSize={12} lineHeight={20}>
            Previous
          </Text>
          <Heading as="h6">{COMPONENTS[index - 1].label}</Heading>
        </AutoLayout>
      ) : null}

      {index < COMPONENTS.length - 1 && index >= 0 ? (
        <AutoLayout
          horizontalAlignItems={'end'}
          {...paginationStyle}
          onClick={() => setCurrentPage(COMPONENTS[index + 1]?.option)}
        >
          <Text fill={colors.neutral[400]} fontSize={12} lineHeight={20}>
            Next
          </Text>
          <Heading as="h6">{COMPONENTS[index + 1].label}</Heading>
        </AutoLayout>
      ) : null}
    </AutoLayout>
  );

  return (
    <AutoLayout
      name="Container"
      fill={'#ffffff'}
      cornerRadius={8}
      width={'hug-contents'}
      height={'hug-contents'}
      direction="vertical"
    >
      <Header />
      <AutoLayout
        name="Body"
        spacing={24}
        padding={{ top: 24, right: 64, bottom: 32, left: 12 }}
        width={'hug-contents'}
        overflow="visible"
      >
        <Sidebar
          onChangePage={(page) => {
            setCurrentPage(page);
          }}
          currentPage={currentPage}
        />
        <AutoLayout direction="vertical" overflow="visible">
          {COMPONENT_DOC[currentPage]}
          {pagination}
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
