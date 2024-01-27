import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FilterPanel from "./components/FilterPanel";
import AssignTable from "./components/AssignTable";
import DateRangeInput from "./components/DateRangeInput";
import ApplicationDetails from "./pages/ApplicationDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "/filter",
    element: <FilterPanel />,
    children: [],
  },
  {
    path: "/assign",
    element: <ApplicationDetails />,
    children: [],
  },
]);
