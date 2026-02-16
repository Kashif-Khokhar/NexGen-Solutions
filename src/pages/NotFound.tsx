import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 font-jakarta relative z-10">
            <h1 className="text-9xl font-extrabold text-primary opacity-20 absolute select-none">404</h1>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Lost in Digital <span className="text-primary text-glow">Space?</span></h2>
                <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
                    The page you are looking for has been moved or doesn't exist in our current architecture.
                </p>
                <Link
                    to="/"
                    className="bg-primary text-black px-10 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30 inline-block"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
