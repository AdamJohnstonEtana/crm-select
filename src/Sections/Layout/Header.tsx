import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { useStyles } from "../../Styles"
import EtanaLogo from "../Shared/Logos/EtanaLogo"

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