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
            <div className="z-10 w-full max-md:max-w-full px-12 flex items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px]">
                <div className="flex gap-[50px] md:gap-[110px] flex-wrap justify-center">
                    <Image src={"/images/about-image.svg"}
                        width={310}
                        height={310}
                        alt="Ilustração de um homem com um notebook"
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
        </div>
    );
};

export default AboutSection;