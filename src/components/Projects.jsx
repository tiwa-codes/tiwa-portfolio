import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <span>
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt={title} />
            </span>
            <div className="p-4 sm:p-6">
                <span>
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </span>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'COVID-19 Prediction Model',
        description:'Advanced predictive modeling project using machine learning to forecast COVID-19 trends and provide actionable insights for public health decisions. Includes data preprocessing, feature engineering, and model evaluation with visualization tools.',
        image: vpn,
        git:'https://github.com/tiwa-codes/Capstone-Project',
        technologies:['Python', 'Machine Learning', 'Jupyter Notebook', 'Data Science']
    },
    {
        title:'Job Hunt Platform',
        description:'A comprehensive job hunting website featuring job listings, candidate profiles, employer dashboards, and advanced search functionality. Includes user authentication, job posting capabilities, and responsive design.',
        image: copeople,
        git:'https://github.com/tiwa-codes/job-hunt',
        technologies:['HTML', 'CSS', 'JavaScript', 'Web Design']
    },
    {
        title:'Flutter Mobile Projects',
        description:'Collection of mobile applications built with Flutter framework, demonstrating cross-platform development skills for iOS and Android. Features modern UI/UX design patterns and native performance.',
        image: vpn,
        git:'https://github.com/tiwa-codes/flutter-projects',
        technologies:['Flutter', 'Dart', 'Mobile Development', 'C++']
    },
    {
        title:'Data Couture',
        description:'An innovative fashion art installation project exploring the intersection of data privacy and creative expression. This project combines technology with artistic representation to raise awareness about digital privacy.',
        image: copeople,
        git:'https://github.com/tiwa-codes/Data-Couture',
        technologies:['Data Privacy', 'Art Installation', 'Creative Tech']
    },
    {
        title:'Slot Machine Game',
        description:'Interactive Python betting game featuring a slot machine simulation with multiple betting lines and dynamic prize calculations. Players can deposit funds, place bets, and track their balance in real-time.',
        image: vpn,
        git:'https://github.com/tiwa-codes/Personal-Projects',
        technologies:['Python', 'Game Development', 'CLI']
    },
    {
        title:'Node.js Web Application',
        description:'Full-stack web application built with Node.js and EJS templating engine. Features dynamic content rendering, server-side logic, and modern web development practices.',
        image: copeople,
        git:'https://github.com/tiwa-codes/CS',
        technologies:['Node.js', 'EJS', 'Express', 'JavaScript']
    }
]

export default Projects
