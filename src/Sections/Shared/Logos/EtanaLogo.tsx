import EtanaImage from "../../../Assets/etana-logo-white.png"
import { useStyles } from "../../../Styles"

const EtanaLogo = () => {
    const { icon } = useStyles()
    return (
        <img className={icon} src={EtanaImage}></img>
    )
}

export default EtanaLogo