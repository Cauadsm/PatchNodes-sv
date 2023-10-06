import Image from "next/image";
import Link from "next/link";
export default function create() {
  return (
    <div className="flex justify-between p-4 bg-white">
       <Link className="font-bold text-indigo-600 place-self-center" href="/">    
      <Image
        className="w-auto h-auto rounded-lg"
        src="/images/icon.jpg"
        width={50}
        height={50}
        alt="icon"
      />
        </Link>
      <div className="flex gap-2 place-self-center">
        <Link className="font-bold text-indigo-600 transition hover:text-indigo-800 place-self-center" href="/">
          Home
        </Link>
        <Link
          className="font-bold text-indigo-600 transition place-self-center hover:text-indigo-800"
          href="../components/patches"
        >
          Patches
        </Link>
      </div>
    </div>
  );
}
