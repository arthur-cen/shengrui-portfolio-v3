import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link, createMuiTheme } from '@material-ui/core';
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/styles';
import { title } from "assets/jss/material-kit-react.jsx"
import Quote from "components/Typography/Quote.jsx"
import markdownStyle from "assets/jss/material-kit-react/views/componentsSections/markdownStyle.jsx"

const Image = styled.img`
  max-height:30rem;
  width: auto;
  max-width: 100%;
  height: auto;
  padding: 1rem;
`

const Pre = styled.pre`
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
`
/**
 * color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
 */
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto Slab", "Times New Roman", "serif"
    ].join(','),
    h1: {...title, fontSize: "2.75rem", marginTop: "0.5em", marginBottom: "0.5em"},
    h2: {...title, fontSize: "2.35rem", marginTop: "0.5em", marginBottom: "0.5em"},
    h3: {...title, fontSize: "2rem", marginTop: "0.5em", marginBottom: "0.5em"},
    h4: {...title, fontSize: "1.75rem", marginTop: "0.5em", marginBottom: "0.5em"},
    h5: {...title, fontSize: "1.25rem", marginTop: "0.5em", marginBottom: "0.5em"},
    h6: {...title, fontSize: "1rem", marginTop: "0.5em", marginBottom: "0.5em"},
    body1: { lineHeight: 2, paddingBottom: "1rem"},
  },
});

const options = {
  overrides: {
    h1: { component: Typography, props: { variant: 'h1' } },
    h2: { component: Typography, props: { variant: 'h2' } },
    h3: { component: Typography, props: { variant: 'h3' } },
    h4: { component: Typography, props: { variant: 'h4' } },
    h5: { component: Typography, props: { variant: 'h5' } },
    h6: { component: Typography, props: { variant: 'h6' } },
    blockquote: { component: Quote, props: { component: 'blockquote'}},
    p: { component: Typography, props: { component: 'p', variant: "body1"} },
    a: { component: Link },
    pre: { component: Pre},
    li: {
      component: withStyles(markdownStyle)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} variant="body1"/>
        </li>
      )),
    },
    img: {
      component: withStyles(markdownStyle)(({ classes, ...props }) => (
        <div className={classes.imgDiv}>
          <Image {...props}/>
        </div>
      )),
    },
  },
};

export default function Markdown(props) {
  return <ThemeProvider theme={theme}>
    <ReactMarkdown options={options} {...props} />
  </ThemeProvider> 
}
