import "./App.css";
import Lottie from "lottie-react";
import animationData from "./Asset/anm.json";
import logo from "./Asset/logo.png";
import mobileframe from "./Asset/mobilepic.png";
import gooogle from "./Asset/google.png";
import appstore from "./Asset/appstors.png";
import qrcode from "./Asset/qr.png";

import user1 from "./Asset/user1.jpg";
import user2 from "./Asset/user2.jpg";
import user4 from "./Asset/user4.jpg";

import { motion } from "framer-motion";

import {
  IoLogoGooglePlaystore,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGoogle,
  IoCloseCircle,
  IoCode,
} from "react-icons/io5";
import { BsRobot, BsTelegram } from "react-icons/bs";
import CommentCard from "./CommentCard";
import { useEffect, useRef, useState } from "react";

function App() {
  const [contact, setcontact] = useState(false);
  const [activeheader, setactiveheader] = useState("home");
  const data = [
    {
      id: 1,
      name: "janny",
      comment:
        "Outstanding work by Senay Tech! They created a stunning website and app that exceeded our expectations. Impressive design, seamless functionality, and excellent communication. Highly recommended!",
      picture: user1,
    },
    {
      id: 2,
      name: "Alen",
      comment:
        "Thank you Senay-tech for  seamless functionality, and excellent communication. Highly recommended!",
      picture: user2,
    },
    {
      id: 3,
      name: "robi",
      comment: "Wow!i Amazed by your work keep up what you are doing",
      picture: user4,
    },
    {
      id: 1,
      name: "janny",
      comment:
        "Outstanding work by Senay Tech! They created a stunning website and app that exceeded our expectations.Impressivedesign,seamlessfunctionality, and excellent communication. Highly recommended!",
      picture: user1,
    },
    {
      id: 2,
      name: "Alen",
      comment:
        "Thank you Senay-tech for  seamless functionality, and excellent communication. Highly recommended!",
      picture: user2,
    },
    {
      id: 3,
      name: "robi",
      comment: "Wow!i Amazed by your work keep up what you are doing",
      picture: user4,
    },
  ];
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const abouusSectionRef = useRef(null);
  const testimonialSectionRef = useRef(null);
  const servicesectionref = useRef(null);
  const homesectionref = useRef(null);

  const [active, setactive] = useState(0);
  const numDots = Math.ceil(data.length / 2);
  const handleDotClick = (index) => {
    setactive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setactive((prevActive) => (prevActive + 1) % numDots);
    }, 2900);

    return () => clearInterval(interval);
  }, [numDots]);

  return (
    <div className="App" style={{ backgroundImage: logo }} ref={homesectionref}>
      {contact && (
        <div
          className="background"
          style={{
            backdropFilter: "blur(10px)",
            position: "fixed",
            width: "100%",
            height: "100vh",

            zIndex: 10,
          }}
        ></div>
      )}
      {contact && (
        <div
          style={{
            zIndex: 11,
            backgroundColor: "rgb(21, 18, 34)",
            position: "fixed",
            height: 320,
            width: 500,
            display: "flex",
            flexDirection: "column",
            top: "30%",
            left: "30%",
          }}
        >
          <div className="contactheader">
            <h2>Connect With us </h2>
            <h2 id="close" onClick={() => setcontact(false)}>
              <IoCloseCircle />
            </h2>
          </div>
          <div className="inlinesocialcard">
            <div className="socialcard">
              <IoLogoInstagram size={30} id="icon" />
            </div>
            <div className="socialcard">
              <IoLogoGithub size={30} id="icon" />
            </div>
            <div className="socialcard">
              <IoLogoLinkedin size={30} id="icon" />
            </div>
            <div className="socialcard">
              <IoLogoGoogle size={30} id="icon" />
            </div>
          </div>
          <div className="jointelegram">
            Join our Telegram channel
            <BsTelegram size={30} id="icon" />
          </div>
        </div>
      )}

      <header>
        <img alt="images" src={logo} width={100} />
        <ul>
          <li
            onClick={() => {
              scrollToRef(homesectionref);
              setactiveheader("home");
            }}
          >
            <span id={activeheader === "home" ? "activate" : ""}>Home</span>
          </li>
          <li
            onClick={() => {
              scrollToRef(servicesectionref);
              setactiveheader("service");
            }}
            id={activeheader === "service" ? "activate" : ""}
          >
            Services
          </li>
          <li
            id={activeheader === "aboutus" ? "activate" : ""}
            onClick={() => {
              scrollToRef(abouusSectionRef);
              setactiveheader("aboutus");
            }}
          >
            About-us
          </li>
          <li
            id={activeheader === "testimonial" ? "activate" : ""}
            onClick={() => {
              scrollToRef(testimonialSectionRef);
              setactiveheader("testimonial");
            }}
          >
            Testmonials
          </li>
          <li id="contact" onClick={() => setcontact(true)}>
            Contact
          </li>
        </ul>
      </header>

      <div className="homeTag">
        <h1>ድርጅቶን ያዘምኑ !!</h1>
        <h3>ለፈጣንና ቀልጣፋ አገልግሎት</h3>
        <p
          style={{
            backgroundColor: "rgb(0, 179, 255)",
            height: 40,
            width: 100,
            alignItems: "center",
            display: "flex",
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          see More
        </p>
      </div>
      <div className="services" ref={servicesectionref}>
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [275, 45] }}
          transition={{ duration: 2 }}
          style={{
            height: 400,
            width: 400,
            background:
              " linear-gradient(90deg,rgba(2, 0, 36, 0.171) 0%,rgba(9, 9, 121, 0.151) 35%,rgba(0, 213, 255, 0.13) 100%)",
            borderRadius: 70,
            filter: "blur(5px)",
            position: "relative",

            rotate: "90deg",
            transform: `rotate(${55}deg)`,
            transition: "transform 0.3s ease",
          }}
        ></motion.div>
        <div>
          <h1>Services we Offer</h1>
          <div className="inline">
            <div className="container">
              <div className="foldcard">
                <div className="front">
                  <IoCode size={36} />
                  Website development
                </div>

                <div className="back">
                  <p>Ecommerce website</p>
                  <p> portfolio website</p>
                  <p>School website</p>
                  <p> for your company </p>
                  <p id="activate">see showcase</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="foldcard">
                <div className="front">
                  <IoLogoGooglePlaystore size={36} />
                  Mobile App Dev
                </div>
                <div className="back">
                  <p>school system</p>
                  <p> tools</p>
                  <p>music lyrics app</p>
                  <p> for your company </p>
                  <p id="activate">see showcase</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="foldcard">
                <div className="front">
                  <BsRobot size={36} />
                  Telegram Bot dev
                </div>
                <div className="back">
                  <p>unavailable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "600px",
          height: "600px",
          position: "absolute",
          top: 20,

          right: 0,
        }}
      />
      <div className="projects">
        <div
          style={{
            height: 400,
            width: "90%",
            display: "flex",

            marginLeft: "5%",
            borderRadius: 40,
            overflow: "hidden",
            paddingTop: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              background:
                "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(26, 30, 29, 1) 35%,rgba(49, 59, 61, 1) 100%)",
              flex: 1,
              height: 500,
            }}
          >
            <img
              alt="images"
              src={mobileframe}
              height={400}
              style={{ rotate: "30deg", zIndex: 8 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Senay Amharic keyboard </h1>
              <p>Amharic keyboard to write Amharic language fast and </p>
              <img
                alt="images"
                src={appstore}
                className="image"
                width={120}
                style={{ marginBottom: -25 }}
              />
              <img className="image" alt="images" src={gooogle} width={120} />
            </div>
            <img
              alt="images"
              src={qrcode}
              width={300}
              height={300}
              style={{ marginLeft: 50, marginTop: 60 }}
            />
          </div>
        </div>
        <div className="aboutas" ref={abouusSectionRef}>
          <img alt="images" src={logo} width={100} />
          <p>
            <span style={{ fontWeight: "bold", color: "#61dafb" }}>
              Senay Tech{" "}
            </span>{" "}
            is a dynamic tech company driven by innovation. We specialize in
            crafting sleek web solutions, intuitive mobile apps, and
            cutting-edge designs. Our passionate team is dedicated to delivering
            excellence and partnering with you to bring your digital dreams to
            life. Join us on this exciting tech journey today! Contact us to
            explore endless possibilities.
          </p>
        </div>
        <div className="comments" ref={testimonialSectionRef}>
          <h2>Testemonials</h2>
          <div
            className="commentlist"
            style={{
              marginLeft: -active * 920,
              transition: "margin-left 0.5s ease",
            }}
          >
            {data.map((p, index) => {
              return (
                <div className="ccards">
                  <CommentCard
                    name={p.name}
                    message={p.comment}
                    image={p.picture}
                  />
                </div>
              );
            })}
          </div>

          <div className="circle">
            {Array.from({ length: numDots }, (_, index) => (
              <div
                onClick={() => handleDotClick(index)}
                className="dots"
                style={{
                  backgroundColor: active === index ? "white" : "transparent",
                }}
                key={index}
              ></div>
            ))}
          </div>
        </div>

        <div className="footer">
          <div>
            <p>&copy; copy Right Ristricted </p>
          </div>
          <div className="text">
            <IoLogoFacebook size={30} id="icon" />
            <IoLogoInstagram size={30} id="icon" />
            <IoLogoLinkedin size={30} id="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
