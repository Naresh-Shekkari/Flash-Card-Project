// =============================================================================
// data/memory-color-pictures.js - Educational Picture Bank for Memory Color Challenge
// Exactly 10 pictures, each with exactly 10 independently scored colorable regions.
// Designed for Grade 2 children: Clean boundaries, distinct shapes, friendly themes.
// =============================================================================

const MEMORY_COLORS = [
  { id: 'red', name: 'Red', hex: '#FF4757' },
  { id: 'blue', name: 'Blue', hex: '#1E90FF' },
  { id: 'green', name: 'Green', hex: '#2ED573' },
  { id: 'yellow', name: 'Yellow', hex: '#FFA502' },
  { id: 'orange', name: 'Orange', hex: '#FF7F50' },
  { id: 'purple', name: 'Purple', hex: '#9B59B6' },
  { id: 'pink', name: 'Pink', hex: '#FF6B81' },
  { id: 'brown', name: 'Brown', hex: '#8B4513' },
  { id: 'black', name: 'Black', hex: '#2F3542' },
  { id: 'white', name: 'White', hex: '#FFFFFF' }
];

const MEMORY_COLOR_PICTURES = [
  // ---------------------------------------------------------------------------
  // Picture 1: Cozy Country House
  // ---------------------------------------------------------------------------
  {
    id: 'pic-01-house',
    title: 'Cozy Country House',
    subtitle: 'A sweet sunny home with a friendly tree and garden',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p1-sky', name: 'Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 280 L 0 280 Z' },
      { id: 'p1-sun', name: 'Sun', color: '#FFA502', d: 'M 520 70 A 45 45 0 1 1 519.9 70 Z' },
      { id: 'p1-cloud', name: 'Cloud', color: '#FFFFFF', d: 'M 90 85 C 90 65 110 50 135 55 C 145 40 175 40 190 55 C 215 50 235 68 230 90 C 245 105 235 125 215 125 L 105 125 C 85 125 75 105 90 85 Z' },
      { id: 'p1-chimney', name: 'Chimney', color: '#2F3542', d: 'M 400 130 L 435 130 L 435 200 L 400 200 Z' },
      { id: 'p1-roof', name: 'House Roof', color: '#FF4757', d: 'M 240 200 L 370 90 L 500 200 Z' },
      { id: 'p1-wall', name: 'House Wall', color: '#FF7F50', d: 'M 260 200 L 480 200 L 480 340 L 260 340 Z' },
      { id: 'p1-door', name: 'Front Door', color: '#8B4513', d: 'M 335 250 L 405 250 L 405 340 L 335 340 Z' },
      { id: 'p1-window', name: 'Window', color: '#9B59B6', d: 'M 420 225 L 465 225 L 465 270 L 420 270 Z' },
      { id: 'p1-tree-leaves', name: 'Tree Leaves', color: '#2ED573', d: 'M 130 140 C 90 140 70 175 80 205 C 65 225 75 255 100 260 C 100 280 130 285 155 275 C 175 290 205 275 210 255 C 225 230 215 195 195 185 C 205 155 170 135 130 140 Z' },
      { id: 'p1-tree-trunk', name: 'Tree Trunk', color: '#FF6B81', d: 'M 130 270 L 160 270 L 165 350 L 125 350 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 2: Spring Flower & Butterfly
  // ---------------------------------------------------------------------------
  {
    id: 'pic-02-garden',
    title: 'Spring Garden & Butterfly',
    subtitle: 'A cheerful blooming flower with a fluttering butterfly',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p2-sky', name: 'Garden Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 320 L 0 320 Z' },
      { id: 'p2-grass', name: 'Lawn Grass', color: '#2ED573', d: 'M 0 320 L 600 320 L 600 420 L 0 420 Z' },
      { id: 'p2-flower-petals', name: 'Flower Petals', color: '#FF4757', d: 'M 180 150 C 140 110 220 70 240 120 C 280 80 330 140 285 165 C 330 195 270 255 240 210 C 210 255 150 200 190 170 C 145 150 155 120 180 150 Z' },
      { id: 'p2-flower-center', name: 'Flower Center', color: '#FFA502', d: 'M 240 165 A 30 30 0 1 1 239.9 165 Z' },
      { id: 'p2-flower-stem', name: 'Flower Stem', color: '#2ED573', d: 'M 233 210 L 247 210 L 247 350 L 233 350 Z' },
      { id: 'p2-flower-leaf', name: 'Flower Leaf', color: '#8B4513', d: 'M 245 270 Q 300 240 310 280 Q 275 300 245 285 Z' },
      { id: 'p2-butterfly-body', name: 'Butterfly Body', color: '#2F3542', d: 'M 440 90 Q 448 90 448 150 Q 440 150 440 90 Z' },
      { id: 'p2-wing-top-left', name: 'Top Wing Left', color: '#9B59B6', d: 'M 440 100 C 390 60 370 120 440 125 Z' },
      { id: 'p2-wing-top-right', name: 'Top Wing Right', color: '#FF6B81', d: 'M 448 100 C 498 60 518 120 448 125 Z' },
      { id: 'p2-wing-bottom', name: 'Bottom Wings', color: '#FF7F50', d: 'M 440 125 C 395 140 405 180 444 145 C 483 180 493 140 448 125 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 3: Village School & Yellow Bus
  // ---------------------------------------------------------------------------
  {
    id: 'pic-03-school',
    title: 'Happy Village School',
    subtitle: 'A welcoming school building with the school bus parked outside',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p3-sky', name: 'Morning Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 300 L 0 300 Z' },
      { id: 'p3-sun', name: 'Morning Sun', color: '#FFA502', d: 'M 80 70 A 40 40 0 1 1 79.9 70 Z' },
      { id: 'p3-school-roof', name: 'School Roof', color: '#FF4757', d: 'M 100 160 L 220 80 L 340 160 Z' },
      { id: 'p3-school-wall', name: 'School Wall', color: '#FFFFFF', d: 'M 120 160 L 320 160 L 320 300 L 120 300 Z' },
      { id: 'p3-school-door', name: 'School Door', color: '#8B4513', d: 'M 190 220 L 250 220 L 250 300 L 190 300 Z' },
      { id: 'p3-school-clock', name: 'Tower Clock', color: '#9B59B6', d: 'M 220 130 A 18 18 0 1 1 219.9 130 Z' },
      { id: 'p3-bus-body', name: 'School Bus Body', color: '#FFA502', d: 'M 370 200 L 550 200 L 560 250 L 560 280 L 370 280 Z' },
      { id: 'p3-bus-windows', name: 'Bus Windows', color: '#1E90FF', d: 'M 385 210 L 535 210 L 535 235 L 385 235 Z' },
      { id: 'p3-bus-wheels', name: 'Bus Wheels', color: '#2F3542', d: 'M 400 280 A 18 18 0 1 1 399.9 280 M 510 280 A 18 18 0 1 1 509.9 280 Z' },
      { id: 'p3-road', name: 'School Ground', color: '#2ED573', d: 'M 0 300 L 600 300 L 600 420 L 0 420 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 4: Fresh Fruit Basket
  // ---------------------------------------------------------------------------
  {
    id: 'pic-04-fruit-basket',
    title: 'Fresh Fruit Basket',
    subtitle: 'Juicy apples, bananas, grapes, and an orange in a woven basket',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p4-wall', name: 'Kitchen Wall', color: '#FF6B81', d: 'M 0 0 L 600 0 L 600 260 L 0 260 Z' },
      { id: 'p4-table', name: 'Dining Table', color: '#8B4513', d: 'M 0 260 L 600 260 L 600 420 L 0 420 Z' },
      { id: 'p4-cloth', name: 'Table Mat', color: '#FFFFFF', d: 'M 80 300 L 520 300 L 560 410 L 40 410 Z' },
      { id: 'p4-basket', name: 'Fruit Basket', color: '#FF7F50', d: 'M 140 220 L 460 220 L 420 340 L 180 340 Z' },
      { id: 'p4-apple', name: 'Red Apple', color: '#FF4757', d: 'M 220 180 C 190 140 250 110 260 140 C 270 110 330 140 300 180 C 280 210 240 210 220 180 Z' },
      { id: 'p4-apple-leaf', name: 'Apple Leaf', color: '#2ED573', d: 'M 260 135 Q 285 115 280 130 Q 265 140 260 135 Z' },
      { id: 'p4-banana', name: 'Banana Bunch', color: '#FFA502', d: 'M 160 190 C 200 130 260 150 280 180 C 250 170 190 180 160 190 Z' },
      { id: 'p4-orange', name: 'Sweet Orange', color: '#FF7F50', d: 'M 350 180 A 35 35 0 1 1 349.9 180 Z' },
      { id: 'p4-grapes', name: 'Purple Grapes', color: '#9B59B6', d: 'M 390 150 C 370 150 360 180 380 200 C 400 210 430 190 420 160 C 410 140 395 140 390 150 Z' },
      { id: 'p4-bowl-rim', name: 'Basket Handle', color: '#2F3542', d: 'M 160 220 C 160 100 440 100 440 220 L 420 220 C 420 120 180 120 180 220 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 5: Friendly Ocean Fish
  // ---------------------------------------------------------------------------
  {
    id: 'pic-05-ocean-fish',
    title: 'Friendly Ocean Fish',
    subtitle: 'A colorful tropical fish swimming among sea plants and bubbles',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p5-water', name: 'Deep Ocean Water', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 350 L 0 350 Z' },
      { id: 'p5-seabed', name: 'Sandy Seabed', color: '#FFA502', d: 'M 0 350 L 600 350 L 600 420 L 0 420 Z' },
      { id: 'p5-fish-body', name: 'Fish Body', color: '#FF7F50', d: 'M 220 200 C 260 120 400 130 430 200 C 400 270 260 280 220 200 Z' },
      { id: 'p5-fish-tail', name: 'Fish Tail', color: '#FFA502', d: 'M 220 200 L 140 130 L 160 200 L 140 270 Z' },
      { id: 'p5-fish-fin-top', name: 'Top Dorsal Fin', color: '#FF4757', d: 'M 300 145 C 330 90 380 110 390 155 Z' },
      { id: 'p5-fish-fin-bottom', name: 'Bottom Fin', color: '#FF4757', d: 'M 310 250 C 340 300 380 280 375 245 Z' },
      { id: 'p5-fish-eye', name: 'Fish Eye', color: '#FFFFFF', d: 'M 390 185 A 14 14 0 1 1 389.9 185 Z' },
      { id: 'p5-fish-pupil', name: 'Eye Pupil', color: '#2F3542', d: 'M 395 185 A 7 7 0 1 1 394.9 185 Z' },
      { id: 'p5-seaweed', name: 'Green Seaweed', color: '#2ED573', d: 'M 80 370 Q 120 280 70 210 Q 110 140 90 90 Q 60 150 50 240 Q 60 310 80 370 Z' },
      { id: 'p5-starfish', name: 'Pink Starfish', color: '#FF6B81', d: 'M 490 340 L 500 365 L 525 365 L 505 380 L 512 405 L 490 390 L 468 405 L 475 380 L 455 365 L 480 365 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 6: Sunny Animal Farm
  // ---------------------------------------------------------------------------
  {
    id: 'pic-06-farm',
    title: 'Sunny Animal Farm',
    subtitle: 'A big red barn with a windmill and green rolling pastures',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p6-sky', name: 'Sunny Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 240 L 0 240 Z' },
      { id: 'p6-sun', name: 'Farm Sun', color: '#FFA502', d: 'M 510 65 A 40 40 0 1 1 509.9 65 Z' },
      { id: 'p6-hill', name: 'Pasture Hill', color: '#2ED573', d: 'M 0 240 Q 300 200 600 240 L 600 420 L 0 420 Z' },
      { id: 'p6-barn-roof', name: 'Barn Roof', color: '#2F3542', d: 'M 220 180 L 330 110 L 440 180 Z' },
      { id: 'p6-barn-wall', name: 'Red Barn Wall', color: '#FF4757', d: 'M 240 180 L 420 180 L 420 310 L 240 310 Z' },
      { id: 'p6-barn-door', name: 'Barn Door', color: '#FFFFFF', d: 'M 300 220 L 360 220 L 360 310 L 300 310 Z' },
      { id: 'p6-silo', name: 'Grain Silo', color: '#9B59B6', d: 'M 170 170 L 220 170 L 220 300 L 170 300 Z' },
      { id: 'p6-silo-dome', name: 'Silo Dome', color: '#FF7F50', d: 'M 170 170 C 170 130 220 130 220 170 Z' },
      { id: 'p6-fence', name: 'Farm Fence', color: '#8B4513', d: 'M 440 260 L 580 260 L 580 320 L 440 320 Z' },
      { id: 'p6-piggy', name: 'Happy Piglet', color: '#FF6B81', d: 'M 100 320 C 70 320 70 370 100 370 C 130 370 130 320 100 320 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 7: Joyful Playground Slide
  // ---------------------------------------------------------------------------
  {
    id: 'pic-07-playground',
    title: 'Joyful Playground Slide',
    subtitle: 'A thrilling spiral slide with climbing ladder and sand pit',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p7-sky', name: 'Playground Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 290 L 0 290 Z' },
      { id: 'p7-sun', name: 'Playground Sun', color: '#FFA502', d: 'M 100 70 A 42 42 0 1 1 99.9 70 Z' },
      { id: 'p7-lawn', name: 'Playground Lawn', color: '#2ED573', d: 'M 0 290 L 600 290 L 600 420 L 0 420 Z' },
      { id: 'p7-tower-roof', name: 'Playhouse Roof', color: '#FF4757', d: 'M 140 120 L 230 50 L 320 120 Z' },
      { id: 'p7-tower-wall', name: 'Tower Walls', color: '#FFA502', d: 'M 160 120 L 300 120 L 300 270 L 160 270 Z' },
      { id: 'p7-slide-shoot', name: 'Slide Chute', color: '#1E90FF', d: 'M 300 170 Q 420 180 470 320 L 430 320 Q 380 210 300 200 Z' },
      { id: 'p7-slide-steps', name: 'Climbing Ladder', color: '#8B4513', d: 'M 120 150 L 160 150 L 160 300 L 120 300 Z' },
      { id: 'p7-sandbox', name: 'Sand Pit', color: '#FF7F50', d: 'M 340 330 L 560 330 L 540 400 L 320 400 Z' },
      { id: 'p7-bucket', name: 'Toy Bucket', color: '#9B59B6', d: 'M 360 340 L 400 340 L 390 380 L 370 380 Z' },
      { id: 'p7-ball', name: 'Play Ball', color: '#FF6B81', d: 'M 470 360 A 20 20 0 1 1 469.9 360 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 8: Peaceful Duck Pond
  // ---------------------------------------------------------------------------
  {
    id: 'pic-08-duck-pond',
    title: 'Peaceful Duck Pond',
    subtitle: 'A sweet mother duck swimming in a clean pond with water lilies',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p8-sky', name: 'Park Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 210 L 0 210 Z' },
      { id: 'p8-sun', name: 'Golden Sun', color: '#FFA502', d: 'M 500 60 A 38 38 0 1 1 499.9 60 Z' },
      { id: 'p8-grass-bank', name: 'Grassy Bank', color: '#2ED573', d: 'M 0 210 L 600 210 L 600 420 L 0 420 Z' },
      { id: 'p8-pond-water', name: 'Clear Pond Water', color: '#1E90FF', d: 'M 80 270 C 140 220 460 220 520 270 C 560 320 480 390 300 390 C 120 390 40 320 80 270 Z' },
      { id: 'p8-duck-body', name: 'Duck Body', color: '#FFFFFF', d: 'M 220 280 C 260 240 350 250 360 290 C 350 330 250 330 220 280 Z' },
      { id: 'p8-duck-head', name: 'Duck Head', color: '#FFA502', d: 'M 340 260 A 25 25 0 1 1 339.9 260 Z' },
      { id: 'p8-duck-beak', name: 'Duck Beak', color: '#FF7F50', d: 'M 360 255 L 395 265 L 360 275 Z' },
      { id: 'p8-lily-pad', name: 'Lily Pad', color: '#2ED573', d: 'M 140 330 C 110 320 120 360 150 360 C 180 360 180 320 140 330 Z' },
      { id: 'p8-lotus-flower', name: 'Pink Lotus', color: '#FF6B81', d: 'M 150 310 C 140 290 160 290 150 310 M 135 320 Q 150 295 165 320 Z' },
      { id: 'p8-park-bench', name: 'Park Bench', color: '#8B4513', d: 'M 420 230 L 520 230 L 520 260 L 420 260 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 9: Soaring Colorful Kite
  // ---------------------------------------------------------------------------
  {
    id: 'pic-09-kite',
    title: 'Soaring High Kite',
    subtitle: 'A high-flying diamond kite with rainbow tail bows in the sky',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p9-sky', name: 'Breezy Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 360 L 0 360 Z' },
      { id: 'p9-sun', name: 'Bright Sun', color: '#FFA502', d: 'M 80 80 A 44 44 0 1 1 79.9 80 Z' },
      { id: 'p9-hill', name: 'Green Meadow', color: '#2ED573', d: 'M 0 360 Q 300 320 600 360 L 600 420 L 0 420 Z' },
      { id: 'p9-cloud', name: 'Fluffy Cloud', color: '#FFFFFF', d: 'M 430 70 C 420 50 450 40 470 50 C 490 35 520 45 530 65 C 550 65 560 90 540 105 L 430 105 C 410 100 410 80 430 70 Z' },
      { id: 'p9-kite-top', name: 'Kite Top Triangle', color: '#FF4757', d: 'M 320 60 L 390 140 L 250 140 Z' },
      { id: 'p9-kite-left', name: 'Kite Left Wing', color: '#FFA502', d: 'M 250 140 L 320 140 L 320 250 Z' },
      { id: 'p9-kite-right', name: 'Kite Right Wing', color: '#9B59B6', d: 'M 320 140 L 390 140 L 320 250 Z' },
      { id: 'p9-bow-one', name: 'Top Ribbon Bow', color: '#FF7F50', d: 'M 300 270 L 340 270 L 320 285 Z' },
      { id: 'p9-bow-two', name: 'Middle Ribbon Bow', color: '#FF6B81', d: 'M 270 305 L 310 305 L 290 320 Z' },
      { id: 'p9-bow-three', name: 'Bottom Ribbon Bow', color: '#2F3542', d: 'M 240 340 L 280 340 L 260 355 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 10: Rocket in Outer Space
  // ---------------------------------------------------------------------------
  {
    id: 'pic-10-rocket',
    title: 'Rocket to the Stars',
    subtitle: 'A thrilling spaceship rocketing past planets and moon in outer space',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p10-space', name: 'Deep Space', color: '#2F3542', d: 'M 0 0 L 600 0 L 600 420 L 0 420 Z' },
      { id: 'p10-moon', name: 'Silver Moon', color: '#FFFFFF', d: 'M 100 90 A 45 45 0 1 1 99.9 90 Z' },
      { id: 'p10-planet', name: 'Ringed Planet', color: '#FFA502', d: 'M 480 80 A 35 35 0 1 1 479.9 80 Z' },
      { id: 'p10-ring', name: 'Planet Rings', color: '#9B59B6', d: 'M 425 80 Q 480 60 535 80 Q 480 100 425 80 Z' },
      { id: 'p10-rocket-nose', name: 'Rocket Nose Cone', color: '#FF4757', d: 'M 300 60 L 345 130 L 255 130 Z' },
      { id: 'p10-rocket-body', name: 'Rocket Body', color: '#FFFFFF', d: 'M 255 130 L 345 130 L 345 270 L 255 270 Z' },
      { id: 'p10-rocket-window', name: 'Porthole Window', color: '#1E90FF', d: 'M 300 180 A 24 24 0 1 1 299.9 180 Z' },
      { id: 'p10-fin-left', name: 'Left Rocket Wing', color: '#FF7F50', d: 'M 255 210 L 200 280 L 255 270 Z' },
      { id: 'p10-fin-right', name: 'Right Rocket Wing', color: '#FF7F50', d: 'M 345 210 L 400 280 L 345 270 Z' },
      { id: 'p10-rocket-flame', name: 'Rocket Booster Flame', color: '#FFA502', d: 'M 270 270 Q 300 370 330 270 Z' }
    ]
  }
];

// Helper to normalize hex colors to uppercase
function normalizeHex(hex) {
  if (!hex || typeof hex !== 'string') return '';
  let h = hex.trim().toUpperCase();
  if (!h.startsWith('#')) h = '#' + h;
  if (h.length === 4) {
    h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
  }
  return h;
}

// Export for browser and Node.js test environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MEMORY_COLORS,
    MEMORY_COLOR_PICTURES,
    normalizeHex
  };
}

if (typeof window !== 'undefined') {
  window.MEMORY_COLORS = MEMORY_COLORS;
  window.MEMORY_COLOR_PICTURES = MEMORY_COLOR_PICTURES;
  window.normalizeHex = normalizeHex;
}
