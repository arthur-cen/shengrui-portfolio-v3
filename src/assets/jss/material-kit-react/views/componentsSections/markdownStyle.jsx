import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const markdownStyle = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    imgDiv: {
        textAlign: "center"
    },
    ...imagesStyle
})

export default markdownStyle