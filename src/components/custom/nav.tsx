"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import HamburgerIcon from "./hamburguer-icon";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navButtons = [
        { href: "#inicio", label: "Início" },
        { href: "#servicos", label: "Nossos Serviços" },
        { href: "#solucoes", label: "Nossas Soluções" },
        { href: "#contato", label: "Contato" },
        // { href: "#", label: "Trabalhe conosco" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative px-4 2md:px-[5.625rem] pt-4 2md:pt-[3.25rem] pb-4 2md:pb-[37px] max-w-full">
            <div className="flex items-center justify-between">
                <div>
                    <Image
                        src="/images/logo-amarela-letras.svg"
                        alt="Draggax logo amarela com letras"
                        width={145.015}
                        height={44}
                    />
                </div>
                <div className="hidden 2md:block">
                    <ul className="flex w-full space-x-[9px]">
                        {navButtons.map((button, index) => (
                            <li key={index}>
                                <Button className="rounded-[24px] px-[31px] py-[9px] text-[14px] font-normal text-[#D2D2D2] hover:opacity-80">
                                    <Link href={button.href}>{button.label}</Link>
                                </Button>
                            </li>
                        ))}
                        <Button className="rounded-[24px] px-[31px] py-[9px] text-[14px] font-normal text-[#D2D2D2] hover:opacity-80">
                            <Link href={"https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista."} target="_blank">Falar com especialista</Link>
                            <Image
                                src="/images/agenda.svg"
                                alt="arrow down"
                                width={26}
                                height={26}
                            />
                        </Button>
                    </ul>
                </div>
                <div className="2md:hidden">
                    <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#FFC629] z-50 2md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navButtons.map((button, index) => (
                            <li key={index}>
                                <Button className="rounded-[24px] px-[31px] py-[9px] text-[14px] font-normal text-[#D2D2D2] hover:opacity-80">
                                    <Link href={button.href}>{button.label}</Link>
                                </Button>
                            </li>
                        ))}
                        <Button className="rounded-[24px] px-[31px] py-[9px] text-[14px] font-normal text-[#D2D2D2] hover:opacity-80">
                            <Link href={"https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista."} target="_blank">Falar com especialista</Link>
                            <Image
                                src="/images/agenda.svg"
                                alt="arrow down"
                                width={26}
                                height={26}
                            />
                        </Button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;

