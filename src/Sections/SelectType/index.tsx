import { Grid, Paper, Typography } from "@material-ui/core"
import { useStyles } from "../../Styles"
import RedirectCard from "../Shared/Cards/RedirectCard"

const host = window.location.origin

const SelectCard = () => {
    const { selectTypeContainer } = useStyles()

    return (
        <Paper className={selectTypeContainer}>
            <Grid container justify="center" spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Please select which type of account you want to create
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <RedirectCard
                        redirectURL={`${host}/crm/individual/`}
                        title="Individual"
                        description="This flow is for individuals..."
                    />
                </Grid>
                <Grid item xs={4}>
                    <RedirectCard
                        redirectURL={`${host}/crm/business/`}
                        title="Organization"
                        description="This flow is for organizations..."
                    />
                </Grid>
            </Grid>
        </Paper >
    )
}

export default SelectCard