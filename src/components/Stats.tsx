const Stats = () => {
    return (
        <section className="glass backdrop-blur-md text-white py-16 px-[10%] flex flex-wrap justify-around gap-12 font-jakarta border-y border-white/5 relative z-10">
            <div className="text-center group">
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 transition-transform group-hover:scale-110 duration-300 text-glow">250+</h3>
                <p className="text-neutral-400 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center group">
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 transition-transform group-hover:scale-110 duration-300 text-glow">100+</h3>
                <p className="text-neutral-400 font-medium">Global Clients</p>
            </div>
            <div className="text-center group">
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 transition-transform group-hover:scale-110 duration-300 text-glow">15+</h3>
                <p className="text-neutral-400 font-medium">Awards Won</p>
            </div>
            <div className="text-center group">
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 transition-transform group-hover:scale-110 duration-300 text-glow">24/7</h3>
                <p className="text-neutral-400 font-medium">Expert Support</p>
            </div>
        </section>
    );
};

export default Stats;
