"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavigationItem {
    label: string;
    href: string;
    isBold?: boolean;
}

interface ContactInfo {
    title: string;
    value: string;
    type: "email" | "tel" | "normal";
}

const navigationItems: NavigationItem[] = [
    { label: "Home", href: "#inicio", isBold: true },
    { label: "Nossas Soluções", href: "#solucoes" },
    { label: "Contato", href: "#contato" },
    { label: "Falar com Especialista", href: "https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista." }
];

const contactInfo: ContactInfo[] = [
    { title: "entre em contato", value: "+55 11 94163 6176", type: "tel" },
    { title: "Email", value: "contact@draggax.com", type: "email" },
    { title: "Atendimento", value: "Segunda à Sexta - 08:00 - 17:00", type: "normal" },
    { title: "Atendimento aos sábados", value: "Sábado - 08:00 - 12:00", type: "normal" }
];

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log("Email submitted:", email);
            setEmail("");
        }
    };

    return (
        <footer className="flex flex-col rounded-none">
            <div className="flex flex-col justify-center items-center px-20 py-24 w-full bg-[#161617] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                        <div className="flex flex-col text-white max-md:max-w-full">
                            <h2 className="self-start text-4xl font-medium tracking-tighter leading-10">
                                Você tem
                                <br />
                                alguma pergunta?
                            </h2>
                            <p className="mt-5 text-base leading-snug max-md:max-w-full">
                                Sinta-se à vontade para nos enviar suas dúvidas ou solicitar uma
                                consulta gratuita.
                            </p>
                        </div>
                        <div className="w-full flex justify-end">
                            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-5 self-end mt-20 text-sm max-md:mt-10">
                                <label htmlFor="emailInput" className="sr-only">Digite seu melhor e-mail</label>
                                <input
                                    type="email"
                                    id="emailInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-auto gap-2.5 self-stretch px-5 py-4 text-white rounded-lg border border-white border-solid min-h-[46px] bg-transparent"
                                    placeholder="Digite seu melhor e-mail"
                                    aria-label="Digite seu melhor e-mail"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="gap-2.5 self-stretch px-5 py-4 font-bold bg-white rounded-md text-[#161617] hover:bg-gray-100 transition-colors"
                                >
                                    Iniciar Jornada
                                </button>
                            </form>
                        </div>
                    </div>

                    <Image
                        src={"/images/logo-amarela-letras.svg"}
                        alt="Draggax logo amarela com letras"
                        width={145.015}
                        height={44}
                        className="mt-[65px] mb-[29px]"
                    />
                    <div className="flex shrink-0 w-full h-px bg-white max-md:mt-10 max-md:mr-1" />
                    <div className="flex gap-2 self-start mt-4 text-sm font-medium leading-snug text-white">
                        <Link href="#" className="grow hover:underline">
                            Política e Privacidade
                        </Link>
                        <Image
                            loading="lazy"
                            src="/images/img1footer.svg"
                            className="object-contain shrink-0 my-auto w-2 aspect-square"
                            alt=""
                            width={8}
                            height={8}
                        />
                    </div>
                    <nav className="flex flex-wrap gap-10 items-start self-start mt-16 text-xs text-white max-md:mt-10 max-md:max-w-full">
                        {navigationItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`hover:underline ${item.isBold ? "font-bold" : ""}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-wrap gap-5 justify-between mt-20 font-medium leading-snug text-white max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
                        <div className="flex flex-col items-start">
                            {contactInfo.slice(0, 2).map((info, index) => (
                                <div key={index} className="flex flex-col mb-12">
                                    <div className="text-xs tracking-wide uppercase">
                                        {info.title}
                                    </div>
                                    <Link
                                        href={info.type.toLowerCase() === "email" && `mailto:${info.value}` || info.type.toLowerCase() === "tel" && `tel:${info.value}` || `${info.value}`}
                                        className={`mt-3 text-sm ${index === 0 ? "" : "self-stretch"}`}
                                    >
                                        {info.value}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="flex flex-col self-start whitespace-nowrap">
                                <p className="text-xs tracking-wide uppercase">
                                    {contactInfo[2].title}
                                </p>
                                <p className="mt-2 text-sm">{contactInfo[2].value}<br />{contactInfo[3].value}</p>
                            </div>
                            <p className="self-end mt-20 text-xs text-right max-md:mt-10 text-white opacity-50 font-medium">
                                © {new Date().getFullYear()} — Todos os Direitos Reservados para Draggax
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between mt-20 w-full text-xl tracking-normal leading-7 text-white max-md:mt-10 max-md:max-w-full">
                        <h4>Explore nossas soluções.</h4>
                        <Link
                            href={"#inicio"}
                        >
                            <Image
                                loading="lazy"
                                src="/images/img2footer.svg"
                                className="object-contain shrink-0 my-auto aspect-square w-[17px]"
                                alt="Seta para cima"
                                width={17}
                                height={17}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;