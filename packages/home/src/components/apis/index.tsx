import { Heading, colors } from 'fidget-ui';

const { AutoLayout, Fragment, Text } = figma.widget;

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
          <AutoLayout width={'fill-parent'} direction="vertical">
            <AutoLayout width={'fill-parent'} fill={colors.neutral[50]}>
              <AutoLayout
                verticalAlignItems="center"
                padding={{ horizontal: 4, vertical: 4 }}
                width={120}
                height={40}
              >
                <Text verticalAlignText="center" fontSize={12}>
                  Name
                </Text>
              </AutoLayout>
              <AutoLayout
                verticalAlignItems="center"
                padding={{ horizontal: 4, vertical: 4 }}
                width={'fill-parent'}
                height={40}
              >
                <Text verticalAlignText="center" fontSize={12}>
                  Description
                </Text>
              </AutoLayout>
              <AutoLayout
                verticalAlignItems="center"
                padding={{ horizontal: 4, vertical: 4 }}
                width={'fill-parent'}
                height={40}
              >
                <Text verticalAlignText="center" fontSize={12}>
                  Type
                </Text>
              </AutoLayout>
              <AutoLayout
                verticalAlignItems="center"
                padding={{ horizontal: 4, vertical: 4 }}
                width={'fill-parent'}
                height={40}
              >
                <Text verticalAlignText="center" fontSize={12}>
                  DefaultValue
                </Text>
              </AutoLayout>
            </AutoLayout>

            <AutoLayout name="Table Body" width={'fill-parent'} direction="vertical">
              {properties.map(({ name, type, description, defaultValue }) => (
                <AutoLayout width={'fill-parent'}>
                  <AutoLayout padding={{ horizontal: 4, vertical: 12 }} width={120} height={40}>
                    <Text
                      fill={colors.neutral[700]}
                      fontWeight={'semi-bold'}
                      fontSize={12}
                      width={'fill-parent'}
                    >
                      {name}
                    </Text>
                  </AutoLayout>
                  <AutoLayout padding={{ horizontal: 4, vertical: 12 }} width={'fill-parent'}>
                    <Text fill={colors.neutral[500]} fontSize={12} width={'fill-parent'}>
                      {description}
                    </Text>
                  </AutoLayout>
                  <AutoLayout padding={{ horizontal: 4, vertical: 12 }} width={'fill-parent'}>
                    <Text
                      fill={colors.indigo[500]}
                      fontSize={10}
                      fontFamily="Fira Code"
                      fontWeight={'medium'}
                      width={'fill-parent'}
                    >
                      {type}
                    </Text>
                  </AutoLayout>
                  <AutoLayout padding={{ horizontal: 4, vertical: 12 }} width={'fill-parent'}>
                    <Text
                      fill={colors.neutral[700]}
                      fontFamily="Fira Code"
                      fontSize={12}
                      width={'fill-parent'}
                    >
                      {defaultValue}
                    </Text>
                  </AutoLayout>
                </AutoLayout>
              ))}
            </AutoLayout>
          </AutoLayout>
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
