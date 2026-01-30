import img1383369873 from '../../assets/property/pisoPrincAsturias/1383369873.jpg';
import img1383370993 from '../../assets/property/pisoPrincAsturias/1383370993.jpg';
import img1383370994 from '../../assets/property/pisoPrincAsturias/1383370994.jpg';
import img1383371011 from '../../assets/property/pisoPrincAsturias/1383371011.jpg';
import img1383371060 from '../../assets/property/pisoPrincAsturias/1383371060.jpg';
import img1383371061 from '../../assets/property/pisoPrincAsturias/1383371061.jpg';
import img1383371062 from '../../assets/property/pisoPrincAsturias/1383371062.jpg';
import img1383371072 from '../../assets/property/pisoPrincAsturias/1383371072.jpg';
import img1383371075 from '../../assets/property/pisoPrincAsturias/1383371075.jpg';
import img1383371076 from '../../assets/property/pisoPrincAsturias/1383371076.jpg';
import img1383371077 from '../../assets/property/pisoPrincAsturias/1383371077.jpg';
import img1383371078 from '../../assets/property/pisoPrincAsturias/1383371078.jpg';
import img1383371079 from '../../assets/property/pisoPrincAsturias/1383371079.jpg';
import img1383371080 from '../../assets/property/pisoPrincAsturias/1383371080.jpg';
import img1383371082 from '../../assets/property/pisoPrincAsturias/1383371082.jpg';
import img1383371085 from '../../assets/property/pisoPrincAsturias/1383371085.jpg';
import img1383371086 from '../../assets/property/pisoPrincAsturias/1383371086.jpg';
import img1383371087 from '../../assets/property/pisoPrincAsturias/1383371087.jpg';
import img1383371088 from '../../assets/property/pisoPrincAsturias/1383371088.jpg';

const pisoPrincipeAsturias = {
    titulo: "¡Descubre tu nuevo hogar en una ubicación privilegiada! Piso en Principe de asturias",
    
    descripcion: `Este encantador piso de 70 m² construidos te ofrece la comodidad y el estilo que buscas. Situado en una planta toda exterior, disfruta de una doble orientación sur y oeste, que garantiza sol y luminosidad durante todo el día. Con dos dormitorios acogedores, un baño y armarios empotrados, este espacio está diseñado para tu confort.
    
    Tendrás la tranquilidad que deseas a poca distancia del bullicioso centro de la ciudad. La conexión con la autovía es excelente, muy cerca del tranvía, facilitando tus desplazamientos diarios.
    
    ¡No dejes pasar esta oportunidad y ven a visitarlo!`,
    
    caracteristicas: [
        "Doble orientación sur y oeste, garantiza sol y luminosidad durante todo el día",
        "2 dormitorios acogedores",
        "1 baño",
        "Armarios empotrados",
        "Conductos de aire centralizado frío/calor",
        "Suelos de mármol, aportando un toque de elegancia",
        "Plaza de garaje incluida",
        "Trastero en el mismo edificio"
    ],
 
    precio: {
        valor: 279900,
        moneda: "EUR",
        precioPorM2: 3999,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca",
        gastosComunidad: 33
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 70,
        dormitorios: 2,
        banos: 1,
        terrazas: null,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Trastero", "Balcón", "Plaza de garaje incluida en el precio"],
        anoConstruccion: 2003,
        orientacion: "Sur, Oeste"
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
            tipo: "Centralizada",
            combustible: "Otro"
        },
        aireAcondicionado: true
    },
    
    ubicacion: {
        direccion: "PS FUENTE 3, Vista Alegre, Norte, Murcia",
        bloqueEscalera: "Bloque / Esc. 1",
        planta: "2",
        puerta: "Puerta E",
        barrio: "Vista Alegre",
        distrito: "Norte",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [
        img1383369873,
        img1383370993,
        img1383370994,
        img1383371011,
        img1383371060,
        img1383371061,
        img1383371062,
        img1383371072,
        img1383371075,
        img1383371076,
        img1383371077,
        img1383371078,
        img1383371079,
        img1383371080,
        img1383371082,
        img1383371085,
        img1383371086,
        img1383371087,
        img1383371088
    ],
    
    // Campos adicionales específicos
    tipoPropiedad: "Piso",
    conductosAireCentralizado: true,
    suelosMarmol: true,
    gastosComunidadMensual: 33,
    potencialUso: "Vivienda habitual o inversión para alquiler"
};

export default pisoPrincipeAsturias;