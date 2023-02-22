import './App.scss'
import Header from './components/Header/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Quiz from './pages/Quiz'
import { useRoutes } from 'react-router-dom'
// import { useState } from 'react';
// import React from 'react';

const Routes = (props: any) => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Home
        // loading={props.loading} setLoading={props.setLoading}
        />
      ),
    },
    { path: 'about', element: <AboutUs /> },
    { path: '*', element: <Home /> },
    { path: 'quiz', element: <Quiz /> },
  ])
  return routes
}

function App() {
  // const [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      <Header></Header>
      <Routes></Routes>
    </div>
  )
}

export default App

/*
        {<Header /* loading={loading} setLoading={setLoading} />}
        <Routes
      loading={loading} setLoading={setLoading}>
      </Routes>

*/
