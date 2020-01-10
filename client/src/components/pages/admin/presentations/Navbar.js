/** @jsx jsx */
import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import theme from "../../../../theme";
import { jsx } from "@emotion/core";

const styles = {
  wrapper: {
    height: "100%",
    width: "25%",
    backgroundColor: theme.color.secondary,
    borderRight: `2px solid ${theme.text}`
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
    width: "100%",
    marginTop: "3rem"
  },
  navlinks: {
    normal: {
      padding: "0.5rem",
      textAlign: "center",
      fontSize: "1.3rem"
    },
    active: {
      backgroundColor: theme.background
    }
  }
};

const Navbar = () => {
  let { url } = useRouteMatch("/admin");
  return (
    <aside css={styles.wrapper}>
      <div css={styles.container}>
        <div>
          <Link to={`${url}`}>
            <h2>Leon's Kitchen</h2>
          </Link>
        </div>
        <ul css={styles.ul}>
          <NavLink
            css={styles.navlinks.normal}
            activeStyle={styles.navlinks.active}
            to={`${url}/employees`}
          >
            Employees
          </NavLink>

          <NavLink
            css={styles.navlinks.normal}
            activeStyle={styles.navlinks.active}
            to={`${url}/food-menu`}
          >
            Food menu
          </NavLink>

          <NavLink
            css={styles.navlinks.normal}
            activeStyle={styles.navlinks.active}
            to={`${url}/orders`}
          >
            Orders
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
