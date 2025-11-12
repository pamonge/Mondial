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
            <div className={ContactStyle.sectionContainer} >
                <a href={`tel:${dataMondial.phone}`} className={ContactStyle.containerA}>
                    <img className={ContactStyle.img} src={iconPhone} alt="Celular" /> {dataMondial.phone}
                </a>
                <a href={`mailto:${dataMondial.email}`} className={ContactStyle.containerA} >
                    <img className={ContactStyle.img} src={iconMail} alt="Correo" /> {dataMondial.email}
                </a>
            </div>
        </div>
    );
};

export default ContactComponent;