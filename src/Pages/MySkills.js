import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const MySkills = () => {
    return (
        <div className='bg-gradient-to-b lg:bg-gradient-to-r from-slate-600 to-gray-700 '>
            <h2 className='text-center mb-8 text-4xl font-mono font-semibold text-orange-300'> My Skills & Tools</h2>
            <div>





                <FontAwesomeIcon icon={faDownload} />
            </div>
        </div>
    );
};

export default MySkills;