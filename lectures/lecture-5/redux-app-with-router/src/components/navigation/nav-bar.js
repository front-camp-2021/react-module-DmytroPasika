import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export function NavBar() {
  const { pathname } = useLocation();

  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item name="home" active={pathname === "/"}>
          All books
        </Menu.Item>
      </NavLink>
      <NavLink to="/favorites">
        <Menu.Item name="favorites" active={pathname === "/favorites"}>
          Favorites
        </Menu.Item>
      </NavLink>

      <NavLink to="/not-favorites">
        <Menu.Item name="not-favorites" active={pathname === "/not-favorites"}>
          Not favorites
        </Menu.Item>
      </NavLink>
    </Menu>
  );
}
