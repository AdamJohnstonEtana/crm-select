import { useStyles } from "../../Styles"

interface Props {
    children: JSX.Element
}

const Content = ({ children }: Props) => {
    const { content } = useStyles()

    return (
        <div className={content}>
            {children}
        </div>
    )
}

export default Content