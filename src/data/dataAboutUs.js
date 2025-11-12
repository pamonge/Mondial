import AboutUS from '../assets/aboutIcon/AboutUs.png';
import Trust from '../assets/aboutIcon/abouticon1.png';
import Protect from '../assets/aboutIcon/abouticon2.png';
import Camera from '../assets/aboutIcon/abouticon3.png';
import Approval from '../assets/aboutIcon/abouticon4.png';

const dataAbout = {
    image:`${AboutUS}`,
    intro:['Somos una empresa de gestión inmobiliaria de Murcia, situados en pleno centro de nuestra capital desde 1998, lo que nos avala por nuestra experiencia al tener un profundo conocimiento en este sector como expertos en la zona.'

    ],
    gridItems:[ [`${Trust}`,'Ofrecemos en nuestros servicios, confianza, compromiso y experiencia dando un trato personalizado.'],
     [`${Protect}`,'Garantizamos nuestra actividad profesional mediante un seguro de responsabilidad civil de 1.500.000€.'],
     [`${Camera}`,'Destacamos su propiedad con máxima visibilidad nacional y fotografías premium profesionales.'],
     [`${Approval}`,'Valoramos su inmueble con precisión y sistemas homologados por entidades oficiales.']
    
    ],
     conclution:['Cientos de clientes satisfechos hacen honor a nuestro código deontológico de conducta profesional, el cual hemos seguido, seguimos y seguiremos siempre cumpliendo con nuestro lema.'  ]
};

export default dataAbout;