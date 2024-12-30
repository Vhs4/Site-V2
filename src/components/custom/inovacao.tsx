import React from "react";
import Nav from "./nav";
import BrandSlogan from "./brand-slogan";
import HeroMockup from "./hero-mockup";
import RightHeroMockup from "./right-hero-mockup";
import LeftHeroMockup from "./left-hero-mockup";

const Inovacao = () => {
  return (
    <div className="bg-[#161617]">
      <Nav />
      <BrandSlogan />
      <div className="flex flex-col lg:flex-row px-[30px] 2xl:px-[100px] max-w-full">
        <RightHeroMockup />
        <HeroMockup />
        <LeftHeroMockup />
      </div>
    </div>
  );
};

export default Inovacao;
