const aticoBeniajan = {
    titulo: "¡OPORTUNIDAD ÚNICA! Ático Dúplex 3 hab. + garaje + trastero en el corazón de Beniaján!",
    
    descripcion: `Espectacular ático dúplex en pleno centro de Beniaján, en una de las mejores ubicaciones de la localidad. Edificio del año 2006 en perfecto estado de conservación. Superficie construida: 110m2.
    
    Vivienda alquilada con un alquiler mensual de 650 euros, finalización del contrato de alquiler 2 años. Vivienda lista para entrar a vivir. Situación inmejorable: a 2 minutos andando de todos los servicios (supermercados, farmacia, colegios, centro de salud, bares y restaurantes). Perfectamente comunicada con Murcia capital en menos de 10 minutos por autovía.`,
    
    caracteristicas: [
        "Planta baja del ático: Amplio salón comedor muy luminoso, cocina independiente totalmente equipada, 1 dormitorio doble y 1 baño completo",
        "Planta superior: 2 dormitorios dobles (el principal con mucha luz) y segundo baño completo",
        "Totalmente exterior a 4 vientos, mucha luz natural todo el día",
        "Terraza grande en la planta superior ideal para disfrutar las vistas y las tardes de verano",
        "Plaza de garaje y trastero incluidos en el precio",
        "Aire acondicionado por conductos (frío/calor)",
        "Carpintería exterior de aluminio con climalit, persianas eléctricas, suelos de mármol, puertas de madera maciza"
    ],
           
    precio: {
        valor: 159000,
        moneda: "EUR",
        precioPorM2: 1445,
        unidadPrecioM2: "eur/m2",
        accion: "Calcular hipoteca"
    },
    
    caracteristicasBasicas: {
        metrosCuadradosConstruidos: 110,
        dormitorios: 3,
        banos: 2,
        terrazas: 1,
        estadoVivienda: "Segunda mano/Buen estado",
        equipamiento: ["Armarios empotrados", "Trastero", "Balcón", "Plaza de garaje incluida en el precio"],
        anoConstruccion: 2006
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
            combustible: "Bomba de frío/calor"
        },
        aireAcondicionado: true
    },
    
    ubicacion: {
        direccion: "Calle Algezares 112, Beniaján, Pedanías Este, Murcia",
        planta: "3",
        barrio: "Beniaján",
        distrito: "Pedanías Este",
        ciudad: "Murcia",
        provincia: "Murcia",
        coordenadas: {
            lat: null,
            lng: null
        }
    },
    
    imagenes: [],
    
    // Información adicional específica de esta propiedad
    tipoPropiedad: "Ático Dúplex",
    alquilado: true,
    alquilerMensual: 650,
    contratoAlquilerAnos: 2,
    metrosSuperficieConstruida: 110
};