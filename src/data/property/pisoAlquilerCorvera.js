import img1404460974 from '../../assets/property/pisoAlquilerCorvera/1404460974.jpg';
import img1404460979 from '../../assets/property/pisoAlquilerCorvera/1404460979.jpg';
import img1404460996 from '../../assets/property/pisoAlquilerCorvera/1404460996.jpg';
import img1404460997 from '../../assets/property/pisoAlquilerCorvera/1404460997.jpg';
import img1404460998 from '../../assets/property/pisoAlquilerCorvera/1404460998.jpg';
import img1404461000 from '../../assets/property/pisoAlquilerCorvera/1404461000.jpg';
import img1404461001 from '../../assets/property/pisoAlquilerCorvera/1404461001.jpg';
import img1404461007 from '../../assets/property/pisoAlquilerCorvera/1404461007.jpg';
import img1404461008 from '../../assets/property/pisoAlquilerCorvera/1404461008.jpg';
import img1404461009 from '../../assets/property/pisoAlquilerCorvera/1404461009.jpg';
import img1404461029 from '../../assets/property/pisoAlquilerCorvera/1404461029.jpg';
import img1404461037 from '../../assets/property/pisoAlquilerCorvera/1404461037.jpg';
import img1404461045 from '../../assets/property/pisoAlquilerCorvera/1404461045.jpg';
import img1404461046 from '../../assets/property/pisoAlquilerCorvera/1404461046.jpg';
import img1404461047 from '../../assets/property/pisoAlquilerCorvera/1404461047.jpg';
import img1404461048 from '../../assets/property/pisoAlquilerCorvera/1404461048.jpg';

const pisoAlquilerCorvera = {
    titulo: "Alquiler de Piso en Paseo Marqués de Corvera",
    
    descripcion: `Piso Reformado de 4 Dormitorios en Paseo Marqués de Corvera - Luminoso y Equipado, ¡Ideal para Familias! ¡Oportunidad única en el corazón de Murcia! Se alquila piso recientemente reformado, muy luminoso y listo para entrar a vivir. Ubicado en el prestigioso Paseo Marqués de Corvera, esta vivienda de 4 dormitorios amplios es perfecta para familias o profesionales que buscan comodidad y estilo.
    
    Ubicación: En el Paseo Marqués de Corvera, una zona céntrica y bien comunicada de Murcia, cerca de comercios, colegios, parques y transporte público (metro, autobuses). Fácil acceso a las principales vías de la ciudad.`,
    
    caracteristicas: [
        "4 habitaciones espaciosas, ideales para familia o home office",
        "2 baños completos, modernos y funcionales, con acabados de calidad",
        "Cocina totalmente equipada con electrodomésticos de última generación (nevera, horno, lavavajillas, microondas, etc.), lista para usar",
        "Todo el piso ha sido renovado con materiales de alta calidad, suelos nuevos, pintura fresca y instalaciones actualizadas",
        "Grandes ventanas que permiten entrada de luz natural durante todo el día, creando un ambiente cálido y acogedor",
        "Calefacción/aire acondicionado (según temporada)",
        "Armarios empotrados en las habitaciones",
        "Salón comedor amplio para disfrutar en familia"
    ],

    precio: {
        valor: 1200,
        moneda: "EUR/mes",
        precioPorM2: null,
        unidadPrecioM2: null,
        accion: null,
        fianza: 1
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 120,
        dormitorios: 4,
        banos: 2,
        terrazas: null,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Balcón", "Cocina con electrodomésticos y casa amueblada"],
        orientacion: "Este, Oeste",
        tipoUso: "Residencial, vivienda habitual"
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
        planta: "4",
        orientacion: "Exterior",
        ascensor: true
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: "Centralizada",
            combustible: "Otro"
        },
        aireAcondicionado: null
    },
    
    ubicacion: {
        direccion: "Paseo Marqués de Corvera 7, El Carmen, Sur, Murcia",
        planta: "4",
        barrio: "El Carmen",
        distrito: "Sur",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1404460974,
        img1404460979,
        img1404460996,
        img1404460997,
        img1404460998,
        img1404461000,
        img1404461001,
        img1404461007,
        img1404461008,
        img1404461009,
        img1404461029,
        img1404461037,
        img1404461045,
        img1404461046,
        img1404461047,
        img1404461048
    ],
    
    // Campos adicionales específicos para alquiler
    tipoTransaccion: "alquiler",
    condicionesAlquiler: {
        maximoPersonas: 4,
        apropiadoParaNinos: true,
        admiteMascotas: true
    },
    amueblado: true,
    electrodomesticosIncluidos: true
};

export default pisoAlquilerCorvera;