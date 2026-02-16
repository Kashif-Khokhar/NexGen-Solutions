import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center text-center px-[10%] font-jakarta relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.1),_transparent)] pointer-events-none"></div>
            <div className="max-w-4xl relative z-10">
                <span className="bg-yellow-500/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                    #1 Software Agency in Pakistan
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white my-6 tracking-tighter leading-tight">
                    Architecting Digital <span className="text-primary text-glow">Success</span>
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-balance">
                    From Enterprise ERPs to High-Performance Games. We build the future of technology with precision and innovation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        to="/portfolio"
                        className="bg-primary text-black px-10 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30 no-underline"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/consultation"
                        className="glass text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all hover:-translate-y-1 no-underline"
                    >
                        Get Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Hero;
