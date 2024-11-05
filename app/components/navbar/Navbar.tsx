import Link from "next/link";
import Image from "next/image";
import SeacrhFilters from "@/app/components/navbar/SeacrhFilters";
import UserNav from "@/app/components/navbar/UserNav";
import {getUserId} from "@/app/lib/actions";
import AddPropertyButton from "@/app/components/navbar/AddPropertyButton";

const Navbar = async () => {

    const userId = await getUserId()
    console.log("userId:", userId)
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1920px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            alt="logo"
                            src="/logo.png"
                            width={180}
                            height={38}
                            priority
                        />
                    </Link>
                    <div className="flex space-x-6">
                        <SeacrhFilters/>
                    </div>
                    <div className="flex items-center space-x-6">
                        <AddPropertyButton
                            userId={userId}
                        />
                        <UserNav
                            userId={userId}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar