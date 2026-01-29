const chaletRusticoMula = {
    titulo: "¡Exclusivo chalet rústico con piscina y parcela de 3.175 m² en la Huerta de Mula!",
    
    descripcion: "Preciosa villa de estilo rústico construida en 2003, con muchísimo encanto y perfectamente mantenida. Situada en plena Huerta de Mula, junto a la Vía Verde del Noroeste, en una zona residencial tranquila a solo 3 minutos en coche del centro de Mula. Superficie construida total: 300 m²",
    
    caracteristicas: [
        "Vivienda principal: 4 dormitorios amplios (el principal con baño en suite)",
        "Pequeño estudio / despacho",
        "2 baños completos",
        "Cocina independiente de 25 m² totalmente equipada",
        "Enorme salón-comedor de 80 m² con mucha luz",
        "Porche cubierto de 30 m²",
        "Terraza-solárium accesible por escalera exterior",
        "Suelos de terracota, vigas vistas, maderas nobles y rejas de forja",
        "Calefacción central por radiadores en toda la casa",
        "Aire acondicionado en salón-comedor y cocina",
        "Despensa",
        "Piscina 4 × 9 m con playa de césped natural y borde de arcilla",
        "Barbacoa cubierta + horno de leña (15 m²)",
        "Porche de madera de 40 m² junto a barbacoa y trasteros",
        "Gran comedor de verano sin terminar de 50 m² (ideal para terminar al gusto)",
        "Almacén general 25 m² + trastero de ropa 10 m² + cobertizo herramientas 10 m²",
        "Baño exterior completo 5 m²",
        "Aparcamiento cubierto para 3 vehículos",
        "Puerta de hierro motorizada",
        "Parcela totalmente vallada: 3.175 m² ajardinada con árboles y plantas de más de 10 años, riego automático y puntos de luz nocturna"
    ],
    
    estado: "Ubicación privilegiada: Mula (18.000 hab.): todos los servicios (Mercadona, clínicas, colegios, teatro, restaurantes…). Casco histórico precioso y mucho ambiente. A 25 km de Murcia capital. A 40 km del Aeropuerto Internacional de Corvera. A 70-80 km de las playas de Mazarrón, La Manga, Cartagena o Alicante. Al lado del Parque Natural Sierra Espuña y la Vía Verde (perfecta para paseos, bici o running).",
    
    llamadaAccion: "",
    
    acciones: [
        {
            tipo: "descarga",
            texto: "Descargar folleto",
            url: "#"
        }
    ],
    
    precio: {
        valor: 439000,
        moneda: "EUR",
        precioPorM2: 1463,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 300,
        dormitorios: 4,
        banos: 3,
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Trastero", "Plaza de garaje"],
        anoConstruccion: 2003,
        orientacion: "Norte, Sur, Este, Oeste",
        metrosParcela: 3175
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
            tipo: "Centralizada",
            combustible: "Otro"
        },
        aireAcondicionado: true,
        piscina: true,
        jardin: true
    },
    
    ubicacion: {
        direccion: "Via verde de Mula s/n, Mula",
        urbanizacion: "Urbanización Via Verde de Mula",
        planta: null,
        barrio: null,
        distrito: null,
        ciudad: "Mula",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [],
    
    // Campos adicionales específicos
    tipoPropiedad: "Chalet Rústico",
    estilo: "Rústico",
    tienePiscina: true,
    tamanoPiscina: "4 × 9 m",
    metrosParcelaTotal: 3175,
    parcelaVallada: true,
    barbacoa: true,
    hornoLenya: true,
    aparcamientoCubierto: true,
    capacidadAparcamiento: 3,
    puertaMotorizada: true,
    distanciaCentroMula: "3 minutos en coche",
    distanciaMurciaCapital: "25 km",
    distanciaAeropuertoCorvera: "40 km",
    distanciaPlayas: "70-80 km",
    proximidadParqueNatural: "Parque Natural Sierra Espuña",
    viaVerde: true,
    riegoAutomatico: true,
    iluminacionExterior: true
};