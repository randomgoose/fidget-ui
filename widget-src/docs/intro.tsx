import { Avatar, Heading, SimpleGrid } from "../components";
import { Divider } from "../components/divider";
import { Tabs } from "../components/tabs";
import { colors } from "../styles";
import { docStyle } from "./styles";
import { Code, P } from "./typography";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

export default function Intro() {
    const [registry, setRegistry] = useSyncedState<number | string>("registry", "npm")

    return <AutoLayout {...docStyle} name={"Intro"}>
        <Heading as="h1">Fidget UI</Heading>
        <Divider />
        <Heading as="h3">Introduction</Heading>
        <P>Fidget UI is a component library for building Figma widgets. This widget serves as an interactive document for Fidget UI.</P>

        <AutoLayout name="Comparison" width={"fill-parent"} spacing={8}>
            <AutoLayout name="Box" direction="vertical" horizontalAlignItems={"center"} width={"fill-parent"}>
                <Heading as="h6">Before</Heading>
                <Code width={"fill-parent"}>
                    {`<AutoLayout
    name="Button"
    padding={{vertical: 9, horizontal: 12}}
    verticalAlignItems={"center"}
    horizontalAlignItems={"center"}
    spacing={8}
    fill={colors.blue[500]}
    hoverStyle={{
        fill: colors.blue[400]
    }}
    onClick={() => {}}
>
    <Svg src={src} widht={14} height={14} />
    <Text 
        name={"Button Text"}
        fontSize={14}
        lineHeight={22}
        fill={colors.white}
    >
        Button
    </Text>
</AutoLayout>
                    `}
                </Code>
            </AutoLayout>

            <AutoLayout name="Box" direction="vertical" height={"fill-parent"} horizontalAlignItems={"center"} width={"fill-parent"}>
                <Heading as="h6">After</Heading>
                <Code width={"fill-parent"} height={"fill-parent"}>
                    {`<Button
     variant={"filled"} 
     size={"md"}
     leftIcon={<IconGlobeIconAlt />}
     onClick={() => {}}
>
        Button
</Button>
                    `}
                </Code>
            </AutoLayout>
        </AutoLayout>

        <Heading as="h3">Installation</Heading>
        <Tabs
            activeKey={registry}
            onChange={(key) => setRegistry(key)}
            items={[
                { key: "npm", tab: "npm", children: <Code width={"fill-parent"}>npm install fidget-ui</Code> },
                { key: "yarn ", tab: "yarn", children: <Code width={"fill-parent"}>yarn add fidget-ui</Code> }
            ]} />

        <Heading as="h3">Contributors</Heading>
        <SimpleGrid width={'fill-parent'}>
            <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
        </SimpleGrid>
        {/* <Text href="https://www.baidu.com">Github</Text> */}
    </AutoLayout>
}