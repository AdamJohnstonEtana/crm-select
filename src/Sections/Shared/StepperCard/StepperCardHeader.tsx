import { Step, StepLabel, Stepper } from "@material-ui/core"
import { useStyles } from "../../../Styles"
import { StepState } from "../../Apply"

interface Props {
    state: StepState,
}

const StepperCardHeader = ({ state }: Props) => {
    const { stepperCardHeader } = useStyles()

    return (
        <Stepper className={stepperCardHeader} activeStep={state.index} alternativeLabel>
            {state.steps.map(({ step, label }) => (
                <Step key={step}>
                    <StepLabel>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperCardHeader