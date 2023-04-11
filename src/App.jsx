import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

//Layouts
import Main, { mainLoader } from "./layouts/Main";

//library imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        element: <p>logout</p>,
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
