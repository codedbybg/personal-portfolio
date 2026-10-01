import { useState } from "react";
import {
    Menu,
    X,
    Sun,
    Moon,
    Download,
} from "lucide-react";

import Button from "./common/Button";

function Navbar(){
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [theme , setTheme] = useState("dark");

    const toggleMenu = ()=>{
        setIsMenuOpen((current)=> !current);
    };

    const toggleTheme = ()=>{
        setTheme((currentTheme)=>currentTheme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { name : "About" , href : "#about"},
        { name : "Skills" , href : "#skills"},
        { name : "Projects" , href : "#projects"},
        {name : "Journey" , href : "#journey"},
        {name : "Contact" , href : "#contact"},
    ];

    return(
        <header className="fixed top-0 z-50 w-full">
            <nav className="border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

                    {/* {Logo} */}
                    <a href="#home" className="text-xl font-bold tracking-tight">
                        BG<span className="text-[var(--accent)]">.</span>
                    </a>

                    {/* {Desktop nevigation} */}
                    <div className="hidden items-center gap-8 md:flex">
                        {
                            navLinks.map((link)=>(
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                                >
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>

                    {/* {Desktop Actions} */}
                    <div className="hidden items-center gap-3 md:flex">

                        <button 
                            onClick={toggleTheme}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            aria-label="Toggle theme"
                        >
                            {
                                theme === "dark" ? (
                                    <Sun size={18} />
                                ) : (
                                    <Moon size={18} />
                                )
                            }
                        </button>

                        <Button>
                            <Download size={16} className="mr-2" />
                            Resume
                        </Button>
                    </div>

                    {/* {Mobile Actions} */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
                            aria-label="Toggle theme"
                        >
                            {
                                theme === "dark" ? (
                                    <Sun size={18} />
                                )  : (
                                    <Moon size={18} />
                                )
                            }
                        </button>

                            <button 
                                onClick={toggleMenu}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
                                aria-label="Toggle navigation menu"
                            >
                                { isMenuOpen ? (
                                    <X size={20} />
                                ) : (
                                    <Menu size={20}/>
                                )
                                }

                            </button>
                    </div>
                </div>

                {/* {Mobile menu} */}
                {isMenuOpen && (
                    <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">

                        <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">

                            {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-[var(--border)] py-4 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                            >
                                {link.name}
                            </a>
                            ))}

                            <div className="pt-5">
                                <Button className="w-full">
                                    <Download size={16} className="mr-2" />
                                    Download Resume
                                </Button>
                            </div>

                    </div>

            </div>
        )}
            </nav>
        </header>
    );

}

export default Navbar;