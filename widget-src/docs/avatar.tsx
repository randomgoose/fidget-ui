import { Heading } from "../components";
import { Avatar } from "../components/avatar";
import { AvatarSize } from "../components/avatar/interface";
import { colors } from "../styles";
import { docStyle } from "./styles";

const { widget } = figma
const { AutoLayout } = widget

export function AvatarDoc() {
    return (
        <AutoLayout {...docStyle} name="avatar">
            <Heading as="h3">Avatar</Heading>

            <Heading as="h5">Sizes</Heading>

            <AutoLayout spacing={8}>
                {
                    ["xl", "lg", "md", "sm", "xs"].map(
                        size => <Avatar
                            size={size as AvatarSize}
                            src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            key={size}
                        />
                    )
                }
            </AutoLayout>

            <Heading as="h5">
                Fallback Avatar
            </Heading>

            <Avatar fill={colors.blue[500]} />
        </AutoLayout>
    )
}