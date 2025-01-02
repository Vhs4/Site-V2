"use client";

import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const solutions = [
    {
        title: "Desenvolvimento de sites e sistemas",
        description: "Construímos soluções digitais sob medida para impulsionar seu negócio e melhorar a experiência dos usuários.",
        image: "/images/programando-thumb.jpg?height=400&width=600",
    },
    {
        title: "Marketing",
        description: "Criamos estratégias inovadoras de marketing para conectar marcas ao público certo, gerando impacto e resultados.",
        image: "/images/marketing-thumb.jpg?height=400&width=600",
    },
    {
        title: "Design",
        description: "Desenvolvemos soluções visuais que comunicam a essência da sua marca e conectam com seu público-alvo.",
        image: "/images/design-thumb.jpg?height=400&width=600",
    },
];

const SolutionsSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="w-full py-12" id="solucoes">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8 items-start">
                    <div className="space-y-6">
                        <h3 className="text-4xl font-medium text-[#161617]">
                            Nossas<br /> soluções
                        </h3>
                        <div className="flex gap-4">
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => api?.scrollNext()}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {solutions.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`relative w-16 h-16 bg-gray-200 transition-opacity ${current === index ? "opacity-100" : "opacity-50"
                                        }`}
                                >
                                    <Image
                                        src={solutions[index].image}
                                        alt="Imagem da solução"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 flex">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {solutions.map((solution, index) => (
                                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                        <Card className="relative overflow-hidden">
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={solution.image}
                                                    alt="Imagem ilustrativa dos nossos serviços"
                                                    className="w-full h-full object-cover"
                                                    fill
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/40" />
                                            </div>
                                            <CardContent className="relative p-6 pt-48">
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {solution.title}
                                                    </h3>
                                                    <p className="text-gray-200">
                                                        {solution.description}
                                                    </p>
                                                    <Button variant="link" className="text-white border-white hover:bg-white hover:text-gray-900">
                                                        Saiba mais
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
                <div className="flex mt-20 md:mt-[136px] text-[#161617] justify-between flex-wrap">
                    <h3 className="md:text-[64px] md:leading-[75px] text-5xl mr-2">Conecte-se e expanda seu<br /> mercado.</h3>
                    <div className="flex flex-col mt-[10px] w-[1115px]:mt-0">
                        <button className="w-[81px] h-[29px] text-center text-base border border-solid rounded-full border-[#161617] mr-[217px]">Growth</button>
                        <p className="mt-[17px] text-base">
                            Construímos relacionamentos duradouros<br /> com seu público, transformando primeiras<br /> impressões em seguidores fiéis.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 md:mt-20 text-[#161617] justify-between flex-wrap">
                    <div className="flex flex-col">
                        <p className="text-xl">Maximizamos o impacto de cada clique, garantindo que<br /> cada um traga valor, engajamento e crescimento para o<br /> seu negócio.</p>
                        <Link href="https://wa.me/5511941936176?text=Olá,%20vim%20do%20site%20de%20vocês%20e%20gostaria%20de%20falar%20com%20um%20especialista." className="w-fit flex gap-4 mt-12" target="_blank">
                            <p className="text-xl text-[#161617] font-semibold">Fale com nossos especialistas</p>
                            <Image
                                src="/images/seta-preta-esquerda-circular.svg"
                                width={14}
                                height={14}
                                alt="Seta para esquerda"
                                className="mt-[4.5px]"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-between pt-[25px] px-[30px] bg-white w-[420px] max-w-full h-[144px] flex-wrap">
                        <div className="flex flex-col">
                            <p className="text-[12px] leading-[14.06px]">Sucesso do seu negócio:</p>
                            <h4 className="text-4xl mb-[14px] mt-[1px]">89.5%</h4>
                            <p className="text-[12px] leading-[14.06px]">+0.5 da semana passada</p>
                        </div>
                        <ul className="flex flex-col gap-[5px]">
                            <li className="rounded-full text-sm w-fit border border-solid border-[#161617] py-[5px] px-[15px] flex items-center justify-center">
                                Inovação
                            </li>
                            <li className="rounded-full text-sm w-fit border border-solid border-[#161617] py-[5px] px-[15px] flex items-center justify-center">
                                Planejamento
                            </li>
                            <li className="rounded-full text-sm w-fit border border-solid border-[#161617] py-[5px] px-[15px] flex items-center justify-center">
                                Vendas
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
