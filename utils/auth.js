import cookie from "js-cookie";
import Router from "next/router";

export function handleLogin(token) {
  cookie.set("token", token);
  Router.push("/account");
}

export function redirectUser(ctx, Location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location });
    ctx.res.end();
  } else {
    Router.push(Location);
  }
}

export function handleLogout() {
  cookie.remove("token");
  window.localStorage.setItem("logout", Date.now());
  Router.push("/login");
}
