import { Heading, SimpleGrid, Tag } from "../components";
import { TagColorScheme } from "../components/tag/interface";
import { docStyle } from "./styles";
import { COLORS } from "./variables";

const { widget } = figma;
const { AutoLayout, useSyncedState, } = widget

export function TagDoc() {
    const [tags, setTags] = useSyncedState("tags", ["art rock", "prog", "britpop", "psychedelic rock"])

    return <AutoLayout {...docStyle} name={"Tag Doc"}>
        <Heading as="h3">Tag</Heading>

        <Heading as="h5">Color Schemes</Heading>

        <AutoLayout spacing={8}>
            <SimpleGrid columns={8} width={480} spacing={24}>
                {
                    ...COLORS.map((color, index) => (
                        <Tag
                            colorScheme={color as TagColorScheme} key={index}
                        >
                            {color}
                        </Tag>
                    ))
                }
            </SimpleGrid>
        </AutoLayout>

        <Heading as="h5">Variants</Heading>

        <AutoLayout spacing={8}>
            <Tag variant={"solid"}>solid</Tag>
            <Tag variant={"subtle"}>subtle</Tag>
            <Tag variant={"outline"}>outline</Tag>
        </AutoLayout>

        <Heading as="h5">Sizes</Heading>

        <AutoLayout spacing={8}>
            <Tag size="sm">size=sm</Tag>
            <Tag size="md">size=md</Tag>
            <Tag size="lg">size=lg</Tag>
        </AutoLayout>

        <Heading as="h5">Dismissible tags</Heading>

        <AutoLayout spacing={4}>
            {
                tags.map(tag => (
                    <Tag
                        dismissible={true}
                        key={tag}
                        variant={"subtle"}
                        onClose={() => setTags(prev => prev.filter(item => item !== tag))}
                    >
                        {tag}
                    </Tag>
                ))
            }
        </AutoLayout>
    </AutoLayout>
}