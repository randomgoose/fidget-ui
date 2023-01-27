import { Heading, IconCheck, IconEnvelope, Select, TextField } from "../components"
import { colors } from "../styles"
import { codeStyle, docStyle } from "./styles"
import { P } from "./typography"

const { widget } = figma
const { useSyncedState, AutoLayout, Text, Span } = widget

export function TextFieldDoc() {
    const [value, setValue] = useSyncedState("value", "")
    const [email, setEmail] = useSyncedState("email", "")

    return <AutoLayout
        name="Text Field Doc"
        {...docStyle}
    >
        <Heading as={"h3"}>TextField</Heading>
        <P>TextField extends the built-in <Span {...codeStyle}>Input</Span> component.</P>
        <Heading as="h5">Variants</Heading>

        <AutoLayout spacing={8} direction={"vertical"} width={240} overflow={"visible"}>
            <TextField id="text-field/a" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=outline]"} width={"fill-parent"} />
            <TextField id="text-field/b" variant="filled" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=filled]"} width={"fill-parent"} />
            <TextField id="text-field/c" variant="flush" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=flush]"} width={"fill-parent"} />
        </AutoLayout>

        <Heading as="h5">Sizes</Heading>
        <AutoLayout spacing={8} direction={"vertical"} width={240}>
            <TextField id="text-field/d" size={"lg"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=lg]"} width={"fill-parent"} />
            <TextField id="text-field/e" size={"md"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=md]"} width={"fill-parent"} />
            <TextField id="text-field/f" size={"sm"} value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [size=sm]"} width={"fill-parent"} />
        </AutoLayout>

        <Heading as="h5">Input elements</Heading>
        <Text width={"fill-parent"}>
            Pass in <Span {...codeStyle}>leftElement</Span> and <Span {...codeStyle}>rightElement</Span> prop to add elements inside TextField components.
        </Text>
        <TextField
            id="text-field/email"
            leftElement={<IconEnvelope color={colors.neutral[500]} />}
            rightElement={<IconCheck color={colors.emerald[500]} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />
        <TextField
            id="text-field/email"
            size="lg"
            leftElement={<IconEnvelope color={colors.neutral[500]} />}
            rightElement={<IconCheck color={colors.emerald[500]} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />

        <TextField
            id="text-field/email"
            size="sm"
            leftElement={<IconEnvelope color={colors.neutral[500]} />}
            rightElement={<IconCheck color={colors.emerald[500]} />}
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
                        id="text-field/addon"
                        options={[
                            { label: ".com", value: ".com" },
                            { label: ".app", value: ".app" },
                            { label: ".info", value: ".info" }
                        ]}
                        placeholder={"select"}
                        variant={"filled"}
                        width={72}
                    />
                }
                placeholder={"Your website"}
            />
        </AutoLayout>

        <Heading as="h5">Disabled Text Field</Heading>
        <TextField id="v74k" value={""} onTextEditEnd={e => { }} disabled placeholder="disabled" />
    </AutoLayout>
}