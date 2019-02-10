import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "@material-ui/core";

const Header = ({ siteTitle }) => (
  <header>
    <Typography variant='h3'>
      <Link to="/">
        {siteTitle}
      </Link>
    </Typography>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
