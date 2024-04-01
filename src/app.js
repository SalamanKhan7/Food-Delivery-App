import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import Help from "./components/Help";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Help"));
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from react!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parenting = React.createElement("div", { id: "parenting" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "this is the h1 tag"),
//     React.createElement("h1", {}, "this is the h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "this is the h3 tag"),
//     React.createElement("h1", {}, "this is the h4 tag"),
//   ]),
// ]);

// reactelement
// const heading = <h1>This is the react element </h1>;
// const Title = () => <h1>This is the title component</h1>;
// const main = (
//   <h1>
//     This is the main element {heading} {<Title />}
//   </h1>
// );

// component

// const HeadingComponent = () => {
//   return (
//     <>
//       <Title />
//       <h1> This is the heading component</h1>
//     </>
//   );
// };

// component composition (one component inside others like Title inside HeadingComponent)

// const HeadingComponent = () => {
//   return (
//     <>
//       {main}
//       <h1> This is the heading component</h1>
//     </>
//   );
// };
//code splitting
//dynamic bundling
//chunking
//lazy loading
//on demand loading
//dynamic import
const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make a api call
    const user = {
      name: "Salaman Khan",
    };
    setUserName(user.name);
  }, []);
  return (
    ///override the value of loggedInUser
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
