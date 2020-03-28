import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import style404 from "assets/jss/material-kit-react/views/style404Page.jsx"
import resumeData from "assets/jss/resumeData.jsx"
import image from "assets/img/bg7.jpg"

class BadUrlPage extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // we use this to make the card to appear after the page has been rendered
  // }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand={resumeData.name}
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} className={classes.main}>
                  <h1>404</h1>
                  <h2>This page does not exist.</h2>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    )
  }
}

export default withStyles(style404)(BadUrlPage)
