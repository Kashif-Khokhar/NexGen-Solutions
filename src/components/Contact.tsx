import type { FormEvent } from 'react';

const Contact = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Thank you, Kashif Ali! Your enterprise message has been sent.");
    };

    return (
        <section id="contact" className="py-24 px-[10%] bg-slate-50 font-jakarta">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                        Let's Start a <span className="text-primary">Project</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                        Have a vision? We have the engineers. Let's build something extraordinary together.
                    </p>
                    <div className="flex items-center gap-4 text-dark font-semibold group cursor-pointer">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span className="group-hover:text-primary transition-colors">kashif@nexgen.com</span>
                    </div>
                </div>
                <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-black/5 flex flex-col gap-5 border border-slate-100" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-dark ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-dark ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-dark ml-1">Message</label>
                        <textarea
                            placeholder="Tell us about your project"
                            rows={4}
                            className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-dark text-white p-5 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:shadow-lg active:scale-[0.98] mt-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
