import React from 'react';
import Footer from './Footer';

// Import images
import healthDqaScore from '../assets/health-dqa-report.png';
import citizenDashboard from '../assets/citizen-feedback-report.png';
import ntalThumbnail from '../assets/ntal-report.png';
import scriptureThumbnail from '../assets/scripture-sync-report.png';

const ReportCard = ({ image, title, description, summary, artifacts, sourceRepo, commitSha, technologies }) => (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span>
            <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
        </span>
        <div className="p-4 sm:p-6">
            <span>
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
            </span>
            <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400 mb-4">{description}</p>
            
            {summary && (
                <div className="mb-4 p-3 bg-slate-800 rounded-lg">
                    <p className="text-sm text-slate-300">{summary}</p>
                </div>
            )}

            {artifacts && artifacts.length > 0 && (
                <div className="mb-4">
                    <p className="text-sm font-semibold text-white mb-2">Key Artifacts:</p>
                    <ul className="space-y-1">
                        {artifacts.map((artifact, idx) => (
                            <li key={idx}>
                                <a 
                                    href={artifact.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-emerald-400 hover:text-emerald-300 underline"
                                >
                                    {artifact.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        <div className='m-2 sm:m-4 lg:m-6 flex justify-between gap-2'>
            <div className='flex flex-wrap gap-2 pl-2'>
                {technologies.map((tag, index) => (
                    <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>#{tag}</p>
                ))}
            </div>
            <div className="flex gap-2">
                {sourceRepo && (
                    <a href={sourceRepo} target="_blank" rel="noopener noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">
                        Source
                    </a>
                )}
            </div>
        </div>
    </div>
);

const reportingProjects = [
    {
        title: 'Health Data Quality Assessment',
        description: 'Comprehensive DQA of Nigeria\'s routine health facility reporting system with automated quality checks and interactive dashboards.',
        image: healthDqaScore,
        summary: 'Analyzed 28,798 reports from 1,200 facilities across 37 states. Achieved 90.2/100 national data quality score with strong performance in completeness (95.9%), consistency (99.1%), and duplicate control (98.1%).',
        artifacts: [
            { name: 'Health DQA Report (PDF)', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/health-dqa-pipeline/health-dqa-report.pdf' },
            { name: 'Health DQA Report (Markdown)', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/health-dqa-pipeline/health-dqa-report.md' },
            { name: 'Visualizations & Figures', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/health-dqa-pipeline/figures' }
        ],
        sourceRepo: 'https://github.com/tiwa-codes/health-dqa-pipeline',
        commitSha: '6ef8d2ec',
        technologies: ['Python', 'Data Quality', 'Healthcare Analytics', 'Reporting']
    },
    {
        title: 'Citizen Feedback Text Analysis',
        description: 'NLP-powered analysis of citizen feedback for service delivery improvement using topic modeling and sentiment analysis.',
        image: citizenDashboard,
        summary: 'Analyzed 100 feedback entries from 34 states using LDA topic modeling. Identified 53% negative sentiment indicating service delivery challenges, with infrastructure/equipment issues dominating (25%).',
        artifacts: [
            { name: 'Citizen Feedback Report (PDF)', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/citizen-feedback-text-analysis/citizen-feedback-report.pdf' },
            { name: 'Citizen Feedback Report (Markdown)', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/citizen-feedback-text-analysis/citizen-feedback-report.md' },
            { name: 'Analysis Visualizations', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/citizen-feedback-text-analysis/figures' }
        ],
        sourceRepo: 'https://github.com/tiwa-codes/citizen-feedback-text-analysis',
        commitSha: '6c00277b',
        technologies: ['Python', 'NLP', 'Text Analytics', 'Sentiment Analysis']
    },
    {
        title: 'NTAL Telehealth Platform',
        description: 'Inclusive telehealth platform via USSD/SMS/WhatsApp with offline-first community health worker app.',
        image: ntalThumbnail,
        summary: 'MVP-ready platform providing multi-channel access (USSD/SMS/WhatsApp) with store-and-forward triage, provider dashboard, and FHIR-based clinical data management.',
        artifacts: [
            { name: 'NTAL Program Brief', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/NTAL/briefs/ntal-brief.md' },
            { name: 'Architecture Diagrams', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/NTAL/figures' }
        ],
        sourceRepo: 'https://github.com/tiwa-codes/NTAL',
        commitSha: 'd9efb69f',
        technologies: ['TypeScript', 'React', 'Python', 'FastAPI', 'Healthcare']
    },
    {
        title: 'Scripture Sync Platform',
        description: 'Faith-tech platform enabling churches to share and synchronize Bible passages during services via real-time updates.',
        image: scriptureThumbnail,
        summary: 'Production-ready platform supporting real-time scripture synchronization, multi-version Bible support, and event management for church services.',
        artifacts: [
            { name: 'Scripture Sync Program Brief', url: 'https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/artifacts/scripture-sync/briefs/scripture-sync-brief.md' },
            { name: 'System Diagrams & Screenshots', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/scripture-sync/figures' }
        ],
        sourceRepo: 'https://github.com/tiwa-codes/scripture-sync',
        commitSha: 'f6c9c931',
        technologies: ['React', 'Python', 'WebSocket', 'Real-time']
    },
    {
        title: 'Education Outcomes Analysis',
        description: 'Data science project examining factors associated with basic literacy outcomes across Nigerian states.',
        image: healthDqaScore, // Using same placeholder; ideally would have education-specific image
        summary: 'End-to-end analysis with exploratory data analysis, statistical modeling, and interactive dashboard featuring state/sex/location filters.',
        artifacts: [
            { name: 'Executive Summaries', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/education-outcomes-eda/summaries' },
            { name: 'Writing Samples', url: 'https://github.com/tiwa-codes/tiwa-portfolio/tree/main/reporting-portfolio/artifacts/education-outcomes-eda/writing-samples' }
        ],
        sourceRepo: 'https://github.com/tiwa-codes/education-outcomes-eda',
        commitSha: '762f0640',
        technologies: ['Python', 'Data Science', 'Statistical Modeling', 'Education']
    }
];

const ReportingPortfolio = () => {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Reporting Portfolio</h1>
                    <p className="text-lg text-gray-300 mb-4">
                        This portfolio consolidates reporting artifacts, documentation, and outputs from various projects. 
                        Each report includes comprehensive analysis, visualizations, and reproducible methodologies.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">Note:</span> All artifacts include full provenance tracking 
                            with source repository links, commit SHAs, and reproduction instructions. Reports are available in both 
                            PDF and Markdown formats.
                        </p>
                    </div>
                </div>

                <section id="reports">
                    <h2 className="text-3xl font-bold text-white mb-8">Project Reports & Artifacts</h2>
                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {reportingProjects.map((item) => (
                            <ReportCard key={item.title} {...item} />
                        ))}
                    </div>
                </section>

                <section id="templates" className="mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8">Templates & Resources</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <a 
                            href="https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/donor-report-template.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 border border-neutral-100 rounded-lg p-6 hover:border-emerald-400 transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-emerald-400 mb-2">Donor Report Template</h3>
                            <p className="text-sm text-gray-300">Reusable template for creating comprehensive donor reports with standardized sections.</p>
                        </a>
                        
                        <a 
                            href="https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/reporting-sop.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 border border-neutral-100 rounded-lg p-6 hover:border-emerald-400 transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-emerald-400 mb-2">Reporting SOP</h3>
                            <p className="text-sm text-gray-300">Standard Operating Procedure for consistent reporting practices across projects.</p>
                        </a>
                        
                        <a 
                            href="https://github.com/tiwa-codes/tiwa-portfolio/blob/main/reporting-portfolio/index.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 border border-neutral-100 rounded-lg p-6 hover:border-emerald-400 transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-emerald-400 mb-2">Full Index</h3>
                            <p className="text-sm text-gray-300">Complete artifact index with detailed provenance tracking and direct links to all reports.</p>
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ReportingPortfolio;
