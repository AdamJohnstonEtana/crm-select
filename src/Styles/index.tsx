import { makeStyles } from "@material-ui/core";

const baseStyles = {
    p1: {
        padding: "8px",
    },
    p2: {
        padding: "16px",
    },
    p3: {
        padding: "24px",
    },
    p4: {
        padding: "32px",
    },
    p5: {
        padding: "40px",
    },
    m1: {
        margin: "8px",
    },
    m2: {
        margin: "16px",
    },
    m3: {
        margin: "24px",
    },
    m4: {
        margin: "32px",
    },
    m5: {
        margin: "40px",
    },
}

export const useStyles = makeStyles({
    content: {
        minHeight: "100vh",
        minWidth: "100vw",
        ...baseStyles.p5,
    },
    icon: {
        height: "40px",
        width: "40px",
        ...baseStyles.m1,
    },
    selectTypeContainer: {
        textAlign: "center",
        maxWidth: "800px",
        maxHeight: "300px",
        ...baseStyles.p2,
    },
    redirectCard: {
        cursor: "pointer",
        ...baseStyles.p2,
    },
});
