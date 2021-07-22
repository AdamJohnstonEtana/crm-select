import { Button } from "@material-ui/core"
import { useStyles } from "../../../Styles"
import { StepState } from "../../Apply"

interface Props {
    state: StepState
    onBack: () => void
    onNext: () => void
    onComplete: () => void
}

const StepperCardFooter = ({ state, onNext, onBack, onComplete }: Props) => {
    const { stepperCardFooter } = useStyles()

    return (
        <div className={stepperCardFooter}>
            <Button variant="contained" color="primary" onClick={() => onBack()}>Back</Button>
            {state.index < state.steps.length - 1 ?
                <Button variant="contained" color="secondary" onClick={() => onNext()}>Next</Button>
                :
                <Button variant="contained" color="secondary" onClick={() => onComplete()}>Complete</Button>
            }
        </div>
    )
}

export default StepperCardFooter