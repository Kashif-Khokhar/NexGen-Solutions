const Hero = () => {
    return (
        <header id="home" className="h-screen flex items-center justify-center text-center bg-[radial-gradient(circle_at_top_right,_#eff6ff,_#fff)] px-[10%] font-jakarta">
            <div className="max-w-4xl">
                <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    #1 Software Agency in Pakistan
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-dark my-5 tracking-tighter">
                    Architecting Digital <span className="text-primary">Success</span>
                </h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-balance">
                    From Enterprise ERPs to High-Performance Games. We build the future of technology.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
                        View Projects
                    </button>
                    <button className="bg-white text-dark border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all hover:-translate-y-1">
                        Our Story
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
