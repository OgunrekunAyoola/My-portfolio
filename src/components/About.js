import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ogunrekun Ayoola.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          
I am a highly motivated and skilled Frontend Developer with experience in developing dynamic, user-friendly, and visually appealing web applications. With a passion for web development, I specialize in React, Next.js, CSS frameworks, and Material UI.

I have a strong understanding of the latest web development technologies and have a proven track record of delivering high-quality projects on time and within budget. I have hands-on experience in creating intuitive user interfaces and ensuring the seamless interaction of frontend components with back-end systems.

My expertise includes creating responsive designs, implementing complex UI animations, and writing maintainable code. I am also well-versed in CSS pre-processors like SASS and LESS, and have experience in integrating third-party libraries and APIs to enhance the functionality of my projects.

I believe in continuously learning and staying up-to-date with the latest industry trends and technologies. I am a quick learner and have a strong problem-solving mindset, which allows me to come up with creative solutions to complex challenges.

With my strong communication and collaboration skills, I work closely with cross-functional teams to ensure the successful delivery of projects. I am committed to delivering the best possible user experience and am passionate about creating beautiful and functional websites that exceed client expectations.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
