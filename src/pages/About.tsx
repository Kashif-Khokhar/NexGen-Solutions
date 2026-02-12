const About = () => {
    return (
        <div className="pt-32 pb-24 px-[10%] font-jakarta">
            <div className="max-w-4xl mx-auto">
                <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                    Our Story
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-8 tracking-tight">
                    Pioneering the <span className="text-primary">Next Generation</span> of Digital Solutions
                </h1>
                <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed">
                    Founded with a vision to bridge the gap between complex engineering and human-centric design, NexGen Solutions has evolved into Pakistan's leading digital agency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-dark">Our Mission</h3>
                        <p className="text-slate-500 leading-relaxed">
                            To empower businesses globally by architecting high-performance digital ecosystems that drive growth, efficiency, and innovation.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-dark">Our Vision</h3>
                        <p className="text-slate-500 leading-relaxed">
                            To be the global benchmark for technical excellence, where every line of code we write translates into tangible success for our partners.
                        </p>
                    </div>
                </div>

                <div className="bg-dark rounded-[2.5rem] p-12 text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center text-balance">The NexGen Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-accent text-3xl font-bold mb-2">01</div>
                            <h4 className="font-bold mb-2">Excellence</h4>
                            <p className="text-slate-400 text-sm">Never settling for 'good enough'.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-accent text-3xl font-bold mb-2">02</div>
                            <h4 className="font-bold mb-2">Innovation</h4>
                            <p className="text-slate-400 text-sm">Constantly pushing technical boundaries.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-accent text-3xl font-bold mb-2">03</div>
                            <h4 className="font-bold mb-2">Integrity</h4>
                            <p className="text-slate-400 text-sm">Building trust through transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
