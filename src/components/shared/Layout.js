import React from 'react'
const Layout = props => (
  <div>
    <h1>Events Home Page</h1>
    {/* props.children, is the content between the opening and closing tag of
    the layout element you're using */}
    {props.children}
  </div>
)
export default Layout
