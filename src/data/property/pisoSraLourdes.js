const pisoSraLourdes = {
    titulo: "¡Descubre este espectacular piso en El Palmar que te está esperando!",
    
    descripcion: "Con 116 m² construidos, este hogar cuenta con 3 amplias habitaciones, perfectas para disfrutar de la comodidad y el espacio que mereces. El salón luminoso se convierte en el lugar ideal para relajarte, mientras que la cocina ofrece un ambiente funcional y acogedor. Además, podrás disfrutar de una terraza y un balcón donde respirar aire fresco y disfrutar de las vistas.",
    
    caracteristicas: [
        "3 amplias habitaciones",
        "Salón luminoso, ideal para relajarte",
        "Cocina funcional y acogedora",
        "Terraza y balcón para respirar aire fresco y disfrutar de vistas",
        "Totalmente exterior, con excelente iluminación natural durante todo el día",
        "Calefacción y aire acondicionado con bomba de frío/calor",
        "Propiedad en estado impecable, lista para entrar a vivir",
        "Ubicación privilegiada cerca de servicios esenciales: escuelas, supermercados y hospitales",
        "Incluye plaza de garaje en el precio"
    ],
    
    estado: "Este piso es totalmente exterior, lo que garantiza una excelente iluminación natural durante todo el día. La calefacción y el aire acondicionado con bomba de frío/calor te proporcionarán el clima perfecto en cualquier época del año. La propiedad se encuentra en un estado impecable, lista para entrar a vivir.",
    
    llamadaAccion: "¡No dejes pasar la oportunidad de hacer de este piso tu nuevo hogar!",
    
    acciones: [
        {
            tipo: "descarga",
            texto: "Descargar folleto",
            url: "#"
        }
    ],
    
    precio: {
        valor: 114000,
        moneda: "EUR",
        precioPorM2: 983,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 116,
        dormitorios: 3,
        banos: 1,
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Balcón", "Plaza de garaje incluida en el precio"],
        orientacion: "Norte, Sur"
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
        ascensor: false
    },
    
    equipamientoTecnico: {
        calefaccion: {
            tipo: "Individual",
            combustible: "Bomba de frío/calor"
        },
        aireAcondicionado: true
    },
    
    ubicacion: {
        direccion: "Calle Nuestra Señora de Lourdes 4, El Palmar, Pedanías Oeste, Murcia",
        planta: "3",
        barrio: "El Palmar",
        distrito: "Pedanías Oeste",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [],
    
    // Campos adicionales específicos
    tipoPropiedad: "Piso"
};