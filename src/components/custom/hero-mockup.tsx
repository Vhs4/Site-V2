import React from "react";
import Image from "next/image";

const HeroMockup = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center sm:mt-[38px]">
            <div className="flex items-center justify-center">
                <div className="absolute inset-0 z-0 flex md:items-center justify-center">
                    <Image
                        src={"/images/poligonos-hero-mockup.svg"}
                        height={1200}
                        width={1200}
                        alt="Polígonos"
                        className="object-cover 3xl:w-[1800px] 3xl:h-[1800px]"
                    />
                </div>
                <div className="flex items-center justify-center absolute inset-0 md:hidden">
                    <Image
                        src="/images/celular-hero-mockup.svg"
                        alt="Hero background mobile"
                        width={1000}
                        height={600}
                        className="object-contain object-center"
                        priority
                    />
                </div>
                <div className="absolute inset-0 hidden md:flex  items-center justify-center">
                    <Image
                        src="/images/computador-hero-mockup.svg"
                        alt="Hero background desktop"
                        width={800}
                        height={600}
                        className="object-contain object-center 3xl:w-[1400px] 2xl:h-[800px]"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroMockup;

