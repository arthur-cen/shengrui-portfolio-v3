import React from "react"
import { graphql } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import classNames from "classnames"
import Parallax from "components/Parallax/Parallax.jsx"

import projectPageStyle from "assets/jss/material-kit-react/views/projectPage.jsx"
import resumeData from "assets/jss/resumeData.jsx"
import { Link, createMuiTheme, CssBaseline } from "@material-ui/core"
// import { ThemeProvider } from "@material-ui/styles"
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: `"Roboto Slab", "Times New Roman", serif`,
//   }
// });
class Template extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data
    this.state = {
      cardAnimaton: "cardHidden",
    }
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
  }
  render() {
    const { classes, ...rest } = this.props
    const { markdownRemark } = this.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
      <div>
        <Header
          color="transparent"
          brand={resumeData.name}
          rightLinks={<HeaderLinks />}
          leftLinks={<Link to={'#'}/>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter small image={frontmatter.thumbnail} />
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} className={classes.markdownGrid}>
                <div>
                    <div className="blog-post">
                    <h1 className>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                      className="blog-post-content"
                      dangerouslySetInnerHTML={{ __html: html }}
                      />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
      }
    }
  }
`
export default withStyles(projectPageStyle)(Template)
