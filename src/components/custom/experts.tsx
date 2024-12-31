import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experts = () => {

    const experts = [
        {
            name: "Victor Hugo",
            image: "/images/victor-hugo-linkedin.jpeg",
            descriptionHtml: "Engenheiro de software Full-Stack e Cloud<br/> Certificado por: AWS, NASA & USP",
            linkedin: "https://www.linkedin.com/in/vhs4"
        },
        {
            name: "Karina Cardoso",
            image: "/images/kai.jpeg",
            descriptionHtml: "Especialista em UI/UX, Design e Produtos<br/> Certificada por: Google & California Institute of Art",
            linkedin: "https://www.linkedin.com/in/vhs4"
        },
        {
            name: "Giovana Lopes",
            image: "/images/giovana-lopes.jpeg",
            descriptionHtml: "Analista de negócios e especialista em UX, cursando MBA em Negócios digitais na USP<br/> Certificada por: Google, Google Cloud & PWC",
            linkedin: "https://www.linkedin.com/in/giovanalopesux"
        }
    ];

    return (
        <section className="flex flex-col items-center justify-between w-full max-w-full bg-[#161617]" id="especialistas">
            <div className="z-10 w-full max-md:max-w-full px-12 flex flex-col items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px] mb-[114px]">
                <div className="w-full mt-[100px] flex md:justify-between max-w-full gap-5 sm:gap-0 flex-wrap justify-center mb-[107px]">
                    <h3 className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-normal text-white">Nossos<br /> especialistas</h3>
                    <div className="flex flex-col mt-1 gap-12">
                        <p className="text-[#D2D2D2] text-xl mt-[4px]">
                            Do início ao sucesso, refinamos cada etapa da<br /> jornada digital da sua marca, criando um<br /> caminho perfeito para o crescimento.
                        </p>
                        <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista." className="w-fit flex gap-5" target="_blank">
                            <p className="text-xl text-[#D2D2D2] font-semibold">Saiba mais</p>
                            <Image
                                src="/images/seta-branca-esquerda-circular.svg"
                                width={14}
                                height={14}
                                alt="Seta para esquerda"
                            />
                        </Link>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <div className="flex gap-5 flex-wrap justify-center">
                        {experts.map((expert, index) => (
                            <>
                                <div className="flex flex-col gap-[21px]" key={index}>
                                    <Image
                                        src={expert.image}
                                        width={310}
                                        height={310}
                                        alt={`Especialista - ${expert.name}`}
                                        priority
                                        className="max-h-[310px] object-cover"
                                    />
                                    <div className="flex flex-col gap-[10px]">

                                        <p className="text-xl text-white">{expert.name}</p>
                                        <div className="flex gap-2 sm:gap-0 flex-wrap">
                                            <div className="text-[#FFC649] text-sm mr-[23px] text-wrap max-w-[220px]" dangerouslySetInnerHTML={{ __html: expert.descriptionHtml }} />
                                            <Link href={expert.linkedin} target="_blank">
                                                <Image
                                                    src={"/images/seta-amarela-vertical.svg"}
                                                    width={39}
                                                    height={39}
                                                    alt="Seta amarela"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experts;