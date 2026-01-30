import img1391888661 from '../../assets/property/casaAljucer/1391888661.jpg';
import img1400527022 from '../../assets/property/casaAljucer/1400527022.jpg';
import img1400527231 from '../../assets/property/casaAljucer/1400527231.jpg';

const casaAljucer = {
    titulo: "¡Oportunidad única en el corazón de Aljucer! Casa con parcela de 350 m² lista para reformar",
    
    descripcion: `"Casa independiente de 150 m² construidos en parcela de 350 m², ubicada en el centro de Aljucer (Murcia), una pedanía tranquila y bien conectada, a solo minutos del centro de Murcia. Esta vivienda, totalmente exterior y con todas las orientaciones para máxima luminosidad natural, es ideal para quienes buscan un proyecto de reforma personalizado. Dispone de amplios espacios y grandes posibilidades para adaptarla a tu gusto.
    
    Ubicación privilegiada: Muy cerca de la autovía, con todos los servicios a mano: gasolinera, farmacia, colegio, supermercados y transporte público. ¡Vive la tranquilidad de la huerta murciana sin renunciar a la comodidad!
    
    ¡No dejes pasar esta oportunidad de inversión en una zona en crecimiento!`,
    
    caracteristicas: [
        "Amplio salón con chimenea de leña, perfecto para crear un ambiente cálido y acogedor",
        "3 habitaciones grandes y luminosas",
        "Cuarto de baño completo y espacioso",
        "Cocina grande, totalmente exterior",
        "Lavadero independiente",
        "Trastero de 40 m²",
        "Patio exterior de 50 m²",
        "Terreno adicional de 350 m² con potencial para jardín, huerta o ampliaciones"
    ],
        
    precio: {
        valor: 199900,
        moneda: "EUR",
        precioPorM2: 1333,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 150,
        dormitorios: 3,
        banos: 1,
        terrazas: 1,
        estadoVivienda: "Segunda mano/A reformar",
        equipamiento: ["Trastero", "Plaza de garaje"],
        anoConstruccion: 1994,
        orientacion: "Norte, Sur, Este, Oeste",
        metrosParcela: 490
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
        planta: null,
        orientacion: null,
        ascensor: null
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: "Individual",
            combustible: "Bomba de frío/calor"
        },
        aireAcondicionado: true,
        jardin: true
    },
    
    ubicacion: {
        direccion: "Carril Manias 15, Aljucer, Pedanías Oeste, Murcia",
        planta: null,
        barrio: "Aljucer",
        distrito: "Pedanías Oeste",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1391888661,
        img1400527022,
        img1400527231
    ],
    
    // Campos adicionales específicos
    tipoPropiedad: "Casa Independiente",
    tieneChimenea: true,
    tipoChimenea: "Leña",
    metrosTrastero: 40,
    metrosPatio: 50,
    metrosParcelaDescripcion: 350,
    lavaderoIndependiente: true
};

export default casaAljucer