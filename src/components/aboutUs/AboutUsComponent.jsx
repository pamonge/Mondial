import React from 'react';
import dataAbout from '../../data/dataAboutUs';
import appStyles from '../../styles/appStyles';
import aboutUsStyles from '../../styles/AboutComponentStyle';
//sobre nosotros component 
export const AboutUsComponent = () => {
    return (
        <div className={appStyles.div}>
            <h2 className={appStyles.mainTitle}>Tu equipo de confianza</h2>
            <div>
                {/*hace un mapeo sobre el objeto dataAbout q recorre solo los gridItems */}
                {
                    dataAbout.intro.map((item, index) => (
                        <p key={index} className={appStyles.text}>{item}</p>
                    ))
                }
            </div>
            <div>
                <img
                    src={`/${dataAbout.image}`}
                    alt={dataAbout.intro}
                    className={aboutUsStyles.image}
                />
            </div>
            <div className={aboutUsStyles.gridCols}>
                {/*hace un mapeo sobre el objeto dataAbout q recorre solo los gridItems */}
                {

                    dataAbout.gridItems.map((item, index) => (
                        <div key={index} className={aboutUsStyles.gridItem}>

                            <p className={aboutUsStyles.gridItem}>{item}</p>
                        </div>
                    ))
                }
            </div>
            <div >
                {/*conclusion */}
                {
                    <p className={aboutUsStyles.paragraph}>{dataAbout.conclution}</p>
                }
            </div>
        </div>
    )
}