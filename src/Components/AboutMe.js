import React, { useEffect, useState } from 'react';
import About from '../Assets/About-me-image.png';
import { Link } from 'react-router-dom';
import AboutMeComp from './AboutMeComp';
import AboutMeFacts from './AboutMeFacts';

export default function AboutMe(props) {
  const category = [
    {
      title: "Web Developer, AI/ML, and Competitive Programmer",
      description: "Hello, I'm passionate about web development, AI/ML, and competitive programming. I wish to impact people's lives positively with my problem-solving and development skills.",
    },
    {
      title: "Programming Achievements and Skills",
      description: "I'm a Specialist on Codeforces with a rating of 1441. I also achieved global rank 50 in a Codechef contest. Technical skills: C++, C, Python, HTML, CSS, JavaScript, Bootstrap, Node.js, Numpy, Pandas, scikit-learn.",
    },
  ];

  const facts = [
    { heading: "Problems Solved", value: "900+" },
    { heading: "Projects Completed", value: "6+" },
    { heading: "Hobby", value: "Playing Chess" },
  ];

  const [heading, setHeading] = useState('font-mono text-slate-400 text-3xl font-bold mb-8 transition-colors duration-300');

  useEffect(() => {
    const mainDivison = document.querySelector('.main-divison');
    const topDivison = document.querySelector('.top-section');

    if (props.currentTheme === "light") {
      mainDivison.classList.add('bg-cyan-50');
      mainDivison.classList.remove('bg-gray-950');
      topDivison.classList.add('text-gray-950');
      topDivison.classList.remove('text-gray-400');
      setHeading('font-mono text-slate-800 text-3xl font-bold mb-8 transition-colors duration-300');
    } else {
      mainDivison.classList.remove('bg-cyan-50');
      mainDivison.classList.add('bg-gray-950');
      topDivison.classList.remove('text-gray-950');
      topDivison.classList.add('text-gray-400');
      setHeading('font-mono text-slate-400 text-3xl font-bold mb-8 transition-colors duration-300');
    }
  }, [props.currentTheme]);

  return (
    <div className="w-[60%] mt-12 py-8 overflow-y-scroll main-divison"
      style={{
        height: '550px', // Adjust the height as needed
        overflowY: 'auto', // Add vertical scroll if content exceeds the fixed height
      }}
    >
      <div className="flex mx-14 my-10 justify-between top-section transition-colors duration-300">
        <div className="flex-1 px-10 space-y-8">
          <div className="space-y-3">
            <div className="font-mono font-thin text-sm opacity-50">
              Student, NIT Delhi
            </div>
            <div className="font-sans font-bold text-4xl transition-colors duration-300">
              Sunny<br />Maurya
            </div>
          </div>
          <div className="font-sans font-normal text-md inline-block leading-7 transition-colors duration-300">
            I am a student at NIT Delhi, pursuing my Bachelor int. I am expanding my skills and knowledge in Software Development and Web Development.
          </div>
          <div className="py-3">
            <a href="https://drive.google.com/file/d/1T_f0MmCBdTZjh8BijMq-MbNRhkl4ucuZ/view?usp=drive_link" target="_blank">
              <button className="px-5 py-3 rounded-md text-white bg-sky-500 text-md font-bold block mb-3 transition-colors duration-300">
                Download CV
              </button>
            </a>
            <Link to="/contact">
              <button className="px-3 py-2 rounded-md bg-gray-800 font-sans text-white text-md font-normal block border-2 border-gray-500 transition-colors duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img src={About} alt="portfolio" className="w-full rounded-md" />
        </div>
      </div>

      <div className="mx-14 my-10 interest-section">
        <div className={heading}>
          What I do
        </div>
        <div className="flex justify-between space-x-10">
          {category.map((items, i) => (
            <AboutMeComp key={i} currentTheme={props.currentTheme} title={items.title} description={items.description} />
          ))}
        </div>
      </div>

      <div className="mx-14 my-10 achievement-section">
        <div className={heading}>
          Few Facts
        </div>
        <div className="flex justify-between space-x-6">
          {facts.map((items, i) => (
            <AboutMeFacts key={i} currentTheme={props.currentTheme} heading={items.heading} value={items.value} />
          ))}
        </div>
      </div>
    </div>
  );
}
