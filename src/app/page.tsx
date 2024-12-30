import Footer from "@/components/custom/footer";
import Inovacao from "@/components/custom/inovacao";
import ServicesSection from "@/components/custom/services-section";

export default function Home() {
  return (
    <>
      <Inovacao />
      <div className="max-w-full flex justify-center">
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
}
