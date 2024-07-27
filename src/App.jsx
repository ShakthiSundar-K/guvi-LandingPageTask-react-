import React from "react";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Iconsgrid from "./components/Iconsgrid";
import Imageshow from "./components/Imageshow";
import Testimonials from "./components/Testimonials";
import "./App.css";
import Footer from "./components/Footer";
import Calltoaction from "./components/Calltoaction";

function App() {
  let iconsdata = [
    {
      icon: "bi-window",
      des1: "Fully Responsive",
      des2: "This theme will look great on any device, no matter the size!",
    },
    {
      icon: "bi-layers",
      des1: "Bootstrap 5 Ready",
      des2: "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      icon: "bi-terminal",
      des1: "Easy to Use",
      des2: "Ready to use with your own content, or customize the source files!",
    },
  ];

  let imagedata = [
    {
      img: "../src/assets/bg-showcase-1.jpg",
      des1: "Fully Responsive Design",
      des2: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      img: "../src/assets/bg-showcase-2.jpg",
      des1: "Updated For Bootstrap 5",
      des2: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
      img: "../src/assets/bg-showcase-3.jpg",
      des1: "Easy to Use & Customize",
      des2: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];

  let testimonialdata = [
    {
      img: "../src/assets/testimonials-1.jpg",
      name: "Margaret E.",
      review: "This is fantastic! Thanks so much guys!",
    },
    {
      img: "../src/assets/testimonials-2.jpg",
      name: "Fred S.",
      review:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      img: "../src/assets/testimonials-3.jpg",
      name: "Sarah W.",
      review: "Thanks so much for making these free resources available to us!",
    },
  ];

  return (
    <>
      <Topbar />

      <Hero />

      <section className='features-icons bg-light text-center'>
        <div className='container'>
          <div className='row'>
            <Iconsgrid data={iconsdata} />
          </div>
        </div>
      </section>

      <section className='showcase'>
        <div className='container-fluid p-0'>
          <Imageshow data={imagedata} />
        </div>
      </section>

      <section className='testimonials text-center bg-light'>
        <div className='container'>
          <h2 className='mb-5'>What people are saying...</h2>
          <div className='row'>
            <Testimonials data={testimonialdata} />
          </div>
        </div>
      </section>

      <Calltoaction />

      <Footer />
    </>
  );
}

export default App;
