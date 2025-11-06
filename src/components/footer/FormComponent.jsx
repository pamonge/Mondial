import React, { useRef, useState } from 'react';
import { LinkComponent } from '../navigation/LinkComponent';
import clients from '../../data/dataForm';
import formStyles from '../../styles/footer/formComponentStyles';
import emailjs from '@emailjs/browser';

export const FormComponent = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const EMAILJS = {
    idService : 'service_f8tltp7',
    idTemplate : 'template_qno0urg',
    publicKey : 'ghbJf09ex8AypmlIf',
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    emailjs
      .sendForm(
        EMAILJS.idService, 
        EMAILJS.idTemplate, 
        form.current, 
        {
          publicKey: EMAILJS.publicKey,
        }
      )
      .then(
        () => {
          setMessage('¡Mensaje enviado con éxito!');
          form.current.reset(); 
          setIsLoading(false);
        },
        (error) => {
          setMessage('Error al enviar el mensaje. Intenta nuevamente.');
          console.log('FAILED...', error.text);
          setIsLoading(false);
        },
      );
  };

  return (
    <div className={formStyles.formContainer}>
      
      {/* Mensaje de estado - Ver de hacer un Modal - */}
      {message && (
        <div className={`p-4 mb-4 rounded ${
          message.includes('éxito') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className={formStyles.form}>
        <div className={formStyles.inputContainer}>
          <label className={formStyles.label} htmlFor="name">Nombre</label>
          <input 
            className={formStyles.input} 
            type="text" 
            name="name" 
            id="name" 
            autoComplete='name'
            required
          />
        </div>

        <div className={formStyles.inputContainer}>
          <label className={formStyles.label} htmlFor="email">Correo Electrónico</label>
          <input 
            className={formStyles.input} 
            type="email" 
            name="email" 
            id="email" 
            autoComplete='email'
            required
          />
        </div>

        <div className={formStyles.inputContainer}>
          <label className={formStyles.label} htmlFor="phone">Teléfono de contacto</label>
          <input 
            className={formStyles.input} 
            type="tel" 
            name="phone" 
            id="phone" 
            autoComplete='tel'
          />
        </div>

        <div className={formStyles.inputContainer}>
          <label className={formStyles.label} htmlFor="subject">Tipo de cliente</label>
          <select className={formStyles.input} name="subject" id="subject" required>
            <option className={formStyles.options} value="">Selecciona un tipo</option>
            {clients.map((client) => (
              <option className={formStyles.options} key={client.value} value={client.value}>
                {client.type}
              </option>
            ))}
          </select>
        </div>

        <div className={formStyles.inputContainer}>
          <label className={formStyles.label} htmlFor="message">Mensaje</label>
          <textarea 
            className={formStyles.input} 
            name="message" 
            id="message" 
            cols="30" 
            rows="5"
            required
          ></textarea>
        </div>

        <div className={formStyles.inputContainer}>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkpriv" id="checkpriv" required />
            <label htmlFor="checkpriv">
              He leído y acepto las <strong>
                <LinkComponent src='/privacy' desc='Políticas de Privacidad' style='text-sm' />
              </strong>
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkLegal" id="checkLegal" required />
            <label htmlFor="checkLegal">
              He leído y acepto lo expresado en el <strong>
                <LinkComponent src='/legal' desc='Aviso Legal' style='text-sm' />
              </strong>
            </label>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <button 
            type="submit" 
            className={formStyles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
};