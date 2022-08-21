import React from 'react';
import arif from '../Images/arif.png'
import idle from '../Images/idle.png'
import moto from '../Images/moto.png'

const Project = () => {
    return (
        <div className='bg-gradient-to-b lg:bg-gradient-to-r from-zinc-700 to-slate-700 '>
            <h2 className='text-center py-5 text-4xl font-mono font-semibold text-orange-300'>My Recent Projects</h2>
            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-20'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={idle} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Idle Training Center</h2>
                        <p> This Website is about a Body fitness Training center.Here you can see Various types of services, get free advices about fitness. A firebase based login system also intregrated.The Regular User of this site who can logged in will get the information which service he has purchased</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/Habib255/idle-trainer-authentication" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Source code</a>
                            <a href="https://idle-trainer.web.app/" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> Visit Site</a>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={arif} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Arif electronics</h2>
                        <p>This is a Warehouse related website where the authorizer take action to all products and the normal user can see all details about the product. The authorizer can add product, delete product, change the quantity of the product and can see each one of their own product.</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/Habib255/arif-electronics-client-side" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> Source Code</a>
                            <a href="https://arif-electronics.web.app/" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> visit Site</a>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={moto} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Moto parts</h2>
                        <p>This is a Manufacturer website integrated with admin and payment system where the product are produced and distributed . Guest user can see the products details if they want to buy they have to login.The admin can manage the products and orders. user also can track/delete their order.  </p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/Habib255/moto-parts-client-side" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Source Code</a>
                            <a href="https://moto-parts-b0006.web.app/" target='blank' className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;