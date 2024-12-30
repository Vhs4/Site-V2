import React from "react";

interface HamburgerIconProps {
    isOpen: boolean;
    onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
    return (
        <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <span
                className={`block w-6 h-0.5 bg-[#D2D2D2] transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-[#D2D2D2] transition-all duration-300 ease-out ${isOpen ? "opacity-0" : ""
                    }`}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-[#D2D2D2] transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
            ></span>
        </button>
    );
};

export default HamburgerIcon;

