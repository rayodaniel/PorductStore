import { Navbar } from '@/app/organims/navbar/navbar';

export default function Header() {
    return (
        <header className="w-full min-h-20 h-24 sticky top-0 z-50">
            <div className="bg-black p-6 w-full h-full flex">
                <Navbar />
            </div>
        </header>
    );
}
