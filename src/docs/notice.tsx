import { Button, Divider, Heading } from "../components"
import { Notice } from "../components/notice"
import { IconBookmarkSolid } from "../icons"
import { docStyle } from "./styles"
import { Code } from "./typography"

const { AutoLayout } = figma.widget

export function NoticeDoc() {
    return (
        <AutoLayout {...docStyle} name={"Notice Doc"}>
            <Heading as="h1">Notice</Heading>
            <Divider />
            <Heading as="h5">Usage</Heading>

            <Notice title={"Info"} />
            <Notice description={"Components updated successfully. Components updated successfully."} />

            <Heading as="h5">Status</Heading>
            <AutoLayout direction="vertical" width={"fill-parent"} spacing={8}>
                <Notice title={"Info"} description={"Component updates available."} />
                <Notice status="success" title={"Success"} description={"Components updated successfully."} />
                <Notice status="error" title={"Error"} description={"Update failed. Check your network."} />
                <Notice status="warning" title={"Warning"} description={"Component updates available."} />
                <Notice variant={"solid"} title={"Info"} description={"Component updates available."} />
                <Notice variant={"solid"} status="success" title={"Success"} description={"Components updated successfully."} />
                <Notice variant={"solid"} status="error" title={"Error"} description={"Update failed. Check your network."} />
                <Notice variant={"solid"} status="warning" title={"Warning"} description={"Component updates available."} />
            </AutoLayout>


            <AutoLayout direction="vertical" width={"fill-parent"} spacing={8}>
                <Notice
                    title={"Info"}
                    description={"Component updates available."}
                    icon={<IconBookmarkSolid />} />
            </AutoLayout>

            <Notice
                title={"InfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfo"}
                description={"Component updates available.mponent updates available.mponent updates available.mponent updates available.mponent updates available.mponent updates available.mponent updates available.mponent updates available."}
                icon={<IconBookmarkSolid />} />

            <Notice
                title={"Info"}
                description={"Component updates available."}
                icon={false} />

            <Notice
                title={"Info"}
                icon={false}>
                Component updates available.
            </Notice>
        </AutoLayout>
    )
}