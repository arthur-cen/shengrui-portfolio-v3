import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";
const {quote,
    quoteText,
    quoteAuthor,
    defaultFontStyle
} = typographyStyle

const markdownStyle = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    imgDiv: {
        textAlign: "center"
    },
    ...imagesStyle,
    quote,
    quoteText,
    quoteAuthor,
    defaultFontStyle
})

export default markdownStyle