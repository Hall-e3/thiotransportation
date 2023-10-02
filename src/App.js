import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Supensing } from "./components";

const HomePage = Supensing(lazy(() => import("./pages/Home")));
const ServicePage = Supensing(lazy(() => import("./pages/Services")));
const AboutPage = Supensing(lazy(() => import("./pages/About")));
const BlogPage = Supensing(lazy(() => import("./pages/Blog")));
const ContactPage = Supensing(lazy(() => import("./pages/Contact")));

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
