import { Paper } from "@material-ui/core"
import { StepState } from "../../Apply"
import StepperCardContent from "./StepperCardContent"
import StepperCardFooter from "./StepperCardFooter"
import StepperCardHeader from "./StepperCardHeader"

interface Props {
    state: StepState
    onNext: () => void
    onBack: () => void
    onComplete: () => void
}

const StepperCard = ({ state, onNext, onBack, onComplete }: Props) => {
    return (
        <Paper>
            <StepperCardHeader
                state={state}
            />
            <StepperCardContent
                state={state}
            />
            <StepperCardFooter
                state={state}
                onNext={onNext}
                onBack={onBack}
                onComplete={onComplete}
            />
        </Paper >
    )
}

export default StepperCard