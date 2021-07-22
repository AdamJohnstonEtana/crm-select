import { Typography } from "@material-ui/core"
import { useState } from "react"
import StepperCard from "../Shared/StepperCard/StepperCard"

export interface StepState {
    index: number,
    steps: StepItem[]
}

export interface StepItem {
    step: number,
    label: string,
    content: JSX.Element
}

const generate = (amount: number): StepItem[] => {
    return [...Array(amount)].map((_, i) => ({
        step: i,
        label: `step: ${i + 1}`,
        content: <Typography variant="h1">{i + 1}</Typography>
    }))
}

const Apply = () => {
    const [state, setState] = useState<StepState>({
        index: 0,
        steps: generate(5)
    })

    const onNext = () => setState(({ index, steps }) =>
        ({ steps, index: steps[index + 1] ? index + 1 : index }))

    const onBack = () => setState(({ index, steps }) =>
        ({ steps, index: steps[index - 1] ? index - 1 : index }))

    const onComplete = () =>
        console.log("done")

    return (
        <StepperCard
            state={state}
            onNext={onNext}
            onBack={onBack}
            onComplete={onComplete}
        />
    )
}

export default Apply