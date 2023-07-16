import { Heading, IconButton, Divider, Tabs } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';
import { Case } from '../components/case';

const { widget } = figma;
const { AutoLayout } = widget;

export function IconButtonDoc() {
  return (
    <AutoLayout {...docStyle} name={'Icon Button Doc'}>
      <Heading as={'h1'}>IconButton</Heading>
      <P>
        IconButton shares most properties of <Pre>Button</Pre>. The difference is IconButton only
        renders an icon in the button.
      </P>
      <Divider />

      <Code>{`import { IconButton } from 'fidget-ui'`}</Code>

      <Heading as="h5">Variants</Heading>
      <P>
        Identical to Button <Pre>variant</Pre> prop.
      </P>

      <Tabs
        id="icon-button/variants"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <IconButton icon={<IconArrowUp />} onClick={() => {}} />
                <IconButton variant="outline" icon={<IconArrowUp />} onClick={() => {}} />
                <IconButton variant="ghost" icon={<IconArrowUp />} onClick={() => {}} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<IconButton icon={<IconArrowUp />} onClick={() => { }} />
<IconButton variant="outline" icon={<IconArrowUp />} onClick={() => { }} />
<IconButton variant="ghost" icon={<IconArrowUp />} onClick={() => { }} />`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Sizes</Heading>
      <P>
        Identical to Button <Pre>size</Pre> prop.
      </P>

      <Tabs
        id="icon-button/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                {['sm', 'md', 'lg'].map((size) => (
                  <IconButton key={size} icon={<IconArrowUp />} size={size as any} />
                ))}
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<AutoLayout spacing={4}>
  {['sm', 'md', 'lg'].map((size) => (
    <IconButton key={size} icon={<IconArrowUp />} size={size as any} />
  ))}
</AutoLayout>`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Color Schemes</Heading>
      <P>
        Identical to Button <Pre>colorScheme</Pre> prop.
      </P>

      <Tabs
        id="icon-button/color-schemes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" />
                <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="cyan" />
                <IconButton icon={<IconArrowUp />} variant="ghost" colorScheme="rose" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" />
<IconButton icon={<IconArrowUp />} variant="outline" colorScheme="cyan" />
<IconButton icon={<IconArrowUp />} variant="ghost" colorScheme="rose" />`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Disabled Buttons</Heading>

      <Tabs
        id="icon-button/disabled-buttons"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" disabled />
                <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="red" disabled />
                <IconButton icon={<IconArrowUp />} disabled variant="ghost" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" disabled />
<IconButton icon={<IconArrowUp />} variant="outline" colorScheme="red" disabled />
<IconButton icon={<IconArrowUp />} disabled variant="ghost" />`}
              </Code>
            ),
          },
        ]}
      />
    </AutoLayout>
  );
}
