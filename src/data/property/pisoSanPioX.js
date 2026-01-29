import img1378881190 from '../../assets/property/pisoSanPíoX/1378881190.jpg';
import img1378881208 from '../../assets/property/pisoSanPíoX/1378881208.jpg';
import img1378881212 from '../../assets/property/pisoSanPíoX/1378881212.jpg';
import img1378881215 from '../../assets/property/pisoSanPíoX/1378881215.jpg';
import img1378881225 from '../../assets/property/pisoSanPíoX/1378881225.jpg';
import img1378881227 from '../../assets/property/pisoSanPíoX/1378881227.jpg';

const pisoSanPioX = {
    titulo: "¡Espectacular piso en la innovadora zona de San Pío X!",
    
    descripcion: `Totalmente exterior y frente a jardines¡ Descubre tu nuevo hogar en un entorno único y lleno de vida! En el corazón de la vibrante y moderna zona de San Pío X, te presentamos este piso espectacular de 2 dormitorios, diseñado para disfrutar de la comodidad y la tranquilidad que mereces. Totalmente exterior, con vistas privilegiadas a zonas ajardinadas que invitan a la relajación diaria, este inmueble es un oasis urbano perfecto para familias o parejas.
    
    ¡Y todo ello en un ambiente muy tranquilo, rodeado de naturaleza pero sin renunciar a la ciudad! A solo unos minutos a pie de todos los servicios esenciales: supermercados, colegios, centros médicos y ocio. Además, con excelente conexión de transporte público (metro, bus y cercanías), llegar al centro de la ciudad o a cualquier parte será pan comido.
    
    ¿Te imaginas despertando cada día en este paraíso urbano? ¡Contacta ahora y agenda tu visita!`,
    
    caracteristicas: [
        "2 dormitorios amplios y luminosos, ideales para el descanso",
        "Salón espacioso, perfecto para momentos en familia o con amigos",
        "Cocina independiente y equipada, lista para tus creaciones culinarias",
        "Balcón soleado, el lugar ideal para tomar un café matutino con vistas verdes",
        "Plaza de garaje incluida, para mayor comodidad en el día a día",
        "Trastero adicional, para guardar todo lo que necesites sin complicaciones",
        "Totalmente exterior, con vistas privilegiadas a zonas ajardinadas",
        "Ambiente muy tranquilo, rodeado de naturaleza pero sin renunciar a la ciudad"
    ],
 
    precio: {
        valor: 149000,
        moneda: "EUR",
        precioPorM2: 2014,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 74,
        dormitorios: 2,
        banos: 1,
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Trastero", "Balcón", "Plaza de garaje incluida en el precio"],
        anoConstruccion: 2002
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
            combustible: "Bomba de frío/calor"
        },
        aireAcondicionado: null
    },
    
    ubicacion: {
        direccion: "PS CASTILLO OLITE 21, San Pío X, Sur, Murcia",
        bloqueEscalera: "Bloque / Esc. 1",
        planta: "2",
        puerta: "Puerta B",
        barrio: "San Pío X",
        distrito: "Sur",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1378881190,
        img1378881208,
        img1378881212,
        img1378881215,
        img1378881225,
        img1378881227
    ],
    
    // Campos adicionales específicos
    tipoPropiedad: "Piso",
    vistas: "Vistas privilegiadas a zonas ajardinadas"
};

export default pisoSanPioX;