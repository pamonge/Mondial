import img1377340893 from '../../assets/property/pisoCentroMurcia/1377340893.jpg';
import img1377340894 from '../../assets/property/pisoCentroMurcia/1377340894.jpg';
import img1377340953 from '../../assets/property/pisoCentroMurcia/1377340953.jpg';
import img1377340954 from '../../assets/property/pisoCentroMurcia/1377340954.jpg';
import img1377340965 from '../../assets/property/pisoCentroMurcia/1377340965.jpg';
import img1377340966 from '../../assets/property/pisoCentroMurcia/1377340966.jpg';

const pisoCentroMurcia = {
    titulo: "Piso en el centro de Murcia, en una excelente finca del año 2010.",
    
    descripcion: `Piso en el centro de Murcia, en una excelente finca del año 2010. Cuenta con 100 m² distribuidos en 3 dormitorios, 1 baño, salón-comedor y cocina independiente. Vivienda para reformar. Ubicación inmejorable, con todos los servicios a pocos pasos. Ideal como residencia habitual o inversión. ¡Solicita tu visita!
    
    Por mandato expreso del propietario, comercializamos este inmueble en exclusiva. Uno de nuestros agentes le facilitará toda la información necesaria y le atenderá personalmente, garantizándole un servicio de calidad. Por este motivo, se ruega no molestar al propietario, a los ocupantes de la propiedad o a los vecinos. Muchas gracias por su comprensión. Y si usted es agente inmobiliario y tiene un cliente para este inmueble, llámenos, estaremos encantados de colaborar.
    
    ¡Solicita tu visita!`,
    
    caracteristicas: [
        "3 dormitorios",
        "1 baño",
        "Salón-comedor",
        "Cocina independiente",
        "Vivienda para reformar",
        "Ubicación inmejorable, con todos los servicios a pocos pasos",
        "Ideal como residencia habitual o inversión"
    ],
 
    precio: {
        valor: 305000,
        moneda: "EUR",
        precioPorM2: 3050,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 100,
        dormitorios: 3,
        banos: 1,
        terrazas: null,
        estadoVivienda: "Segunda mano/A reformar",
        equipamiento: [],
        anoConstruccion: 2005
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
        planta: "2",
        orientacion: "Exterior",
        ascensor: true
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: "Individual",
            combustible: "Otro"
        },
        aireAcondicionado: null
    },
    
    ubicacion: {
        direccion: "Puerta Nueva 15, San Lorenzo, Centro, Murcia",
        planta: "2",
        barrio: "San Lorenzo",
        distrito: "Centro",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1377340893,
        img1377340894,
        img1377340953,
        img1377340954,
        img1377340965,
        img1377340966
    ],
    
    // Campos adicionales específicos
    tipoPropiedad: "Piso",
    exclusiva: true
};

export default pisoCentroMurcia;