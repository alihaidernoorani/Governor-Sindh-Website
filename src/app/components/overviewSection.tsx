import Image from "next/image"

export default function overviewSection() {
    return (
        <section className="flex flex-col justify-around mt-20">
        
        {/* Generative AI Intro */}
        <h1 className="text-[#044e83] text-xl lg:text-3xl font-extrabold text-center mx-2 md:mx-32 pb-14">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-justify text-normal lg:text-lg leading-7 tracking-widest mx-2 md:mx-32">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
        <div className="flex flex-col justify-around gap-3 lg:flex-row mx-2 md:mx-32">
          <Card src="/images/money.jpg" alt="Representation of financial growth" />
          <Card src="/images/solopreneur.jpg" alt="Solopreneurship concept" />
          <Card src="/images/IT class.jpg" alt="IT class in session" />
        </div>
      </section>
    )
}


interface CardProps {
  src: string;
  alt: string; 
};

export function Card ({ src, alt }: CardProps) {
return (
  <div className="border border-gray-300 rounded-xl shadow-[0_40px_40px_-15px_rgba(0,0,0,0.5)] ">
        <Image
          className="object-cover object-center w-full h-full "
          src={src}
          width={300}
          height={300}
          alt= {alt}
        />
  </div>
);
}
