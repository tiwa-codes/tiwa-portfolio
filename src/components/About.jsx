import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👩🏾‍💻 Hey, I’m Tiwalola Afolabi — a creative developer, designer, and data science learner who builds digital experiences with clarity, color, and a touch of storytelling.

I started coding in 2019, blending my love for design and curiosity about how technology shapes everyday life. Since then, I’ve worked across web design & development, content creation & design, and  machine learning — crafting visuals, systems, and stories that connect people and ideas.<br />
              I enjoy bringing structure to creativity — whether it’s organizing workflows in Notion, designing interfaces that flow naturally, or turning scattered concepts into polished projects. My work spans startups like Campus Collab, Atara Space, and NextGen Dialogues, where I explore how design, data, and community can create meaningful impact.
             <br/> Beyond <a className='text-green-300 hover:text-green-500 duration-300' href='https://github.com/tiwa-codes' target='_blank' rel='noopener noreferrer'> CODING (👆🏾click me😉) </a>, I’m drawn to the rhythm of content and communication — managing projects, documenting ideas, and building systems that help creative teams stay aligned. For me, tech is both logic and language; it’s how I build, learn, and tell better stories and also love sharing insights on technology trends through blogs and platforms like <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://medium.com/@tiwalolagold42" target='_blank' rel='noopener noreferrer'>Medium</a>, and my creative side also extends to <b>Photography</b> where i capture visual stories that inspire my design approach.</p>
            <ButtonLink
              url='https://drive.google.com/file/d/1Yc6olBFtilEf5-Ao3gDkeFbFzFijByVk/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>2
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;