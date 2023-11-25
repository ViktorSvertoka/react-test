import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Layout from './Layout/Layout';

function App() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path="/catalog" element={<Catalog />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="*" element={<Home />} />
  //     </Route>
  //   </Routes>
  // );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: '/catalog',
          element: <Catalog />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
