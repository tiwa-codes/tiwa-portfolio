import React, { useState } from "react";
import predict from '../assets/predict.png'
import hunt from '../assets/hunt.jpeg'
import slot from '../assets/slot.jpeg'
import flutter from '../assets/flutter.jpeg'
import Footer from './Footer'
import Certificates from './Certificates'
import campusDashboard from '../assets/campus dashboard.png';
import campusTeam from '../assets/campus team.png';
import personalOverview from '../assets/personal overview.png';
import personalSystems from '../assets/personal systems.png';
import metroLogo from '../assets/metroLogo.png';
import metroCards from '../assets/metroCards.png';
import metroLetterhead from '../assets/metroLetterhead.png';
import metroProfileCover from '../assets/metroProfileCover.png';
import metroIdentity from '../assets/metroIdentity.png';
import afostone from '../assets/afostone14.png';

const ScreenshotShowcase = ({ sections = [], onOpen }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    if (!sections.length) return null;

    const goPrev = () =>
        setActiveIndex((idx) => (idx === 0 ? sections.length - 1 : idx - 1));

    const goNext = () =>
        setActiveIndex((idx) => (idx === sections.length - 1 ? 0 : idx + 1));

    const current = sections[activeIndex];
    const isLink = Boolean(current.external);
    const Wrapper = isLink ? 'a' : 'button';

    const handleClick = () => {
        if (isLink) {
            window.open(current.external, '_blank', 'noopener,noreferrer');
        } else if (onOpen) {
            onOpen(current);
        }
    };

    return (
        <div className="mt-4">
            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                <Wrapper
                    type={isLink ? undefined : "button"}
                    href={isLink ? current.external : undefined}
                    target={isLink ? '_blank' : undefined}
                    rel={isLink ? 'noopener noreferrer' : undefined}
                    onClick={!isLink ? handleClick : undefined}
                    className="block"
                >
                    <div className="relative">
                        <img
                            src={current.image}
                            alt={current.title}
                            className="h-64 w-full object-cover"
                        />
                        {isLink && (
                            <span className="absolute bottom-4 right-4 rounded-full bg-emerald-400/90 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                                Click to view
                            </span>
                        )}
                    </div>
                    <div className="p-4 text-left">
                        <h4 className="text-lg font-semibold text-white">{current.title}</h4>
                        <p className="text-sm text-slate-300">{current.caption}</p>
                    </div>
                </Wrapper>

                {sections.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {sections.length > 1 && (
                <div className="mt-3 flex justify-center gap-2">
                    {sections.map((section, idx) => (
                        <button
                            key={`${section.title}-${idx}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2 w-8 rounded-full transition ${
                                idx === activeIndex
                                    ? 'bg-emerald-400'
                                    : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                            aria-label={`Show ${section.title}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const CaseStudyDetails = ({ meta }) => (
    <div className="mt-4 space-y-3 rounded-lg border border-slate-700 bg-slate-900 p-4">
        {meta.duration && (
            <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Duration:</span> {meta.duration}
            </p>
        )}
        {meta.objective && (
            <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Objective:</span> {meta.objective}
            </p>
        )}
        {meta.role && (
            <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Role:</span> {meta.role}
            </p>
        )}
        {meta.tools?.length ? (
            <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Tools:</span> {meta.tools.join(', ')}
            </p>
        ) : null}
        {meta.deliverables?.length ? (
            <div>
                <p className="text-sm font-semibold text-white">Deliverables:</p>
                <ul className="ml-4 list-disc text-sm text-slate-300">
                    {meta.deliverables.map((item, idx) => (
                        <li key={`${item}-${idx}`}>{item}</li>
                    ))}
                </ul>
            </div>
        ) : null}
        {meta.outcome && (
            <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Outcome:</span> {meta.outcome}
            </p>
        )}
    </div>
);

const ProjectCard = ({ image, title, description, git, external, technologies, sections, meta, onOpenSection }) => (
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
        {meta ? <CaseStudyDetails meta={meta} /> : null}
        {sections?.length ? <ScreenshotShowcase sections={sections} onOpen={onOpenSection} /> : null}
        <div className='m-2 sm:m-4 lg:m-6 flex justify-between gap-2'>
            <div className='flex flex-wrap gap-2 pl-2'>
                {technologies.map((tag, index) => (
                    <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>#{tag}</p>
                ))}
            </div>
            <div className="flex gap-2">
                {git && (
                    <a href={git} target="_blank" rel="noopener noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">
                        GitHub
                    </a>
                )}
                {external && (
                    <a href={external} target="_blank" rel="noopener noreferrer" className="text-emerald-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-yellow-400 duration-300">
                        View
                    </a>
                )}
            </div>
        </div>
    </div>
);
  
const developmentProjects = [
    {
        title: 'COVID-19 Prediction Model',
        description: 'Advanced predictive modeling project using machine learning to forecast COVID-19 trends and provide actionable insights for public health decisions. Includes data preprocessing, feature engineering, and model evaluation with visualization tools.',
        image: predict,
        git: 'https://github.com/tiwa-codes/Capstone-Project',
        technologies: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Data Science']
    },
    {
        title: 'Job Hunt Platform',
        description: 'A comprehensive job hunting website featuring job listings, candidate profiles, employer dashboards, and advanced search functionality. Includes user authentication, job posting capabilities, and responsive design.',
        image: hunt,
        git: 'https://github.com/tiwa-codes/job-hunt',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design']
    },
    {
        title: 'Flutter Mobile Projects',
        description: 'Collection of mobile applications built with Flutter framework, demonstrating cross-platform development skills for iOS and Android. Features modern UI/UX design patterns and native performance.',
        image: flutter,
        git: 'https://github.com/tiwa-codes/flutter-projects',
        technologies: ['Flutter', 'Dart', 'Mobile Development', 'C++']
    },
    {
        title: 'Slot Machine Game',
        description: 'Interactive Python betting game featuring a slot machine simulation with multiple betting lines and dynamic prize calculations. Players can deposit funds, place bets, and track their balance in real-time.',
        image: slot,
        git: 'https://github.com/tiwa-codes/Personal-Projects',
        technologies: ['Python', 'Game Development', 'CLI']
    },
    {
        title: 'Afostone14 Enterprises Website',
        description: 'Business website showcasing Afostone14 services with inquiry form and responsive layout.',
        image: afostone,
        external: 'https://www.afostone14enterprises.com',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
    }
];

const designProjects = [
    {
        title: 'MetroBuild Brand Identity & Company Profile',
        description: 'Comprehensive brand identity and company profile design for MetroBuild, a real estate development startup. Delivered a cohesive visual system including logo, business cards, letterhead, and a detailed 12-page company profile to support investor relations and marketing efforts.',
        image: metroLogo,
        technologies: ['Brand Identity', 'Canva', 'Print Design'],
        meta: {
            duration: 'Jan – Mar 2024',
            objective: 'Create a cohesive visual identity and investor-ready profile.',
            role: 'Brand designer & layout lead',
            tools: ['Canva', 'Photoshop', 'Google Fonts'],
            deliverables: [
                'Logo system & color palette',
                'Business cards',
                'Letterhead',
                '12-page company profile'
            ],
            outcome: 'Enabled the team to send a polished partner pack with consistent visuals.'
        },
        sections: [
            {
                title: 'Logo System',
                caption: 'Primary + alternate lockups defined for digital and print.',
                image: metroLogo,
                external: 'https://drive.google.com/file/d/1LGszE9P7sYL9Fw3DaLLIwgyJa0kQBi0X/view?usp=sharing'
            },
            {
                title: 'Business Cards',
                caption: 'Front/back layouts highlighting contact hierarchy.',
                image: metroCards,
                external: 'https://drive.google.com/file/d/1QetyBV9tyzjAMuYogp_-J32YDvdfg61Z/view?usp=sharing'
            },
            {
                title: 'Letterhead',
                caption: 'Grid-based template for proposals and correspondence.',
                image: metroLetterhead,
                external: 'https://drive.google.com/file/d/1B0AaLGREkevw7BANoLMYePSe20G4zF48/view?usp=sharing'
            },
            {
                title: 'Company Profile PDF',
                caption: 'View-only Drive preview of the complete profile.',
                image: metroProfileCover,
                external: 'https://drive.google.com/file/d/1etSOv8-BzChuRyoMCgEoMHD5FOR0vITH/view?usp=sharing'
            },
            {
                title: 'Brand Identity Overview',
                caption: 'Document outlining logo usage, colors, and typography.',
                image: metroIdentity,
                external: 'https://drive.google.com/file/d/1bO8rGh1LcFdxvY8ywJ7FQKV6ex9zr6NX/view?usp=sharing'
            }
        ]
    }
];

const systemsProjects = [
    {
        title: 'Campus Collab HQ',
        description: 'A Notion workspace built to run ambassador programs, events, and team comms with relational databases and automations.',
        image: campusDashboard,
        technologies: ['Notion', 'Operations', 'Automation'],
        sections: [
            {
                title: 'Dashboard Overview',
                caption: 'High-level control center showing team health, active campaigns, and quick links.',
                image: campusDashboard
            },
            {
                title: 'Team & Resource Hub',
                caption: 'Linked databases connect member profiles, events, and resource libraries.',
                image: campusTeam
            }
        ]
    },
    {
        title: 'My Personal OS',
        description: 'Personal productivity system in Notion combining goals, learning roadmap, and weekly planning.',
        image: personalOverview,
        technologies: ['Notion', 'Productivity', 'Systems Design'],
        sections: [
            {
                title: 'Mission Control',
                caption: 'Home dashboard with OKRs, priority tasks, and reflection widgets.',
                image: personalOverview
            },
            {
                title: 'Systems & Routines',
                caption: 'Linked databases for habits, projects, and knowledge base with filtered views.',
                image: personalSystems
            }
        ]
    }
];

const Projects = () => {
    const [activeSection, setActiveSection] = useState(null);
    const closeModal = () => setActiveSection(null);

    return (
        <div className="bg-black">
            <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
                <section id="development">
                    <h2 className="text-3xl font-bold text-white mb-8">Development Projects</h2>
                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {developmentProjects.map((item) => (
                            <ProjectCard key={item.title} {...item} onOpenSection={setActiveSection} />
                        ))}
                    </div>
                </section>

                <section id="design">
                    <h2 className="text-3xl font-bold text-white mb-8">Design Case Studies</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {designProjects.map((item) => (
                            <ProjectCard key={item.title} {...item} onOpenSection={setActiveSection} />
                        ))}
                    </div>
                </section>

                <section id="systems">
                    <h2 className="text-3xl font-bold text-white mb-8">Systems & Ops</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {systemsProjects.map((item) => (
                            <ProjectCard key={item.title} {...item} onOpenSection={setActiveSection} />
                        ))}
                    </div>
                </section>
            </div>

            {activeSection && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl rounded-xl bg-slate-900 p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-4 top-4 text-2xl text-white hover:text-emerald-400"
                            aria-label="Close preview"
                        >
                            ✕
                        </button>
                        <img
                            src={activeSection.image}
                            alt={activeSection.title}
                            className="w-full rounded-lg object-contain"
                        />
                        <div className="mt-3 text-white">
                            <h4 className="text-xl font-semibold">{activeSection.title}</h4>
                            {activeSection.caption && (
                                <p className="text-sm text-slate-300">{activeSection.caption}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Certificates />
            <Footer />
        </div>
    );
};

export default Projects;
