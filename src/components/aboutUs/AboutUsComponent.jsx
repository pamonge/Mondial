import React from 'react';
import dataAbout from '../../data/dataAboutUs';
import mondialSlogan from '../../assets/img/mondial-slogan.png'

import aboutUsStyles from '../../styles/AboutComponentStyle';
//sobre nosotros component 
export const AboutUsComponent = () => {
    return (
//         <div className={aboutUsStyles.container}>
//             <h2 className={aboutUsStyles.title}>Tu equipo de confianza</h2>
//             <div className='flex flex-col items-center'>
//                 {/*hace un mapeo sobre el objeto dataAbout q recorre solo los gridItems */}
//                 {
//                     dataAbout.intro.map((item, index) => (
//                         <p key={index} className={aboutUsStyles.paragraph}>{item}</p>
//                     ))
//                 }

//                 <img 
//   className='absolute inset-x-4 md:inset-x-16 w-[calc(100%-2rem)] md:w-[1312px] h-64 md:h-[512px] top-[278px] object-cover object-center rounded-2xl z-0' 
//   src={mondialSlogan} 
//   alt="mondial slogan" 
// />
//             </div>
//             <div className={aboutUsStyles.gridCols}>
//                 {/*hace un mapeo sobre el objeto dataAbout q recorre solo los gridItems */}
//                 {

//                     dataAbout.gridItems.map((item, index) => (
//                         <div key={index} className={aboutUsStyles.gridItem}>

//                             <p className={aboutUsStyles.gridItem}>{item}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//             <div >
//                 {/*conclusion */}
//                 {
//                     <p className={aboutUsStyles.paragraph}>{dataAbout.conclution}</p>
//                 }
//             </div>
//         </div>
        <div className={aboutUsStyles.container}>
            <h2 className={aboutUsStyles.title}>Tu equipo de confianza</h2>
            
            <div className='flex flex-col items-center gap-8 mb-12'>


                {/* Texto a la izquierda */}
                <div className='flex-1 space-y-6'>
                    {dataAbout.intro.map((item, index) => (
                        <p key={index} className={aboutUsStyles.paragraph}>{item}</p>
                    ))}
                </div>
                
                                                {/* Imagen a la derecha */}
                <div className='flex-1'>
                    <img 
                        className='w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover'
                        src={mondialSlogan} 
                        alt="mondial slogan" 
                    />
                </div>

            </div>

            {/* Grid de características */}
            <div className={aboutUsStyles.gridCols}>
                {dataAbout.gridItems.map((item, index) => (
                    <div key={index} className={aboutUsStyles.gridItem}>
                        <p className={aboutUsStyles.gridItem}>{item}</p>
                    </div>
                ))}
            </div>

            {/* Conclusión */}
            <div className='mt-12 text-center'>
                <p className={`${aboutUsStyles.paragraph} font-semibold italic`}>
                    {dataAbout.conclution}
                </p>
            </div>
        </div>
    )
}