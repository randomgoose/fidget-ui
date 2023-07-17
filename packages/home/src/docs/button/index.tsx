import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code, P } from '../typography';
import ButtonVariants from './variants';
import ButtonSizes from './sizes';
import ButtonColorSchemes from './color-schemes';
import DisabledButtons from './disabled-buttons';
import ButtonWithIcon from './button-with-icon';

const { widget } = figma;
const { AutoLayout } = widget;

export function ButtonDoc() {
  return (
    <AutoLayout {...docStyle} name="Button Doc">
      <Heading as={'h1'}>Button</Heading>
      <P>Buttons are used to trigger actions or events.</P>
      <Divider />

      <Code>{`import { Button } from 'fidget-ui'`}</Code>
      <ButtonVariants />
      <ButtonSizes />
      <ButtonColorSchemes />
      <DisabledButtons />
      <ButtonWithIcon />

      {/* <Heading as="h5">Block button</Heading>
      <P>
        Enable <Pre>block</Pre> prop to make a button fit its parent's width.
      </P>

      <Tabs
        id="button/block-button"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <AutoLayout
                  name="Demo"
                  stroke={colors.neutral[200]}
                  padding={24}
                  cornerRadius={6}
                  direction={'vertical'}
                  spacing={8}
                  horizontalAlignItems={'center'}
                >
                  <Heading as="h3">Feedback</Heading>
                  <Text fontSize={14} fill={colors.neutral[500]}>
                    Do you like this component library?
                  </Text>
                  <TextField
                    width={240}
                    id="button/block-button"
                    value={''}
                    onTextEditEnd={() => { }}
                    placeholder={'Your email address...'}
                  />
                  <Button block>Submit</Button>
                </AutoLayout>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={'hug-contents'}>
                {`<AutoLayout
  name="Demo"
  stroke={colors.neutral[200]}
  padding={24}
  cornerRadius={6}
  direction={'vertical'}
  spacing={8}
  horizontalAlignItems={'center'}
>
  <Heading as="h3">Feedback</Heading>
  <Text fontSize={14} fill={colors.neutral[500]}>
    Do you like this component library?
  </Text>
  <TextField
    width={240}
    id="button/block-button"
    value={''}
    onTextEditEnd={() => { }}
    placeholder={'Your email address...'}
  />
  <Button block>Submit</Button>
</AutoLayout>`}
              </Code>
            ),
          },
        ]}
      /> */}
    </AutoLayout>
  );
}
