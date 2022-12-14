import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import QuizDetails from "./Components/QuizDetails/QuizDetails";
import Statistics from "./Components/Statistics/Statistics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/topic/:id",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },

          element: <QuizDetails></QuizDetails>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);
  return (
    <div className="root">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
