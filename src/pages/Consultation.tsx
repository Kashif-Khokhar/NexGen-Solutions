import type { FormEvent } from 'react';

const Consultation = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Consultation request received! A NexGen strategist will contact you shortly.");
    };

    return (
        <div className="pt-32 pb-24 px-[10%] font-jakarta relative z-10 min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
                <div className="space-y-8">
                    <div>
                        <span className="bg-yellow-500/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-6">
                            Consultation
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight">
                            Design Your <span className="text-primary text-glow">Digital Future</span>
                        </h1>
                    </div>

                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg">
                        Book a free strategy session with our senior architects. We'll analyze your requirements, identify technical bottlenecks, and map out a path to scalability.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary shrink-0">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Technical Audit</h4>
                                <p className="text-neutral-500 text-sm">Deep dive into your existing stack and architecture.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary shrink-0">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Growth Roadmap</h4>
                                <p className="text-neutral-500 text-sm">Step-by-step plan for development and scaling.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-20 rounded-full"></div>
                    <form className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-6 relative z-10 border-white/10" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Session</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Kashif Ali"
                                    className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary transition-all text-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="contact@example.com"
                                    className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary transition-all text-white"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-neutral-400 ml-1">Project Category</label>
                            <select className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-400 appearance-none">
                                <option className="bg-dark">Web Development</option>
                                <option className="bg-dark">Game Engine Dev</option>
                                <option className="bg-dark">ERP & CRM Systems</option>
                                <option className="bg-dark">Mobile Application</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-neutral-400 ml-1">Project Brief</label>
                            <textarea
                                placeholder="Tell us about your challenges..."
                                rows={4}
                                className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary transition-all text-white resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-black p-5 rounded-2xl font-bold hover:bg-yellow-500 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] mt-2 shadow-lg shadow-black/20"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
