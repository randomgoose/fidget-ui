import { ButtonDoc, TextFieldDoc, AccordionDoc, TabsDoc, RadioDoc, DividerDoc, CheckboxDoc, TagDoc, AvatarDoc } from "./docs"
import HeadingDoc from "./docs/heading"
import { SelectDoc } from "./docs/select"

const { widget } = figma
const { AutoLayout, usePropertyMenu, useSyncedState } = widget

const COMPONENTS: WidgetPropertyMenuDropdownOption[] = [
  { option: "heading", label: "Heading" },
  { option: "button", label: "Button" },
  { option: "tag", label: "Tag" },
  { option: "radio", label: "Radio" },
  { option: "checkbox", label: "Checkbox" },
  { option: "text-field", label: "Text Field" },
  { option: "accordion", label: "Accordion" },
  { option: "tabs", label: "Tabs" },
  { option: "divider", label: "Divider" },
  { option: "avatar", label: "Avatar" },
  { option: "select", label: "Select" }
]

function Widget() {
  const [currentComponent, setCurrentComponent] = useSyncedState("currentComponent", "")

  const COMPONENT_DOC: { [key: string]: FigmaDeclarativeNode } = {
    heading: <HeadingDoc />,
    button: <ButtonDoc />,
    tag: <TagDoc />,
    radio: <RadioDoc />,
    checkbox: <CheckboxDoc />,
    "text-field": <TextFieldDoc />,
    accordion: <AccordionDoc />,
    tabs: <TabsDoc />,
    divider: <DividerDoc />,
    avatar: <AvatarDoc />,
    select: <SelectDoc />
  }

  usePropertyMenu([
    {
      propertyName: "Components",
      itemType: "dropdown",
      options: COMPONENTS,
      selectedOption: currentComponent,
      tooltip: "Components"
    },
  ], (e) => {
    if (e.propertyName === "Components" && e.propertyValue) {
      setCurrentComponent(e.propertyValue)
    }
  })

  return (
    <AutoLayout width={"hug-contents"} height={"hug-contents"} name={"Display"} overflow={"visible"} spacing={16}>
      {
        COMPONENT_DOC[currentComponent]
      }
      {/* <HeadingDoc />
      <ButtonDoc />
      <TagDoc />
      <RadioDoc />
      <CheckboxDoc />
      <TextFieldDoc />
      <AccordionDoc />
      <TabsDoc />
      <DividerDoc />
      <AvatarDoc /> */}
      {/* <MenuDoc /> */}
      {/* <SelectDoc /> */}
      {/* <SimpleGridDoc /> */}
    </AutoLayout>
  )
}

widget.register(Widget)
