
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path : '/', element : <Main></Main>, children : [
        {
          path : '/' ,
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
           element : <Home></Home>
        },
        {
          path : 'home',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
           element : <Home></Home>
        },
        {
          path : '/topic/:id',
          loader : async ({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)

          },

          element : <QuizDetails></QuizDetails>
        },
        {
          path : 'blog' , element : <Blog></Blog>
        },
        {
          path : 'topics' ,
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'), 
          element : <Home></Home>
        }
      ]
    }

  ])
  return (
    <div className='bg-neutral-300'>
   
   <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
