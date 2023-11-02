import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import { getGetInTouchDetails } from "Store/Slice/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firbaseauth } from "utils/firebase";
import toast, { Toaster } from "react-hot-toast";
export default function Admin(props) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firbaseauth, (user) => {
      if (!user) {
      setTimeout(()=>{
        navigate("/auth");
       },1500)
       toast.error('Opps Please sign in to view the Dashboard')
    }});
  }, []);
 console.log(process.env.APP_ID);
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGetInTouchDetails());
  }, [dispatch]);
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      console.log(prop.path);
      if (prop.layout === "/admin") {
        return prop.path === "User" ? (
          <Route path={`/${prop.path}/*`} element={prop.component} key={key} />
        ) : (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Toaster toastOptions={{ 
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}/>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`h-full flex-none px-[12px] transition-all md:pr-2 xl:pl-[313px]`}
        >
          {/* Routes */}
          <div className="h-full w-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
