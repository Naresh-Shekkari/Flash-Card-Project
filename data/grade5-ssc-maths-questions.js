// =============================================================================
// data/grade5-ssc-maths-questions.js
// Grade 5 Telangana SSC Board Mathematics Question Bank (100 Questions)
// Aligned with Telangana SCERT Class 5 Mathematics Syllabus
// =============================================================================

const GRADE5_MATHS_QUESTIONS = [
  // 1. Bigger Numbers and Place Value (G5MATH001 - G5MATH010)
  {
    id: "G5MATH001",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "What is the place value of 7 in the number 7,45,230?",
    options: ["7,00,000", "70,000", "7,000", "700"],
    correctAnswer: "7,00,000",
    explanation: "In 7,45,230, the digit 7 is in the lakhs place, so its place value is 7,00,000 (7 lakhs)."
  },
  {
    id: "G5MATH002",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "How is the number 5,08,420 written in words in the Indian number system?",
    options: [
      "Five lakh eight thousand four hundred twenty",
      "Fifty-eight thousand four hundred twenty",
      "Five lakh eighty thousand four hundred twenty",
      "Five million eight thousand four hundred"
    ],
    correctAnswer: "Five lakh eight thousand four hundred twenty",
    explanation: "5 is in the lakhs place, 08 is in thousands, and 420 in hundreds/tens/ones: Five lakh eight thousand four hundred twenty."
  },
  {
    id: "G5MATH003",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "What is the successor of 99,999?",
    options: ["1,00,000", "99,998", "1,00,001", "9,99,999"],
    correctAnswer: "1,00,000",
    explanation: "The successor of a number is obtained by adding 1. 99,999 + 1 = 1,00,000 (one lakh)."
  },
  {
    id: "G5MATH004",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "What is the predecessor of 5,00,000?",
    options: ["4,99,999", "5,00,001", "4,90,000", "4,99,990"],
    correctAnswer: "4,99,999",
    explanation: "The predecessor of a number is found by subtracting 1. 5,00,000 - 1 = 4,99,999."
  },
  {
    id: "G5MATH005",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "Which is the smallest 6-digit number formed using the digits 4, 0, 7, 1, 9, 3 without repeating any digit?",
    options: ["1,03,479", "0,13,479", "1,30,479", "1,04,379"],
    correctAnswer: "1,03,479",
    explanation: "To form the smallest number, place the smallest non-zero digit first (1), followed by 0, then arrange remaining digits in ascending order: 1,03,479."
  },
  {
    id: "G5MATH006",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "What is the expanded form of 3,64,520?",
    options: [
      "3,00,000 + 60,000 + 4,000 + 500 + 20",
      "30,000 + 6,000 + 400 + 50 + 2",
      "3,00,000 + 6,000 + 400 + 500 + 20",
      "3,00,000 + 64,000 + 520"
    ],
    correctAnswer: "3,00,000 + 60,000 + 4,000 + 500 + 20",
    explanation: "3,64,520 = 3 lakhs (3,00,000) + 6 ten-thousands (60,000) + 4 thousands (4,000) + 5 hundreds (500) + 2 tens (20)."
  },
  {
    id: "G5MATH007",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "What is the face value of digit 8 in 8,72,315?",
    options: ["8", "8,00,000", "80,000", "800"],
    correctAnswer: "8",
    explanation: "The face value of any digit is always the digit itself, regardless of its position. So the face value is 8."
  },
  {
    id: "G5MATH008",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "Round off 48,725 to the nearest thousand.",
    options: ["49,000", "48,000", "48,700", "50,000"],
    correctAnswer: "49,000",
    explanation: "The hundreds digit is 7, which is 5 or greater. Therefore, we round up from 48,000 to 49,000."
  },
  {
    id: "G5MATH009",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "How many thousands are there in 1 lakh?",
    options: ["100", "10", "1,000", "10,000"],
    correctAnswer: "100",
    explanation: "1 lakh = 1,00,000. 1,00,000 divided by 1,000 = 100 thousands."
  },
  {
    id: "G5MATH010",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Bigger Numbers",
    question: "Which of the following numbers is greatest?",
    options: ["6,74,320", "6,74,230", "6,47,320", "6,75,100"],
    correctAnswer: "6,75,100",
    explanation: "Comparing digit by digit from the left: 6,75,100 has 7 ten-thousands and 5 thousands, which is greater than 6,74,320."
  },

  // 2. Addition and Subtraction (G5MATH011 - G5MATH018)
  {
    id: "G5MATH011",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "Find the sum: 45,620 + 32,840.",
    options: ["78,460", "77,460", "78,560", "88,460"],
    correctAnswer: "78,460",
    explanation: "45,620 + 32,840 = 78,460."
  },
  {
    id: "G5MATH012",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "Subtract 28,450 from 75,000.",
    options: ["46,550", "47,550", "46,650", "56,550"],
    correctAnswer: "46,550",
    explanation: "75,000 - 28,450 = 46,550."
  },
  {
    id: "G5MATH013",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "A library has 18,450 English books and 24,780 Telugu books. How many books are there in total?",
    options: ["43,230", "42,230", "43,130", "44,230"],
    correctAnswer: "43,230",
    explanation: "18,450 + 24,780 = 43,230 books in total."
  },
  {
    id: "G5MATH014",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "The population of a town is 84,200. If 41,650 are male, how many females are there in the town?",
    options: ["42,550", "43,550", "42,650", "41,550"],
    correctAnswer: "42,550",
    explanation: "84,200 - 41,650 = 42,550 females."
  },
  {
    id: "G5MATH015",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "What number should be added to 36,400 to get 50,000?",
    options: ["13,600", "14,600", "13,400", "14,400"],
    correctAnswer: "13,600",
    explanation: "50,000 - 36,400 = 13,600."
  },
  {
    id: "G5MATH016",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "Estimate the sum of 4,820 and 3,190 by rounding to the nearest thousand.",
    options: ["8,000", "7,000", "9,000", "8,500"],
    correctAnswer: "8,000",
    explanation: "4,820 rounds to 5,000 and 3,190 rounds to 3,000. 5,000 + 3,000 = 8,000."
  },
  {
    id: "G5MATH017",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "A factory produced 54,200 bulbs in January and 48,900 bulbs in February. How many more bulbs were produced in January?",
    options: ["5,300", "5,200", "6,300", "4,300"],
    correctAnswer: "5,300",
    explanation: "54,200 - 48,900 = 5,300 more bulbs."
  },
  {
    id: "G5MATH018",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Addition & Subtraction",
    question: "If a + 25,000 = 60,000, what is the value of a?",
    options: ["35,000", "45,000", "30,000", "85,000"],
    correctAnswer: "35,000",
    explanation: "60,000 - 25,000 = 35,000."
  },

  // 3. Multiplication (G5MATH019 - G5MATH026)
  {
    id: "G5MATH019",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "What is 425 × 36?",
    options: ["15,300", "15,200", "14,300", "16,300"],
    correctAnswer: "15,300",
    explanation: "425 × 30 = 12,750; 425 × 6 = 2,550; 12,750 + 2,550 = 15,300."
  },
  {
    id: "G5MATH020",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "A carton holds 144 mangoes. How many mangoes are in 25 such cartons?",
    options: ["3,600", "3,500", "3,700", "2,880"],
    correctAnswer: "3,600",
    explanation: "144 × 25 = 3,600 mangoes."
  },
  {
    id: "G5MATH021",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "What is 350 × 100?",
    options: ["35,000", "3,500", "3,50,000", "350"],
    correctAnswer: "35,000",
    explanation: "Multiplying by 100 appends two zeros to the number: 350 × 100 = 35,000."
  },
  {
    id: "G5MATH022",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "If a farmer earns ₹450 every day, how much will he earn in 30 days?",
    options: ["₹13,500", "₹12,500", "₹14,500", "₹15,000"],
    correctAnswer: "₹13,500",
    explanation: "450 × 30 = ₹13,500."
  },
  {
    id: "G5MATH023",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "Which product gives 0?",
    options: ["1,425 × 0", "1,425 × 1", "1,425 + 0", "1,425 - 0"],
    correctAnswer: "1,425 × 0",
    explanation: "Any number multiplied by zero equals zero."
  },
  {
    id: "G5MATH024",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "What is 250 × 40?",
    options: ["10,000", "1,000", "1,00,000", "25,000"],
    correctAnswer: "10,000",
    explanation: "25 × 4 = 100, then append two zeros: 10,000."
  },
  {
    id: "G5MATH025",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "A school bus travels 48 km in one trip. How far does it travel in 15 trips?",
    options: ["720 km", "680 km", "740 km", "820 km"],
    correctAnswer: "720 km",
    explanation: "48 × 15 = 720 km."
  },
  {
    id: "G5MATH026",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Multiplication",
    question: "By what number should 75 be multiplied to get 750?",
    options: ["10", "100", "1", "5"],
    correctAnswer: "10",
    explanation: "750 divided by 75 = 10."
  },

  // 4. Division (G5MATH027 - G5MATH034)
  {
    id: "G5MATH027",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "Divide 1,575 by 15. What is the quotient?",
    options: ["105", "15", "150", "115"],
    correctAnswer: "105",
    explanation: "15 × 100 = 1,500; 15 × 5 = 75; so 1,575 ÷ 15 = 105."
  },
  {
    id: "G5MATH028",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "When 487 is divided by 8, what is the remainder?",
    options: ["7", "6", "5", "0"],
    correctAnswer: "7",
    explanation: "487 = (8 × 60) + 7. The quotient is 60 and the remainder is 7."
  },
  {
    id: "G5MATH029",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "If 12 notebooks cost ₹360, what is the cost of 1 notebook?",
    options: ["₹30", "₹25", "₹35", "₹40"],
    correctAnswer: "₹30",
    explanation: "360 ÷ 12 = ₹30 per notebook."
  },
  {
    id: "G5MATH030",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "In a division problem: Dividend = 56, Divisor = 7. What is the Quotient?",
    options: ["8", "7", "9", "6"],
    correctAnswer: "8",
    explanation: "56 ÷ 7 = 8."
  },
  {
    id: "G5MATH031",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "What is 4,800 ÷ 100?",
    options: ["48", "480", "4.8", "4"],
    correctAnswer: "48",
    explanation: "Dividing by 100 removes two trailing zeros: 4,800 ÷ 100 = 48."
  },
  {
    id: "G5MATH032",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "540 pencils are packed equally into packets of 12. How many packets are made?",
    options: ["45", "40", "50", "48"],
    correctAnswer: "45",
    explanation: "540 ÷ 12 = 45 packets."
  },
  {
    id: "G5MATH033",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "Which of the following numbers is divisible by 5 without leaving a remainder?",
    options: ["345", "342", "341", "348"],
    correctAnswer: "345",
    explanation: "A number is divisible by 5 if its last digit is either 0 or 5. 345 ends in 5."
  },
  {
    id: "G5MATH034",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Division",
    question: "Which relationship is correct in division?",
    options: [
      "Dividend = (Divisor × Quotient) + Remainder",
      "Divisor = (Dividend × Quotient) + Remainder",
      "Quotient = (Dividend × Divisor) + Remainder",
      "Dividend = Divisor + Quotient + Remainder"
    ],
    correctAnswer: "Dividend = (Divisor × Quotient) + Remainder",
    explanation: "The fundamental division formula states: Dividend = (Divisor × Quotient) + Remainder."
  },

  // 5. Factors and Multiples (G5MATH035 - G5MATH044)
  {
    id: "G5MATH035",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "Which of the following is a prime number?",
    options: ["17", "15", "21", "25"],
    correctAnswer: "17",
    explanation: "A prime number has only two factors: 1 and itself. 17 has no other divisors."
  },
  {
    id: "G5MATH036",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "What are all the factors of 12?",
    options: [
      "1, 2, 3, 4, 6, 12",
      "2, 4, 6, 12",
      "1, 3, 4, 12",
      "1, 2, 6, 12"
    ],
    correctAnswer: "1, 2, 3, 4, 6, 12",
    explanation: "The factors of 12 are 1, 2, 3, 4, 6, and 12."
  },
  {
    id: "G5MATH037",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "What is the smallest common multiple of 4 and 6?",
    options: ["12", "24", "6", "18"],
    correctAnswer: "12",
    explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The Least Common Multiple (LCM) is 12."
  },
  {
    id: "G5MATH038",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "What is the Highest Common Factor (HCF) of 18 and 24?",
    options: ["6", "3", "2", "12"],
    correctAnswer: "6",
    explanation: "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Highest common factor is 6."
  },
  {
    id: "G5MATH039",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "Is 1 a prime number or a composite number?",
    options: [
      "Neither prime nor composite",
      "Prime number",
      "Composite number",
      "Both prime and composite"
    ],
    correctAnswer: "Neither prime nor composite",
    explanation: "1 has only one factor (itself), so it is neither prime nor composite."
  },
  {
    id: "G5MATH040",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "Which of the following is a multiple of both 3 and 5?",
    options: ["30", "25", "18", "35"],
    correctAnswer: "30",
    explanation: "30 ÷ 3 = 10 and 30 ÷ 5 = 6. So 30 is a common multiple of 3 and 5."
  },
  {
    id: "G5MATH041",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "How many factors does a prime number have?",
    options: ["Exactly 2", "Only 1", "More than 2", "Infinite"],
    correctAnswer: "Exactly 2",
    explanation: "A prime number has exactly two distinct factors: 1 and itself."
  },
  {
    id: "G5MATH042",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "What is the only even prime number?",
    options: ["2", "4", "0", "6"],
    correctAnswer: "2",
    explanation: "2 is the smallest prime number and the only even prime number."
  },
  {
    id: "G5MATH043",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "The seventh multiple of 8 is:",
    options: ["56", "48", "64", "72"],
    correctAnswer: "56",
    explanation: "7 × 8 = 56."
  },
  {
    id: "G5MATH044",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Factors & Multiples",
    question: "Which of the following numbers is a composite number?",
    options: ["9", "7", "11", "13"],
    correctAnswer: "9",
    explanation: "9 has factors 1, 3, and 9 (more than two factors), so it is a composite number."
  },

  // 6. Fractions (G5MATH045 - G5MATH055)
  {
    id: "G5MATH045",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Which of the following fractions is equivalent to 1/2?",
    options: ["3/6", "2/5", "3/8", "4/10"],
    correctAnswer: "3/6",
    explanation: "Dividing numerator and denominator of 3/6 by 3 gives 1/2."
  },
  {
    id: "G5MATH046",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "What is 2/7 + 3/7?",
    options: ["5/7", "5/14", "6/7", "1/7"],
    correctAnswer: "5/7",
    explanation: "When denominators are the same (like fractions), add numerators: (2 + 3)/7 = 5/7."
  },
  {
    id: "G5MATH047",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "What is 5/8 - 2/8?",
    options: ["3/8", "3/0", "7/8", "1/4"],
    correctAnswer: "3/8",
    explanation: "(5 - 2)/8 = 3/8."
  },
  {
    id: "G5MATH048",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Which type of fraction has a numerator smaller than its denominator?",
    options: ["Proper fraction", "Improper fraction", "Mixed fraction", "Unit fraction"],
    correctAnswer: "Proper fraction",
    explanation: "In a proper fraction, the numerator is strictly less than the denominator (e.g., 3/4)."
  },
  {
    id: "G5MATH049",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Convert the improper fraction 7/2 into a mixed fraction.",
    options: ["3 1/2", "2 1/2", "3 2/7", "4 1/2"],
    correctAnswer: "3 1/2",
    explanation: "7 ÷ 2 = 3 with remainder 1, which equals 3 1/2."
  },
  {
    id: "G5MATH050",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Which of the following is an improper fraction?",
    options: ["8/5", "3/4", "1/2", "5/6"],
    correctAnswer: "8/5",
    explanation: "In an improper fraction, the numerator is greater than or equal to the denominator: 8 > 5."
  },
  {
    id: "G5MATH051",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Which fraction is greater: 3/5 or 4/5?",
    options: ["4/5", "3/5", "Both are equal", "Cannot compare"],
    correctAnswer: "4/5",
    explanation: "With like denominators, the fraction with the larger numerator is greater: 4/5 > 3/5."
  },
  {
    id: "G5MATH052",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "What is 1/4 of 24 apples?",
    options: ["6", "8", "4", "12"],
    correctAnswer: "6",
    explanation: "24 ÷ 4 = 6 apples."
  },
  {
    id: "G5MATH053",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "What is the simplest form of 10/20?",
    options: ["1/2", "2/4", "5/10", "1/4"],
    correctAnswer: "1/2",
    explanation: "Dividing both numerator and denominator by 10 yields 1/2."
  },
  {
    id: "G5MATH054",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "In the fraction 4/9, what is the number 4 called?",
    options: ["Numerator", "Denominator", "Quotient", "Divisor"],
    correctAnswer: "Numerator",
    explanation: "The top number in a fraction is the numerator, and the bottom number is the denominator."
  },
  {
    id: "G5MATH055",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Fractions",
    question: "Ravi ate 2/6 of a cake and his sister ate 3/6. What fraction of the cake did they eat together?",
    options: ["5/6", "1/6", "5/12", "6/6"],
    correctAnswer: "5/6",
    explanation: "2/6 + 3/6 = 5/6 of the cake."
  },

  // 7. Decimals and Money (G5MATH056 - G5MATH063)
  {
    id: "G5MATH056",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "Write 7/10 as a decimal number.",
    options: ["0.7", "0.07", "7.0", "0.70"],
    correctAnswer: "0.7",
    explanation: "7 tenths is written as 0.7 in decimal form."
  },
  {
    id: "G5MATH057",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "Write 25 paise as rupees in decimal notation.",
    options: ["₹0.25", "₹2.50", "₹0.025", "₹25.0"],
    correctAnswer: "₹0.25",
    explanation: "1 Rupee = 100 paise. 25 paise = 25/100 = ₹0.25."
  },
  {
    id: "G5MATH058",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "What is 3.5 + 2.4?",
    options: ["5.9", "5.1", "6.9", "5.09"],
    correctAnswer: "5.9",
    explanation: "3.5 + 2.4 = 5.9."
  },
  {
    id: "G5MATH059",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "What is 8.6 - 3.2?",
    options: ["5.4", "5.8", "5.2", "4.4"],
    correctAnswer: "5.4",
    explanation: "8.6 - 3.2 = 5.4."
  },
  {
    id: "G5MATH060",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "Which decimal is larger: 0.8 or 0.65?",
    options: ["0.8", "0.65", "Both are equal", "Cannot say"],
    correctAnswer: "0.8",
    explanation: "0.8 is equal to 0.80, which is greater than 0.65 (80 hundredths > 65 hundredths)."
  },
  {
    id: "G5MATH061",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "A pen costs ₹18.50 and a notebook costs ₹32.50. What is the total cost?",
    options: ["₹51.00", "₹50.00", "₹51.50", "₹52.00"],
    correctAnswer: "₹51.00",
    explanation: "18.50 + 32.50 = ₹51.00."
  },
  {
    id: "G5MATH062",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "In the decimal number 45.38, which digit is in the tenths place?",
    options: ["3", "8", "4", "5"],
    correctAnswer: "3",
    explanation: "The first digit to the right of the decimal point is the tenths place, which is 3."
  },
  {
    id: "G5MATH063",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Decimals & Money",
    question: "You buy an item for ₹68.50 and give a ₹100 note. How much change should you get back?",
    options: ["₹31.50", "₹32.50", "₹31.00", "₹41.50"],
    correctAnswer: "₹31.50",
    explanation: "100.00 - 68.50 = ₹31.50."
  },

  // 8. Geometry and Angles (G5MATH064 - G5MATH071)
  {
    id: "G5MATH064",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "What is the measure of a right angle?",
    options: ["90 degrees", "45 degrees", "180 degrees", "360 degrees"],
    correctAnswer: "90 degrees",
    explanation: "A right angle measures exactly 90 degrees."
  },
  {
    id: "G5MATH065",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "An angle measuring less than 90 degrees is called an:",
    options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    correctAnswer: "Acute angle",
    explanation: "An acute angle is any angle between 0 and 90 degrees."
  },
  {
    id: "G5MATH066",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "An angle greater than 90 degrees but less than 180 degrees is called an:",
    options: ["Obtuse angle", "Acute angle", "Right angle", "Reflex angle"],
    correctAnswer: "Obtuse angle",
    explanation: "An obtuse angle is greater than a right angle (90°) and less than a straight line (180°)."
  },
  {
    id: "G5MATH067",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "At 3:00, what type of angle is formed between the hour hand and minute hand?",
    options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
    correctAnswer: "Right angle",
    explanation: "At 3:00, the minute hand points to 12 and the hour hand points to 3, forming a 90-degree right angle."
  },
  {
    id: "G5MATH068",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "What is the measure of a straight angle?",
    options: ["180 degrees", "90 degrees", "360 degrees", "270 degrees"],
    correctAnswer: "180 degrees",
    explanation: "A straight line forms a straight angle measuring 180 degrees."
  },
  {
    id: "G5MATH069",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "How many corners (vertices) does a triangle have?",
    options: ["3", "4", "5", "0"],
    correctAnswer: "3",
    explanation: "A triangle has 3 sides and 3 vertices (corners)."
  },
  {
    id: "G5MATH070",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "A line segment has:",
    options: [
      "Two definite end points",
      "Only one end point",
      "No end points",
      "Infinite end points"
    ],
    correctAnswer: "Two definite end points",
    explanation: "A line segment is a part of a line that has two fixed end points and a definite length."
  },
  {
    id: "G5MATH071",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Geometry & Angles",
    question: "How many faces does a cube have?",
    options: ["6", "8", "12", "4"],
    correctAnswer: "6",
    explanation: "A cube has 6 flat, square faces."
  },

  // 9. Perimeter and Area (G5MATH072 - G5MATH080)
  {
    id: "G5MATH072",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "What is the perimeter of a rectangle with length 8 cm and breadth 5 cm?",
    options: ["26 cm", "40 cm", "13 cm", "20 cm"],
    correctAnswer: "26 cm",
    explanation: "Perimeter of rectangle = 2 × (length + breadth) = 2 × (8 + 5) = 2 × 13 = 26 cm."
  },
  {
    id: "G5MATH073",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "What is the perimeter of a square with a side length of 6 cm?",
    options: ["24 cm", "36 cm", "18 cm", "12 cm"],
    correctAnswer: "24 cm",
    explanation: "Perimeter of a square = 4 × side = 4 × 6 = 24 cm."
  },
  {
    id: "G5MATH074",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "What is the area of a rectangle with length 7 m and breadth 4 m?",
    options: ["28 sq m", "22 sq m", "11 sq m", "56 sq m"],
    correctAnswer: "28 sq m",
    explanation: "Area of a rectangle = length × breadth = 7 × 4 = 28 square metres."
  },
  {
    id: "G5MATH075",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "What is the area of a square whose side is 5 cm?",
    options: ["25 sq cm", "20 sq cm", "10 sq cm", "30 sq cm"],
    correctAnswer: "25 sq cm",
    explanation: "Area of a square = side × side = 5 × 5 = 25 square cm."
  },
  {
    id: "G5MATH076",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "The total length of the boundary around any closed 2D shape is called its:",
    options: ["Perimeter", "Area", "Volume", "Diameter"],
    correctAnswer: "Perimeter",
    explanation: "Perimeter is the total boundary distance around a closed geometric figure."
  },
  {
    id: "G5MATH077",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "The perimeter of a square field is 40 metres. What is the length of one side?",
    options: ["10 m", "20 m", "5 m", "8 m"],
    correctAnswer: "10 m",
    explanation: "Side of square = Perimeter ÷ 4 = 40 ÷ 4 = 10 metres."
  },
  {
    id: "G5MATH078",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "A square tile covers 1 sq cm. If a rectangle is covered by 18 such tiles, its area is:",
    options: ["18 sq cm", "36 sq cm", "9 sq cm", "12 sq cm"],
    correctAnswer: "18 sq cm",
    explanation: "Each tile is 1 sq cm, so 18 tiles cover an area of 18 sq cm."
  },
  {
    id: "G5MATH079",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "What is the perimeter of a regular triangle with each side equal to 7 cm?",
    options: ["21 cm", "14 cm", "28 cm", "49 cm"],
    correctAnswer: "21 cm",
    explanation: "Perimeter of an equilateral triangle = 3 × side = 3 × 7 = 21 cm."
  },
  {
    id: "G5MATH080",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Perimeter & Area",
    question: "If the area of a rectangle is 30 sq cm and its length is 6 cm, what is its breadth?",
    options: ["5 cm", "6 cm", "4 cm", "10 cm"],
    correctAnswer: "5 cm",
    explanation: "Breadth = Area ÷ Length = 30 ÷ 6 = 5 cm."
  },

  // 10. Measurement of Length, Weight & Capacity (G5MATH081 - G5MATH088)
  {
    id: "G5MATH081",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "How many metres are there in 3 kilometres?",
    options: ["3,000 m", "300 m", "30 m", "30,000 m"],
    correctAnswer: "3,000 m",
    explanation: "1 km = 1,000 m. Therefore, 3 km = 3 × 1,000 = 3,000 m."
  },
  {
    id: "G5MATH082",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "How many centimetres are there in 5 metres?",
    options: ["500 cm", "50 cm", "5,000 cm", "5 cm"],
    correctAnswer: "500 cm",
    explanation: "1 m = 100 cm. So 5 m = 5 × 100 = 500 cm."
  },
  {
    id: "G5MATH083",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "How many grams are there in 2 kilograms 500 grams?",
    options: ["2,500 g", "250 g", "2,050 g", "25,000 g"],
    correctAnswer: "2,500 g",
    explanation: "1 kg = 1,000 g. 2 kg = 2,000 g. 2,000 + 500 = 2,500 grams."
  },
  {
    id: "G5MATH084",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "How many millilitres are in 1 litre?",
    options: ["1,000 mL", "100 mL", "10 mL", "10,000 mL"],
    correctAnswer: "1,000 mL",
    explanation: "1 litre (L) = 1,000 millilitres (mL)."
  },
  {
    id: "G5MATH085",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "A bucket holds 15 litres of water. How many 500 mL mugs of water are needed to fill it?",
    options: ["30", "15", "25", "20"],
    correctAnswer: "30",
    explanation: "1 litre = 2 mugs of 500 mL. For 15 litres = 15 × 2 = 30 mugs."
  },
  {
    id: "G5MATH086",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "Convert 4,500 metres into kilometres and metres.",
    options: ["4 km 500 m", "45 km", "40 km 50 m", "4 km 50 m"],
    correctAnswer: "4 km 500 m",
    explanation: "4,500 m = 4,000 m + 500 m = 4 km 500 m."
  },
  {
    id: "G5MATH087",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "A bag of rice weighs 5 kg. 1 kg 750 g is used. How much rice is left?",
    options: ["3 kg 250 g", "3 kg 750 g", "4 kg 250 g", "2 kg 250 g"],
    correctAnswer: "3 kg 250 g",
    explanation: "5,000 g - 1,750 g = 3,250 g = 3 kg 250 g."
  },
  {
    id: "G5MATH088",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Measurement",
    question: "How many millimetres (mm) make 1 centimetre (cm)?",
    options: ["10 mm", "100 mm", "1 mm", "1,000 mm"],
    correctAnswer: "10 mm",
    explanation: "1 cm = 10 mm."
  },

  // 11. Time, Speed & Calendar (G5MATH089 - G5MATH094)
  {
    id: "G5MATH089",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "Convert 3:45 PM into 24-hour railway clock time.",
    options: ["15:45 hours", "03:45 hours", "14:45 hours", "16:45 hours"],
    correctAnswer: "15:45 hours",
    explanation: "For PM times after 12 noon, add 12 to the hours: 3 + 12 = 15:45 hours."
  },
  {
    id: "G5MATH090",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "How many seconds are there in 1 hour?",
    options: ["3,600 seconds", "60 seconds", "600 seconds", "120 seconds"],
    correctAnswer: "3,600 seconds",
    explanation: "1 hour = 60 minutes, and 1 minute = 60 seconds. 60 × 60 = 3,600 seconds."
  },
  {
    id: "G5MATH091",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "A movie starts at 2:15 PM and lasts for 2 hours and 30 minutes. At what time does it end?",
    options: ["4:45 PM", "4:30 PM", "5:00 PM", "4:15 PM"],
    correctAnswer: "4:45 PM",
    explanation: "2:15 PM + 2 hours = 4:15 PM. Adding 30 minutes gives 4:45 PM."
  },
  {
    id: "G5MATH092",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "How many days are there in a leap year?",
    options: ["366 days", "365 days", "364 days", "360 days"],
    correctAnswer: "366 days",
    explanation: "A leap year has an extra day in February (29 days), making 366 days in total."
  },
  {
    id: "G5MATH093",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "If a car travels 120 km in 2 hours, what is its speed per hour?",
    options: ["60 km/h", "50 km/h", "70 km/h", "120 km/h"],
    correctAnswer: "60 km/h",
    explanation: "Speed = Distance ÷ Time = 120 km ÷ 2 hours = 60 km/h."
  },
  {
    id: "G5MATH094",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Time & Calendar",
    question: "How many days are in the month of August?",
    options: ["31 days", "30 days", "28 days", "29 days"],
    correctAnswer: "31 days",
    explanation: "August has 31 days."
  },

  // 12. Patterns, Symmetry & Spatial Reasoning (G5MATH095 - G5MATH098)
  {
    id: "G5MATH095",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Patterns & Symmetry",
    question: "Which of the following English letters has both vertical and horizontal lines of symmetry?",
    options: ["H", "A", "C", "P"],
    correctAnswer: "H",
    explanation: "The letter H can be divided into identical mirror halves both vertically and horizontally."
  },
  {
    id: "G5MATH096",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Patterns & Symmetry",
    question: "Complete the pattern: 2, 6, 18, 54, ___",
    options: ["162", "108", "72", "154"],
    correctAnswer: "162",
    explanation: "Each number is multiplied by 3: 2 × 3 = 6; 6 × 3 = 18; 18 × 3 = 54; 54 × 3 = 162."
  },
  {
    id: "G5MATH097",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Patterns & Symmetry",
    question: "If a figure looks exactly the same after half a turn (180 degrees), it has:",
    options: ["Half-turn symmetry", "Quarter-turn symmetry", "No symmetry", "Only vertical symmetry"],
    correctAnswer: "Half-turn symmetry",
    explanation: "When a shape matches itself after a 180° rotation, it has half-turn (rotational) symmetry."
  },
  {
    id: "G5MATH098",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Patterns & Symmetry",
    question: "Complete the square numbers pattern: 1, 4, 9, 16, 25, ___",
    options: ["36", "30", "49", "35"],
    correctAnswer: "36",
    explanation: "These are squares: 1², 2², 3², 4², 5², 6² = 36."
  },

  // 13. Data Handling & Smart Charts (G5MATH099 - G5MATH100)
  {
    id: "G5MATH099",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Data Handling",
    question: "In a tally chart, how is the number 5 represented?",
    options: [
      "Four vertical lines crossed by one diagonal line",
      "Five separate vertical lines",
      "A circle with five dots",
      "A star with five points"
    ],
    correctAnswer: "Four vertical lines crossed by one diagonal line",
    explanation: "In standard tally marks, groups of five are drawn with four vertical strokes bundled with a fifth diagonal stroke."
  },
  {
    id: "G5MATH100",
    grade: 5,
    board: "Telangana SSC",
    subject: "Maths",
    topic: "Data Handling",
    question: "In a pictograph, one smiley face represents 5 students. How many smiley faces represent 35 students?",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
    explanation: "35 ÷ 5 = 7 smiley faces."
  }
];

if (typeof window !== 'undefined') {
  window.GRADE5_MATHS_QUESTIONS = GRADE5_MATHS_QUESTIONS;
}
if (typeof module !== 'undefined') {
  module.exports = GRADE5_MATHS_QUESTIONS;
}
