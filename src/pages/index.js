import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
import { Helmet } from "react-helmet"
// pages for this product
import ProfilePage from "../pages-components/ProfilePage/ProfilePage"
export default () => (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Shengrui's website</title>
            <ProfilePage/>
        </Helmet>
    </div>
)
