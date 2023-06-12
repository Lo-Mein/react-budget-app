import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";
import Error from "./pages/Error";

//Layouts
import Main, { mainLoader } from "./layouts/Main";

//library imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
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
