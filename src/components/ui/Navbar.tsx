import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import NavMenu from "../ui/NavMenu";
import { IoMenu } from "react-icons/io5";

import logo from "../../assets/saintailogo.png"
const Navbar = () => {
  const location = useLocation()

  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");


  const handleResize = () => {
    setIsMobile(window.innerWidth < 762);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
   
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
          // else
          //   setCurrentSection("")
        });
      },
      { threshold: 0 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location]);

  return (
    <div className="bg-[#0008] px-[3vw] max-md:px-5 lg:px-[3vw] w-full fixed z-[100] py-4 backdrop-blur-3xl top-0">
      {isMobile ? (
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <div id="left" className="cursor-pointer">
              <Link to={"/"}>
                <img src={logo} className="h-5 cursor-pointer"/>
              </Link>
            </div>
            <div id="right" className="flex items-center">
              <ul className="flex items-center space-x-3">
               
                <li>
                  <NavMenu
                    triggerButton={
                      <button className="bg-[#2f2e38] focus:ring-2 focus:ring-primary outline-none space-x-1 md:space-x-2 text-sm font-thin text-white rounded-md md:px-3 md:py-2 px-1 py-1 flex items-center">
                        <span className="">Menu</span>
                        <IoMenu />
                      </button>
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div id="left" className="cursor-pointer">
            <Link to={"/"}>
          <img src={logo} className="h-8"/>
            </Link>
            {/* <h1 className="font-heading text-white text-lg">SaintAi</h1> */}
          </div>
          <div className="center">
            <ul className="flex md:space-x-2 px-4 py-2 rounded-full border-[0.3px] font-thin text-sm border-[#1f2550]">
              <li
                className={
                  currentSection === "home"  ? "text-primary font-bold" : ""
                }
              >
              <a href="/#home">Home</a>
              </li>
              <li
                className={
                  currentSection === "network"  ? "text-primary font-bold" : ""
                }
              >
                <a href="/#network">Network</a>
              </li>
              <li
                className={
                  currentSection === "roadmaps"  ? "text-primary font-bold" : ""
                }
              >
                <a href="/#roadmaps">Roadmaps</a>
              </li>
              <li
                className={
                  currentSection === "pricing"  ? "text-primary font-bold" : ""
                }
              >
                <a href="/#pricing">Pricing</a>
              </li>
              <li
                className={
                  currentSection === "contactus"  ? "text-primary font-bold" : ""
                }
              >
                <a href="/#contactus">Contact Us</a>
              </li>
            </ul>
          </div>
          <div id="right" className="flex items-center">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
