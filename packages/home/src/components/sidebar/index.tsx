import { Heading, Tag, colors } from 'fidget-ui';
import { COMPONENTS, LATEST } from '../../data';
import _ from 'lodash';

const { AutoLayout, Text } = figma.widget;

interface SidebarProps {
  currentPage: string;
  onChangePage: (page: string) => void;
}

export function Sidebar({ onChangePage, currentPage }: SidebarProps) {
  return (
    <AutoLayout name="Sidebar" direction="vertical" width={160} spacing={12}>
      {Object.entries(_.groupBy(COMPONENTS, 'type')).map(([group, items]) => (
        <AutoLayout
          name="Sidebar Item Group"
          key={group}
          direction={'vertical'}
          width={'fill-parent'}
        >
          <AutoLayout padding={{ left: 8 }}>
            <Heading as="h6" fontSize={12} textCase="title">
              {group}
            </Heading>
          </AutoLayout>
          <AutoLayout
            name="Sidebar Item List"
            direction={'vertical'}
            width={'fill-parent'}
            spacing={2}
          >
            {items.map((item) => {
              const active = item.option === currentPage;
              return (
                <AutoLayout
                  width={'fill-parent'}
                  height={28}
                  fill={active ? colors.blue[50] : colors.white}
                  padding={{ vertical: 7, horizontal: 8 }}
                  hoverStyle={{ fill: active ? colors.blue[50] : colors.neutral[100] }}
                  key={item.option}
                  onClick={() => {
                    onChangePage(item.option);
                  }}
                  cornerRadius={4}
                  verticalAlignItems="center"
                  spacing={8}
                >
                  <Text fontSize={12} fill={active ? colors.blue[900] : colors.neutral[700]}>
                    {item.label}
                  </Text>

                  {LATEST.includes(item.option) ? (
                    <Tag size="sm" variant={'subtle'}>
                      New
                    </Tag>
                  ) : undefined}
                </AutoLayout>
              );
            })}
          </AutoLayout>
        </AutoLayout>
      ))}
    </AutoLayout>
  );
}
