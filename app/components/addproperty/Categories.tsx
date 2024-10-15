import Image from "next/image";

interface CategoryProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoryProps> = ({ dataCategory, setCategory }) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div
                    onClick={() => setCategory("Beach")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-e-gray-800' : 'border-white'} hover:border-gray-200 opacity-60 hover:opacity-100`}>
                    <Image
                        src="/icn_category.png"
                        alt="Category_beach"
                        width={25}
                        height={25}
                    />
                    <span className="text-xs">Beach</span>
                </div>

                <div
                    onClick={() => setCategory("Villas")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-e-gray-800' : 'border-white'} hover:border-gray-200 opacity-60 hover:opacity-100`}>
                    <Image
                        src="/icn_category.png"
                        alt="Category_beach"
                        width={25}
                        height={25}
                    />
                    <span className="text-xs">Villas</span>
                </div>

                <div
                    onClick={() => setCategory("Cabins")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-e-gray-800' : 'border-white'} hover:border-gray-200 opacity-60 hover:opacity-100`}>
                    <Image
                        src="/icn_category.png"
                        alt="Category_beach"
                        width={25}
                        height={25}
                    />
                    <span className="text-xs">Cabins</span>
                </div>

                <div
                    onClick={() => setCategory("Tiny home")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-e-gray-800' : 'border-white'} hover:border-gray-200 opacity-60 hover:opacity-100`}>
                    <Image
                        src="/icn_category.png"
                        alt="Category_beach"
                        width={25}
                        height={25}
                    />
                    <span className="text-xs">Tiny homes</span>
                </div>
            </div>
        </>
    )
}

export default Categories