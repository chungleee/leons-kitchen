/** @jsx jsx */
import React from "react";
import { Link, NavLink, useRouteMatch, useHistory } from "react-router-dom";
import theme from "../../../../theme";
import { jsx } from "@emotion/core";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { handleUserLogout } from "../../../../redux/actions/authActions";

const styles = {
  wrapper: {
    height: "100%",
    width: "25%",
    backgroundColor: theme.color.secondary,
    borderRight: `2px solid ${theme.text}`
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  link: { marginTop: "3rem" },
  ul: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
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
  },
  button: {
    width: "25%",
    margin: "0 auto",
    marginTop: "auto",
    marginBottom: "3rem"
  }
};

const Navbar = () => {
  let { url } = useRouteMatch("/admin");
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <aside css={styles.wrapper}>
      <div css={styles.container}>
        <div css={styles.link}>
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

          <Button
            onClick={() => {
              dispatch(handleUserLogout());
              history.push("/");
            }}
            css={styles.button}
          >
            Sign out
          </Button>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
