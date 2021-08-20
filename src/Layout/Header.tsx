import { AppBar, Toolbar, Typography } from "@material-ui/core"
import EtanaLogo from "../Sections/Shared/Logos/EtanaLogo"

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <EtanaLogo />
                <Typography variant="h5">Etana Custody</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header