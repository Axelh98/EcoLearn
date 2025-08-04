export type CategoryKey =
  | "paper-cardboard"
  | "plastic"
  | "glass"
  | "metal"
  | "electronics"
  | "textiles"
  | "organic"
  | "hazardous"

export interface Category {
  title: string
  icon: string
  description: string
  acceptedItems: string[]
  rejectedItems: string[]
  preparation: string[]
  environmentalImpact: {
    energySaved: string
    waterSaved: string
    landfillDiverted: string
  }
  tips: string[]
}

const categoryData: Record<CategoryKey, Category> = {
  "paper-cardboard": {
    title: "Papel y Cartón",
    icon: "📄",
    description:
      "El papel y el cartón son de los materiales más reciclados, con altas tasas de recuperación y múltiples posibilidades de reutilización.",
    acceptedItems: [
      "Diarios y revistas",
      "Hojas y documentos de oficina",
      "Cajas y embalajes de cartón",
      "Bolsas de papel y papel de regalo",
      "Libros y catálogos",
      "Cajas de cereales y empaques de alimentos",
      "Tubos y rollos de papel",
      "Sobres (incluidos los que tienen ventana)",
    ],
    rejectedItems: [
      "Papel con recubrimiento de cera",
      "Toallas de papel y pañuelos",
      "Papel carbón",
      "Fotografías",
      "Papel con residuos de comida",
      "Papel laminado",
      "Vasos de papel con recubrimiento plástico",
    ],
    preparation: [
      "Quitar cinta adhesiva, grapas y clips metálicos",
      "Mantener el material limpio y seco",
      "Aplastar las cajas para ahorrar espacio",
      "Retirar ventanas plásticas de los sobres",
      "Separar los tipos de papel si se requiere localmente",
    ],
    environmentalImpact: {
      energySaved: "40%",
      waterSaved: "50%",
      landfillDiverted: "1 tonelada de papel salva 17 árboles",
    },
    tips: [
      "Comprar productos con poco embalaje",
      "Usar ambos lados del papel antes de reciclar",
      "Preferir productos de papel reciclado",
      "Instalar un punto de reciclaje en casa o en la oficina",
    ],
  },

  plastic: {
    title: "Plástico",
    icon: "🥤",
    description:
      "El reciclaje del plástico varía según el tipo. Comprender los códigos de reciclaje ayuda a una correcta disposición y procesamiento.",
    acceptedItems: [
      "Botellas #1 PET (agua, gaseosa)",
      "Envases #2 HDPE (leche, detergente)",
      "Envases #5 PP (yogur, tapas)",
      "Envases de plástico transparente para alimentos",
      "Bolsas plásticas (solo en centros especiales)",
      "Películas y envolturas plásticas (en tiendas)",
      "Embalaje rígido de plástico",
    ],
    rejectedItems: [
      "Plásticos #3 PVC",
      "Plásticos #6 Poliestireno (telgopor)",
      "Plásticos #7 mixtos",
      "Bolsas plásticas en contenedores domiciliarios",
      "Envases sucios de comida",
      "Cubiertos y sorbetes de plástico",
      "Plásticos rotos",
    ],
    preparation: [
      "Verificar el número de reciclaje en la base",
      "Enjuagar los envases para remover restos de comida",
      "Quitar etiquetas si lo requiere la normativa local",
      "Mantener las tapas en las botellas (según nuevas pautas)",
      "Llevar las bolsas a centros de acopio específicos",
    ],
    environmentalImpact: {
      energySaved: "70%",
      waterSaved: "90%",
      landfillDiverted: "Evita más de 450 años de descomposición",
    },
    tips: [
      "Reducir el uso de plásticos desechables",
      "Optar por envases reutilizables",
      "Preferir productos hechos con plástico reciclado",
      "Apoyar negocios con embalaje libre de plástico",
    ],
  },

  glass: {
    title: "Vidrio",
    icon: "🍶",
    description:
      "El vidrio es 100% reciclable y se puede reciclar infinitamente sin perder calidad ni pureza.",
    acceptedItems: [
      "Botellas de vidrio (de todos los colores)",
      "Frascos y recipientes de vidrio",
      "Envases de alimentos y bebidas",
      "Frascos de cosméticos y medicinas",
      "Frascos de condimentos",
      "Frascos para comida infantil",
    ],
    rejectedItems: [
      "Vidrio de ventanas",
      "Espejos",
      "Focos",
      "Vasos y vajilla",
      "Vidrio resistente al calor (como Pyrex)",
      "Vidrio automotriz",
      "Cristalería fina",
    ],
    preparation: [
      "Retirar tapas y tapones",
      "Enjuagar para eliminar residuos de alimentos",
      "Quitar etiquetas si es sencillo",
      "Separar por color si lo exige la normativa local",
      "Manejar con cuidado para evitar roturas",
    ],
    environmentalImpact: {
      energySaved: "30%",
      waterSaved: "50%",
      landfillDiverted: "El vidrio nunca se descompone en rellenos sanitarios",
    },
    tips: [
      "Reutilizar frascos de vidrio para almacenamiento",
      "Preferir envases de vidrio frente al plástico",
      "Apoyar programas locales de reciclaje de vidrio",
      "Comprar productos en botellas retornables",
    ],
  },
metal: {
  title: "Metal",
  icon: "🥫",
  description:
    "Los metales son materiales altamente valiosos que pueden reciclarse indefinidamente sin perder sus propiedades.",
  acceptedItems: [
    "Latas y botellas de aluminio",
    "Latas de acero y hojalata",
    "Papel aluminio y bandejas",
    "Tapas y tapones metálicos",
    "Aerosoles vacíos",
    "Pequeños electrodomésticos metálicos",
    "Objetos de cobre y latón",
  ],
  rejectedItems: [
    "Latas de pintura con residuos",
    "Tanques de propano",
    "Envases de aceite de motor",
    "Contenedores de materiales peligrosos",
    "Electrodomésticos grandes (requieren tratamiento especial)",
  ],
  preparation: [
    "Enjuagar las latas para eliminar residuos de comida",
    "Quitar etiquetas de papel si se pueden retirar fácilmente",
    "Vaciar completamente los aerosoles",
    "Separar los diferentes tipos de metal si se requiere",
    "Aplastar latas para ahorrar espacio (opcional)",
  ],
  environmentalImpact: {
    energySaved: "95% para aluminio",
    waterSaved: "97%",
    landfillDiverted: "Las latas de aluminio pueden reciclarse infinitamente",
  },
  tips: [
    "Recolectar latas de aluminio para obtener recompensas en efectivo",
    "Elegir productos en envases metálicos",
    "Participar en campañas de reciclaje de metales",
    "Buscar productos metálicos con contenido reciclado",
  ],
},

electronics: {
  title: "Electrónicos",
  icon: "📱",
  description:
    "Los desechos electrónicos contienen materiales valiosos pero también sustancias peligrosas que requieren tratamiento especial.",
  acceptedItems: [
    "Teléfonos inteligentes y tablets",
    "Computadoras y laptops",
    "Televisores y monitores",
    "Impresoras y escáneres",
    "Consolas de videojuegos",
    "Pequeños electrodomésticos",
    "Cables y cargadores",
    "Baterías",
  ],
  rejectedItems: [
    "Artículos con datos personales no borrados",
    "Monitores CRT rotos (requieren tratamiento especial)",
    "Electrodomésticos grandes con refrigerantes",
  ],
  preparation: [
    "Hacer copia de seguridad y borrar todos los datos personales",
    "Quitar baterías si es posible",
    "Mantener los artículos intactos (no desarmar)",
    "Buscar recicladores certificados de e-waste",
    "Consultar programas de devolución del fabricante",
  ],
  environmentalImpact: {
    energySaved: "Recupera metales preciosos",
    waterSaved: "Previene la contaminación tóxica",
    landfillDiverted: "Contiene plomo, mercurio y otras toxinas",
  },
  tips: [
    "Donar electrónicos que funcionen",
    "Usar programas de canje del fabricante",
    "Comprar electrónicos reacondicionados",
    "Extender la vida útil con buen mantenimiento",
  ],
},

textiles: {
  title: "Textiles",
  icon: "👕",
  description:
    "El reciclaje de textiles reduce residuos y conserva recursos, aunque las opciones dependen de la condición y tipo de material.",
  acceptedItems: [
    "Ropa en cualquier condición",
    "Zapatos y accesorios",
    "Sábanas y ropa de cama",
    "Toallas y paños",
    "Cortinas y drapes",
    "Peluches",
    "Retazos de tela",
  ],
  rejectedItems: [
    "Artículos con materiales peligrosos",
    "Textiles altamente contaminados",
    "Artículos con moho u hongos",
  ],
  preparation: [
    "Limpiar los artículos antes de donar/reciclar",
    "Separar según condición (donar vs reciclar)",
    "Quitar componentes no textiles cuando sea posible",
    "Usar contenedores de reciclaje textil para artículos dañados",
    "Considerar proyectos de reutilización creativa antes de desechar",
  ],
  environmentalImpact: {
    energySaved: "Reduce la demanda de manufactura",
    waterSaved: "La producción de algodón consume mucha agua",
    landfillDiverted: "Los textiles pueden tardar más de 200 años en descomponerse",
  },
  tips: [
    "Comprar artículos de calidad que duren más",
    "Reparar y remendar cuando sea posible",
    "Comprar en tiendas de segunda mano",
    "Participar en intercambios de ropa",
  ],
},

organic: {
  title: "Residuos Orgánicos",
  icon: "🍎",
  description:
    "Los residuos orgánicos pueden compostarse para crear abono rico en nutrientes y reducir las emisiones de metano en vertederos.",
  acceptedItems: [
    "Restos de frutas y verduras",
    "Posos de café y bolsitas de té",
    "Cáscaras de huevo y nueces",
    "Podas de jardín y hojas",
    "Recortes de césped",
    "Ramitas y ramas pequeñas",
    "Toallas y servilletas de papel",
    "Cartón sin recubrimiento",
  ],
  rejectedItems: [
    "Restos de carne y pescado",
    "Productos lácteos",
    "Aceites y grasas",
    "Desechos de mascotas",
    "Plantas enfermas",
    "Malezas con semillas",
    "Madera tratada",
  ],
  preparation: [
    "Cortar los residuos grandes en pedazos pequeños",
    "Mezclar materiales verdes y marrones",
    "Mantener el compost húmedo pero no empapado",
    "Revolver el compost regularmente para aireación",
    "Monitorear la temperatura para una buena descomposición",
  ],
  environmentalImpact: {
    energySaved: "Reduce las emisiones de metano",
    waterSaved: "Mejora la retención de agua en el suelo",
    landfillDiverted: "El 30% de los residuos son orgánicos",
  },
  tips: [
    "Empezar una compostera en casa",
    "Usar el compost terminado en huertas y jardines",
    "Participar en programas municipales de residuos orgánicos",
    "Reducir el desperdicio de alimentos con planificación de comidas",
  ],
},

hazardous: {
  title: "Materiales Peligrosos",
  icon: "⚠️",
  description:
    "Los materiales peligrosos requieren tratamiento especial para proteger la salud humana y el medio ambiente.",
  acceptedItems: [
    "Pinturas y diluyentes",
    "Aceite de motor y líquidos automotrices",
    "Pesticidas y herbicidas",
    "Productos de limpieza",
    "Baterías (de todo tipo)",
    "Focos fluorescentes",
    "Tanques de propano",
    "Residuos médicos punzantes",
  ],
  rejectedItems: [
    "Materiales radiactivos",
    "Explosivos",
    "Materiales con asbesto",
    "Residuos médicos (excepto programas para punzantes)",
  ],
  preparation: [
    "Mantener los productos en sus envases originales",
    "Nunca mezclar productos químicos diferentes",
    "Transportar con seguridad a los puntos de recolección",
    "Usar completamente los productos cuando sea posible",
    "Seguir los calendarios locales de recolección especial",
  ],
  environmentalImpact: {
    energySaved: "Evita la contaminación ambiental",
    waterSaved: "Protege las aguas subterráneas",
    landfillDiverted: "Evita filtraciones tóxicas en vertederos",
  },
  tips: [
    "Comprar solo lo necesario",
    "Elegir alternativas menos tóxicas",
    "Compartir productos no usados con vecinos",
    "Participar en jornadas de recolección de residuos peligrosos",
  ],
}
}
export default categoryData
