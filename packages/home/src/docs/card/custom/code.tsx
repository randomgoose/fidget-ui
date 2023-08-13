import { Avatar, Card, CardBody, CardFooter, colors } from 'fidget-ui';
import { IconUser } from 'fidget-ui/icons';

const { Image, AutoLayout, Text } = figma.widget;

export function CustomCard() {
  return (
    <Card stroke={colors.white} strokeWidth={0} effect={[]} spacing={8} overflow="visible">
      <CardBody padding={0} cornerRadius={4} stroke={colors.neutral[200]}>
        <Image
          width={240}
          height={120}
          src={'https://s2.loli.net/2023/08/10/LraNcjXptVQIu1Z.png'}
        />
      </CardBody>
      <CardFooter padding={0} fill={colors.white} verticalAlignItems="center" width={'fill-parent'}>
        <AutoLayout verticalAlignItems="center" width={'fill-parent'} spacing={8}>
          <Avatar
            size={'sm'}
            src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <AutoLayout direction="vertical">
            <Text fontSize={13} fill={colors.neutral[700]} fontWeight={'medium'}>
              Fidget UI Docs
            </Text>
            <Text fontSize={11} fill={colors.neutral[700]} fontWeight={'normal'}>
              Author
            </Text>
          </AutoLayout>
        </AutoLayout>

        <AutoLayout verticalAlignItems="center" spacing={4}>
          <IconUser width={10} height={10} color={colors.neutral[500]} />
          <Text fontSize={11} fill={colors.neutral[500]}>
            3.6k
          </Text>
        </AutoLayout>
      </CardFooter>
    </Card>
  );
}
