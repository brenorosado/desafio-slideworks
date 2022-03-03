import Image from "next/image";
import Link from "next/link";
import { NavBar, MenuButton} from '../styles/menu';
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

const Menu = () => {
    return (
        <NavBar>
            <Link href='/'><a><Image src="/Logo.svg" alt="Logo" width={130.79} height={32}/></a></Link>
            <MenuButton htmlFor='showMenu'>
                <FiMenu/>
            </MenuButton>
            <input type="checkbox" id='showMenu' name='showMenu' />
            <ul>
                <li><Link href='https://slideworks.cc'>Home</Link></li>
                <li><Link href='https://slideworks.cc'>About</Link></li>
                <li><Link href='https://slideworks.cc'>Features</Link></li>
                <li><Link href='https://slideworks.cc'>Pricing</Link></li>
                <li><Link href='https://slideworks.cc'>Gallery</Link></li>
                <li><Link href='https://slideworks.cc'>Team</Link></li>
                <li><a><BiSearch/></a></li>
            </ul>
        </NavBar>
    );
};

export default Menu;