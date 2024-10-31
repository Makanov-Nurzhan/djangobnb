
import Image from "next/image";
import apiService from "@/app/services/apiService";
import Link from "next/link";

const MyReservationPage = async () => {
    const reservations = await apiService.get('/api/auth/myreservations/')
    return (
        <main className="max-w-[1920px] mx-auto px-6 pb-6">
            <h1 className="text-2xl my-6 mb-2">My reservations</h1>
            <div className="space-y-4">
                {reservations.map((reservation: any) => {
                    return (
                        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
                            <div className="col-span-1">
                                <div className="relative overflow-hidden aspect-square rounded-xl">
                                    <Image
                                        fill
                                        src={reservation.property.image_url}
                                        alt="Beach house"
                                        className="hover:scale-110 object-cover transition h-full w-full"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h2 className="mb-4 text-xl">{reservation.property.title}</h2>

                                <p className="mb-2"><strong>Check in date:</strong> {reservation.start_date}</p>
                                <p className="mb-2"><strong>Check out date:</strong> {reservation.end_date}</p>
                                <p className="mb-2"><strong>Number of nights:</strong> {reservation.number_of_nights}</p>
                                <p className="mb-2"><strong>Total price:</strong> ${reservation.total_price}</p>
                                <Link
                                    href={`/properties/${reservation.property.id}`}
                                    className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark"
                                >
                                    Go to property
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
export default MyReservationPage;