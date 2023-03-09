import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const HomePage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return <div>Dashboard</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<HomePage />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
