import React from "react"
import { graphql } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
// @material-ui/icons
import Email from "@material-ui/icons/Email"
import People from "@material-ui/icons/People"
import LockOutlined from "@material-ui/icons/LockOutlined"
// React icons
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa"
// core components
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import CustomInput from "components/CustomInput/CustomInput.jsx"
import classNames from "classnames"
import Parallax from "components/Parallax/Parallax.jsx"

import projectPageStyle from "assets/jss/material-kit-react/views/projectPage.jsx"
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx"

import image from "assets/img/bg7.jpg"
import topic_img from "assets/img/bg2.jpg"
import { isConstructorDeclaration } from "typescript"
import resumeData from "assets/jss/resumeData.jsx"
import { Link } from "@material-ui/core"
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
        <Parallax small image={topic_img} />
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className="blog-post-container">
                    <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
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
      }
    }
  }
`
export default withStyles(projectPageStyle)(Template)
