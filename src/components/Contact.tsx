import type { FormEvent } from 'react';

const Contact = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Thank you! Your enterprise message has been sent to NexGen Solutions.");
    };

    return (
        <section id="contact" className="py-24 px-[10%] font-jakarta relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                <div className="space-y-6">
                    <span className="bg-yellow-500/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                        Ready to Scale?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Let's Start a <span className="text-primary text-glow">Project</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                        Have a vision? We have the engineers. Let's build something extraordinary together.
                    </p>
                    <div className="flex items-center gap-4 text-white font-semibold group cursor-pointer w-fit">
                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span className="group-hover:text-primary transition-colors">contact@nexgen.solutions</span>
                    </div>
                </div>

                <form className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-400 ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-400 ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-400 ml-1">Message</label>
                        <textarea
                            placeholder="Tell us about your project"
                            rows={4}
                            className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-white resize-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-black p-5 rounded-2xl font-bold hover:bg-yellow-500 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] mt-2 shadow-lg shadow-black/20"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
