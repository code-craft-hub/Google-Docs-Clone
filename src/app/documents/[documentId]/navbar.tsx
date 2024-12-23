import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./document-input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="gap-2 items-center flex">
        <Link href="/">
          <Image src="/logo_c.jpg" width={36} height={36} alt="Logo" />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
