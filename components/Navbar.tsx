import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50">
            <nav className="flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4">
                <Link href="/" className="flex flex-row items-center gap-2">
                    <h1>NordX</h1>
                </Link>

                <ul className="flex flex-row items-center gap-6">
                    <Link href="/products">
                        <li className="text-gray-400 hover:text-gray-800">Products</li>
                    </Link>
                    <Link href="/about">
                        <li className="text-gray-400 hover:text-gray-800">About</li>
                    </Link>
                    <Link href="/contact">
                        <li className="text-gray-400 hover:text-gray-800">Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
