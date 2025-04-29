import ROUTES from "@/shared/providers/routers";
import { useRouter } from "next/navigation";
import { roboto } from "@/app/layout";



export const Navbar = () => {
    const router = useRouter();
    const handleCardClick = () => {
        router.push(ROUTES.HOME);
    };
    return (
        <div className=' w-full flex h-full '>
            <nav className="flex flex-row justify-end items-center w-full h-full  ">
                <ul className="flex flex-row gap-10 ml-10">
                    <li className={`${roboto.variable} font-sans text-white hover:border-b-2  hover:border-white cursor-pointer`}  onClick={handleCardClick}>Home</li>
                </ul>
            </nav>
        </div>
    );
}