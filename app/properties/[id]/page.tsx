import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import apiService from "@/app/services/apiService";
import {getUserId} from "@/app/lib/actions";
import Link from "next/link";

const PropertyDetailPage = async ({params}: {params: {id: string}}) => {

    const property = await apiService.get(`/api/properties/${params.id}`);
    const userId = await getUserId();

    return(
        <main className="max-w-[1920px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={property.image_url}
                    alt="Beach house"
                    className="object-cover h-full w-full"
                    />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        {property.guests} guests - {property.bedrooms} bedroom - {property.bathrooms} bathrooms
                    </span>
                    <hr/>

                    <Link
                        href={`/landlords/${property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                        {
                            property.landlord.avatar_url && (
                                <Image
                                    src={property.lamdlord.avatar_url}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            )
                        }
                        <p><strong>{property.landlord.name}</strong> is your host</p>
                    </Link>
                    <hr/>
                    <p className="mt-6 text-lg">
                        {property.description}
                    </p>
                </div>
                <ReservationSidebar
                    property={property}
                    userId={userId}
                />
            </div>
        </main>
    )
}
export default PropertyDetailPage