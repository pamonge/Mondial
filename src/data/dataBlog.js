import imageNews1 from '../../public/blogNews/image-news1.png';
import imageNews2 from '../../public/blogNews/image-news2.png';

const dataBlog = [
    {
        id: 1,
        title: 'Ventajas de contratar un seguro de salud',
        noticia: [
        {
            // Párrafo 1
            type: 'paragraph',
            content: [
                { type: 'text', text: 'Contratar un seguro de salud ofrece ' },
                { type: 'bold', text: 'numerosas ventajas' },
                { type: 'text', text: ' que pueden ' },
                { type: 'bold', text: 'mejorar' },
                { type: 'text', text: ' significativamente ' },
                { type: 'bold', text: 'tu bienestar y el de tu familia.' }
            ]
        },
        {
            // Párrafo 2
            type: 'paragraph',
            content: [
                { type: 'text', text: 'En primer lugar, un seguro de salud te ' },
                { type: 'bold', text: 'brinda acceso' },
                { type: 'text', text: ' a una amplia red de profesionales médicos y especialistas, lo que ' },
                { type: 'bold', text: 'facilita la atención médica' },
                { type: 'text', text: ' cuando la necesitas. Además, muchos seguros de salud ofrecen ' },
                { type: 'bold', text: 'cobertura para tratamientos preventivos,' },
                { type: 'text', text: ' como chequeos regulares y vacunas, lo que puede ayudarte a mantener una buena salud a largo plazo.' }
            ]
        },
        {
            // Párrafo 3
            type: 'paragraph',
            content: [
                { type: 'text', text: 'Otra ventaja importante es la ' },
                { type: 'bold', text: 'reducción de costos médicos,' },
                { type: 'text', text: ' ya que un seguro de salud puede ' },
                { type: 'bold', text: 'cubrir' },
                { type: 'text', text: ' una parte significativa de los gastos relacionados con consultas, hospitalizaciones y medicamentos.' }
            ]
        },
        {
            // Párrafo 4
            type: 'paragraph',
            content: [
                { type: 'text', text: 'En resumen, contar con ' },
                { type: 'bold', text: 'un seguro de salud' },
                { type: 'text', text: ' no solo ' },
                { type: 'bold', text: 'te proporciona tranquilidad,' },
                { type: 'text', text: ' sino que también te ' },
                { type: 'bold', text: 'permite acceder' },
                { type: 'text', text: ' a una ' },
                { type: 'bold', text: 'atención médica de calidad' },
                { type: 'text', text: ' sin preocuparte por los altos costos.' }
            ]
        }
    ],linkData: '/news/1',
        img: `${imageNews1}`,
        date: '2024-06-15',
        Autor: 'PEPE'
    },
     {
        id: 2,
        title: 'Exclusiva inmobiliaria: Ventajas y Desventajas',
        noticia: [
        {
            // Párrafo 1
            type: 'paragraph',
            content: [
                { type: 'subTitle', text:'Mitos y Verdades'},
                { type: 'text', text: 'Cuando un propietario escucha la palabra ' },
                { type: 'bold', text: ' “exclusiva”' },
                { type: 'text', text: ' , la mayoría frunce el ceño. Se activa el chip de la desconfianza,como si se tratara de una trampa para quitarle libertad. Y sinembargo, cada día reclamamos  ' },
                { type: 'bold', text: 'ser tratados en exclusiva:' },
                { type: 'text', text: 'con respeto, con atención personalizada, con un servicio decalidad donde el foco esté puesto en nosotros.' },
               
            ]
        },
        {
            // Párrafo 3
            type: 'paragraph',
            content: [
                { type: 'text', text:'¿O acaso quieres compartir a tu médico de cabecera en plena consulta? ¿O que tu abogado atienda a cinco clientes al mismo tiempo y te dé lo que le sobra de su tiempo? ' },
                ]
        },
        {
            // Párrafo 4
            type: 'paragraph',
            content: [
                { type: 'text', text: 'En la vida pedimos exclusividad. Pero cuando se trata de vender la vivienda, el bien más valioso que tenemos, muchos se resisten. ' },
                { type: 'bold', text: '¿Por qué? Por la gran mentira de la exclusividad inmobiliaria' },
               
            ]
        },
         {
            // Párrafo 5
            type: 'paragraph',
            content: [
                { type: 'subTitle', text: 'Los mitos que impiden a los propietarios confiar en la exclusividad ' },
                { type: 'subTitle2', text: '1. “SI VARIAS AGENCIAS VENDEN MI CASA, TENGO MÁS OPCIONES”' },
               { type: 'text', text: 'Falso. Cuando tu vivienda está en mil manos, nadie la cuida. Se multiplica la descoordinación, se confunden precios y se desgasta la imagen de tu propiedad. Nadie invierte de verdad en promocionarla porque ' },
                { type: 'bold', text: 'no hay compromiso real' },
                { type: 'text', text: '. En exclusiva, un profesional asume la responsabilidad total y pone todos los recursos para vender al mejor precio y en el menor tiempo.' },
            ]
        }
        ,
         {
            // Párrafo 6
            type: 'paragraph',
            content: [
                
                { type: 'subTitle2', text: '2. “CON EXCLUSIVA ME ATO DE PIES Y MANOS”' },
               { type: 'text', text: 'Mentira. Lo que haces es firmar un acuerdo claro con un profesional que se compromete contigo. La exclusiva no te quita libertad: te da' },
                { type: 'bold', text: ' garantías, seguridad y un interlocutor único' },
                { type: 'text', text: '. Mucho mejor que estar atendiendo llamadas de media ciudad a cualquier hora, sin filtros ni seriedad' },
            ]
        },
        {
        // Párrafo 7
        type: 'paragraph',
        content: [
            { type: 'subTitle2', text: '3. “LAS AGENCIAS SUBEN EL PRECIO SI TRABAJAN EN EXCLUSIVA”' },
            { type: 'bold', text: 'Rotundamente falso.' },
            { type: 'text', text: ' El mercado pone el precio, no el agente. Un profesional serio hace una valoración ajustada, te lo explica con datos y defiende tu propiedad. El mito de inflar el precio es la excusa de quienes no saben trabajar con rigor.' },
        ]
    },
    {
        // Párrafo 8
        type: 'paragraph',
        content: [
            { type: 'subTitle2', text: '4. “ME FÍO MÁS DE HACERLO YO MISMO”' },
            { type: 'text', text: 'Hacerlo tú mismo significa improvisar contratos, arriesgar tu dinero en arras mal redactadas, no filtrar compradores y acabar gastando tu tiempo y tu salud.' },
            { type: 'bold', text: ' Lo barato, lo rápido y lo “autogestionado” suele terminar en disgustos.' },
        ]
    },
    {
        // Párrafo 9
        type: 'paragraph',
        content: [
            { type: 'subTitle2', text: '5. “ALGUNAS AGENCIAS HAN ENGAÑADO CON LA EXCLUSIVA”' },
            { type: 'text', text: 'Es cierto. Y justo ahí está el problema: no en la figura de la exclusiva, sino en quién la gestiona. Igual que no dejas de ir al médico porque alguno te atendió mal, ni rechazas a todos los abogados porque alguno no hizo su trabajo, la clave es elegir ' },
            { type: 'bold', text: 'un agente serio, acreditado y con experiencia.' },
        ]
    },
     {
            // Párrafo 10
            type: 'paragraph',
            content: [
                { type: 'subTitle', text: 'Exclusividad = Servicio de Calidad ' },
                { type: 'text', text: 'La exclusiva inmobiliaria no es un candado, es una' },
                { type: 'bold', text: 'llave' },
               { type: 'text', text: '. La llave que abre un servicio donde el profesional se vuelca contigo: marketing personalizado, atención constante, protección legal y un plan estratégico para vender tu vivienda sin improvisaciones.' },
              ]
        },
         {
            // Párrafo 10
            type: 'paragraph',
            content: [
               
                { type: 'text', text: 'Al final, todos pedimos lo mismo en cualquier aspecto de la vida:' },
                { type: 'bold', text: ' que nos traten en exclusiva' },
               { type: 'text', text: '. Entonces, ¿por qué no exigirlo cuando se trata de tu propiedad?' },

              ]
        }, {
            // Párrafo 11
            type: 'paragraph',
            content: [
               
                { type: 'text', text: 'En' },
                { type: 'bold', text: ' Mondial Inmobiliaria' },
               { type: 'text', text: 'defendemos la exclusividad como lo que es: un compromiso de servicio serio, transparente y de calidad.' },

              ]
        },
         {
            // Párrafo 12
            type: 'paragraph',
            content: [
               
               
                { type: 'bold', text: ' Si de verdad quieres vender tu vivienda con garantías y sin perder tiempo ni dinero, habla con nosotros y descubre cómo trabajamos para ti.' },
               
              ]
        }
    

    ],linkData: '/news/1',
        img: `${imageNews2}`,
        date: '2024-06-15',
        Autor: 'PEPE'
    },
 {
        id: 3,
        title: 'Ventajas de contratar un seguro de salud',
        noticia: [
        {
            // Párrafo 1
            type: 'paragraph',
            content: [
                { type: 'text', text: 'Contratar un seguro de salud ofrece ' },
                { type: 'bold', text: 'numerosas ventajas' },
                { type: 'text', text: ' que pueden ' },
                { type: 'bold', text: 'mejorar' },
                { type: 'text', text: ' significativamente ' },
                { type: 'bold', text: 'tu bienestar y el de tu familia.' }
            ]
        },
        {
            // Párrafo 2
            type: 'paragraph',
            content: [
                { type: 'text', text: 'En primer lugar, un seguro de salud te ' },
                { type: 'bold', text: 'brinda acceso' },
                { type: 'text', text: ' a una amplia red de profesionales médicos y especialistas, lo que ' },
                { type: 'bold', text: 'facilita la atención médica' },
                { type: 'text', text: ' cuando la necesitas. Además, muchos seguros de salud ofrecen ' },
                { type: 'bold', text: 'cobertura para tratamientos preventivos,' },
                { type: 'text', text: ' como chequeos regulares y vacunas, lo que puede ayudarte a mantener una buena salud a largo plazo.' }
            ]
        },
        {
            // Párrafo 3
            type: 'paragraph',
            content: [
                { type: 'text', text: 'Otra ventaja importante es la ' },
                { type: 'bold', text: 'reducción de costos médicos,' },
                { type: 'text', text: ' ya que un seguro de salud puede ' },
                { type: 'bold', text: 'cubrir' },
                { type: 'text', text: ' una parte significativa de los gastos relacionados con consultas, hospitalizaciones y medicamentos.' }
            ]
        },
        {
            // Párrafo 4
            type: 'paragraph',
            content: [
                { type: 'text', text: 'En resumen, contar con ' },
                { type: 'bold', text: 'un seguro de salud' },
                { type: 'text', text: ' no solo ' },
                { type: 'bold', text: 'te proporciona tranquilidad,' },
                { type: 'text', text: ' sino que también te ' },
                { type: 'bold', text: 'permite acceder' },
                { type: 'text', text: ' a una ' },
                { type: 'bold', text: 'atención médica de calidad' },
                { type: 'text', text: ' sin preocuparte por los altos costos.' }
            ]
        }
    ], linkData: '/news/1',
        img: `${imageNews1}`,
        date: '2024-06-15',
        Autor: 'PEPE'
    },];

export default dataBlog;