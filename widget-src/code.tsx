// This is a counter widget with buttons to increment and decrement the number.

import { ButtonDoc, TextFieldDoc, AccordionDoc, TabsDoc, RadioDoc } from "./docs"

const { widget } = figma
const { AutoLayout } = widget

function Widget() {
  return (
    <AutoLayout width={"hug-contents"} height={"hug-contents"} name={"Display"} overflow={"visible"} spacing={16}>
      <ButtonDoc />
      <RadioDoc />
      <TextFieldDoc />
      <AccordionDoc />
      <TabsDoc />
    </AutoLayout>
  )
}

widget.register(Widget)
