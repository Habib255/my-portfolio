import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('process.env.REACT_APP_SERVICE_ID', 'REACT_APP_TEMPLATE_ID', form.current, 'REACT_APP_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        toast('Successfully sent your message')
    };
    return (
        <div id='contact' className='py-10'>
            <h1 className='text-4xl text-center py-10 font-mono'>Contact Information</h1>
            <div className='flex flex-wrap justify-evenly  items-center'>
                <div>
                    <div class="card-body text-2xl font-sharif items-center gap-5 text-center">
                        <h2 className="text-3xl text-blue-600">Connect Me</h2>
                        <p className='text-xl'>Feel free to ask any queries.</p>
                        <p><span className='text-blue-400'><FontAwesomeIcon icon={faEnvelope} />  Gmail: </span> arhabib255@gmail</p>
                        <p><span className='text-blue-400'><FontAwesomeIcon icon={faPhone} />  Phone: </span> +8801943858558 </p>
                        <p><span className='text-blue-400'><FontAwesomeIcon icon={faLocationDot} />  Location: </span>Elephant Road, Dhaka </p>

                        <div class="card-actions justify-evenly gap-8 text-4xl">
                            <p className='text-xl pt-2 text-blue-400'>Social -</p>
                            <a href='https://www.facebook.com/Abdur.Rahman.Habib99' target='_blank' rel='noreferrer' className='hover:text-orange-600' title='Facebook'><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='https://twitter.com/ArHabib255' target='_blank' rel='noreferrer' className='hover:text-orange-600' title='Twitter'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='https://www.linkedin.com/in/habib255/' target='_blank' rel='noreferrer' className='hover:text-orange-600' title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='https://wa.me/8801813032931' target='_blank' rel='noreferrer' className='hover:text-orange-600' title='Whatsapp'><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href='https://t.me/abdurrahmanHabib' target='_blank' rel='noreferrer' className='hover:text-orange-600' title='Telegram'><FontAwesomeIcon icon={faTelegram} /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="flex justify-center items-center shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='user_name' placeholder="Name" class="input input-bordered" required />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" name='user_email' placeholder="email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Subject</span>
                                    </label>
                                    <input type="text" name='subject' placeholder="Subject" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea type="text" name='message' cols='50' placeholder="Type your message" class="input input-bordered" required />

                                </div>
                                <div class="flex justify-center mt-5">
                                    <input type='submit' value='Send Message' className="w-36 text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;