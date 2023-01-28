import { Heading, IconCheck, IconEnvelope, Select, TextField } from "../components"
import { Divider } from "../components/divider"
import { colors } from "../styles"
import { codeStyle, docStyle } from "./styles"
import { P, Pre } from "./typography"

const { widget } = figma
const { useSyncedState, AutoLayout, Span } = widget

export function TextFieldDoc() {
    const [value, setValue] = useSyncedState("value", "")
    const [email, setEmail] = useSyncedState("email", "")

    return <AutoLayout
        name="Text Field Doc"
        {...docStyle}
    >
        <Heading as={"h1"}>TextField</Heading>
        <P>TextField extends the built-in <Span {...codeStyle}>Input</Span> component.</P>
        <Divider />
        <Heading as="h5">Usage</Heading>
        <P>Use <Pre>TextField</Pre> component in the same way of <Pre>Input</Pre>. Pass <Pre>value</Pre> and <Pre>onTextEditEnd</Pre> to enable text editing.</P>
        <TextField id="text-field/usage" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"Type something"} width={"fill-parent"} />

        <Heading as="h5">Variants</Heading>
        <P>Set <Pre>variant</Pre> prop to change the appearance of TextField components. Available options include <Pre>outline, filled</Pre> and <Pre>flush</Pre>.</P>
        <AutoLayout spacing={8} direction={"vertical"} width={240} overflow={"visible"}>
            <TextField value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=outline]"} width={"fill-parent"} />
            <TextField variant="filled" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=filled]"} width={"fill-parent"} />
            <TextField variant="flush" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=flush]"} width={"fill-parent"} />
        </AutoLayout>

        <Heading as="h5">Sizes</Heading>
        <P>TextField comes in with three sizes: <Pre>lg(40px), md(32px)</Pre> and <Pre>sm(28px)</Pre>.</P>
        <AutoLayout spacing={8} direction={"vertical"} width={240}>
            <TextField size={"lg"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=lg]"} width={"fill-parent"} />
            <TextField size={"md"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=md]"} width={"fill-parent"} />
            <TextField size={"sm"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=sm]"} width={"fill-parent"} />
        </AutoLayout>

        <Heading as="h5">Input elements</Heading>
        <P width={"fill-parent"}>
            Pass in <Pre>leftElement</Pre> and <Pre>rightElement</Pre> prop to add elements inside TextField components.
        </P>
        <TextField
            leftElement={<IconEnvelope color={colors.neutral[500]} width={16} height={16} />}
            rightElement={<IconCheck color={colors.emerald[500]} width={14} height={14} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />
        <TextField
            size="lg"
            leftElement={<IconEnvelope color={colors.neutral[500]} width={20} height={20} />}
            rightElement={<IconCheck color={colors.emerald[500]} width={20} height={20} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />

        <TextField
            size="sm"
            leftElement={<IconEnvelope color={colors.neutral[500]} width={12} height={12} />}
            rightElement={<IconCheck color={colors.emerald[500]} width={12} height={12} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />

        <Heading as="h5">Input addons</Heading>
        <AutoLayout direction={"vertical"} spacing={8} overflow={"visible"}>
            <TextField
                width={480}
                id=""
                value={""}
                onTextEditEnd={e => { }}
                leftAddon={"https://"}
                rightAddon={
                    <Select
                        placement="top"
                        id="text-field/addon"
                        options={[
                            { label: ".com", value: ".com" },
                            { label: ".app", value: ".app" },
                            { label: ".info", value: ".info" }
                        ]}
                        placeholder={"select"}
                        variant={"filled"}
                        width={72}
                        size={"sm"}
                    />
                }
                placeholder={"Your website"}
            />
        </AutoLayout>

        <Heading as="h5">Disabled Text Field</Heading>
        <TextField id="v74k" value={""} onTextEditEnd={e => { }} disabled placeholder="disabled" />
    </AutoLayout>
}