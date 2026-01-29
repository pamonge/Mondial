const pisoAlquilerCorvera = {
    titulo: "Alquiler de Piso en Paseo Marqués de Corvera",
    
    descripcion: "Piso Reformado de 4 Dormitorios en Paseo Marqués de Corvera - Luminoso y Equipado, ¡Ideal para Familias! ¡Oportunidad única en el corazón de Murcia! Se alquila piso recientemente reformado, muy luminoso y listo para entrar a vivir. Ubicado en el prestigioso Paseo Marqués de Corvera, esta vivienda de 4 dormitorios amplios es perfecta para familias o profesionales que buscan comodidad y estilo.",
    
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
    
    estado: "Ubicación: En el Paseo Marqués de Corvera, una zona céntrica y bien comunicada de Murcia, cerca de comercios, colegios, parques y transporte público (metro, autobuses). Fácil acceso a las principales vías de la ciudad.",
    
    llamadaAccion: "",
    
    acciones: [
        {
            tipo: "descarga",
            texto: "Descargar folleto",
            url: "#"
        }
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
    
    imagenes: [],
    
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