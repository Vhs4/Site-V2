import React from "react";
import Image from "next/image";

const HeroMockup = () => {
    return (
        <div className="relative w-full overflow-hidden md:flex items-center justify-center">
            <div className="flex relative flex-col items-center px-20 mt-12 md:mt-0 xl:pb-96 max-w-full rounded-none min-h-[876px] w-[779px] max-md:px-5 max-md:pb-24 ">
                <div className="absolute inset-0 z-0 flex md:items-center justify-center">
                    <Image
                        src={"/images/poligonos-hero-mockup.svg"}
                        fill
                        alt="Polígonos"
                        className="object-cover"
                        priority
                    />
                </div>
                <Image
                    src="/images/celular-hero-mockup.svg"
                    alt="Mockup celular"
                    className="block lg:hidden object-contain absolute inset-0 size-full"
                    fill
                    priority
                />
                <Image
                    src="/images/computador-hero-mockup.svg"
                    alt="Mockup computador"
                    className="object-contain lg:block hidden"
                    fill
                    priority
                />
            </div>
        </div>
    );
};

export default HeroMockup;

