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
    
    imagenes: [],
    
    // Campos adicionales específicos de este tipo de propiedad
    tipoPropiedad: "Ático dúplex",
    tieneVistas: true,
    descripcionVistas: "Vistas impresionantes a la plaza",
    zonaComunitaria: null,
    
};