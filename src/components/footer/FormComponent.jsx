import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import clients from '../../data/dataForm'
import formStyles from '../../styles/formComponentStyles'

export const FormComponent = () => {
  return (
    <div className={`${formStyles.formContainer} min-md:max-w-3xl `}>
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
                    <input  type="checkbox" name="checkLegal" id="checkLegal" /> 
                    <label className={formStyles.label} htmlFor="checkLegal">He leido y acepto lo expresado en el 
                        <strong>
                            <LinkComponent src='/legal' desc='Aviso Legal' style='text-sm' />
                        </strong>
                    </label>  
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className={formStyles.button} >Enviar</button>
            </div>
            
        </form>
    </div>
  )
}

// import React, { useRef, useState } from 'react';
// import { LinkComponent } from '../navigation/LinkComponent';
// import clients from '../../data/dataForm';
// import formStyles from '../../styles/formComponentStyles';
// //import emailjs from '@emailjs/browser';

// export const FormComponent = () => {
// //   const form = useRef();
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [message, setMessage] = useState('');

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setMessage('');

// //     emailjs
// //       .sendForm(
// //         'YOUR_SERVICE_ID', 
// //         'YOUR_TEMPLATE_ID', 
// //         form.current, 
// //         {
// //           publicKey: 'YOUR_PUBLIC_KEY',
// //         }
// //       )
// //       .then(
// //         () => {
// //           setMessage('¡Mensaje enviado con éxito!');
// //           form.current.reset(); // Limpiar el formulario
// //           setIsLoading(false);
// //         },
// //         (error) => {
// //           setMessage('Error al enviar el mensaje. Intenta nuevamente.');
// //           console.log('FAILED...', error.text);
// //           setIsLoading(false);
// //         },
// //       );
// //   };

//   return (
//     <div className={`${formStyles.formContainer} max-md:max-w-3xl`}>
//       <h2 className={formStyles.formTitle}>
//         FORMULARIO <strong>DE CONTACTO</strong>
//       </h2>
      
//       {/* Mensaje de estado */}
//       {message && (
//         <div className={`p-4 mb-4 rounded ${
//           message.includes('éxito') 
//             ? 'bg-green-100 text-green-700' 
//             : 'bg-red-100 text-red-700'
//         }`}>
//           {message}
//         </div>
//       )}

//       <form ref={form} onSubmit={sendEmail} className={formStyles.form}>
//         <div className={formStyles.inputContainer}>
//           <label className={formStyles.label} htmlFor="name">Nombre</label>
//           <input 
//             className={formStyles.input} 
//             type="text" 
//             name="name" 
//             id="name" 
//             autoComplete='name'
//             required
//           />
//         </div>

//         <div className={formStyles.inputContainer}>
//           <label className={formStyles.label} htmlFor="email">Correo Electrónico</label>
//           <input 
//             className={formStyles.input} 
//             type="email" 
//             name="email" 
//             id="email" 
//             autoComplete='email'
//             required
//           />
//         </div>

//         <div className={formStyles.inputContainer}>
//           <label className={formStyles.label} htmlFor="phone">Teléfono de contacto</label>
//           <input 
//             className={formStyles.input} 
//             type="tel" 
//             name="phone" 
//             id="phone" 
//             autoComplete='tel'
//           />
//         </div>

//         <div className={formStyles.inputContainer}>
//           <label className={formStyles.label} htmlFor="subject">Tipo de cliente</label>
//           <select className={formStyles.input} name="subject" id="subject" required>
//             <option value="">Selecciona un tipo</option>
//             {clients.map((client) => (
//               <option key={client.value} value={client.value}>
//                 {client.type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className={formStyles.inputContainer}>
//           <label className={formStyles.label} htmlFor="msj">Mensaje</label>
//           <textarea 
//             className={formStyles.input} 
//             name="msj" 
//             id="msj" 
//             cols="30" 
//             rows="5"
//             required
//           ></textarea>
//         </div>

//         <div className={formStyles.inputContainer}>
//           <div className="flex items-center gap-2">
//             <input type="checkbox" name="checkpriv" id="checkpriv" required />
//             <label htmlFor="checkpriv">
//               He leído y acepto las <strong>
//                 <LinkComponent src='/privacy' desc='Políticas de Privacidad' style='text-sm' />
//               </strong>
//             </label>
//           </div>
          
//           <div className="flex items-center gap-2 mt-2">
//             <input type="checkbox" name="checkLegal" id="checkLegal" required />
//             <label htmlFor="checkLegal">
//               He leído y acepto lo expresado en el <strong>
//                 <LinkComponent src='/legal' desc='Aviso Legal' style='text-sm' />
//               </strong>
//             </label>
//           </div>
//         </div>

//         <div className='flex items-center justify-center'>
//           <button 
//             type="submit" 
//             className={formStyles.button}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Enviando...' : 'Enviar'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };