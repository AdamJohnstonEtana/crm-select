import { AppBar, Toolbar, Typography } from "@material-ui/core"
import EtanaLogo from "../Sections/Shared/Logos/EtanaLogo"
import { useStyles } from "../Styles"

const Header = () => {
    const { header } = useStyles()
    return (
        <AppBar className={header} position="static">
            <Toolbar>
                <EtanaLogo />
                <Typography variant="h5">Etana Custody</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header