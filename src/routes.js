import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";


const routes = [
  {
    path: "/",
    element: <Home {...{ NavBar }} />,
    errorElement: <ErrorPage {...{ NavBar }} />
  },
  {
    path: "/directors",
    element: <Directors {...{ NavBar }} />,
    errorElement: <ErrorPage {...{ NavBar }} />
  },
  {
    path: "/actors",
    element: <Actors {...{ NavBar }} />,
    errorElement: <ErrorPage {...{ NavBar }} />
  },
  {
    path: "/movie/:id",
    element: <Movie {...{ NavBar }} />,
    errorElement: <ErrorPage {...{ NavBar }} />
  }
];

export default routes;