import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useNavbar } from "../hooks/useNavbar";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const menu = useNavbar();
    const [active, setActive] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#161c1c] text-white relative z-50">
            <div className="flex items-center justify-between px-10 py-4">
                <h1 className="text-xl font-bold">MetaBlock</h1>

                {/* DESKTOP MENU */}
                <nav className="hidden lg:flex gap-8 text-sm">
                    {menu.length === 0 && (
                        <span className="text-red-400">No Menu Loaded</span>
                    )}

                    {menu.map(item => (
                        <button
                            key={item._id}
                            onMouseEnter={() => setActive(item)}
                            className="flex items-center gap-1 hover:text-white text-gray-300"
                        >
                            {item.title}
                            {item.children?.length > 0 && <FiChevronDown />}
                        </button>
                    ))}
                </nav>

                {/* DESKTOP CTA */}
                <button className="hidden lg:block bg-white text-black px-5 py-2 rounded-md text-sm font-medium">
                    Get a Quote
                </button>

                {/* MOBILE HAMBURGER */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* DESKTOP MEGA MENU */}
            {active && active.children?.length > 0 && (
                <div className="hidden lg:block" onMouseLeave={() => setActive(null)}>
                    <MegaMenu menu={active.children} />
                </div>
            )}

            {/* MOBILE MENU */}
            <MobileMenu
                menu={menu}
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </header>
    );
}
