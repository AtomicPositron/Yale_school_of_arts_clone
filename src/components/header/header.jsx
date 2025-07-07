import "./header.css";
import { useState } from "react";

function Body() {
  
  return (
    <div className="heroText md:pt-30 lg:ml-30 mt-30 lg:block flex justify-center content-center items-center align-center flex-col">
      <h1 className="md:text-8xl text-7xl lg:text-left text-center text-white font-bold">
        Yale School Of Arts
      </h1>
      <p className="text-white lg:w-3xl md:w-2xl w-xs lg:text-left text-center text-sm md:text-2xl md:ml-4 mt-8 font-light">
        {" "}
        The Yale School of Art is a graduate and professional school that awards
        MFA degrees in Graphic Design, Painting/Printmaking, Photography, and
        Sculpture. It also offers undergraduate art courses to Yale College
        students. Their website is an ongoing collaborative experiment —
        functioning as a wiki, where all community members can add and edit most
        content.{" "}
      </p>
      <button className="bg-[#0A0A0A] ml-4 p-3 md:p-5 text-white mt-8 w-40 md:w-60 text-xl md:text-2xl">
       <a href="https://www.art.yale.edu/apply"> Apply Now</a>
      </button>
    </div>
  );
}

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button className="md:hidden flex flex-row hamburger pt-20 justify-end pr-10" onClick={() => setIsNavOpen((prev) => !prev)}>
      <svg

        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#ffffff"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
  </button>
      <div className={isNavOpen ? "md:flex flex flex-wrap text-[#ffff] pt-20 align-center justify-center text-2xl gap-17 content-center" : "md:flex hidden flex-wrap text-[#ffff] pt-20 align-center justify-center text-2xl gap-17 content-center"}>
        <span><a href="#"></a>Home</span>
        <span><a href="https://www.art.yale.edu/about">About</a></span>
        <span><a href="https://www.art.yale.edu/apply">Apply</a></span>
        <span><a href="https://www.art.yale.edu/exhibitions">Exhibition</a></span>

        <span><a href="https://www.art.yale.edu/publications">Publication</a></span>
        <span><a href="https://www.art.yale.edu/news">News</a></span>
        <span><a href="https://www.art.yale.edu/public-events">Public Events</a></span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="body lg:bg-cover md:bg-cover bg-[1%]">
      <div className="dim-backdrop">
        <NavBar />
        <Body />
      </div>
    </div>
  );
}

export default Header;
