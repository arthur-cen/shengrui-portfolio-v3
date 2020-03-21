/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import FaMedium from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import resumeData from "assets/jss/resumeData.jsx";
import resumeDownload from "assets/pdf/Cen_Resume_Mar_v1.pdf"

function HeaderLinks({ ...props }) {
  const { classes } = props;
  const listContent = resumeData.portfolio.map(p => 
    <Link to={p.projectUrl} className={classes.dropdownLink}>
      {p.name}
    </Link>)
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={listContent}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={resumeDownload}
          download={resumeData.resumeName}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            href={resumeData.socialLinks.github}
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaGithub/> {window.innerWidth > 959 ? "" : "@arthur-cen"}
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href={resumeData.socialLinks.linkedin}
            target="_blank"
            className={classes.navLink}
          >
            <FaLinkedin/> {window.innerWidth > 959 ? "" : "Shengrui Cen"}
          </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <FaMedium/>
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
