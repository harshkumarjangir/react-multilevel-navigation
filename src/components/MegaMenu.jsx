import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const MegaMenu = ({ menu }) => {
    const [activeCategory, setActiveCategory] = useState(menu?.[0]);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    if (!menu?.length) return null;

    return (
        <div className="absolute left-0 top-full w-full bg-[#1b2121] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-12 gap-10">

                {/* LEFT STATIC PANEL */}
                <div className="col-span-3">
                    <h2 className="text-2xl font-light mb-6">
                        Perpetually Adaptive Enterprise
                    </h2>
                    <p className="text-gray-400 text-sm leading-6">
                        We help businesses transform and evolve continuously with technology.
                    </p>
                    <div className="mt-8 text-sm font-medium">
                        Adaptability starts here →
                    </div>
                </div>

                {/* MIDDLE MENU (Level 2 - Submenu) */}
                <div className="col-span-3 border-l border-white/10">
                    {menu.map(item => (
                        <button
                            key={item._id}
                            onMouseEnter={() => {
                                setActiveCategory(item);
                                setActiveSubcategory(item.children?.[0] || null);
                            }}
                            className={`w-full flex justify-between items-center px-6 py-4 text-sm transition-colors
                ${activeCategory?._id === item._id
                                    ? "bg-[#2a3030] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item.name}
                            {item.children?.length > 0 && <FiChevronRight />}
                        </button>
                    ))}
                </div>

                {/* MIDDLE-RIGHT PANEL (Level 3 - Subcategories) */}
                <div className="col-span-3 border-l border-white/10 pl-6">
                    {activeCategory?.children?.map(subcategory => (
                        <button
                            key={subcategory._id}
                            onMouseEnter={() => setActiveSubcategory(subcategory)}
                            className={`w-full flex justify-between items-center px-4 py-3 text-sm transition-colors
                ${activeSubcategory?._id === subcategory._id
                                    ? "bg-[#2a3030] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <span className="text-left">{subcategory.name}</span>
                            {subcategory.items?.length > 0 && <FiChevronRight className="ml-2 shrink-0" />}
                        </button>
                    ))}
                </div>

                {/* RIGHT PANEL (Level 4 - Items) */}
                <div className="col-span-3 pl-6">
                    {activeSubcategory?.items?.length > 0 && (
                        <ul className="space-y-2">
                            {activeSubcategory.items.map(item => (
                                <li
                                    key={item._id}
                                    className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors py-1"
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
}
export default MegaMenu