import {
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  colors,
} from 'fidget-ui';
const { AutoLayout, useEffect } = figma.widget;

const props = [
  { name: 'id', type: 'string', description: 'A unique identifier for the button.' },
  { name: 'variant', type: 'ButtonVariant', description: 'The appearance of the button.' },
];

export function APIs({ code }: { code: string }) {
  if (!code) {
    return null;
  }

  useEffect(() => {
    figma.showUI(__html__, { visible: false });

    figma.ui.postMessage({
      type: 'DECODE_TEXT',
      text: code,
    });

    figma.ui.onmessage = (msg) => {
      if (msg.type === 'TEXT_DECODED') {
        console.log(JSON.parse(msg.text));
        figma.closePlugin();
      }
    };
  });

  return (
    <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
      <Heading as="h5">APIs</Heading>

      <Table width={'fill-parent'}>
        <TableHeader>
          <TableRow>
            <TableHead height={40}>Name</TableHead>
            <TableHead height={40}>Description</TableHead>
            <TableHead height={40}>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map(({ name, type, description }) => (
            <TableRow>
              <TableCell height={40}>{name}</TableCell>
              <TableCell fontSize={14} color={colors.neutral[500]} height={40}>
                {description}
              </TableCell>
              <TableCell fontFamily="Fira Code" height={40}>
                {type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AutoLayout>
  );
}
