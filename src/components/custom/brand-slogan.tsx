import React from "react";

const BrandSlogan = ({ texto }: ({ texto?: string })) => {
    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="bg-brand-slogan bg-clip-text inline-block animate-brand-slogan">
                <h1 className="uppercase text-[91.826px] text-transparent">
                    {texto || "Inovação estratégica para o seu negócio"}
                </h1>
            </div>
        </div>
    );
};

export default BrandSlogan;