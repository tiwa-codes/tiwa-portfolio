import React from "react";

const CertificateCard = ({ title, issuer, date, link }) => (
    <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow p-4">
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-sm text-gray-300">{issuer} • {date}</p>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-400 underline"
            >
                View
            </a>
        )}
    </div>
);

const Certificates = () => (
    <section className="w-full bg-black py-8">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                Certificates
            </h3>
            <div className="flex flex-wrap gap-6">
                {certificates.map((c, i) => (
                    <CertificateCard key={i} {...c} />
                ))}
            </div>
        </div>
    </section>
);

export const certificates = [
    {
        title: "Frontend Development",
        issuer: "FreeCodeCamp",
        date: "Mar 2024",
        link: "https://www.freecodecamp.org/certification/your-username/frontend"
    },
    {
        title: "React - The Complete Guide",
        issuer: "Udemy",
        date: "Jul 2023",
        link: "https://www.udemy.com/certificate/your-certificate-id"
    }
];

export default Certificates;