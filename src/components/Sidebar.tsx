import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onCollapse }: { onCollapse: (collapsed: boolean) => void }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);

    const toggleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        onCollapse(newState);
    };

    return (
        <>
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="fixed top-5 left-5 z-[2000] md:hidden bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/20"
            >
                <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <aside
                className={`fixed top-0 left-0 h-screen bg-dark text-white z-[1500] transition-all duration-300 ease-in-out font-jakarta flex flex-col
          ${isCollapsed ? 'md:w-20' : 'md:w-72'} 
          ${isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'}
        `}
            >
                <div className={`p-8 mb-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isCollapsed && (
                        <Link to="/" className="text-2xl font-extrabold text-white no-underline">
                            Nex<span className="text-accent">Gen</span>
                        </Link>
                    )}
                    {isCollapsed && (
                        <Link to="/" className="text-2xl font-extrabold text-accent no-underline">N</Link>
                    )}
                    <button
                        onClick={toggleCollapse}
                        className="hidden md:flex text-slate-400 hover:text-white transition-colors p-2"
                    >
                        <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                    </button>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    <Link
                        to="/"
                        className={`flex items-center gap-4 p-4 rounded-2xl no-underline transition-all group
              ${isActive('/') ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
            `}
                    >
                        <i className={`fas fa-home text-lg ${isCollapsed ? 'mx-auto' : ''}`}></i>
                        {!isCollapsed && <span className="font-semibold">Home</span>}
                    </Link>

                    <Link
                        to="/about"
                        className={`flex items-center gap-4 p-4 rounded-2xl no-underline transition-all group
              ${isActive('/about') ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
            `}
                    >
                        <i className={`fas fa-info-circle text-lg ${isCollapsed ? 'mx-auto' : ''}`}></i>
                        {!isCollapsed && <span className="font-semibold">About</span>}
                    </Link>

                    <Link
                        to="/portfolio"
                        className={`flex items-center gap-4 p-4 rounded-2xl no-underline transition-all group
              ${isActive('/portfolio') ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
            `}
                    >
                        <i className={`fas fa-briefcase text-lg ${isCollapsed ? 'mx-auto' : ''}`}></i>
                        {!isCollapsed && <span className="font-semibold">Portfolio</span>}
                    </Link>
                </nav>

                <div className="p-4">
                    <button className={`bg-accent text-white font-bold rounded-2xl transition-all hover:bg-blue-400 w-full flex items-center justify-center gap-3
            ${isCollapsed ? 'p-4' : 'px-6 py-4'}
          `}>
                        <i className="fas fa-headset text-lg"></i>
                        {!isCollapsed && <span>Get Consultation</span>}
                    </button>
                </div>
            </aside>

            {isMobileOpen && (
                <div
                    onClick={() => setIsMobileOpen(false)}
                    className="fixed inset-0 bg-black/50 z-[1400] md:hidden backdrop-blur-sm"
                ></div>
            )}
        </>
    );
};

export default Sidebar;
