import samfashLogo from './samfash.jpg';
import cavicLogo from './cavic.png';
import campusLogo from './campus.jpg';
import naptinLogo from './naptin.png';
import predict from './assets/predict.png';
import hunt from './assets/hunt.jpeg';
import slot from './assets/slot.jpeg';
import flutter from './assets/flutter.jpeg';
import bibleSearch from './assets/bible-search.png';
import citizenFeedback from './assets/citizen-feedback.png';
import educationEda from './assets/education-eda.png';
import healthDqa from './assets/health-dqa.png';
import ntal from './assets/ntal.png';
import afostone from './assets/afostone14.png';


export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Data  Scientist",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Tiwalola';

export const experiences = [
    {
        'company': 'Samfash Investment and Printing Service ltd',
        'role': 'Web Developer',
        'duration': 'Jan 2024 - May 2024',
        'logo': samfashLogo,
        'points': [
            'Designed and developed the company’s website, establishing its online presence and optimizing for enhanced user experience.',
            'Led digital marketing efforts, including SEO optimization and Google Analytics setup, increasing website traffic and online visibility.',
            'Managed social media accounts, creating engaging content to attract and retain customers.📈.',
            'Provided administrative support by handling front desk operations, updating company records, and performing data entry tasks ⚙️',
            'Assisted in secretarial duties including scheduling documentation and client communication.'
        ],
        'url': 'https://samfashprintings.com/#home',
    },
    {
        'company': 'Creative Arts and Visual Imagery Center',
        'role': 'Web Developer & Digital Content Manager',
        'duration': 'May 2023 - October 2024',
        'logo': cavicLogo,
        'points': [
            'Spearheaded the development and maintenance of CAVIC’s website, ensuring seamless user experience and accessibility.',
            'Led a top-five finalist team in an art and technology exhibition, managing the entire incubation process, exhibition setup, and final presentation📱',
            'Single-handedly coordinated exhibition logistics, including website development, space arrangement, and project pitching.',
            'Designed and produced engaging visual content, including videos and graphics, for CAVIC’s social media platforms to enhance visibility and audience engagement.',
            'Created and managed the CAVIC festival website, ensuring it was user-friendly and visually stunning digital content, enhancing the overall aesthetic of the CAVIC festival website.',
            'Served as the personal assistant to the director, supporting administrative tasks, scheduling, and event coordination.'
        ],
        'url': 'https://www.cavicng.africa/',
    },
    {
        'company': 'Campus Collab',
        'role': 'Founder & Community Manager',
        'duration': 'September 2023 - Present',
        'logo': campusLogo,
        'points': [
            'Established and grew a thriving Discord community for Nigerian students in tech, business, arts, and design, fostering knowledge sharing and networking',
            'Developed and implemented comprehensive brand guidelines, ensuring consistency across all platforms.',
            'Created and managed social media channels, driving engagement and expanding the community’s reach.📈.',
            'Recruited and coordinated campus ambassadors across multiple schools, strengthening community presence and student participation.⚙️',
            'Designed structured career roadmaps and resources to support members in their professional development.'
        ],
        'url': 'https://campscolab.com/#home',
    },
    {
        'company': 'National Power Training Institute of Nigeria (NAPTIN)',
        'role': 'IT Support & Administrative Assistant',
        'duration': 'May 2022 – November 2022',
        'logo': naptinLogo,
        'points': [
            'Provided IT support to staff, troubleshooting hardware and software issues, and ensuring smooth operation of the institute’s systems.',
            'Assisted in the development and implementation of the institute’s website, enhancing its functionality and user experience.',
            'Managed the institute’s social media accounts, creating and scheduling engaging content to attract and retain followers.📱.',
            'Performed data entry and updated company records, ensuring accuracy and organization of information.',
            'Supported administrative tasks, including scheduling, documentation, and client communication.',
            'Monitored and maintained the company’s internet connectivity, diagnosing and resolving network issues.'
        ],
        'url': 'https://www.naptin.gov.ng/',
    },
];

export const EMAIL_JS_SERVICE_ID = 'service_r44crb8';
export const EMAIL_JS_TEMPLATE_ID = 'template_ipjbdgr';
export const EMAIL_JS_PUBLIC_KEY = 'C-GLd-pHSRJBa0oZb';

// Project data with extended information for modal display
export const projects = [
    {
        id: 'health-dqa',
        title: 'Health Data Quality Pipeline',
        description: 'Comprehensive DQA pipeline for routine health facility reports in Nigeria. Implements automated quality checks, scoring, and interactive visualization for immunization, ANC, deliveries, and OPD services with Streamlit dashboard.',
        image: healthDqa,
        screenshots: [healthDqa],
        technologies: ['Python', 'Data Quality', 'Streamlit', 'Healthcare Analytics'],
        repoLink: 'https://github.com/tiwa-codes/health-dqa-pipeline',
        demoLink: null,
    },
    {
        id: 'education-eda',
        title: 'Education Outcomes Analysis',
        description: 'End-to-end data science project examining factors associated with basic literacy outcomes across Nigerian states. Features exploratory analysis, statistical modeling, and interactive dashboard with state/sex/location filters.',
        image: educationEda,
        screenshots: [educationEda],
        technologies: ['Python', 'Data Science', 'Jupyter Notebook', 'Streamlit'],
        repoLink: 'https://github.com/tiwa-codes/education-outcomes-eda',
        demoLink: null,
    },
    {
        id: 'citizen-feedback',
        title: 'Citizen Feedback Text Analysis',
        description: 'Complete text analytics project analyzing citizen feedback about public services in Nigeria. Implements sentiment analysis, topic modeling (LDA/NMF), and interactive dashboards with comprehensive data quality checks.',
        image: citizenFeedback,
        screenshots: [citizenFeedback],
        technologies: ['Python', 'NLP', 'Text Analytics', 'Machine Learning'],
        repoLink: 'https://github.com/tiwa-codes/citizen-feedback-text-analysis',
        demoLink: null,
    },
    {
        id: 'ntal',
        title: 'NTAL Telehealth MVP',
        description: 'Inclusive, safe telehealth platform via USSD/SMS/WhatsApp and offline-first CHW app. Features store-and-forward triage, provider dashboard, JWT authentication, PWA support, and multi-channel access with FHIR-based clinical data.',
        image: ntal,
        screenshots: [ntal],
        technologies: ['TypeScript', 'React', 'Python', 'FastAPI', 'Healthcare'],
        repoLink: 'https://github.com/tiwa-codes/NTAL',
        demoLink: null,
    },
    {
        id: 'bible-search',
        title: 'Bible Search Application',
        description: 'Scripture search tool for finding and exploring Bible verses with advanced search capabilities and reference management.',
        image: bibleSearch,
        screenshots: [bibleSearch],
        technologies: ['Python', 'Search Algorithms', 'API Development'],
        repoLink: 'https://github.com/tiwa-codes/bible-search',
        demoLink: null,
    },
    {
        id: 'covid-predict',
        title: 'COVID-19 Prediction Model',
        description: 'Advanced predictive modeling project using machine learning to forecast COVID-19 trends and provide actionable insights for public health decisions. Includes data preprocessing, feature engineering, and model evaluation with visualization tools.',
        image: predict,
        screenshots: [predict],
        technologies: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Data Science'],
        repoLink: 'https://github.com/tiwa-codes/Capstone-Project',
        demoLink: null,
    },
    {
        id: 'job-hunt',
        title: 'Job Hunt Platform',
        description: 'A comprehensive job hunting website featuring job listings, candidate profiles, employer dashboards, and advanced search functionality. Includes user authentication, job posting capabilities, and responsive design.',
        image: hunt,
        screenshots: [hunt],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
        repoLink: 'https://github.com/tiwa-codes/job-hunt',
        demoLink: null,
    },
    {
        id: 'flutter-projects',
        title: 'Flutter Mobile Projects',
        description: 'Collection of mobile applications built with Flutter framework, demonstrating cross-platform development skills for iOS and Android. Features modern UI/UX design patterns and native performance.',
        image: flutter,
        screenshots: [flutter],
        technologies: ['Flutter', 'Dart', 'Mobile Development', 'C++'],
        repoLink: 'https://github.com/tiwa-codes/flutter-projects',
        demoLink: null,
    },
    {
        id: 'slot-machine',
        title: 'Slot Machine Game',
        description: 'Interactive Python betting game featuring a slot machine simulation with multiple betting lines and dynamic prize calculations. Players can deposit funds, place bets, and track their balance in real-time.',
        image: slot,
        screenshots: [slot],
        technologies: ['Python', 'Game Development', 'CLI'],
        repoLink: 'https://github.com/tiwa-codes/Personal-Projects',
        demoLink: null,
    },
    {
        id: 'afostone14',
        title: 'Afostone14 Enterprises Website',
        description: 'Business website showcasing Afostone14 services with inquiry form and responsive layout.',
        image: afostone,
        screenshots: [afostone],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        repoLink: null,
        demoLink: 'https://www.afostone14enterprises.com',
    },
];