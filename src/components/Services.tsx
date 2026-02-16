const Services = () => {
    return (
        <section id="services" className="py-24 px-[10%] text-center font-jakarta relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Our <span className="text-primary text-glow">Specializations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="p-10 glass rounded-[2.5rem] hover:-translate-y-2 hover:bg-white/5 group text-left">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20">
                        <i className="fas fa-code text-2xl text-primary group-hover:text-black transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                    <p className="text-neutral-400 leading-relaxed">Full-stack React & Node.js solutions built for scalability and performance.</p>
                </div>
                <div className="p-10 glass rounded-[2.5rem] hover:-translate-y-2 hover:bg-white/5 group text-left">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20">
                        <i className="fas fa-gamepad text-2xl text-primary group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Game Engine Dev</h3>
                    <p className="text-neutral-400 leading-relaxed">Physics-based 2D & 3D interactive gaming experiences for all platforms.</p>
                </div>
                <div className="p-10 glass rounded-[2.5rem] hover:-translate-y-2 hover:bg-white/5 group text-left">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20">
                        <i className="fas fa-chart-line text-2xl text-primary group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">ERP & CRM Systems</h3>
                    <p className="text-neutral-400 leading-relaxed">Enterprise Resource Planning tools optimized for business automation.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
