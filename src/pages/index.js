import React from "react"
import { createMemoryHistory } from "history"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import Components from "../pages-components/Components/Components.jsx"

let hist = createMemoryHistory()

export default () => (<Components/>)
