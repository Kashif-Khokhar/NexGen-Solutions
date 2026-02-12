import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: "EcoStream ERP",
        category: "Enterprise",
        desc: "A comprehensive sustainability-focused ERP system for manufacturing units.",
        image: "fas fa-leaf"
    },
    {
        id: 2,
        title: "Nova Strike",
        category: "Gaming",
        desc: "Competitive multiplayer 2D shooter with high-fidelity physics engine.",
        image: "fas fa-gun"
    },
    {
        id: 3,
        title: "HealthLink CRM",
        category: "Medical",
        desc: "Telemedicine platform connecting 50+ specialized hospitals.",
        image: "fas fa-heartbeat"
    },
    {
        id: 4,
        title: "FinGate 2.0",
        category: "Fintech",
        desc: "Military-grade encrypted payment gateway for high-volume transactions.",
        image: "fas fa-vault"
    },
    {
        id: 5,
        title: "SkyRise Logistics",
        category: "Enterprise",
        desc: "Real-time fleet tracking and optimization platform using AI.",
        image: "fas fa-truck-fast"
    },
    {
        id: 6,
        title: "Vivid Dreams",
        category: "Gaming",
        desc: "Immersive VR experience exploring abstract digital landscapes.",
        image: "fas fa-vr-cardboard"
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Enterprise', 'Gaming', 'Fintech', 'Medical'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-24 px-[10%] font-jakarta">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                    Our Portfolio
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6 tracking-tight">
                    Where Innovation Meets <span className="text-primary">Execution</span>
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Explore our diverse range of engineering marvels, from high-stakes enterprise systems to boundary-pushing gaming experiences.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-full font-bold transition-all ${filter === cat
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-white text-dark border border-slate-200 hover:bg-slate-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div key={project.id} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 group">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                            <i className={`${project.image} text-2xl text-primary group-hover:text-white transition-colors`}></i>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.category}</span>
                        <h3 className="text-2xl font-bold text-dark mt-2 mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
