import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera"
// import Palette from "@material-ui/icons/Palette"
// import Favorite from "@material-ui/icons/Favorite"
// React icons
import { FaGithub, FaLinkedin } from "react-icons/fa"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
// import NavPills from "components/NavPills/NavPills.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"
import profile from "assets/img/faces/arthur.jpg"

// import studio1 from "assets/img/examples/studio-1.jpg"
// import studio2 from "assets/img/examples/studio-2.jpg"
// import studio3 from "assets/img/examples/studio-3.jpg"
// import studio4 from "assets/img/examples/studio-4.jpg"
// import studio5 from "assets/img/examples/studio-5.jpg"
// import work1 from "assets/img/examples/olu-eletu.jpg"
// import work2 from "assets/img/examples/clem-onojeghuo.jpg"
// import work3 from "assets/img/examples/cynthia-del-rio.jpg"
// import work4 from "assets/img/examples/mariya-georgieva.jpg"
// import work5 from "assets/img/examples/clem-onojegaw.jpg"

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"
import resumeData from "assets/jss/resumeData.jsx"
class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div>
        <Header
          color="transparent"
          brand={resumeData.name}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpeg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{resumeData.name}</h3>
                      <h4 className={classes.title}>{`(${resumeData.nickname})`}</h4>
                      <h6>{resumeData.role}</h6>
                      <Button justIcon link className={classes.margin5}>
                        <FaGithub />
                      </Button>
                      {/* <Button justIcon link className={classes.margin5}>
                        <FaMediumM />
                      </Button> */}
                      <Button justIcon link className={classes.margin5}>
                        <FaLinkedin />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {resumeData.welcome} {". "}
                  {resumeData.roleDescription}
                </p>
              </div>
              <SectionCarousel />
              {/* <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(ProfilePage)
