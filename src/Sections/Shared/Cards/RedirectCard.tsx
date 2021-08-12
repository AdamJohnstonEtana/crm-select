import { Card, CardContent, Typography } from "@material-ui/core"
import { useStyles } from "../../../Styles"

interface Props {
    redirectURL: string
    title: string
    description: string
}

const RedirectCard = ({ redirectURL, title, description }: Props) => {
    const { redirectCard } = useStyles()

    const onClick = () => window.location.href = redirectURL

    return (
        <Card className={redirectCard} onClick={onClick}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RedirectCard
