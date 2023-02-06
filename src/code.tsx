import { Heading } from "./components"
import { ButtonDoc, TextFieldDoc, AccordionDoc, TabsDoc, RadioDoc, DividerDoc, CheckboxDoc, TagDoc, AvatarDoc } from "./docs"
import ColorsDoc from "./docs/colors"
import { DescriptionListDoc } from "./docs/description-list"
import HeadingDoc from "./docs/heading"
import { IconButtonDoc } from "./docs/icon-button"
import { IconsDoc } from "./docs/icons"
import Intro from "./docs/intro"
import { SelectDoc } from "./docs/select"
import { SimpleGridDoc } from "./docs/simple-grid"
import { paginationStyle } from "./docs/styles"
import { SwitchDoc } from "./docs/switch"
import { Issue } from "./docs/issue"
import { TimePickerDoc } from "./docs/time-picker"
import { Todo } from "./docs/todo"
import { colors } from "./styles"
import { MenuDoc } from "./docs/menu"
import { NoticeDoc } from "./docs/notice"

const { widget } = figma
const { AutoLayout, usePropertyMenu, useSyncedState, Text } = widget

const COMPONENTS: WidgetPropertyMenuDropdownOption[] = [
  { option: "intro", label: "Introduction" },
  { option: "colors", label: "Colors" },
  { option: "shadows", label: "Shadows"},
  { option: "icons", label: "Icons" },
  { option: "heading", label: "Heading" },
  { option: "button", label: "Button" },
  { option: "icon-button", label: "IconButton" },
  { option: "radio", label: "Radio" },
  { option: "checkbox", label: "Checkbox" },
  { option: "switch", label: "Switch" },
  { option: "text-field", label: "Text Field" },
  { option: "select", label: "Select" },
  { option: "menu", label: "Menu" },
  { option: "tag", label: "Tag" },
  { option: "accordion", label: "Accordion" },
  { option: "tabs", label: "Tabs" },
  { option: "divider", label: "Divider" },
  { option: "avatar", label: "Avatar" },
  { option: "time-picker", label: "Time Picker" },
  { option: "description-list", label: "Description List" },
  { option: "notice", label: "Notice"},
  { option: "demo1", label: "Demo: Todo" },
  { option: "demo2", label: "Demo: Issue" },
]

function Widget() {
  const [currentPage, setCurrentPage] = useSyncedState("currentPage", "intro")
  const index = COMPONENTS.findIndex(item => item.option === currentPage);

  const COMPONENT_DOC: { [key: string]: FigmaDeclarativeNode } = {
    intro: <Intro />,
    icons: <IconsDoc />,
    heading: <HeadingDoc />,
    button: <ButtonDoc />,
    "icon-button": <IconButtonDoc />,
    tag: <TagDoc />,
    radio: <RadioDoc />,
    checkbox: <CheckboxDoc />,
    switch: <SwitchDoc />,
    "text-field": <TextFieldDoc />,
    menu: <MenuDoc />,
    accordion: <AccordionDoc />,
    tabs: <TabsDoc />,
    divider: <DividerDoc />,
    avatar: <AvatarDoc />,
    select: <SelectDoc />,
    "time-picker": <TimePickerDoc />,
    colors: <ColorsDoc />,
    "description-list": <DescriptionListDoc />,
    "simple-grid": <SimpleGridDoc />,
    notice: <NoticeDoc />,
    demo1: <Todo />,
    demo2: <Issue />
  }

  usePropertyMenu([
    {
      propertyName: "Components",
      itemType: "dropdown",
      options: COMPONENTS,
      selectedOption: currentPage,
      tooltip: "Components"
    },
    {
      propertyName: "Repository",
      itemType: "link",
      href: "https://www.github.com",
      tooltip: "Repository",
    }
  ], (e) => {
    if (e.propertyName === "Components" && e.propertyValue) {
      setCurrentPage(e.propertyValue)
    }
  })

  const pagination = <AutoLayout width={"fill-parent"} overflow={"hidden"} spacing={16} padding={{ top: 48 }}>
    {
      index > 0 ? <AutoLayout
        {...paginationStyle}
        onClick={() => setCurrentPage(COMPONENTS[index - 1]?.option)}
      >
        <Text fill={colors.neutral[400]} fontSize={12} lineHeight={20}>Previous</Text>
        <Heading as="h6">
          {COMPONENTS[index - 1].label}
        </Heading>
      </AutoLayout> : null
    }

    {
      (index < COMPONENTS.length - 1 && index >= 0) ? <AutoLayout
        horizontalAlignItems={"end"}
        {...paginationStyle}

        onClick={() => setCurrentPage(COMPONENTS[index + 1]?.option)}
      >
        <Text fill={colors.neutral[400]} fontSize={12} lineHeight={20}>Next</Text>
        <Heading as="h6">
          {COMPONENTS[index + 1].label}
        </Heading>
      </AutoLayout> : null
    }
  </AutoLayout>

  return currentPage.startsWith("demo") ? COMPONENT_DOC[currentPage] : <AutoLayout
    name="Container"
    fill={"#ffffff"}
    padding={32}
    cornerRadius={16}
    width={"hug-contents"}
    height={"hug-contents"}
    overflow={"visible"}
    spacing={16}
    direction={"vertical"}
  >
    {COMPONENT_DOC[currentPage]}
    {pagination}
  </AutoLayout>
}

widget.register(Widget)
