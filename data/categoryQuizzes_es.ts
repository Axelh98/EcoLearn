import {Question} from "@/types/quizes"


export const categoryQuizzes_es: Record<string, Question[]> = {
  "paper-cardboard": [
    {
      question: "¿Cuál de estos productos de papel NO debe reciclarse?",
      options: [
        "Cajas de cartón",
        "Papel de oficina limpio",
        "Papel con residuos de comida",
        "Periódicos y revistas",
      ],
      correct: 2,
      explanation: "El papel con residuos de comida contamina el proceso de reciclaje y debe evitarse.",
    },
    {
      question: "¿Cuál es la mejor forma de preparar las cajas de cartón para reciclar?",
      options: [
        "Dejarlas como están",
        "Aplastarlas para ahorrar espacio",
        "Rasgarlas en pedazos pequeños",
        "Remojarlas en agua primero",
      ],
      correct: 1,
      explanation: "Aplastar las cajas de cartón ayuda a ahorrar espacio y hace el reciclaje más eficiente.",
    },
    {
      question: "¿Cuál de estos productos de papel se acepta comúnmente para reciclar?",
      options: [
        "Papel recubierto con cera",
        "Toallas de papel y pañuelos",
        "Papel de oficina y documentos",
        "Fotografías",
      ],
      correct: 2,
      explanation: "El papel de oficina y documentos se acepta comúnmente para reciclar, a diferencia de las otras opciones.",
    },
  ],

  plastic: [
    {
      question: "¿Qué indica el número de reciclaje #1 (PET)?",
      options: [
        "Plásticos de cloruro de polivinilo",
        "Plásticos de tereftalato de polietileno",
        "Plásticos de poliestireno",
        "Otros plásticos mezclados",
      ],
      correct: 1,
      explanation: "Los plásticos #1 (PET), como las botellas de agua, son ampliamente aceptados en programas de reciclaje.",
    },
    {
      question: "¿Deben quitarse las tapas de las botellas plásticas antes de reciclar?",
      options: [
        "Siempre quitar",
        "Siempre dejar",
        "Depende del programa local de reciclaje",
        "No importa",
      ],
      correct: 2,
      explanation: "Diferentes programas tienen diferentes reglas, por eso consulta con tu reciclador local.",
    },
    {
      question: "¿Cuál de estos objetos plásticos generalmente NO se acepta en el reciclaje domiciliario?",
      options: [
        "Bolsas plásticas de compras",
        "Contenedores plásticos rígidos",
        "Envases plásticos de comida",
        "Vasos de yogurt",
      ],
      correct: 0,
      explanation: "Las bolsas plásticas de compras usualmente requieren puntos especiales de entrega, no el reciclaje domiciliario.",
    },
  ],

  glass: [
    {
      question: "¿Qué vidrios suelen aceptarse para reciclar?",
      options: [
        "Vidrios de ventanas",
        "Botellas y frascos de vidrio",
        "Bombillas",
        "Espejos",
      ],
      correct: 1,
      explanation: "Las botellas y frascos se pueden reciclar; otros tipos de vidrio generalmente no.",
    },
    {
      question: "¿Qué debes hacer antes de reciclar envases de vidrio?",
      options: [
        "Quitar tapas y enjuagar",
        "Dejar tapas puestas",
        "Romper en pedazos pequeños",
        "Quitar etiquetas a la fuerza",
      ],
      correct: 0,
      explanation: "Quitar las tapas y enjuagar previene la contaminación durante el reciclaje.",
    },
    {
      question: "¿Por qué es importante reciclar vidrio?",
      options: [
        "El vidrio puede reciclarse indefinidamente sin perder calidad",
        "El vidrio se descompone rápido en vertederos",
        "Reciclar vidrio usa más energía que producir vidrio nuevo",
        "El vidrio no se puede reciclar",
      ],
      correct: 0,
      explanation: "El vidrio es 100% reciclable y puede reciclarse infinitamente sin perder calidad.",
    },
  ],

  metal: [
    {
      question: "¿Qué metales pueden reciclarse indefinidamente sin perder propiedades?",
      options: [
        "Aluminio y acero",
        "Latas de pintura con residuos",
        "Tanques de propano",
        "Envases de aceite de motor",
      ],
      correct: 0,
      explanation: "El aluminio y acero son metales altamente reciclables con ciclos infinitos.",
    },
    {
      question: "¿Qué debes hacer antes de reciclar latas metálicas?",
      options: [
        "Enjuagarlas para quitar residuos de comida",
        "Dejar etiquetas de papel puestas",
        "Mezclarlas con residuos peligrosos",
        "Llenarlas con agua",
      ],
      correct: 0,
      explanation: "Enjuagar las latas elimina residuos que contaminan el reciclaje.",
    },
    {
      question: "¿Qué objetos metálicos generalmente requieren manejo especial y NO deben ir en reciclaje regular?",
      options: [
        "Latas de aluminio",
        "Latas de acero",
        "Latas de pintura con residuos",
        "Papel aluminio",
      ],
      correct: 2,
      explanation: "Las latas de pintura con residuos son peligrosas y necesitan disposición especial.",
    },
  ],

  electronics: [
    {
      question: "¿Cuál es un paso importante antes de reciclar aparatos electrónicos?",
      options: [
        "Desarmar todas las partes",
        "Respaldar y borrar datos personales",
        "Tirar baterías en el reciclaje",
        "Reciclar con basura común",
      ],
      correct: 1,
      explanation: "Respaldar y borrar datos protege tu privacidad y seguridad.",
    },
    {
      question: "¿Qué electrónicos suelen requerir reciclaje especial de residuos electrónicos?",
      options: [
        "Smartphones",
        "Monitores CRT",
        "Impresoras",
        "Laptops",
      ],
      correct: 1,
      explanation: "Los monitores CRT contienen materiales peligrosos y requieren manejo especial.",
    },
    {
      question: "¿Por qué es importante reciclar electrónicos?",
      options: [
        "Recupera metales preciosos y previene contaminación tóxica",
        "Hace que duren más los dispositivos",
        "Aumenta basura en vertederos",
        "No tiene beneficios ambientales",
      ],
      correct: 0,
      explanation: "El reciclaje electrónico recupera metales valiosos y reduce contaminación.",
    },
  ],

  textiles: [
    {
      question: "¿Qué tipo de textiles suele aceptarse para reciclar o donar?",
      options: [
        "Ropa y ropa de cama limpia",
        "Textiles muy contaminados",
        "Artículos con moho",
        "Materiales peligrosos",
      ],
      correct: 0,
      explanation: "Textiles limpios y en buen estado se aceptan para reciclar o donar.",
    },
    {
      question: "¿Qué debes hacer antes de donar textiles?",
      options: [
        "Limpiar y separar según condición",
        "Mezclar con basura común",
        "Donar artículos sucios o con moho",
        "Quemar textiles no deseados",
      ],
      correct: 0,
      explanation: "Limpiar y clasificar garantiza reutilización o reciclaje correcto.",
    },
    {
      question: "¿Por qué es importante reciclar textiles?",
      options: [
        "Reduce residuos y conserva recursos",
        "Aumenta volumen de vertederos",
        "Contamina fuentes de agua",
        "No tiene impacto ambiental",
      ],
      correct: 0,
      explanation: "Reciclar textiles reduce la demanda de nuevos recursos y residuos.",
    },
  ],

  organic: [
    {
      question: "¿Qué materiales orgánicos son aptos para compostaje?",
      options: [
        "Restos de frutas y verduras",
        "Carnes y lácteos",
        "Aceites y grasas",
        "Desechos de mascotas",
      ],
      correct: 0,
      explanation: "Frutas y verduras son ideales para compostar, a diferencia de carnes o lácteos.",
    },
    {
      question: "¿Cuál es una buena práctica para compostaje doméstico?",
      options: [
        "Mezclar materiales verdes y marrones y airear regularmente",
        "Agregar solo materiales verdes",
        "Mantener el compost seco",
        "Agregar plásticos",
      ],
      correct: 0,
      explanation: "Materiales balanceados y aireación promueven buena descomposición.",
    },
    {
      question: "¿Por qué es beneficioso compostar residuos orgánicos?",
      options: [
        "Reduce emisiones de metano y mejora la salud del suelo",
        "Aumenta residuos en vertederos",
        "Contamina agua",
        "Consume más energía que vertedero",
      ],
      correct: 0,
      explanation: "El compostaje reduce gases de efecto invernadero y enriquece el suelo.",
    },
  ],

  hazardous: [
    {
      question: "¿Cómo deben manejarse los materiales peligrosos para su eliminación?",
      options: [
        "Mantener en envases originales y transportar con seguridad",
        "Mezclar diferentes químicos",
        "Desechar en reciclaje común",
        "Verter por el desagüe",
      ],
      correct: 0,
      explanation: "El manejo adecuado protege la salud y el medio ambiente.",
    },
    {
      question: "¿Cuál de estos objetos NO se acepta en programas de residuos peligrosos domésticos?",
      options: [
        "Pinturas y aceites de motor",
        "Materiales radiactivos",
        "Baterías",
        "Lámparas fluorescentes",
      ],
      correct: 1,
      explanation: "Los materiales radiactivos requieren manejo especial y usualmente no se aceptan.",
    },
    {
      question: "¿Cuál es un buen consejo para reducir residuos peligrosos?",
      options: [
        "Comprar solo lo necesario y elegir alternativas menos tóxicas",
        "Acumular químicos en casa",
        "Mezclar productos para conveniencia",
        "Ignorar instrucciones de eliminación",
      ],
      correct: 0,
      explanation: "Reducir compras y elegir productos seguros disminuye residuos peligrosos.",
    },
  ],
}