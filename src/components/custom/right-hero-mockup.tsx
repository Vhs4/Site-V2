import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const RightHeroMockup = () => {
    return (
        <div className="flex mb-8 xl:mb-0 flex-col gap-[92px] mt-[47px]">
            <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank">
                <Button className="rounded-[46px] max-w-[235.44px] text-[16px] font-normal text-white text-center py-[10px] px-[15px] flex items-center justify-center border border-solid border-[#FFC629] bg-[#161617a1]">
                    Começe sua transformação
                    <Image
                        src="/images/seta-amarela-esquerda.svg"
                        alt="arrow right"
                        width={9}
                        height={9}
                    />
                </Button>
            </Link>
            <h3 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-medium">Transforme<br /> sua ideia em<br /> impacto.</h3>
        </div>
    );
};

export default RightHeroMockup;