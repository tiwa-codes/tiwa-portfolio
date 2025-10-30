import React, { useState } from 'react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';

const CertificateCard = ({ cert, onOpen }) => (
    <div className="bg-gray-900 border border-neutral-100 rounded-lg shadow p-3">
        <button onClick={() => onOpen(cert)} className="w-full text-left">
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-2">
                <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                <p className="text-sm text-gray-300">{cert.issuer} • {cert.date}</p>
            </div>
        </button>
    </div>
);

const Certificates = () => {
    const [open, setOpen] = useState(null);

    const certificates = [
        {
            title: 'Frontend Development',
            issuer: 'FreeCodeCamp',
            date: 'Mar 2024',
            image: cert1,
            link: ''
        },
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: 'Jul 2023',
            image: cert2,
            link: ''
        }
    ];

    return (
        <section className="w-full bg-black py-8">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                    Certificates
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certificates.map((c, i) => (
                        <CertificateCard key={i} cert={c} onOpen={setOpen} />
                    ))}
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setOpen(null)}
                >
                    <div className="max-w-3xl w-full">
                        <button
                            onClick={() => setOpen(null)}
                            className="text-white mb-2 float-right text-xl"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <img
                            src={open.image}
                            alt={open.title}
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                        <div className="mt-3 text-white">
                            <h4 className="text-xl font-semibold">{open.title}</h4>
                            <p className="text-sm text-gray-300">{open.issuer} • {open.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;