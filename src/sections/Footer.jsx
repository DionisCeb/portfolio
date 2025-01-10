const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            {/*<div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>*/}

            <p className="text-white-500">© 2025 Dionis Cebanu. Special thanks to, Adrian Hajdin.</p>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/dioniscebanu" className="social-icon" target="_blank">
                        <img src="/assets/img/icons/linkedin.svg" alt="github" className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/dionis_cebanu/" className="social-icon" target="_blank" >
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;