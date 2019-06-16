import React from 'react';
import { fromJS } from 'immutable';
import { graphql, StaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import Link from '@Navigation/Link';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const TableOfContents = () => {
  return (
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                path
              }
            }
          }
        }
      }
      `}
      render={({ allMarkdownRemark }) => {
        const items = fromJS(allMarkdownRemark.edges);
        return (
          <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Quick Links
                </ListSubheader>
              }
            >
            {items.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={
                  <Link to={item.getIn(['node', 'frontmatter', 'path'])}>
                    <Typography variant="body1">
                      {item.getIn(['node', 'frontmatter', 'date'])} - {item.getIn(['node', 'frontmatter', 'title'])}
                    </Typography>
                  </Link>
                  }
                />
              </ListItem>
            ))}
            </List>
            );
        }}
      />
    );
};

export default TableOfContents;