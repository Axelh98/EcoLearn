import { Question } from "@/types/quizes"

export const categoryQuizzes: Record<string, Question[]> = {
  "paper-cardboard": [
    {
      question: "Which of these paper products should NOT be recycled?",
      options: [
        "Cardboard boxes",
        "Clean office paper",
        "Paper with food residue",
        "Newspapers and magazines",
      ],
      correct: 2,
      explanation: "Paper with food residue contaminates the recycling process and should be avoided.",
    },
    {
      question: "What is the best way to prepare cardboard boxes for recycling?",
      options: [
        "Leave them as they are",
        "Flatten them to save space",
        "Tear them into small pieces",
        "Soak them in water first",
      ],
      correct: 1,
      explanation: "Flattening cardboard boxes helps save space and makes recycling more efficient.",
    },
    {
      question: "Which of these paper items is usually accepted for recycling?",
      options: [
        "Wax-coated paper",
        "Paper towels and tissues",
        "Office paper and documents",
        "Photographs",
      ],
      correct: 2,
      explanation: "Office paper and documents are commonly accepted for recycling, unlike the other options.",
    },
  ],

  plastic: [
    {
      question: "What does the recycling number #1 (PET) indicate?",
      options: [
        "Polyvinyl chloride plastics",
        "Polyethylene terephthalate plastics",
        "Polystyrene plastics",
        "Other mixed plastics",
      ],
      correct: 1,
      explanation: "#1 (PET) plastics, like water bottles, are widely accepted in recycling programs.",
    },
    {
      question: "Should plastic bottle caps be removed before recycling?",
      options: [
        "Always remove",
        "Always keep on",
        "Depends on local recycling program",
        "It doesn't matter",
      ],
      correct: 2,
      explanation: "Different programs have different rules, so check with your local recycler.",
    },
    {
      question: "Which plastic item is usually NOT accepted in curbside recycling?",
      options: [
        "Plastic shopping bags",
        "Rigid plastic containers",
        "Plastic food containers",
        "Yogurt cups",
      ],
      correct: 0,
      explanation: "Plastic shopping bags often require special drop-off points, not curbside bins.",
    },
  ],

  glass: [
    {
      question: "Which glass items are generally accepted for recycling?",
      options: [
        "Window glass",
        "Glass bottles and jars",
        "Light bulbs",
        "Mirror glass",
      ],
      correct: 1,
      explanation: "Glass bottles and jars can be recycled; other glass types are usually rejected.",
    },
    {
      question: "What should you do before recycling glass containers?",
      options: [
        "Remove caps and lids and rinse clean",
        "Leave caps on",
        "Break them into small pieces",
        "Remove labels by force",
      ],
      correct: 0,
      explanation: "Removing caps and rinsing containers prevent contamination during recycling.",
    },
    {
      question: "Why is glass recycling environmentally important?",
      options: [
        "Glass can be recycled endlessly without losing quality",
        "Glass breaks down quickly in landfills",
        "Glass recycling uses more energy than producing new glass",
        "Glass cannot be recycled",
      ],
      correct: 0,
      explanation: "Glass is 100% recyclable and can be recycled infinitely without quality loss.",
    },
  ],

  metal: [
    {
      question: "Which metals can be recycled indefinitely without losing properties?",
      options: [
        "Aluminum and steel",
        "Paint cans with residue",
        "Propane tanks",
        "Motor oil containers",
      ],
      correct: 0,
      explanation: "Aluminum and steel are highly recyclable metals with infinite recycling cycles.",
    },
    {
      question: "What should you do before recycling metal cans?",
      options: [
        "Rinse them clean of food residue",
        "Leave paper labels on",
        "Mix them with hazardous waste",
        "Fill them with water",
      ],
      correct: 0,
      explanation: "Rinsing metal cans removes food residue to avoid contamination.",
    },
    {
      question: "Which metal item usually requires special handling and should NOT go in regular recycling?",
      options: [
        "Aluminum cans",
        "Steel cans",
        "Paint cans with residue",
        "Aluminum foil",
      ],
      correct: 2,
      explanation: "Paint cans with residue are considered hazardous and require special disposal.",
    },
  ],

  electronics: [
    {
      question: "What is an important step before recycling electronics?",
      options: [
        "Disassemble all parts",
        "Back up and wipe personal data",
        "Throw batteries in recycling bins",
        "Recycle them with regular trash",
      ],
      correct: 1,
      explanation: "Backing up and wiping data protects your privacy and security.",
    },
    {
      question: "Which of these electronics usually require special e-waste recycling?",
      options: [
        "Smartphones",
        "CRT monitors",
        "Printers",
        "Laptops",
      ],
      correct: 1,
      explanation: "CRT monitors contain hazardous materials and require special handling.",
    },
    {
      question: "Why is recycling electronics important?",
      options: [
        "Recovers precious metals and prevents toxic contamination",
        "Makes electronics last longer",
        "Increases landfill waste",
        "Is not environmentally beneficial",
      ],
      correct: 0,
      explanation: "Electronic recycling recovers valuable metals and reduces pollution.",
    },
  ],

  textiles: [
    {
      question: "What kind of textiles can usually be recycled or donated?",
      options: [
        "Clean clothing and bedding",
        "Heavily contaminated textiles",
        "Items with mold",
        "Hazardous materials",
      ],
      correct: 0,
      explanation: "Clean textiles in good condition are accepted for recycling or donation.",
    },
    {
      question: "What should you do before donating textiles?",
      options: [
        "Clean and separate by condition",
        "Mix with regular trash",
        "Donate dirty or moldy items",
        "Burn unwanted textiles",
      ],
      correct: 0,
      explanation: "Cleaning and sorting help ensure items can be reused or recycled properly.",
    },
    {
      question: "Why is textile recycling important?",
      options: [
        "Reduces waste and conserves resources",
        "Increases landfill volume",
        "Pollutes water sources",
        "Has no environmental impact",
      ],
      correct: 0,
      explanation: "Recycling textiles reduces demand for new resources and landfill waste.",
    },
  ],

  organic: [
    {
      question: "Which organic materials are suitable for composting?",
      options: [
        "Fruit and vegetable scraps",
        "Meat and dairy products",
        "Oils and fats",
        "Pet waste",
      ],
      correct: 0,
      explanation: "Fruits and vegetables are ideal for composting, unlike meat or dairy.",
    },
    {
      question: "What is a good practice for home composting?",
      options: [
        "Mix green and brown materials and turn compost regularly",
        "Add only green materials",
        "Keep compost dry",
        "Add plastics",
      ],
      correct: 0,
      explanation: "Balanced materials and aeration help proper decomposition.",
    },
    {
      question: "Why is composting organic waste beneficial?",
      options: [
        "Reduces methane emissions and improves soil health",
        "Increases landfill waste",
        "Causes water pollution",
        "Uses more energy than landfill",
      ],
      correct: 0,
      explanation: "Composting reduces greenhouse gases and enriches soil.",
    },
  ],

  hazardous: [
    {
      question: "How should hazardous materials be handled for disposal?",
      options: [
        "Keep items in original containers and transport safely",
        "Mix different chemicals together",
        "Dispose in regular recycling bins",
        "Pour down the drain",
      ],
      correct: 0,
      explanation: "Proper containment and transport protect health and environment.",
    },
    {
      question: "Which of these items is NOT accepted in household hazardous waste programs?",
      options: [
        "Paint and motor oil",
        "Radioactive materials",
        "Batteries",
        "Fluorescent bulbs",
      ],
      correct: 1,
      explanation: "Radioactive materials require special handling and are usually not accepted.",
    },
    {
      question: "What is a good tip for reducing hazardous waste?",
      options: [
        "Buy only what you need and choose less toxic alternatives",
        "Stockpile chemicals at home",
        "Mix products for convenience",
        "Ignore disposal instructions",
      ],
      correct: 0,
      explanation: "Reducing purchase and choosing safer products lowers hazardous waste.",
    },
  ],
}