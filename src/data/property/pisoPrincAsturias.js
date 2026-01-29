const pisoPrincipeAsturias = {
    titulo: "¡Descubre tu nuevo hogar en una ubicación privilegiada! Piso en Principe de asturias",
    
    descripcion: "Este encantador piso de 70 m² construidos te ofrece la comodidad y el estilo que buscas. Situado en una planta toda exterior, disfruta de una doble orientación sur y oeste, que garantiza sol y luminosidad durante todo el día. Con dos dormitorios acogedores, un baño y armarios empotrados, este espacio está diseñado para tu confort.",
    
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
    
    estado: "Tendrás la tranquilidad que deseas a poca distancia del bullicioso centro de la ciudad. La conexión con la autovía es excelente, muy cerca del tranvía, facilitando tus desplazamientos diarios.",
    
    llamadaAccion: "¡No dejes pasar esta oportunidad y ven a visitarlo!",
    
    acciones: [
        {
            tipo: "descarga",
            texto: "Descargar folleto",
            url: "#"
        }
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
    
    imagenes: [],
    
    // Campos adicionales específicos
    tipoPropiedad: "Piso",
    conductosAireCentralizado: true,
    suelosMarmol: true,
    gastosComunidadMensual: 33,
    potencialUso: "Vivienda habitual o inversión para alquiler"
};