import React from 'react'
import { LinkComponent } from './LinkComponent'

export const FormComponent = () => {
  return (
    <div className='bg-blue-900 text-white'>
        <h2 >Formulario de Contacto</h2>
        <form action="">
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="phone">Telefono de contacto</label>
                <input type="tel" name="phone" id="phone" />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" />
            </div>
            <div>
                <label htmlFor="msj">Mensaje</label>
                <textarea name="msj" id="msj" cols="30" rows="5"></textarea>
            </div>
            <div>
                <div>
                    <input type="checkbox" name="checkpriv" id="checkpriv" /> He leido y acepto las <strong>
                        <LinkComponent src='/privacy' desc='Politicas de Privacidad' />
                    </strong>
                </div>
                
                <input type="checkbox" name="checkTyC" id="checkTyC" /> He leido y acepto los <strong>Terminos y condiciones</strong>
            </div>
        </form>
    </div>
  )
}
