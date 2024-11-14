import Image from "next/image"

export default function SlidingCardSection() {
    return (
        <div className="flex flex-row mx-2 md:mx-32 py-10 gap-6 md:gap-9">
        <Image className="" src="/images/governor-in chair.png" width={700} height={700} alt=""  />
        <Image className="" src="/images/auditorium.png" width={700} height={700} alt=""  />
      </div>
    )
}