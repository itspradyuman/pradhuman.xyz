import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = () => (
  <Layout>
    <h1>404 - Page Not Found</h1>
    <img src="https://i.redd.it/o6px8q59yw401.jpg" alt="Savage Rick and Morty"
    width="100%"
    height="100%"
    object-fit="cover"
    object-position= "top"
    ></img>
    <p>Either you're too early here or else you found a broken link :(</p>
  </Layout>
)

export default NotFound
