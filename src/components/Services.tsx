const Services = () => {
    return (
        <section id="services" className="py-24 px-[10%] text-center font-jakarta">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight">
                Our <span className="text-primary">Specializations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="p-10 border border-slate-100 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 bg-white group text-left">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <i className="fas fa-code text-2xl text-primary group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-4">Web Development</h3>
                    <p className="text-slate-500 leading-relaxed">Full-stack React & Node.js solutions built for scalability and performance.</p>
                </div>
                <div className="p-10 border border-slate-100 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 bg-white group text-left">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <i className="fas fa-gamepad text-2xl text-primary group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-4">Game Engine Dev</h3>
                    <p className="text-slate-500 leading-relaxed">Physics-based 2D & 3D interactive gaming experiences for all platforms.</p>
                </div>
                <div className="p-10 border border-slate-100 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 bg-white group text-left">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <i className="fas fa-chart-line text-2xl text-primary group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-4">ERP & CRM Systems</h3>
                    <p className="text-slate-500 leading-relaxed">Enterprise Resource Planning tools optimized for business automation.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
