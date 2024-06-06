import Image from "next/image";


export default function CardLayout( {data}) {
    return (
        <>
            <div className="container mx-auto">
                {data.map((item, index) => (
                    <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image class="w-full" src={item.image} alt={item.alt} />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item.title}</div>
                        <p class="text-gray-700 text-base">
                            {item.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}