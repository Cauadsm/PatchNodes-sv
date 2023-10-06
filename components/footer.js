import Link from "next/link";

export default function footer() {
    return (
        <div className="p-1 text-center bg-white place-content-center">
            <p className="text-sm text-gray-500 align-middle">
                criado e desenvolvido por <Link href="https://www.linkedin.com/in/cauã-silva-de-moraes-191b98227/">Cauadsm</Link> e 
                <Link href="https://www.linkedin.com/in/edudfrs/"> Efrnds</Link>
            </p>
        </div>
    );
}
