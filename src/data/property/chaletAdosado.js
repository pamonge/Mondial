const chaletAdosado = {
    titulo: "Se vende chalet adosado en la zona de Juan de Borbón, Murcia¡Oportunidad única!",
    
    descripcion: "Vivienda adosada en Calle Parpallota, una de las áreas más demandadas de Murcia capital, junto a la Avenida Juan de Borbón. Ubicación privilegiada en una zona tranquila y residencial, con excelente comunicación: tranvía, supermercados, colegios, farmacias y todos los servicios a solo minutos del centro de la ciudad. Esta propiedad de 191 m² construidos se distribuye en 4 plantas, con una orientación excelente que garantiza luminosidad natural y espacios amplios y funcionales, perfectos para familias que buscan comodidad y calidad de vida.",
    
    caracteristicas: [
        "Distribución por 4 plantas",
        "Planta sótano: Amplia habitación multiusos (ideal como sala de juegos, gimnasio, despacho o zona de ocio)",
        "Planta sótano: Garaje privado con gran armario empotrado hecho a medida",
        "Planta baja: Salón acogedor, cocina totalmente equipada, aseo, porche y patio exterior",
        "Primera planta: 3 dormitorios con armarios empotrados, 3 baños completos (uno en suite)",
        "Primera planta: Dormitorio principal con terraza privada",
        "Segunda planta: Buhardilla con vestidor a medida y gran terraza, perfecta como solárium o zona chill out",
        "Varias terrazas y balcón",
        "Vivienda luminosa y bien distribuida",
        "Zona tranquila y familiar",
        "Excelente conexión con transporte público (tranvía)",
        "Lista para entrar a vivir, con aire acondicionado y trastero"
    ],
    
    estado: "Adosado en Murcia capital, zona Juan de Borbón. Garaje incluido. Armarios empotrados y vestidor personalizado.",
    
    llamadaAccion: "No pierdas esta ocasión de vivir en una de las mejores zonas de Murcia, con todo lo necesario al alcance.",
    
    acciones: [
        {
            tipo: "descarga",
            texto: "Descargar folleto",
            url: "#"
        }
    ],
    
    precio: {
        valor: 425000,
        moneda: "EUR",
        precioPorM2: 2225,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 191,
        dormitorios: 4,
        banos: 3,
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Trastero", "Balcón", "Plaza de garaje"]
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
        aireAcondicionado: true
    },
    
    ubicacion: {
        direccion: "Calle La Parpallota 16, Zona Juan de Borbón, Norte, Murcia",
        planta: null,
        barrio: "Zona Juan de Borbón",
        distrito: "Norte",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [],
    
    // Campos adicionales específicos
    tipoPropiedad: "Chalet Adosado",
    numeroPlantas: 4,
    tieneGaraje: true,
    numeroGarajes: 1,
    distribucionPlantas: {
        sotano: "Amplia habitación multiusos + Garaje privado con armario empotrado",
        baja: "Salón, cocina, aseo, porche y patio exterior",
        primera: "3 dormitorios con armarios empotrados, 3 baños (uno en suite)",
        segunda: "Buhardilla con vestidor a medida y gran terraza"
    }
};