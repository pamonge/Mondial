import React from "react"
import dataMondial from "../../data/dataMondial"
import ContactStyle from "../../styles/contactComponentStyle"
import appStyles from "../../styles/appStyles"
import iconMail from '../../assets/icons/icon-mail.png'
import iconPhone from '../../assets/icons/icon-phone.png'
export const ContactComponent = () => {
    return (
        <div className={appStyles.div}>
            <h3 className={`${appStyles.text}`}>Solicita información sin compromiso sobre nuestros inmuebles o servicios. Si deseas vender o alquilar una propiedad, confía en nosotros: la gestionaremos con profesionalidad, cercanía y las mejores condiciones del mercado.</h3>
            <div className='flex  justify-center items-center pb-5 gap-5' >
                <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3  '>
                    <img className='w-10' src={iconPhone} alt="Celular" /> {dataMondial.phone}
                </a>
                <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 ' >
                    <img className='w-10' src={iconMail} alt="Correo" /> {dataMondial.email}
                </a>
            </div>
        </div>
    );
};

export default ContactComponent;