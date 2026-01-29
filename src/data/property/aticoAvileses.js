import img1405526317 from '../../assets/property/aticoAvileses/1405526317.jpg';
import img1405526318 from '../../assets/property/aticoAvileses/1405526318.jpg';
import img1405526319 from '../../assets/property/aticoAvileses/1405526319.jpg';
import img1405526320 from '../../assets/property/aticoAvileses/1405526320.jpg';
import img1405526321 from '../../assets/property/aticoAvileses/1405526321.jpg';
import img1405526531 from '../../assets/property/aticoAvileses/1405526531.jpg';
import img1405526533 from '../../assets/property/aticoAvileses/1405526533.jpg';
import img1405526534 from '../../assets/property/aticoAvileses/1405526534.jpg';
import img1405526558 from '../../assets/property/aticoAvileses/1405526558.jpg';
import img1405526565 from '../../assets/property/aticoAvileses/1405526565.jpg';
import img1405526566 from '../../assets/property/aticoAvileses/1405526566.jpg';
import img1405526567 from '../../assets/property/aticoAvileses/1405526567.jpg';
import img1405526568 from '../../assets/property/aticoAvileses/1405526568.jpg';
import img1405526569 from '../../assets/property/aticoAvileses/1405526569.jpg';
import img1405526571 from '../../assets/property/aticoAvileses/1405526571.jpg';
import img1405526572 from '../../assets/property/aticoAvileses/1405526572.jpg';
import img1405526573 from '../../assets/property/aticoAvileses/1405526573.jpg';
import img1405526574 from '../../assets/property/aticoAvileses/1405526574.jpg';
import img1405526585 from '../../assets/property/aticoAvileses/1405526585.jpg';
import img1405526587 from '../../assets/property/aticoAvileses/1405526587.jpg';

const aticoAvileses = {
    titulo: "Espectacular ático dúplex en la Plaza de la Iglesia, Avileses.",
    
    descripcion: `¡Con gran terraza y vistas impresionantes! No pierdas la oportunidad de vivir en este espectacular ático dúplex ubicado en la emblemática Plaza de la Iglesia en Avileses (Murcia)! Esta propiedad luminosa y moderna cuenta con 3 amplias habitaciones equipadas con armarios empotrados, perfectas para toda la familia. Dispone de 2 cuartos de baño: uno completo con todos los elementos necesarios y otro con ducha para mayor comodidad. El salón es espacioso y acogedor, ideal para reuniones o momentos de relax, mientras que la cocina está totalmente equipada con electrodomésticos de calidad. Todo el inmueble es totalmente exterior, lo que garantiza una excelente entrada de luz natural durante todo el día. Pero lo mejor es su gran terraza, un espacio perfecto para disfrutar del aire libre, barbacoas o simplemente admirar las vistas a la plaza.
    
    Ubicado en una zona tranquila pero con todos los servicios cercanos: comercios, colegios y transporte público.
    
    ¡Ideal para familias o como inversión!`, 
   
    caracteristicas: [
        "3 amplias habitaciones equipadas con armarios empotrados",
        "2 cuartos de baño (uno completo y otro con ducha)",
        "Salón espacioso y acogedor",
        "Cocina totalmente equipada con electrodomésticos de calidad",
        "Todo el inmueble es totalmente exterior con excelente entrada de luz natural",
        "Gran terraza para disfrutar del aire libre, barbacoas o admirar vistas"
    ],
  
    precio: {
        valor: 109999,
        moneda: "€",
        precioPorM2: 957,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 115,
        dormitorios: 3,
        banos: 2, 
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Balcón"]
    },
    
    certificacionEnergetica: {
        consumo: {
            valor: 0.1,
            unidad: "kWh/m2 año"
        },
        emisiones: {
            valor: 0.1,
            unidad: "C02/m2 año"
        }
    },
    
    edificio: {
        planta: "3",
        orientacion: "Exterior",
        ascensor: true
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: "Individual",
            combustible: "Eléctrica"
        },
        aireAcondicionado: null 
    },
    
    ubicacion: {
        direccion: "Plaza de la Iglesia s/n, Jerónimo y Avileses, Campo de Murcia, Murcia",
        planta: "3",
        barrio: "Jerónimo y Avileses",
        distrito: "Campo de Murcia",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1405526317,
        img1405526318,
        img1405526319,
        img1405526320,
        img1405526321,
        img1405526531,
        img1405526533,
        img1405526534,
        img1405526558,
        img1405526565,
        img1405526566,
        img1405526567,
        img1405526568,
        img1405526569,
        img1405526571,
        img1405526572,
        img1405526573,
        img1405526574,
        img1405526585,
        img1405526587,
    ],
    
    // Campos adicionales específicos de este tipo de propiedad
    tipoPropiedad: "Ático dúplex",
    tieneVistas: true,
    descripcionVistas: "Vistas impresionantes a la plaza",
    zonaComunitaria: null,
    
};

export default aticoAvileses;