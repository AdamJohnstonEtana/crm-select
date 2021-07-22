import { useStyles } from "../../../Styles"
import { StepState } from "../../Apply"

interface Props {
    state: StepState
}

const StepperCardContent = ({ state }: Props) => {
    const { stepperCardContent } = useStyles()
    return (
        <div className={stepperCardContent}>
            {state.steps[state.index].content}
        </div>
    )
}

export default StepperCardContent