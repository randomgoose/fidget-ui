import { Heading, IconCheck, IconEnvelope, TextField } from "../components"
import { colors } from "../styles"

const { widget } = figma
const { useSyncedState, AutoLayout, Text } = widget

export function TextFieldDoc() {
    const [value, setValue] = useSyncedState("value", "")
    const [email, setEmail] = useSyncedState("email", "")

    return <AutoLayout
        verticalAlignItems={'center'}
        direction={"vertical"}
        spacing={24}
        padding={32}
        cornerRadius={8}
        fill={'#FFFFFF'}
        stroke={'#E6E6E6'}
        overflow={"visible"}
        width={480}
    >
        <Heading as={"h3"}>Text Field</Heading>
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
                width={240}
                id=""
                value={""}
                onTextEditEnd={e => { }}
                leftAddon={"https://"}
                rightAddon={".com"}
                placeholder={"Your website"}
            />

            <TextField
                width={240}
                id=""
                value={""}
                variant={"flush"}
                onTextEditEnd={e => { }}
                leftAddon={"https://"}
                rightAddon={".com"}
                placeholder={"Your website"}
            />

            <TextField
                width={240}
                id=""
                value={""}
                variant={"filled"}
                onTextEditEnd={e => { }}
                leftAddon={"https://"}
                rightAddon={".com"}
                placeholder={"Your website"}
            />
        </AutoLayout>
    </AutoLayout>
}