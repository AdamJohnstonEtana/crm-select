import { Grid } from "@material-ui/core"
import { useStyles } from "../Styles"

interface Props {
    children: JSX.Element
}

const Content = ({ children }: Props) => {
    const { content } = useStyles()

    return (
        <Grid container justifyContent="center" className={content}>
            {children}
        </Grid>
    )
}

export default Content