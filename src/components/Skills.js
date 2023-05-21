import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import windows from "../assets/skills/windows.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import html from "../assets/skills/html.svg"
import nodejs from "../assets/skills/nodejs.svg"
import es6 from '../assets/skills/es6.jpg'
import mongo from '../assets/skills/mongo.png'
import npm from '../assets/skills/npm.png'
import reactnative from '../assets/skills/reactntive.jpeg'
import sql from '../assets/skills/sql.png'
import vscode from '../assets/skills/vscode.png'
import xcode from '../assets/skills/xcode.png'



import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1
      };
      const settings1 = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills and Technologies</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>
             <div className="mt-4 desktop-view">
                <Slider {...settings}>
                <SkillCard name="javascript" experience="1 years" img={javascript} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="nodejs" experience="1 years" img={nodejs} />
                <SkillCard name="html" experience="1 years" img={html} />
                <SkillCard name="python" experience="1 years" img={python} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} />
                <SkillCard name="git" experience="1 years" img={git} />
                <SkillCard name="linux" experience="1 years" img={linux} />
                <SkillCard name="windows" experience="1 years" img={windows} />
                <SkillCard name="es6" experience="1 years" img={es6} />
                <SkillCard name="mongo" experience="1 years" img={mongo} />
                <SkillCard name="npm" experience="1 years" img={npm} />
                <SkillCard name="reactnative" experience="1 years" img={reactnative} />
                <SkillCard name="sql" experience="1 years" img={sql} />
                <SkillCard name="vscode" experience="1 years" img={vscode} />
                <SkillCard name="xcode" experience="1 years" img={xcode} />
                </Slider>
            </div>
            <div className="mt-4 mobile-view">
                <Slider {...settings1}>
                <SkillCard name="javascript" experience="1 years" img={javascript} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="nodejs" experience="1 years" img={nodejs} />
                <SkillCard name="html" experience="1 years" img={html} />
                <SkillCard name="python" experience="1 years" img={python} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} />
                <SkillCard name="git" experience="1 years" img={git} />
                <SkillCard name="linux" experience="1 years" img={linux} />
                <SkillCard name="windows" experience="1 years" img={windows} />
                <SkillCard name="es6" experience="1 years" img={es6} />
                <SkillCard name="mongo" experience="1 years" img={mongo} />
                <SkillCard name="npm" experience="1 years" img={npm} />
                <SkillCard name="reactnative" experience="1 years" img={reactnative} />
                <SkillCard name="sql" experience="1 years" img={sql} />
                <SkillCard name="vscode" experience="1 years" img={vscode} />
                <SkillCard name="xcode" experience="1 years" img={xcode} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
