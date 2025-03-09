import Link from "next/link";
export default function Navbar() {
    return(
        <header className='navbar text-amber-300 flex flex-col items-center justify-center'>
            <h1 className="text-3xl font-bold">cardo.nd</h1>
            <nav className="flex space-x-5 text-2xl items-center">
                <Link className="hover:bg-amber-300 hover:text-gray-900 rounded-2xl p-2 transition-discrete duration-300" href='/'>Home</Link>
                <Link className="hover:bg-amber-300 hover:text-gray-900 rounded-2xl p-2 transition-discrete duration-300" href='/habilidades'>Habilidades</Link>
                <Link className="hover:bg-amber-300 hover:text-gray-900 rounded-2xl p-2 transition-discrete duration-300" href='/portfolio'>Portfólio</Link>
            </nav>
        </header>
    );
}