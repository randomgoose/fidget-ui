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

const { AutoLayout, Fragment } = figma.widget;

type Property = {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  version?: string;
};

type Doclet = {
  name: string;
  type: string;
  properties: Property[];
};

export function APIs({ code }: { code: string }) {
  if (!code) {
    return null;
  }

  let doclets: Doclet[] = [];

  try {
    doclets = JSON.parse(decodeURI(code));
  } catch (err) {}

  const renderDocletTable = ({ name, properties }: Doclet) => {
    if (Array.isArray(properties) && properties.length) {
      return (
        <Fragment key={name}>
          <Heading as="h6">{name}</Heading>
          <Table width={'fill-parent'}>
            <TableHeader>
              <TableRow>
                <TableHead height={40}>Name</TableHead>
                <TableHead height={40}>Description</TableHead>
                <TableHead height={40}>Type</TableHead>
                <TableHead height={40}>DefaultValue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map(({ name, type, description, defaultValue }) => (
                <TableRow>
                  <TableCell height={40}>{name}</TableCell>
                  <TableCell fontSize={14} color={colors.neutral[500]} height={40}>
                    {description}
                  </TableCell>
                  <TableCell fontFamily="Fira Code" height={40}>
                    {type}
                  </TableCell>
                  <TableCell fontFamily="Fira Code" height={40}>
                    {defaultValue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Fragment>
      );
    }

    return null;
  };

  return (
    <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
      <Heading as="h5">APIs</Heading>
      {doclets.map(renderDocletTable)}
    </AutoLayout>
  );
}
