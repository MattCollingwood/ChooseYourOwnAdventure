import React from 'react';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './App.css';
import Root from './components/Root';
import Intro from './story/Intro';
import Story from './story/Story';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Intro />} />
      <Route path="/:pageId" element={<Story />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <Provider store={store} />
    </>
  );
}

export default App;
