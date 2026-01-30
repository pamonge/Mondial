import img1396598466 from '../../assets/property/localSanLorenzo/1396598466.jpg';

const localSanLorenzo = {
    titulo: "",
    
    descripcion: "",
    
    caracteristicas: [],
    
    precio: {
        valor: 159900,
        moneda: "EUR",
        precioPorM2: 1552,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 103,
        dormitorios: null,
        banos: 3,
        terrazas: null,
        estadoVivienda: "Segunda mano/A reformar",
        equipamiento: ["5 estancias", "Situación: A pie de calle", "Hace esquina", "3 escaparates"]
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
        planta: "Bajo",
        orientacion: null,
        ascensor: null,
        metrosLinealesFachada: 25
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: null,
            combustible: null
        },
        aireAcondicionado: true,
        salidaHumos: true
    },
    
    ubicacion: {
        direccion: "Calle Doctor Fleming 4, San Lorenzo, Centro, Murcia",
        planta: "Bajo",
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
        img1396598466,
    ],
    
    // Campos adicionales específicos
    tipoPropiedad: "Local Comercial",
    usoComercial: true,
    metrosFachada: 25
};

export default localSanLorenzo;