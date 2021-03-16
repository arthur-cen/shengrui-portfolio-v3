import React from "react"
// react component for creating beautiful carousel
import Carousel from "react-slick"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx"
import resumeData from "assets/jss/resumeData.jsx"

//TODO: 1. to update carousel content update here
import quoteImg from "static/assets/projects/quote.jpg"
import beerBoxImg from "static/assets/projects/beerBox.jpg"
import omniRecycleImg from "static/assets/projects/smart_sort.jpg"
import videoMarkImg from "static/assets/videomark_1.png"

//TODO: 2. to update carousel content update here
const project_beerbox = resumeData.portfolio[0]
const project_quote = resumeData.portfolio[1]
const project_omniRecycle = resumeData.portfolio[3]
const project_videoMark = resumeData.portfolio[4]

function ImageDiv({...props}) {
  let { image, name, url } = props;
  return <div>
            <a href={url}>
              <img
                src={image}
                alt={name}
                className="slick-image"
              />
            </a>
            <div className="slick-caption">
              <h4>
                {name}
              </h4>
            </div>
        </div>
}
class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    }
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {/* //TODO: 3. to update carousel content update here */}
                  <ImageDiv image={videoMarkImg} name={project_videoMark.name} url={project_videoMark.projectUrl}/>
                  <ImageDiv image={omniRecycleImg} name={project_omniRecycle.name} url={project_omniRecycle.projectUrl}/>
                  <ImageDiv image={quoteImg} name={project_quote.name} url={project_quote.projectUrl}/>
                  <ImageDiv image={beerBoxImg} name={project_beerbox.name} url={project_beerbox.projectUrl}/>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(carouselStyle)(SectionCarousel)
