/** @jsx jsx */
import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import theme from "../../../../theme";
import { jsx } from "@emotion/core";

const styles = {
  wrapper: {
    height: "100%",
    width: "33%",
    backgroundColor: theme.color.secondary
  },
  container: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  ul: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    width: "100%",
    marginTop: "2rem"
  },
  navlinks: {
    normal: {
      padding: "0.5rem",
      textAlign: "center",
      fontSize: "1.3rem"
    },
    active: {
      backgroundColor: theme.background,
      borderRight: `1px solid ${theme.text}`
    }
  }
};

const Navbar = props => {
  let match = useRouteMatch("/admin");
  return (
    <aside css={styles.wrapper}>
      <div css={styles.container}>
        <div>
          <Link to={match.path}>
            <h2>Leon's Kitchen</h2>
          </Link>
        </div>
        <ul css={styles.ul}>
          <NavLink
            css={styles.navlinks.normal}
            activeStyle={styles.navlinks.active}
            to={`${match.url}/employees`}
          >
            Employees
          </NavLink>

          <NavLink
            css={styles.navlinks.normal}
            activeStyle={styles.navlinks.active}
            to={`${match.url}/food-menu`}
          >
            Food menu
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
