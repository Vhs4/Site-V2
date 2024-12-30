import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-full mt-[150px] mb-[92px]">
            <div className="z-10 w-full max-md:max-w-full px-12 flex items-center md:justify-start md:items-start justify-center md:px-[100px] lg:px-[300px]">
                <div className="w-full flex justify-between items-center gap-5">
                    <h2 className="text-[#161617] text-2xl md:text-3xl 2xl:text-6xl font-medium">
                        Soluções tecnológicas feita para<br /> crescer com seu negócio.
                    </h2>
                    <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20obter%20mais%20informações%20dos%20seus%20serviços." target="_blank">
                        <button className="flex items-center rounded-[40px] bg-white text-[#161617] text-[16px] border border-solid border-[#161617] py-[20px] px-[30px] gap-[10px]">
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
        </div>
    );
};

export default AboutSection;