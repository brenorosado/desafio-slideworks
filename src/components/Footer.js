import { FooterContainer, FooterContent, LogoContent, LinksContent } from '../styles/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook } from 'react-icons/im';
import { RiInstagramLine } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoContent>
                    <Image src='/LogoFooter.svg' width={122.09} height={32}/>
                </LogoContent>
                <LinksContent>
                    <div>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                    <div>
                        <Link href='https://www.facebook.com/slideworks.cc/'><a><ImFacebook/></a></Link>
                        <Link href='https://twitter.com/home'><a><BsTwitter/></a></Link>
                        <Link href='https://www.instagram.com/slideworks.cc/?hl=en'><a><RiInstagramLine/></a></Link>
                    </div>
                </LinksContent>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;