import React, { useEffect, useRef } from "react";
import "../Assets/CSS/Home.scss";
import skills from "../Assets/Statics/skills.js";
import { Box, Grid, Typography } from "@mui/material";
import Web from "../Assets/Statics/Images/web.png";
import Graphics from "../Assets/Statics/Images/graphics.png";
import Data from "../Assets/Statics/Images/Data.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const html = `
    <p>I am <strong>Michael Chinemelu</strong>, a full-stack developer focused on building scalable, user-centric digital solutions with modern technologies.</p>

    <p>I primarily work with <strong>Django (DRF), FastAPI</strong>, and frontend frameworks such as <strong>React, Vue, and Next.js</strong>, delivering performant applications with clean architecture.</p>

    <hr style="margin-top:10px" />

    <p>I hold a degree in <strong>Computer Science</strong> from the <strong>University of Nigeria, Nsukka</strong> and enjoy solving real-world problems through technology.</p>
  `;

  const serviceCardsRef = useRef([]);
  serviceCardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      serviceCardsRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".service-section",
          start: "top 100%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <main className="home">
      {/* ABOUT */}
      <section className="home-section" aria-labelledby="about-heading">
        <h1 id="about-heading" className="h2">
          Full-stack Developer
        </h1>

        <Box sx={{ padding: "0.5rem", textAlign: "justify" }}>
          <Typography
            component="article"
            variant="body"
            style={{ lineHeight: "1.8rem" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Box>
      </section>

      {/* SKILLS */}
      <section className="home-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="h2">
          Skills
        </h2>

        <Box component="ul" sx={{ display: "flex", padding: 0 }}>
          {skills.map((skill, index) => (
            <Grid
              component="li"
              key={index}
              sx={{
                padding: "10px",
                background: "#140014",
                margin: "0.5rem",
                listStyle: "none",
              }}
              xs={12}
              sm={6}
              className="skills"
            >
              <span className="items">
                <img
                  src={skill.Image}
                  alt={`${skill.Name} development skill`}
                  width="50"
                />
              </span>
              <span className="items name">{skill.Name}</span>
            </Grid>
          ))}
        </Box>
      </section>

      {/* SERVICES */}
      <section
        className="service-section"
        aria-labelledby="services-heading"
      >
        <h2
          id="services-heading"
          className="h2"
          style={{ color: "rgb(229 174 255)" }}
        >
          Services
        </h2>

        <Box sx={{ display: "flex" }}>
          <article className="boxes" ref={addToRefs}>
            <img src={Web} alt="Web design and development services" />
            <span className="txt">Web Design</span>
          </article>

          <article className="boxes" ref={addToRefs}>
            <img
              src={Graphics}
              alt="Creative graphic design services"
            />
            <span className="txt">Graphic Design</span>
          </article>

          <article className="boxes" ref={addToRefs}>
            <img
              src={Data}
              alt="Data analysis and insights services"
            />
            <span className="txt">Data Analysis</span>
          </article>
        </Box>
      </section>
    </main>
  );
};

export default Home;
