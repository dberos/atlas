import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
    return ( 
        <Link href='/'>
            <Image
            src='/logo.svg'
            alt='logo'
            priority
            height={100}
            width={100}
            className="size-12 object-contain"
            />
        </Link>
    );
}
 
export default NavLogo;