import React from 'react'
import { LinkComponent } from './LinkComponent'
import clients from '../data/dataForm'
import formStyles from '../styles/formComponentStyles'

export const FormComponent = () => {
  return (
    <div className={formStyles.formContainer}>
        <h2 className={formStyles.formTitle} >FORMULARIO <strong>DE CONTACTO</strong></h2>
        <form className={formStyles.form} action="">
            <div className={formStyles.inputContainer}>
                <label className={formStyles.label} htmlFor="name">Nombre</label>
                <input className={formStyles.input} type="text" name="name" id="name" autoComplete='name'/>
            </div>
            <div className={formStyles.inputContainer}>
                <label className={formStyles.label} htmlFor="email">Correo Electrónico</label>
                <input className={formStyles.input} type="email" name="email" id="email" autoComplete='email'/>
            </div>
            <div className={formStyles.inputContainer}>
                <label className={formStyles.label} htmlFor="phone">Telefono de contacto</label>
                <input className={formStyles.input} type="tel" name="phone" id="phone" autoComplete='tel'/>
            </div>
            <div className={formStyles.inputContainer}>
                <label className={formStyles.label} htmlFor="subject">Tipo de cliente</label>
                <select className={formStyles.input} name="subject" id="subject">
                    {
                        clients.map((client, key) => (
                            <option key={client.value} className={formStyles.options} value={client.value} >{client.type}</option>
                        ))
                    }     
                </select>
            </div>
            <div className={formStyles.inputContainer}>
                <label className={formStyles.label} htmlFor="msj">Mensaje</label>
                <textarea className={formStyles.input} name="msj" id="msj" cols="30" rows="5"></textarea>
            </div>
            <div className={formStyles.inputContainer}>
                <div>
                    <input type="checkbox" name="checkpriv" id="checkpriv" /> He leido y acepto las <strong>
                        <LinkComponent src='/privacy' desc='Politicas de Privacidad' style='text-sm' />
                    </strong>
                </div>
                <div>
                    <input  type="checkbox" name="checkTyC" id="checkTyC" /> 
                    <label className={formStyles.label} htmlFor="checkTyC">He leido y acepto los
                        <strong>
                            <LinkComponent src='/tyc' desc='Terminos y condiciones' style='text-sm' />
                        </strong>
                    </label>  
                </div>
            </div>
            <button>Enviar</button>
        </form>
    </div>
  )
}
