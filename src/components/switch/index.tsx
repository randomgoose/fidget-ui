import { colors } from "../../styles"
import { SwitchProps } from "./interface";
import { getSwitchStyles } from "./styles";

const { widget } = figma
const { AutoLayout, useSyncedState } = widget

export function Switch({
    id,
    onChange,
    colorScheme,
    disabled,
    size,
    defaultChecked = false,
    ...rest
}: SwitchProps) {
    const [checked, setChecked] = useSyncedState(`checked/${id}`, defaultChecked);

    const mergedChecked = "checked" in rest ? rest.checked : checked;

    const { container, thumb } = getSwitchStyles({ checked: mergedChecked, colorScheme, disabled, size });

    return <AutoLayout
        name="Switch"
        {...container}
        {...rest}
        onClick={() => {
            if (!disabled) {
                onChange && onChange(!mergedChecked)
                if (id !== undefined) {
                    setChecked(() => !mergedChecked)
                }
            }
        }}
    >
        <AutoLayout name="Switch Thumb" {...thumb} />
    </AutoLayout>
}