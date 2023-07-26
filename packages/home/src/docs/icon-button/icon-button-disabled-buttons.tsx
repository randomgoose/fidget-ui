import { Heading, IconButton } from 'fidget-ui';
import { Preview } from '../../components/preview';
import { IconArrowUp } from 'fidget-ui/icons';
import { Case } from '../../components/case';

export function IconButtonDisabledButtons() {
  return (
    <>
      <Heading as="h5">Disabled Buttons</Heading>

      <Preview
        id="icon-button/disabled-buttons"
        code={`import { IconButton } from 'fidget-ui'
import { IconArrowUp } from 'fidget-ui/icons'

() => <>
    <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" disabled />
    <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="red" disabled />
    <IconButton icon={<IconArrowUp />} disabled variant="ghost" />
</>`}
      >
        <Case height={240} spacing={8}>
          <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" disabled />
          <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="red" disabled />
          <IconButton icon={<IconArrowUp />} disabled variant="ghost" />
        </Case>
      </Preview>
    </>
  );
}
