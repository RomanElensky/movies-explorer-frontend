import React from "react";
import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about" id="about-project" >
      <SectionTitle title="О проекте" />
      <div className="about__info">
        <div className="about__info-block">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__info-block">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__graph">
        <div className="about__graph-container">
          <p className="about__graph-week">1 неделя</p>
          <p className="about__graph-info">Back-end</p>
        </div>
        <div className="about__graph-container">
          <p className="about__graph-week about__graph-week_front">4 недели</p>
          <p className="about__graph-info">Front-end</p>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;
