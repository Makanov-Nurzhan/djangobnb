import Image from "next/image";

const MyReservationPage = () => {
    return (
        <main className="max-w-[1920px] mx-auto px-6 pb-6">
            <h1 className="text-2xl my-6 mb-2">My reservations</h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="Beach house"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl"> Property name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 14/2/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 18/2/2024</p>
                        <p className="mb-2"><strong>Number of price:</strong> 4</p>
                        <p className="mb-2"><strong>Total price:</strong> $400</p>
                        <div
                            className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">Go
                            to property
                        </div>
                    </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="Beach house"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl"> Property name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 14/2/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 18/2/2024</p>
                        <p className="mb-2"><strong>Number of price:</strong> 4</p>
                        <p className="mb-2"><strong>Total price:</strong> $400</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">Go
                            to property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MyReservationPage;