import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface CircleProps {
    className?: string;
}

const Circle: React.FC<CircleProps> = ({ className = "" }) => (
    <div className={`flex shrink-0 bg-amber-400 rounded-full h-[39px] w-[39px] ${className}`} />
);

interface ButtonWithIconProps {
    text: string;
    className?: string;
    onClick?: () => void;
    linkTo?: string;
    linkTarget?: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ text, className = "", onClick, linkTo, linkTarget }) => (

    linkTo ? (
        <Link href={linkTo} target={linkTarget || "_self"}>
            <button className={`flex gap-2.5 justify-center items-center px-5 py-2.5 ${className}`} onClick={onClick}>
                <p className="self-stretch my-auto">{text}</p>
                <Image
                    loading="lazy"
                    src="/images/seta-preta-vertical.svg"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]"
                    alt="Seta preta vertical"
                    width={11}
                    height={11}
                />
            </button>
        </Link>
    ) : (
        <button className={`flex gap-2.5 justify-center items-center px-5 py-2.5 ${className}`} onClick={onClick}>
            <p className="self-stretch my-auto">{text}</p>
            <Image
                loading="lazy"
                src="/images/seta-preta-vertical.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]"
                alt="Seta preta vertical"
                width={11}
                height={11}
            />
        </button>
    )
);

function ServicesSection() {
    const circles = Array(24).fill(null);

    return (
        <div className="flex flex-col items-center justify-center px-[100px] mt-[64px] max-w-full" id="solucoes">
            <div className="z-10 w-full max-md:max-w-full">
                <div className="flex gap-5 md:gap-10 max-md:flex-col">
                    <div className="flex flex-col max-md:w-full items-center md:items-center">
                        <h3 className="text-5xl font-medium text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            Expanda seu alcance<br /> e conquiste novos<br /> mercados
                        </h3>
                    </div>
                    <div className="flex flex-col max-md:w-full items-center md:items-start">
                        <h4 className="text-xl text-neutral-900 max-md:mt-10">
                            Nós moldamos e fortalecemos a identidade<br /> digital da sua marca,
                            garantindo que ela se<br /> destaque e ressoe com o público.
                        </h4>
                    </div>
                    <div className="flex flex-col max-md:w-full">
                        <Link className={"flex gap-2.5 justify-center items-center px-5 py-2.5 text-xl font-semibold text-neutral-900 max-md:mt-10"} href={"#solucoes"}>
                            <p className="self-stretch my-auto">Explore nossas soluções</p>
                            <Image
                                loading="lazy"
                                src="/images/seta-preta-esquerda-circular.svg"
                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[14px]"
                                alt="Seta preta esquerda circular"
                                width={14}
                                height={14}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center mt-24 max-md:mt-10 justify-center max-w-full">
                <div className="flex flex-col self-stretch  rounded-none min-w-[240px] text-neutral-900 w-[420px]">
                    <div className="flex flex-col items-center px-11 py-12 bg-white max-md:px-5">
                        <h4 className="text-4xl font-medium text-center w-[308px]">
                            Branding Full Service
                        </h4>
                        <p className="mt-14 text-sm text-center max-md:mt-10">
                            Fortaleça sua marca com soluções completas de branding, analisando
                            cada detalhe para criar uma identidade única e aumentar o impacto
                            no mercado.
                        </p>
                        <div className="flex relative flex-col items-start self-stretch pt-1.5 pb-36 mt-16 w-full text-base rounded-none aspect-[1.747] max-md:pr-5 max-md:pb-24 max-md:mt-10">
                            <Image
                                loading="lazy"
                                src="/images/grafico-amarelo-lucro.svg"
                                className="object-contain absolute inset-0 size-full"
                                alt="Gráfico de lucro amarelo"
                                width={321}
                                height={107}
                            />
                            <ButtonWithIcon
                                text="Explore nossas Soluções"
                                className="relative px-5 py-2.5 -mb-7 bg-amber-400 rounded-[30px] max-md:mb-2.5"
                                linkTo="#solucoes"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-stretch  rounded-none min-w-[240px] w-[420px]">
                    <div className="px-11 pt-7 pb-16 w-full bg-neutral-900 max-md:px-5">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                                <Image
                                    loading="lazy"
                                    src="/images/calendario-redondo.svg"
                                    className="object-contain shrink-0 mt-1.5 aspect-square w-[53px] max-md:mt-10"
                                    alt="Calendário redondo"
                                    width={53}
                                    height={53}
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                                <div className="flex grow gap-5 font-medium max-md:mt-10">
                                    <h3 className="text-5xl text-amber-400 max-md:text-4xl">
                                        150<span className="text-white">+</span>
                                    </h3>
                                    <p className="self-start mt-5 text-xs text-white">
                                        Conteúdos planejados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex z-10 flex-col px-11 py-14 -mt-11 w-full bg-white max-md:px-5">
                        <ButtonWithIcon
                            text="Talento Criativo com IA"
                            className="self-start border border-solid border-neutral-900 rounded-[30px] text-neutral-900"
                            linkTo="#solucoes"
                        />
                        <div className="flex flex-wrap mt-9">
                            {circles.map((_, index) => (
                                <Circle key={index} className={index >= 8 ? "bg-zinc-100" : ""} />
                            ))}
                        </div>
                        <h5 className="mt-12 text-4xl font-medium text-neutral-900 w-[259px] max-md:mt-10">
                            Marketing de conteúdo
                        </h5>
                    </div>
                </div>
                <div className="flex flex-col self-stretch  min-w-[240px] w-[420px]">
                    <div className="flex flex-col items-start pl-11 pt-9 pb-14 w-full bg-white max-md:px-5">
                        <div className="flex justify-between items-start max-w-full w-full pr-[55px]">
                            <Image
                                loading="lazy"
                                src="/images/calendario-cinza-redondo.svg"
                                className="object-contain shrink-0 aspect-square w-[53px]"
                                alt="Calendário cinza redondo"
                                width={53}
                                height={53}
                            />
                            <Image className="flex shrink-0 mt-2"
                                src="/images/tres-circulos-servicos.svg"
                                alt="Três círculos de serviços"
                                width={123}
                                height={123}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start mt-20 text-sm text-neutral-900 max-md:mt-10">
                            {["PLM Inteligente", "Estratégia de Conversões", "Análise Avançada"].map((text) => (
                                <p key={text} className="gap-2.5 self-stretch px-4 py-1.5 mt-2 first:mt-0 rounded-3xl border border-solid border-neutral-900">
                                    {text}
                                </p>
                            ))}
                        </div>
                        <h4 className="self-stretch mt-8 text-4xl font-medium text-neutral-900">
                            Sistema Gerenciador com Análises Avançadas
                        </h4>
                        <ButtonWithIcon
                            text="Falar com Especialista"
                            className="mt-8 bg-amber-400 text-neutral-900"
                            linkTo="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                            linkTarget="_blank"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;