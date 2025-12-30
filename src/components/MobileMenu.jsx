import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Plus, Minus } from "lucide-react";

const MobileMenu = ({ menu, isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openSubcategory, setOpenSubcategory] = useState(null);
    const [openItems, setOpenItems] = useState({}); // Track which subcategories have items expanded

    const toggleSubmenu = (itemId) => {
        setOpenSubmenu(openSubmenu === itemId ? null : itemId);
        setOpenSubcategory(null); // Close subcategories when switching submenu
        setOpenItems({}); // Close all items
    };

    const toggleSubcategory = (subcategoryId) => {
        setOpenSubcategory(openSubcategory === subcategoryId ? null : subcategoryId);
        setOpenItems({}); // Close all items when switching subcategory
    };

    const toggleItems = (subcategoryId) => {
        setOpenItems(prev => ({
            ...prev,
            [subcategoryId]: !prev[subcategoryId]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 z-50 bg-black/50" onClick={onClose}>
            <div
                className="absolute right-0 top-0 h-full md:w-80 w-full bg-[#1E2222] shadow-xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {/* <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-300 text-2xl"
                    >
                        ×
                    </button>
                </div> */}

                {/* Menu Items */}
                <div className="p-4">
                    {menu.map((item) => (
                        <div key={item._id} className="mb-2">
                            {/* Level 1: Main Menu Item */}
                            <button
                                onClick={() => toggleSubmenu(item._id)}
                                className="w-full flex items-center justify-between p-3 text-white hover:bg-[#1b2121] rounded transition-colors"
                            >
                                <span className="font-medium">{item.title}</span>
                                {item.children?.length > 0 && (
                                    <FiChevronDown
                                        className={`transition-transform ${openSubmenu === item._id ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </button>

                            <hr className="text-gray-600 w-[93%] mx-auto" />

                            {/* Level 2: Submenu Items */}
                            {openSubmenu === item._id && item.children?.length > 0 && (
                                <div className="ml-4 mt-2 space-y-2">
                                    {item.children.map((submenu) => (
                                        <div key={submenu._id}>
                                            <button
                                                onClick={() => toggleSubcategory(submenu._id)}
                                                className="w-full flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-[#1b2121] rounded transition-colors text-sm"
                                            >
                                                <span>{submenu.name}</span>
                                                {submenu.children?.length > 0 && (
                                                    <FiChevronRight
                                                        className={`transition-transform ${openSubcategory === submenu._id ? "rotate-90" : ""
                                                            }`}
                                                    />
                                                )}
                                            </button>

                                            <hr className="text-gray-600 w-[95%] mx-auto" />


                                            {/* Level 3: Subcategories */}
                                            {openSubcategory === submenu._id && submenu.children?.length > 0 && (
                                                <div className="ml-4 mt-2 space-y-2">
                                                    {submenu.children.map((subcategory) => (
                                                        <div key={subcategory._id} className="border-l-2 border-gray-700 pl-3">
                                                            {/* Subcategory Header - Now Clickable */}
                                                            <button
                                                                onClick={() => toggleItems(subcategory._id)}
                                                                className="w-full flex items-center justify-between text-sm text-left font-normal text-white mb-2 hover:text-gray-300 transition-colors"
                                                            >
                                                                <span>{subcategory.name}</span>
                                                                {subcategory.items?.length > 0 && (
                                                                    openItems[subcategory._id] ? (
                                                                        <Minus className="text-xs" />
                                                                    ) : (
                                                                        <Plus className="text-xs" />
                                                                    )
                                                                )}
                                                            </button>

                                                            {/* <hr className="text-gray-600 w-[95%] mx-auto" /> */}


                                                            {/* Level 4: Items - Now Collapsible */}
                                                            {openItems[subcategory._id] && subcategory.items?.length > 0 && (
                                                                <ul className="space-y-1 pl-4">
                                                                    {subcategory.items.map((item) => (
                                                                        <li key={item._id}>
                                                                            <a
                                                                                href={`/${item.slug}`}
                                                                                className="block text-sm text-gray-400 hover:text-white py-1 transition-colors"
                                                                            >
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="p-4 border-t border-white/10">
                    <button className="w-full bg-white text-black px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                        Get a Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
