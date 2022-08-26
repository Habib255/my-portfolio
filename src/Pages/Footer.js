import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">

                <div>
                    <div class="grid grid-flow-col gap-6 text-3xl">

                        <a href='https://www.facebook.com/Abdur.Rahman.Habib99' target='_blank' rel='noreferrer' className='hover:text-orange-600'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='https://twitter.com/ArHabib255' className='hover:text-orange-600' target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href='https://www.linkedin.com/in/habib255/' className='hover:text-orange-600' target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='https://wa.me/8801813032931' className='hover:text-orange-600' target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href='https://t.me/abdurrahmanHabib' className='hover:text-orange-600' target='_blank' title='Telegram' rel='noreferrer' ><FontAwesomeIcon icon={faTelegram} /></a>

                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Habib</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;