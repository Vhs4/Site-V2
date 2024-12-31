import AboutSection from "@/components/custom/about-section";
import Experts from "@/components/custom/experts";
import Footer from "@/components/custom/footer";
import Inovacao from "@/components/custom/inovacao";
import ServicesSection from "@/components/custom/services-section";
import SolutionsSection from "@/components/custom/solutions-section";

export default function Home() {
  return (
    <>
      <Inovacao />
      <div className="max-w-full flex justify-center">
        <ServicesSection />
      </div>
      <div className="max-w-full flex justify-center">
        <AboutSection />
      </div>
      <div className="max-w-full flex justify-center">
        <Experts />
      </div>
      <div className="max-w-full flex justify-center">
        <SolutionsSection />
      </div>
      <Footer />
    </>
  );
}
