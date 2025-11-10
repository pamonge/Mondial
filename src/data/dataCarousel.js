import buyImg from '../assets/img/comprar.png'
import rentImg from '../assets/img/alquilar.png'
import sellImg from '../assets/img/vender.png'
const dataCarousel = [
    {
        id : 1,
        title: 'Quiero comprar una propiedad',
        service: 'comprar',
        img: buyImg,
        description: '2 habitaciones - 65 m2',
        category: 'Compra',
        linkData: '/buy'
    },
    {
        id : 2,
        title: 'Quiero alquilar una propiedad',
        service:'alquilar',
        img: rentImg,
        description: 'Viví donde siempre quisiste, sin esperar a comprar. Ofrecemos una selección cuidadosa de propiedades en alquiler, en las zonas más convenientes de la ciudad. Con procesos ágiles, contratos transparentes y asesoría personalizada, te ayudamos a encontrar el espacio perfecto para tu estilo de vida o tu negocio. ¡Listo para mudarte hoy!',
        category: 'Alquiler',
        linkData: '/rent'
    },
    {
        id : 3,
        title: 'Quiero vender mi propiedad',
        service:'vender',
        img: sellImg,
        description: 'En Mondial Inmobiliaria, sabemos que una vivienda es solo estructura, pero un hogar es donde late el corazón. Con 25 años de experiencia en el sector inmobiliario, colocamos tu hogar y tus intereses  en el epicentro de todo lo que hacemos. No vendemos casas, creamos oportunidades, construimos confianza y entregamos resultados reales. Gracias a nuestra exclusiva red de compradores cualificados, estrategias de marketing de alto impacto y un enfoque 100% personalizado, transformamos la venta de tu propiedad en una experiencia fluida, transparente y, sobre todo, exitosa. Porque en Mondial Inmobiliaria, lo que importa para ti... nos importa de verdad.',
        category: 'Venta',
        linkData: '/sell'
    }
]

export default dataCarousel;