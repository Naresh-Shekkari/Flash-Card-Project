// Grade 2 CBSE Maths Question Bank (100 Questions)
const MATHS_QUESTIONS = [
  // Number recognition and number names
  { id: "MATH001", subject: "Maths", topic: "Number Names", grade: 2, question: "What is the number name for 45?", options: ["Forty-five", "Fifty-four", "Forty", "Fifty"], correctAnswer: "Forty-five", explanation: "45 is written in words as Forty-five." },
  { id: "MATH002", subject: "Maths", topic: "Number Names", grade: 2, question: "What is the number name for 99?", options: ["Ninety-nine", "Nineteen", "Eighty-nine", "Ninety"], correctAnswer: "Ninety-nine", explanation: "99 is written as Ninety-nine." },
  { id: "MATH003", subject: "Maths", topic: "Number Names", grade: 2, question: "Which numeral represents 'Seventy-two'?", options: ["72", "27", "70", "75"], correctAnswer: "72", explanation: "Seventy-two is written as 72." },
  { id: "MATH004", subject: "Maths", topic: "Number Names", grade: 2, question: "Which numeral represents 'Thirty-eight'?", options: ["38", "83", "30", "48"], correctAnswer: "38", explanation: "Thirty-eight is written as 38." },
  { id: "MATH005", subject: "Maths", topic: "Number Names", grade: 2, question: "What is the number name for 100?", options: ["One hundred", "Ten", "One thousand", "Ninety-nine"], correctAnswer: "One hundred", explanation: "100 is written as One hundred." },
  { id: "MATH006", subject: "Maths", topic: "Number Names", grade: 2, question: "Which numeral represents 'Eighty-four'?", options: ["84", "48", "80", "94"], correctAnswer: "84", explanation: "Eighty-four is written as 84." },

  // Place value
  { id: "MATH007", subject: "Maths", topic: "Place Value", grade: 2, question: "In the number 58, what is the place value of digit 5?", options: ["50", "5", "500", "8"], correctAnswer: "50", explanation: "5 is in the tens place, so its place value is 5 tens = 50." },
  { id: "MATH008", subject: "Maths", topic: "Place Value", grade: 2, question: "In the number 37, what is the place value of digit 7?", options: ["7", "70", "30", "17"], correctAnswer: "7", explanation: "7 is in the ones place, so its place value is 7." },
  { id: "MATH009", subject: "Maths", topic: "Place Value", grade: 2, question: "In the number 92, which digit is in the tens place?", options: ["9", "2", "90", "10"], correctAnswer: "9", explanation: "9 is in the tens place and 2 is in the ones place." },
  { id: "MATH010", subject: "Maths", topic: "Place Value", grade: 2, question: "In the number 64, which digit is in the ones place?", options: ["4", "6", "60", "40"], correctAnswer: "4", explanation: "4 is in the ones place." },
  { id: "MATH011", subject: "Maths", topic: "Place Value", grade: 2, question: "What number is made of 3 tens and 6 ones?", options: ["36", "63", "30", "60"], correctAnswer: "36", explanation: "3 tens (30) + 6 ones (6) = 36." },
  { id: "MATH012", subject: "Maths", topic: "Place Value", grade: 2, question: "What number is made of 8 tens and 0 ones?", options: ["80", "8", "88", "18"], correctAnswer: "80", explanation: "8 tens and 0 ones make 80." },
  { id: "MATH013", subject: "Maths", topic: "Place Value", grade: 2, question: "1 hundred, 0 tens, and 0 ones makes which number?", options: ["100", "10", "1", "110"], correctAnswer: "100", explanation: "1 hundred is 100." },

  // Before, after, between
  { id: "MATH014", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes just after 49?", options: ["50", "48", "51", "60"], correctAnswer: "50", explanation: "Counting forward: after 49 comes 50." },
  { id: "MATH015", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes just before 70?", options: ["69", "71", "68", "60"], correctAnswer: "69", explanation: "Counting backward: before 70 comes 69." },
  { id: "MATH016", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes between 32 and 34?", options: ["33", "35", "31", "30"], correctAnswer: "33", explanation: "32, 33, 34. 33 is between them." },
  { id: "MATH017", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes just after 89?", options: ["90", "88", "91", "100"], correctAnswer: "90", explanation: "After 89 comes 90." },
  { id: "MATH018", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes just before 100?", options: ["99", "98", "90", "101"], correctAnswer: "99", explanation: "Just before 100 comes 99." },
  { id: "MATH019", subject: "Maths", topic: "Number Sequence", grade: 2, question: "Which number comes between 55 and 57?", options: ["56", "54", "58", "60"], correctAnswer: "56", explanation: "56 comes between 55 and 57." },

  // Ascending and descending order
  { id: "MATH020", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Which list is in ascending order (smallest to largest)?", options: ["12, 24, 36, 48", "48, 36, 24, 12", "24, 12, 48, 36", "36, 48, 12, 24"], correctAnswer: "12, 24, 36, 48", explanation: "Ascending means arranging from smallest to greatest: 12 < 24 < 36 < 48." },
  { id: "MATH021", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Which list is in descending order (largest to smallest)?", options: ["85, 60, 42, 19", "19, 42, 60, 85", "42, 60, 19, 85", "60, 85, 42, 19"], correctAnswer: "85, 60, 42, 19", explanation: "Descending means greatest to smallest: 85 > 60 > 42 > 19." },
  { id: "MATH022", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Arrange in ascending order: 15, 9, 31", options: ["9, 15, 31", "31, 15, 9", "15, 9, 31", "9, 31, 15"], correctAnswer: "9, 15, 31", explanation: "9 is smallest, then 15, and 31 is greatest." },
  { id: "MATH023", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Arrange in descending order: 50, 70, 20", options: ["70, 50, 20", "20, 50, 70", "50, 70, 20", "70, 20, 50"], correctAnswer: "70, 50, 20", explanation: "70 is largest, then 50, and 20 is smallest." },
  { id: "MATH024", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Which is the smallest number: 43, 34, 40, 30?", options: ["30", "34", "40", "43"], correctAnswer: "30", explanation: "30 has only 3 tens and 0 ones, which is the smallest." },
  { id: "MATH025", subject: "Maths", topic: "Ordering Numbers", grade: 2, question: "Which is the largest number: 68, 86, 76, 58?", options: ["86", "68", "76", "58"], correctAnswer: "86", explanation: "86 has 8 tens, which is the greatest." },

  // Comparing numbers
  { id: "MATH026", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Choose the correct sign: 45 ___ 54", options: ["<", ">", "=", "+"], correctAnswer: "<", explanation: "45 is less than 54 (45 < 54)." },
  { id: "MATH027", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Choose the correct sign: 80 ___ 80", options: ["=", ">", "<", "-"], correctAnswer: "=", explanation: "Both sides are equal: 80 = 80." },
  { id: "MATH028", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Choose the correct sign: 91 ___ 19", options: [">", "<", "=", "+"], correctAnswer: ">", explanation: "91 is greater than 19 (91 > 19)." },
  { id: "MATH029", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Which of the following statements is true?", options: ["67 > 57", "57 > 67", "67 = 57", "67 < 57"], correctAnswer: "67 > 57", explanation: "67 has 6 tens, which is greater than 57 (5 tens)." },
  { id: "MATH030", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Which number is greater than 75?", options: ["82", "70", "65", "74"], correctAnswer: "82", explanation: "82 is greater than 75." },
  { id: "MATH031", subject: "Maths", topic: "Comparing Numbers", grade: 2, question: "Which number is less than 25?", options: ["18", "25", "30", "45"], correctAnswer: "18", explanation: "18 is smaller than 25." },

  // Addition
  { id: "MATH032", subject: "Maths", topic: "Addition", grade: 2, question: "What is 12 + 5?", options: ["17", "16", "15", "18"], correctAnswer: "17", explanation: "12 plus 5 equals 17." },
  { id: "MATH033", subject: "Maths", topic: "Addition", grade: 2, question: "What is 20 + 30?", options: ["50", "40", "60", "70"], correctAnswer: "50", explanation: "2 tens + 3 tens = 5 tens = 50." },
  { id: "MATH034", subject: "Maths", topic: "Addition", grade: 2, question: "What is 14 + 6?", options: ["20", "19", "21", "22"], correctAnswer: "20", explanation: "14 + 6 = 20." },
  { id: "MATH035", subject: "Maths", topic: "Addition", grade: 2, question: "What is 35 + 4?", options: ["39", "38", "40", "41"], correctAnswer: "39", explanation: "35 + 4 = 39." },
  { id: "MATH036", subject: "Maths", topic: "Addition", grade: 2, question: "What is 42 + 10?", options: ["52", "43", "50", "62"], correctAnswer: "52", explanation: "Adding 10 to 42 gives 52." },
  { id: "MATH037", subject: "Maths", topic: "Addition", grade: 2, question: "What is 7 + 8?", options: ["15", "14", "16", "17"], correctAnswer: "15", explanation: "7 + 8 = 15." },
  { id: "MATH038", subject: "Maths", topic: "Addition", grade: 2, question: "What is 50 + 0?", options: ["50", "0", "500", "51"], correctAnswer: "50", explanation: "Adding zero to any number leaves it unchanged." },
  { id: "MATH039", subject: "Maths", topic: "Addition", grade: 2, question: "What is 23 + 12?", options: ["35", "34", "36", "45"], correctAnswer: "35", explanation: "20 + 10 = 30, and 3 + 2 = 5, so 35." },
  { id: "MATH040", subject: "Maths", topic: "Addition", grade: 2, question: "What is 9 + 9?", options: ["18", "17", "19", "20"], correctAnswer: "18", explanation: "Double 9 is 18." },

  // Subtraction
  { id: "MATH041", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 18 - 5?", options: ["13", "12", "14", "15"], correctAnswer: "13", explanation: "18 minus 5 equals 13." },
  { id: "MATH042", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 50 - 20?", options: ["30", "20", "40", "10"], correctAnswer: "30", explanation: "5 tens minus 2 tens = 3 tens = 30." },
  { id: "MATH043", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 25 - 5?", options: ["20", "15", "25", "30"], correctAnswer: "20", explanation: "25 minus 5 is 20." },
  { id: "MATH044", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 47 - 4?", options: ["43", "42", "44", "41"], correctAnswer: "43", explanation: "47 minus 4 equals 43." },
  { id: "MATH045", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 16 - 8?", options: ["8", "7", "9", "6"], correctAnswer: "8", explanation: "16 minus 8 is 8." },
  { id: "MATH046", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 30 - 10?", options: ["20", "10", "30", "40"], correctAnswer: "20", explanation: "Taking 10 away from 30 leaves 20." },
  { id: "MATH047", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 15 - 0?", options: ["15", "0", "14", "1"], correctAnswer: "15", explanation: "Subtracting zero leaves the number unchanged: 15." },
  { id: "MATH048", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 68 - 14?", options: ["54", "52", "56", "44"], correctAnswer: "54", explanation: "68 minus 14 equals 54." },
  { id: "MATH049", subject: "Maths", topic: "Subtraction", grade: 2, question: "What is 12 - 12?", options: ["0", "1", "12", "24"], correctAnswer: "0", explanation: "A number subtracted from itself equals 0." },

  // Multiplication tables (2, 3, 4, 5, 10)
  { id: "MATH050", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 2 × 4?", options: ["8", "6", "10", "12"], correctAnswer: "8", explanation: "2 times 4 means 2 groups of 4 = 8." },
  { id: "MATH051", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 3 × 3?", options: ["9", "6", "8", "12"], correctAnswer: "9", explanation: "3 groups of 3 = 9." },
  { id: "MATH052", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 5 × 2?", options: ["10", "7", "12", "15"], correctAnswer: "10", explanation: "5 times 2 is 10." },
  { id: "MATH053", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 4 × 3?", options: ["12", "10", "14", "16"], correctAnswer: "12", explanation: "4 groups of 3 = 12." },
  { id: "MATH054", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 10 × 4?", options: ["40", "30", "50", "14"], correctAnswer: "40", explanation: "10 times 4 = 40." },
  { id: "MATH055", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 5 × 5?", options: ["25", "20", "30", "15"], correctAnswer: "25", explanation: "5 groups of 5 make 25." },
  { id: "MATH056", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 2 × 7?", options: ["14", "12", "16", "9"], correctAnswer: "14", explanation: "2 times 7 is 14." },
  { id: "MATH057", subject: "Maths", topic: "Multiplication", grade: 2, question: "What is 3 × 6?", options: ["18", "15", "21", "12"], correctAnswer: "18", explanation: "3 groups of 6 equal 18." },

  // Simple division and sharing
  { id: "MATH058", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "Share 6 apples equally between 2 children. How many does each get?", options: ["3", "2", "4", "1"], correctAnswer: "3", explanation: "6 shared equally by 2 is 3 apples each." },
  { id: "MATH059", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "Share 8 toffees equally among 4 friends. How many does each friend get?", options: ["2", "4", "3", "1"], correctAnswer: "2", explanation: "8 divided by 4 equals 2 toffees each." },
  { id: "MATH060", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "What is 10 divided by 2?", options: ["5", "4", "6", "2"], correctAnswer: "5", explanation: "10 split into 2 equal parts is 5." },
  { id: "MATH061", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "Share 12 pencils equally into 3 boxes. How many in each box?", options: ["4", "3", "5", "6"], correctAnswer: "4", explanation: "12 divided by 3 equals 4 pencils per box." },
  { id: "MATH062", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "What is 15 divided by 5?", options: ["3", "5", "4", "2"], correctAnswer: "3", explanation: "15 divided by 5 is 3." },
  { id: "MATH063", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "Share 16 stickers equally among 4 girls. How many stickers does each get?", options: ["4", "3", "5", "8"], correctAnswer: "4", explanation: "16 shared by 4 is 4 stickers each." },
  { id: "MATH064", subject: "Maths", topic: "Sharing & Division", grade: 2, question: "Share 20 cookies equally between 2 plates. How many on each plate?", options: ["10", "5", "12", "8"], correctAnswer: "10", explanation: "20 divided by 2 is 10 cookies on each plate." },

  // Odd and even numbers
  { id: "MATH065", subject: "Maths", topic: "Odd & Even", grade: 2, question: "Which of these is an even number?", options: ["14", "15", "17", "19"], correctAnswer: "14", explanation: "Even numbers end in 0, 2, 4, 6, or 8. 14 ends in 4." },
  { id: "MATH066", subject: "Maths", topic: "Odd & Even", grade: 2, question: "Which of these is an odd number?", options: ["17", "16", "18", "20"], correctAnswer: "17", explanation: "Odd numbers end in 1, 3, 5, 7, or 9. 17 is odd." },
  { id: "MATH067", subject: "Maths", topic: "Odd & Even", grade: 2, question: "All even numbers end with:", options: ["0, 2, 4, 6, 8", "1, 3, 5, 7, 9", "only 0", "only 5"], correctAnswer: "0, 2, 4, 6, 8", explanation: "Even numbers can always be split into pairs and end in 0, 2, 4, 6, or 8." },
  { id: "MATH068", subject: "Maths", topic: "Odd & Even", grade: 2, question: "All odd numbers end with:", options: ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "only 1", "only 7"], correctAnswer: "1, 3, 5, 7, 9", explanation: "Odd numbers have one left over when paired and end in 1, 3, 5, 7, or 9." },
  { id: "MATH069", subject: "Maths", topic: "Odd & Even", grade: 2, question: "Is 22 an odd or even number?", options: ["Even", "Odd", "Neither", "Both"], correctAnswer: "Even", explanation: "22 ends in 2, so it is an even number." },
  { id: "MATH070", subject: "Maths", topic: "Odd & Even", grade: 2, question: "Is 39 an odd or even number?", options: ["Odd", "Even", "Neither", "Both"], correctAnswer: "Odd", explanation: "39 ends in 9, so it is an odd number." },

  // 2D and 3D Shapes
  { id: "MATH071", subject: "Maths", topic: "Shapes", grade: 2, question: "A closed flat shape with 3 straight sides and 3 corners is a:", options: ["Triangle", "Square", "Circle", "Rectangle"], correctAnswer: "Triangle", explanation: "A triangle has 3 sides and 3 corners." },
  { id: "MATH072", subject: "Maths", topic: "Shapes", grade: 2, question: "A shape with 4 equal straight sides and 4 corners is a:", options: ["Square", "Triangle", "Circle", "Oval"], correctAnswer: "Square", explanation: "A square has 4 equal straight sides." },
  { id: "MATH073", subject: "Maths", topic: "Shapes", grade: 2, question: "Which shape is completely round with no sides and no corners?", options: ["Circle", "Square", "Triangle", "Rectangle"], correctAnswer: "Circle", explanation: "A circle is round and has no straight sides or corners." },
  { id: "MATH074", subject: "Maths", topic: "Shapes", grade: 2, question: "Which 3D shape looks like an ice-cream cone or birthday hat?", options: ["Cone", "Cube", "Cylinder", "Sphere"], correctAnswer: "Cone", explanation: "A cone has a circular base that tapers to a point, like a party hat." },
  { id: "MATH075", subject: "Maths", topic: "Shapes", grade: 2, question: "Which 3D shape is round like a football?", options: ["Sphere", "Cube", "Cone", "Cylinder"], correctAnswer: "Sphere", explanation: "A solid ball shape is called a sphere." },
  { id: "MATH076", subject: "Maths", topic: "Shapes", grade: 2, question: "Which 3D shape looks like a can of cold drink?", options: ["Cylinder", "Cone", "Sphere", "Cube"], correctAnswer: "Cylinder", explanation: "A can has two flat circular faces and a curved surface, making it a cylinder." },
  { id: "MATH077", subject: "Maths", topic: "Shapes", grade: 2, question: "A playing dice is an example of which 3D shape?", options: ["Cube", "Cone", "Sphere", "Cylinder"], correctAnswer: "Cube", explanation: "A dice has 6 identical square faces, making it a cube." },

  // Patterns
  { id: "MATH078", subject: "Maths", topic: "Patterns", grade: 2, question: "Complete the number pattern: 2, 4, 6, 8, ___", options: ["10", "9", "12", "11"], correctAnswer: "10", explanation: "We are adding 2 each time. 8 + 2 = 10." },
  { id: "MATH079", subject: "Maths", topic: "Patterns", grade: 2, question: "Complete the number pattern: 5, 10, 15, 20, ___", options: ["25", "30", "22", "24"], correctAnswer: "25", explanation: "Counting in 5s: 20 + 5 = 25." },
  { id: "MATH080", subject: "Maths", topic: "Patterns", grade: 2, question: "Complete the number pattern: 10, 20, 30, 40, ___", options: ["50", "45", "60", "70"], correctAnswer: "50", explanation: "Counting in 10s: 40 + 10 = 50." },
  { id: "MATH081", subject: "Maths", topic: "Patterns", grade: 2, question: "What comes next in the pattern: Circle, Square, Circle, Square, ___", options: ["Circle", "Square", "Triangle", "Star"], correctAnswer: "Circle", explanation: "The pattern alternates between Circle and Square, so Circle comes next." },
  { id: "MATH082", subject: "Maths", topic: "Patterns", grade: 2, question: "Complete the backward pattern: 100, 90, 80, 70, ___", options: ["60", "50", "65", "75"], correctAnswer: "60", explanation: "Counting down by 10s: 70 - 10 = 60." },
  { id: "MATH083", subject: "Maths", topic: "Patterns", grade: 2, question: "Complete the pattern: 1, 3, 5, 7, ___", options: ["9", "8", "10", "11"], correctAnswer: "9", explanation: "These are odd numbers skipping by 2: 7 + 2 = 9." },

  // Time and calendar
  { id: "MATH084", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "How many days are there in a week?", options: ["7", "5", "6", "8"], correctAnswer: "7", explanation: "There are 7 days in a week: Monday to Sunday." },
  { id: "MATH085", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "How many months are there in a year?", options: ["12", "10", "11", "7"], correctAnswer: "12", explanation: "A year has 12 months, from January to December." },
  { id: "MATH086", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "Which day comes right after Tuesday?", options: ["Wednesday", "Thursday", "Monday", "Friday"], correctAnswer: "Wednesday", explanation: "Tuesday is followed by Wednesday." },
  { id: "MATH087", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "Which is the very first month of the year?", options: ["January", "February", "December", "March"], correctAnswer: "January", explanation: "January is month number 1 of the year." },
  { id: "MATH088", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "How many hours are there in one complete day?", options: ["24", "12", "48", "60"], correctAnswer: "24", explanation: "One full day (day + night) has 24 hours." },
  { id: "MATH089", subject: "Maths", topic: "Time & Calendar", grade: 2, question: "If the short hand is on 3 and the long hand is on 12, what time is it?", options: ["3 o'clock", "12 o'clock", "6 o'clock", "3:30"], correctAnswer: "3 o'clock", explanation: "The short hour hand at 3 and long minute hand at 12 means 3 o'clock." },

  // Money
  { id: "MATH090", subject: "Maths", topic: "Money", grade: 2, question: "How many 50-paise coins make 1 Rupee?", options: ["2", "4", "5", "10"], correctAnswer: "2", explanation: "50 paise + 50 paise = 100 paise = 1 Rupee." },
  { id: "MATH091", subject: "Maths", topic: "Money", grade: 2, question: "What is 5 Rupees + 5 Rupees?", options: ["10 Rupees", "15 Rupees", "20 Rupees", "50 Rupees"], correctAnswer: "10 Rupees", explanation: "5 + 5 = 10 Rupees." },
  { id: "MATH092", subject: "Maths", topic: "Money", grade: 2, question: "What is the symbol of the Indian Rupee?", options: ["₹", "$", "€", "£"], correctAnswer: "₹", explanation: "₹ is the official Indian Rupee currency symbol." },
  { id: "MATH093", subject: "Maths", topic: "Money", grade: 2, question: "A chocolate costs ₹10. You give ₹20. How much change will you get back?", options: ["₹10", "₹5", "₹15", "₹20"], correctAnswer: "₹10", explanation: "₹20 - ₹10 = ₹10 change." },
  { id: "MATH094", subject: "Maths", topic: "Money", grade: 2, question: "How much total money do two ₹10 notes make?", options: ["₹20", "₹15", "₹30", "₹10"], correctAnswer: "₹20", explanation: "10 + 10 = ₹20." },

  // Measurement (Length, weight, capacity)
  { id: "MATH095", subject: "Maths", topic: "Measurement", grade: 2, question: "Which unit is used to measure long lengths like the length of a room?", options: ["Metre", "Gram", "Litre", "Second"], correctAnswer: "Metre", explanation: "Metres (m) are used to measure length." },
  { id: "MATH096", subject: "Maths", topic: "Measurement", grade: 2, question: "Which unit is used to measure heavy weight, like a sack of rice?", options: ["Kilogram", "Centimetre", "Litre", "Metre"], correctAnswer: "Kilogram", explanation: "Kilograms (kg) are used to measure heavy weights." },
  { id: "MATH097", subject: "Maths", topic: "Measurement", grade: 2, question: "Which unit is used to measure liquids like milk or juice?", options: ["Litre", "Metre", "Gram", "Centimetre"], correctAnswer: "Litre", explanation: "Litres (L) and millilitres (mL) measure liquids and capacity." },
  { id: "MATH098", subject: "Maths", topic: "Measurement", grade: 2, question: "Which item is heavier: a feather or a brick?", options: ["A brick", "A feather", "Both are equal", "Cannot say"], correctAnswer: "A brick", explanation: "A brick has much more weight than a light feather." },

  // Skip counting and word problems
  { id: "MATH099", subject: "Maths", topic: "Skip Counting", grade: 2, question: "Skip count by 2: 14, 16, 18, ___", options: ["20", "19", "22", "24"], correctAnswer: "20", explanation: "Adding 2 to 18 gives 20." },
  { id: "MATH100", subject: "Maths", topic: "Word Problems", grade: 2, question: "Riya has 7 balloons. Her friend gives her 5 more. How many balloons does Riya have now?", options: ["12", "11", "13", "14"], correctAnswer: "12", explanation: "7 balloons + 5 balloons = 12 balloons in total." }
];

if (typeof window !== 'undefined') {
  window.MATHS_QUESTIONS = MATHS_QUESTIONS;
}
if (typeof module !== 'undefined') {
  module.exports = MATHS_QUESTIONS;
}
