import React from "react";
import { Container, Icon, Image, Menu } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

function Header() {
  const router = useRouter();
  const user = true;

  function isActive(route) {
    return router.pathname === route;
  }

  return (
    <Menu stackable fluid id={"menu"} inverted>
      <Container text>
        <Link href={"/"}>
          <Menu.Item header active={isActive("/")}>
            <Image
              size={"mini"}
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ShopReserve
          </Menu.Item>
        </Link>
        <Link href={"/cart"}>
          <Menu.Item header active={isActive("/cart")}>
            <Icon name={"cart"} size={"large"} />
            Cart
          </Menu.Item>
        </Link>
        {user && (
          <Link href={"/create"}>
            <Menu.Item header active={isActive("/create")}>
              <Icon name={"add square"} size={"large"} />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href={"/account"}>
              <Menu.Item header active={isActive("/account")}>
                <Icon name={"user"} size={"large"} />
                Account
              </Menu.Item>
            </Link>
            <Menu.Item header>
              <Icon name={"sign out"} size={"large"} />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href={"/login"}>
              <Menu.Item header active={isActive("/login")}>
                <Icon name={"sign in"} size={"large"} />
                Login
              </Menu.Item>
            </Link>

            <Link href={"/signup"}>
              <Menu.Item header active={isActive("/signup")}>
                <Icon name={"signup"} size={"large"} />
                Sign up
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;