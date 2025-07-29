// QUIZES TO EXPORT
// These quizzes are designed to test knowledge about recycling and sustainability.

const basicQuiz = [
  {
    question: "Which of these items **can** be recycled?",
    options: ["Banana peel", "Plastic bottle", "Dirty pizza box", "Used tissue"],
    correct: 1,
    explanation: "Plastic bottles are recyclable. Food waste and dirty items usually aren't.",
  },
  {
    question: "What color is usually used for recycling bins?",
    options: ["Red", "Blue", "Yellow", "Black"],
    correct: 1,
    explanation: "Blue is the standard color for recycling bins in many countries.",
  },
  {
    question: "What does the symbol with three arrows in a triangle mean?",
    options: ["Toxic waste", "Recyclable", "Hazardous", "Plastic only"],
    correct: 1,
    explanation: "The three-arrow triangle is the universal symbol for recycling.",
  },
];

const intermediateQuiz = [
  {
    question: "Can you recycle paper with ink or writing on it?",
    options: ["Yes", "No", "Only if it's pencil", "Only if double-sided"],
    correct: 0,
    explanation: "Most paper with ink is recyclable, as long as it's clean and dry.",
  },
  {
    question: "Which material is **infinitely recyclable** without losing quality?",
    options: ["Glass", "Plastic", "Paper", "Styrofoam"],
    correct: 0,
    explanation: "Glass can be recycled endlessly without degradation.",
  },
  {
    question: "What is 'contamination' in recycling?",
    options: [
      "A type of virus",
      "Mixing non-recyclables with recyclables",
      "Too much ink on paper",
      "Old batteries in trash",
    ],
    correct: 1,
    explanation: "Contamination happens when non-recyclable items are mixed with recyclables, which can ruin the whole batch.",
  },
];


const advancedQuiz = [
  {
    question: "What is the main reason black plastic is hard to recycle?",
    options: [
      "It's made of toxic materials",
      "It can't be melted",
      "Sorting machines can't detect it",
      "It contains lead",
    ],
    correct: 2,
    explanation: "Most recycling sorting machines use infrared, and black plastic absorbs light, making it hard to detect.",
  },
  {
    question: "Which country has the highest recycling rate in the world?",
    options: ["Germany", "United States", "Japan", "Canada"],
    correct: 0,
    explanation: "Germany consistently leads global recycling efforts, with rates over 60%.",
  },
  {
    question: "What is 'downcycling'?",
    options: [
      "Throwing recyclables in the trash",
      "Recycling into lower-quality products",
      "Using old bikes",
      "Burning recyclable materials",
    ],
    correct: 1,
    explanation: "Downcycling is when materials are recycled into products of lesser quality (e.g., plastic into park benches).",
  },
];

export { basicQuiz, intermediateQuiz, advancedQuiz };
export default { basicQuiz, intermediateQuiz, advancedQuiz };