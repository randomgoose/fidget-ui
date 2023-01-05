import { IconEnvelope, TextField } from "../components"
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
        <Text fontSize={24} fontWeight={"bold"}>Text Field</Text>
        <Text fontSize={16} fontWeight={"bold"}>Variants</Text>

        <AutoLayout spacing={8} direction={"vertical"} width={240} overflow={"visible"}>
            <TextField id="text-field/a" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=outline]"} width={"fill-parent"} />
            <TextField id="text-field/b" variant="filled" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=filled]"} width={"fill-parent"} />
            <TextField id="text-field/c" variant="flush" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=flush]"} width={"fill-parent"} />
        </AutoLayout>

        <Text fontSize={16} fontWeight={"bold"}>Sizes</Text>
        <TextField id="text-field/a" value={value} onTextEditEnd={e => setValue(e.characters)} placeholder={"TextField [variant=outline]"} width={"fill-parent"} />

        <TextField
            id="text-field/email"
            leftElement={<IconEnvelope color={colors.neutral[500]} />}
            value={email}
            onTextEditEnd={e => setEmail(e.characters)}
            placeholder={"Please enter your email..."}
            width={"fill-parent"}
        />

    </AutoLayout>
}