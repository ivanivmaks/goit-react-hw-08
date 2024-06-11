import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import AppBar from "../AppBar/AppBar";
import css from './Layout.module.css'

export default function Layout() {
  return (
    <div className={ css.div}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
