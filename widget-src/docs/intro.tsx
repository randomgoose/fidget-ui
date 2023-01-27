import { Avatar, Heading, SimpleGrid } from "../components";
import { Divider } from "../components/divider";
import { Tabs } from "../components/tabs";
import { colors } from "../styles";
import { docStyle } from "./styles";
import { Code, P } from "./typography";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState, SVG } = widget;

const GIT_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-slate-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>`

export default function Intro() {
    const [registry, setRegistry] = useSyncedState<number | string>("registry", "npm")

    return <AutoLayout {...docStyle} name={"Intro"}>
        <Heading as="h1">Fidget UI</Heading>
        <AutoLayout>
            <SVG src={GIT_ICON} />
        </AutoLayout>
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