import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <NavLink
        to="/catalog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
