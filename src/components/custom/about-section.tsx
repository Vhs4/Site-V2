import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-full mt-[150px] mb-[92px]">
            <div className="z-10 w-full max-md:max-w-full px-12 flex items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px] mb-[114px]">
                <div className="w-full flex justify-between items-center gap-5">
                    <h2 className="text-[#161617] text-2xl md:text-3xl 2xl:text-6xl font-medium">
                        Soluções tecnológicas feita para<br /> crescer com seu negócio.
                    </h2>
                    <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20obter%20mais%20informações%20dos%20seus%20serviços." target="_blank">
                        <button className="flex items-center rounded-[40px] bg-white text-[#161617] text-[16px] border border-solid border-[#161617] py-[20px] px-[20px] sm:px-[30px] gap-[10px]">
                            Vamos iniciar
                            <Image src={"/images/seta-preta-vertical.svg"}
                                width={11}
                                height={11}
                                alt="Seta para baixo"
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="z-10 w-full max-md:max-w-full px-12 flex items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px] mb-[114px]">
                <div className="flex gap-[50px] md:gap-[110px] flex-wrap justify-center">
                    <Image src={"/images/about-image.svg"}
                        width={310}
                        height={310}
                        alt="Ilustração de um homem com um notebook"
                        priority
                    />
                    <div className="flex flex-col gap-[49px]">
                        <div className="flex flex-col gap-[27px]">
                            <h3 className="text-[#161617] text-3xl lg:text-5xl font-medium">
                                Sua solução,<br /> nossa inovação.
                            </h3>
                            <p>
                                Transforme a visão do seu projeto em resultados<br /> concretos, ampliando-o com soluções personalizadas,<br /> inovação, criatividade e tecnologia para conectar seu<br /> produto ao usuário certo, na hora certa.
                            </p>
                        </div>
                        <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista." className="w-fit flex gap-4" target="_blank">
                            <p className="text-xl text-[#161617] font-semibold">Fale com nossos especialistas</p>
                            <Image
                                src="/images/seta-preta-esquerda-circular.svg"
                                width={14}
                                height={14}
                                alt="Seta para esquerda"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="z-10 w-full max-md:max-w-full px-12 flex items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px] flex-wrap">
                <div className="w-full flex justify-center w-[1300px]:justify-between flex-wrap gap-10">
                    <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row">
                        <div className="flex flex-col sm:mr-[61px]">
                            <h5 className="text-3xl font-medium text-[#161617]">1M<span className="text-[#ffc629]">+</span></h5>
                            <p className="text-[#161617]">de receita gerada</p>
                        </div>
                        <Image
                            src={"/images/palito-cinza-em-pe.svg"}
                            width={1}
                            height={29}
                            alt="Palito cinza em pé"
                            className="hidden sm:block"
                        />
                        <div className="flex flex-col sm:ml-[61px]">
                            <h5 className="text-3xl font-medium text-[#161617]">100<span className="text-[#ffc629]">+</span></h5>
                            <p className="text-[#161617]">de Clientes Satisfeitos</p>
                        </div>
                    </div>
                    <div className="flex gap-5 max-h-full flex-wrap justify-center">
                        <div className="flex flex-col gap-[18px]">
                            <div className="w-[200px] h-[200px] bg-[#FFC629] max-w-full flex justify-center items-center">
                                <Image src={"/images/computador-about.svg"}
                                    width={60}
                                    height={60}
                                    alt="Ícone de um computador"
                                />
                            </div>
                            <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20saber%20mais%20do%20serviço%20de%20desenvolvimento%20de%20sistemas." className="w-fit flex gap-4" target="_blank">
                                <button className="flex items-center rounded-[40px] w-fit bg-white text-[#161617] text-[16px] border border-solid border-[#161617] py-[10px] px-[20px] gap-[10px] justify-center">
                                    Desenvolvimento
                                    <Image src={"/images/seta-preta-vertical.svg"}
                                        width={11}
                                        height={11}
                                        alt="Seta para baixo"
                                    />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[18px]">
                            <div className="w-[200px] h-[200px] bg-[#FFC629] max-w-full flex justify-center items-center">
                                <Image src={"/images/marketing-about.svg"}
                                    width={70}
                                    height={70}
                                    alt="Ícone de uma boia"
                                />
                            </div>
                            <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20saber%20mais%20do%20serviço%20de%20marketing" className="w-fit flex gap-4" target="_blank">
                                <button className="flex items-center rounded-[40px] w-fit bg-white text-[#161617] text-[16px] border border-solid border-[#161617] py-[10px] px-[20px] gap-[10px] justify-center">
                                    Marketing
                                    <Image src={"/images/seta-preta-vertical.svg"}
                                        width={11}
                                        height={11}
                                        alt="Seta para baixo"
                                    />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[18px]">
                            <div className="w-[200px] h-[200px] bg-[#FFC629] max-w-full flex justify-center items-center">
                                <Image src={"/images/celular-about.svg"}
                                    width={70}
                                    height={75}
                                    alt="Ícone de um celular nas redes sociais"
                                />
                            </div>
                            <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20saber%20mais%20do%20serviço%20de%20transformação%20digitail" className="w-fit flex gap-4" target="_blank">
                                <button className="flex items-center rounded-[40px] w-fit bg-white text-[#161617] text-[16px] border border-solid border-[#161617] py-[10px] px-[20px] gap-[10px] justify-center">
                                    Transformação digital
                                    <Image src={"/images/seta-preta-vertical.svg"}
                                        width={11}
                                        height={11}
                                        alt="Seta para baixo"
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;