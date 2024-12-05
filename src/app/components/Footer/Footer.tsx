import Link from 'next/link';
import Image from 'next/image';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            {/* TOP */}
            <div className="top">
                {/* LEFT */}
                <div className="top_left">
                    <Link href="/" className="logo">
                        <div>CREDENSONS</div>
                    </Link>
                    <p>WMCM+CMQ, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka 560103</p>
                    <span>credensons@gmail.com</span>
                    <span>+91 6389943455</span>
                    <div className="social_icons">
                        <Image src="/facebook.png" alt="facebook" width={16} height={16} />
                        <Image src="/instagram.png" alt="instagram" width={16} height={16} />
                        <Image src="/youtube.png" alt="youtube" width={16} height={16} />
                        <Image src="/pinterest.png" alt="pinterest" width={16} height={16} />
                        <Image src="/x.png" alt="x" width={16} height={16} />
                    </div>
                </div>
                {/* CENTER */}
                <div className="top_center">
                    <div className="link_group">
                        <h1>COMPANY</h1>
                        <div className="links">
                            <Link href="">About Us</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className="link_group">
                        <h1>SHOP</h1>
                        <div className="links">
                            <Link href="">New Arrivals</Link>
                            <Link href="">Accessories</Link>
                            <Link href="">Men</Link>
                            <Link href="">Women</Link>
                            <Link href="">All Products</Link>
                        </div>
                    </div>
                    <div className="link_group">
                        <h1>HELP</h1>
                        <div className="links">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="top_right">
                    <h1>SUBSCRIBE</h1>
                    <p>Subscribe to our newsletter for Latest merchandise and updates</p>
                    <div className="input_group">
                        <input type="text" placeholder="Email address" />
                        <button>JOIN</button>
                    </div>
                    <span>Secure Payments</span>
                    <div className="payment_icons">
                        <Image src="/discover.png" alt="discover" width={40} height={20} />
                        <Image src="/paypal.png" alt="paypal" width={40} height={20} />
                        <Image src="/mastercard.png" alt="mastercard" width={40} height={20} />
                        <Image src="/visa.png" alt="visa" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="bottom">
                <div className="copyright">© 2024 Credensons</div>
                <div className="settings">
                    <div className="language">
                        <span>Language</span>
                        <span>INDIA | English</span>
                    </div>
                    <div className="currency">
                        <span>Currency</span>
                        <span>INR</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;