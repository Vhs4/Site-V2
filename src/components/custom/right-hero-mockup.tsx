import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const RightHeroMockup = () => {
    return (
        <div className="flex mb-8 xl:mb-0 flex-col gap-[92px] mt-[47px]">
            <Button className="rounded-[46px] max-w-[235.44px] text-[16px] font-normal text-white text-center py-[10px] px-[15px] flex items-center justify-center border border-solid border-[#FFC629] bg-[#161617a1]">
                Começe sua transformação
                <Image
                    src="/images/seta-amarela-esquerda.svg"
                    alt="arrow right"
                    width={9}
                    height={9}
                />
            </Button>
            <h3 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-medium">Transforme<br /> sua ideia em<br /> impacto.</h3>
        </div>
    );
};

export default RightHeroMockup;