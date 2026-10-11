// =============================================================================
// data/memory-color-pictures.js - Educational Picture Bank for Memory Color Challenge
// Exactly 20 diverse pictures, each with exactly 10 independently scored colorable regions.
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
  },

  // ---------------------------------------------------------------------------
  // Picture 11: Cuddly Teddy Bear & Honey Pot
  // ---------------------------------------------------------------------------
  {
    id: 'pic-11-teddy-bear',
    title: 'Cuddly Teddy Bear & Honey Pot',
    subtitle: 'A fuzzy brown teddy bear sitting with a sweet jar of golden honey',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p11-bg', name: 'Nursery Wallpaper', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 300 L 0 300 Z' },
      { id: 'p11-rug', name: 'Playroom Floor Mat', color: '#2ED573', d: 'M 0 300 L 600 300 L 600 420 L 0 420 Z' },
      { id: 'p11-heart', name: 'Wall Heart Frame', color: '#FF6B81', d: 'M 100 50 C 70 20 20 60 50 110 L 100 150 L 150 110 C 180 60 130 20 100 50 Z' },
      { id: 'p11-bear-ears-inner', name: 'Ears & Inner Pads', color: '#FFA502', d: 'M 220 70 A 25 25 0 1 1 219.9 70 M 380 70 A 25 25 0 1 1 379.9 70 Z' },
      { id: 'p11-bear-head', name: 'Teddy Bear Head', color: '#8B4513', d: 'M 300 60 C 230 60 210 120 210 160 C 210 210 250 230 300 230 C 350 230 390 210 390 160 C 390 120 370 60 300 60 Z' },
      { id: 'p11-bear-muzzle', name: 'Snout & Muzzle', color: '#FFFFFF', d: 'M 300 150 C 270 150 260 185 280 205 C 290 215 310 215 320 205 C 340 185 330 150 300 150 Z' },
      { id: 'p11-bear-body', name: 'Teddy Bear Body', color: '#8B4513', d: 'M 240 230 C 190 250 190 350 250 370 L 350 370 C 410 350 410 250 360 230 Z' },
      { id: 'p11-bear-bowtie', name: 'Bright Neck Bowtie', color: '#FF4757', d: 'M 300 225 L 260 205 L 260 245 Z M 300 225 L 340 205 L 340 245 Z M 290 225 A 10 10 0 1 1 310 225 A 10 10 0 1 1 290 225 Z' },
      { id: 'p11-honey-pot', name: 'Purple Honey Jar', color: '#9B59B6', d: 'M 450 270 L 530 270 L 545 350 C 545 380 435 380 435 350 Z' },
      { id: 'p11-honey-drip', name: 'Honey Drip', color: '#FF7F50', d: 'M 465 270 L 515 270 C 515 300 500 310 490 310 C 480 310 465 295 465 270 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 12: Chugging Steam Train
  // ---------------------------------------------------------------------------
  {
    id: 'pic-12-steam-train',
    title: 'Chugging Steam Train',
    subtitle: 'A colorful steam engine locomotive whistling across country tracks',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p12-sky', name: 'Clear Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 240 L 0 240 Z' },
      { id: 'p12-sun', name: 'Golden Sun', color: '#FFA502', d: 'M 520 60 A 35 35 0 1 1 519.9 60 Z' },
      { id: 'p12-hills', name: 'Rolling Green Meadow', color: '#2ED573', d: 'M 0 240 Q 300 190 600 240 L 600 340 L 0 340 Z' },
      { id: 'p12-tracks', name: 'Railway Track Bed', color: '#8B4513', d: 'M 0 340 L 600 340 L 600 420 L 0 420 Z' },
      { id: 'p12-smoke', name: 'Puffy Steam Clouds', color: '#FFFFFF', d: 'M 180 50 C 160 40 150 70 170 85 C 180 95 210 95 220 80 C 230 65 210 45 180 50 Z M 220 70 C 240 50 280 60 275 85 C 270 100 240 105 225 90 Z' },
      { id: 'p12-smokestack', name: 'Engine Smokestack', color: '#2F3542', d: 'M 160 110 L 190 110 L 185 180 L 165 180 Z' },
      { id: 'p12-engine-boiler', name: 'Locomotive Boiler', color: '#FF4757', d: 'M 140 180 L 340 180 L 340 290 L 140 290 Z' },
      { id: 'p12-cab', name: 'Train Driver Cab', color: '#FFA502', d: 'M 340 140 L 460 140 L 460 290 L 340 290 Z' },
      { id: 'p12-cab-roof', name: 'Cab Curved Roof', color: '#FF7F50', d: 'M 330 140 C 330 115 470 115 470 140 Z' },
      { id: 'p12-wheels', name: 'Large Engine Wheels', color: '#9B59B6', d: 'M 150 315 A 25 25 0 1 1 149.9 315 M 240 315 A 25 25 0 1 1 239.9 315 M 340 315 A 30 30 0 1 1 339.9 315 M 420 315 A 30 30 0 1 1 419.9 315 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 13: Royal Fairy Tale Castle
  // ---------------------------------------------------------------------------
  {
    id: 'pic-13-magic-castle',
    title: 'Royal Fairy Tale Castle',
    subtitle: 'A grand stone palace with high towers, arched gate, and a shimmering moat',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p13-sky', name: 'Twilight Sky', color: '#9B59B6', d: 'M 0 0 L 600 0 L 600 280 L 0 280 Z' },
      { id: 'p13-moon', name: 'Crescent Moon', color: '#FFA502', d: 'M 500 40 A 35 35 0 0 1 540 100 A 40 40 0 1 0 500 40 Z' },
      { id: 'p13-hill', name: 'Castle Hill', color: '#2ED573', d: 'M 0 280 Q 300 230 600 280 L 600 350 L 0 350 Z' },
      { id: 'p13-moat', name: 'Castle Water Moat', color: '#1E90FF', d: 'M 0 350 L 600 350 L 600 420 L 0 420 Z' },
      { id: 'p13-main-wall', name: 'Central Castle Wall', color: '#FFFFFF', d: 'M 200 170 L 400 170 L 400 300 L 200 300 Z' },
      { id: 'p13-left-tower', name: 'Left Guard Tower', color: '#FF7F50', d: 'M 130 130 L 200 130 L 200 300 L 130 300 Z' },
      { id: 'p13-right-tower', name: 'Right Guard Tower', color: '#FF7F50', d: 'M 400 130 L 470 130 L 470 300 L 400 300 Z' },
      { id: 'p13-tower-roofs', name: 'Pointed Tower Roofs', color: '#FF4757', d: 'M 120 130 L 165 40 L 210 130 Z M 390 130 L 435 40 L 480 130 Z M 260 170 L 300 90 L 340 170 Z' },
      { id: 'p13-drawbridge', name: 'Castle Wooden Gate', color: '#8B4513', d: 'M 260 220 C 260 180 340 180 340 220 L 340 310 L 260 310 Z' },
      { id: 'p13-flags', name: 'Royal Pennant Flags', color: '#FF6B81', d: 'M 165 40 L 165 15 L 200 25 L 165 35 Z M 435 40 L 435 15 L 470 25 L 435 35 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 14: Celebration Birthday Cake
  // ---------------------------------------------------------------------------
  {
    id: 'pic-14-birthday-cake',
    title: 'Celebration Birthday Cake',
    subtitle: 'A tall yummy birthday cake decorated with sweet frosting and burning candles',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p14-wall', name: 'Party Background', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 270 L 0 270 Z' },
      { id: 'p14-table', name: 'Celebration Table', color: '#FFA502', d: 'M 0 270 L 600 270 L 600 420 L 0 420 Z' },
      { id: 'p14-cake-stand', name: 'Porcelain Cake Stand', color: '#FFFFFF', d: 'M 150 330 L 450 330 L 420 370 L 330 370 L 330 400 L 370 410 L 230 410 L 270 400 L 270 370 L 180 370 Z' },
      { id: 'p14-bottom-layer', name: 'Bottom Cake Sponge', color: '#8B4513', d: 'M 170 240 L 430 240 L 430 330 L 170 330 Z' },
      { id: 'p14-top-layer', name: 'Top Cake Sponge', color: '#FF6B81', d: 'M 210 160 L 390 160 L 390 240 L 210 240 Z' },
      { id: 'p14-frosting', name: 'Cream Frosting Drips', color: '#2ED573', d: 'M 210 160 C 220 180 240 180 250 160 C 260 180 280 180 290 160 C 300 180 320 180 330 160 C 340 180 360 180 370 160 C 380 180 390 170 390 160 Z' },
      { id: 'p14-candles', name: 'Three Party Candles', color: '#9B59B6', d: 'M 245 110 L 265 110 L 265 160 L 245 160 Z M 290 110 L 310 110 L 310 160 L 290 160 Z M 335 110 L 355 110 L 355 160 L 335 160 Z' },
      { id: 'p14-flames', name: 'Glowing Candle Flames', color: '#FF7F50', d: 'M 255 85 C 245 95 245 105 255 110 C 265 105 265 95 255 85 Z M 300 85 C 290 95 290 105 300 110 C 310 105 310 95 300 85 Z M 345 85 C 335 95 335 105 345 110 C 355 105 355 95 345 85 Z' },
      { id: 'p14-cherries', name: 'Ripe Red Cherries', color: '#FF4757', d: 'M 190 230 A 15 15 0 1 1 189.9 230 M 410 230 A 15 15 0 1 1 409.9 230 Z' },
      { id: 'p14-balloons', name: 'Party Float Balloon', color: '#FF4757', d: 'M 100 60 C 60 60 60 120 100 140 C 140 120 140 60 100 60 Z M 95 140 L 105 140 L 100 150 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 15: Colorful Hot Air Balloon
  // ---------------------------------------------------------------------------
  {
    id: 'pic-15-hot-air-balloon',
    title: 'Colorful Hot Air Balloon',
    subtitle: 'A vibrant striped balloon floating peacefully above mountains and valleys',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p15-sky', name: 'Mountain Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 260 L 0 260 Z' },
      { id: 'p15-sun', name: 'Bright Morning Sun', color: '#FFA502', d: 'M 80 60 A 38 38 0 1 1 79.9 60 Z' },
      { id: 'p15-clouds', name: 'Fluffy Sky Clouds', color: '#FFFFFF', d: 'M 450 60 C 435 45 460 30 480 40 C 500 25 530 40 535 55 C 555 55 565 75 545 90 L 450 90 Z' },
      { id: 'p15-mountains', name: 'Purple Mountain Peaks', color: '#9B59B6', d: 'M 0 260 L 120 170 L 260 260 L 400 150 L 600 260 Z' },
      { id: 'p15-valley', name: 'Green Mountain Valley', color: '#2ED573', d: 'M 0 260 L 600 260 L 600 420 L 0 420 Z' },
      { id: 'p15-balloon-center', name: 'Center Balloon Stripe', color: '#FF4757', d: 'M 300 50 C 275 50 270 140 285 200 L 315 200 C 330 140 325 50 300 50 Z' },
      { id: 'p15-balloon-left', name: 'Left Balloon Stripe', color: '#FF7F50', d: 'M 300 50 C 230 50 210 120 250 180 L 285 200 C 270 140 275 50 300 50 Z' },
      { id: 'p15-balloon-right', name: 'Right Balloon Stripe', color: '#FF6B81', d: 'M 300 50 C 370 50 390 120 350 180 L 315 200 C 330 140 325 50 300 50 Z' },
      { id: 'p15-basket', name: 'Wicker Passenger Basket', color: '#8B4513', d: 'M 280 230 L 320 230 L 315 270 L 285 270 Z' },
      { id: 'p15-birds', name: 'Flying Black Birds', color: '#2F3542', d: 'M 180 90 Q 195 75 210 90 Q 225 75 240 90 Q 225 82 210 90 Q 195 82 180 90 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 16: Friendly Dino in the Jungle
  // ---------------------------------------------------------------------------
  {
    id: 'pic-16-dinosaur',
    title: 'Friendly Dino in the Jungle',
    subtitle: 'A sweet cartoon dinosaur grazing happily beside prehistoric palms',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p16-sky', name: 'Warm Valley Sky', color: '#FF7F50', d: 'M 0 0 L 600 0 L 600 250 L 0 250 Z' },
      { id: 'p16-sun', name: 'Blazing Sun', color: '#FFA502', d: 'M 100 70 A 40 40 0 1 1 99.9 70 Z' },
      { id: 'p16-volcano', name: 'Volcano Mountain', color: '#8B4513', d: 'M 400 250 L 480 120 L 520 120 L 600 250 Z' },
      { id: 'p16-ground', name: 'Jungle Meadow Ground', color: '#2ED573', d: 'M 0 250 L 600 250 L 600 420 L 0 420 Z' },
      { id: 'p16-dino-body', name: 'Big Dinosaur Body', color: '#2ED573', d: 'M 120 230 C 120 130 200 90 230 140 C 250 180 300 200 380 210 C 440 220 500 260 520 290 C 460 270 380 280 350 330 L 230 330 C 180 330 120 300 120 230 Z' },
      { id: 'p16-dino-belly', name: 'Soft Underbelly', color: '#FFA502', d: 'M 220 230 C 240 230 300 240 330 290 L 240 310 C 210 290 210 250 220 230 Z' },
      { id: 'p16-dino-plates', name: 'Back Spine Plates', color: '#9B59B6', d: 'M 240 130 L 255 100 L 270 135 Z M 280 145 L 300 115 L 320 150 Z M 330 160 L 355 130 L 375 170 Z M 385 180 L 410 150 L 425 190 Z' },
      { id: 'p16-dino-spots', name: 'Dino Skin Spots', color: '#FF6B81', d: 'M 180 190 A 15 15 0 1 1 179.9 190 M 270 210 A 16 16 0 1 1 269.9 210 M 340 230 A 14 14 0 1 1 339.9 230 Z' },
      { id: 'p16-palm-leaves', name: 'Tropical Palm Leaves', color: '#1E90FF', d: 'M 40 180 C 10 130 70 100 80 150 C 90 90 150 110 110 160 C 160 160 130 220 80 190 Z' },
      { id: 'p16-palm-trunk', name: 'Palm Tree Trunk', color: '#2F3542', d: 'M 65 180 L 90 180 L 85 300 L 60 300 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 17: Sunny Sailing Boat
  // ---------------------------------------------------------------------------
  {
    id: 'pic-17-sailboat',
    title: 'Sunny Sailing Boat',
    subtitle: 'A cheerful sailboat cutting through blue ocean waves under the warm sun',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p17-sky', name: 'Harbor Sky', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 240 L 0 240 Z' },
      { id: 'p17-sun', name: 'Shining Sun', color: '#FFA502', d: 'M 100 65 A 42 42 0 1 1 99.9 65 Z' },
      { id: 'p17-sea', name: 'Deep Blue Waves', color: '#1E90FF', d: 'M 0 240 L 600 240 L 600 420 L 0 420 Z' },
      { id: 'p17-hull', name: 'Wooden Ship Hull', color: '#8B4513', d: 'M 160 250 L 440 250 L 390 320 L 210 320 Z' },
      { id: 'p17-cabin', name: 'Boat White Deck', color: '#FFFFFF', d: 'M 250 215 L 350 215 L 350 250 L 250 250 Z' },
      { id: 'p17-main-sail', name: 'Large Main Sail', color: '#FF4757', d: 'M 300 50 L 430 200 L 300 200 Z' },
      { id: 'p17-front-sail', name: 'Triangle Jib Sail', color: '#FF7F50', d: 'M 285 70 L 170 200 L 285 200 Z' },
      { id: 'p17-mast', name: 'Tall Boat Mast', color: '#2F3542', d: 'M 292 40 L 300 40 L 300 250 L 292 250 Z' },
      { id: 'p17-life-buoy', name: 'Life Ring Buoy', color: '#FF6B81', d: 'M 300 285 A 18 18 0 1 1 299.9 285 Z' },
      { id: 'p17-flag', name: 'Mast Pennant Flag', color: '#2ED573', d: 'M 300 40 L 340 50 L 300 60 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 18: Winter Wonderland Snowman
  // ---------------------------------------------------------------------------
  {
    id: 'pic-18-snowman',
    title: 'Winter Wonderland Snowman',
    subtitle: 'A friendly smiling snowman wearing a warm scarf and a fancy top hat',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p18-sky', name: 'Starry Night Sky', color: '#2F3542', d: 'M 0 0 L 600 0 L 600 260 L 0 260 Z' },
      { id: 'p18-moon', name: 'Full Yellow Moon', color: '#FFA502', d: 'M 490 60 A 40 40 0 1 1 489.9 60 Z' },
      { id: 'p18-snow-ground', name: 'Snowdrifts Ground', color: '#FFFFFF', d: 'M 0 260 Q 300 210 600 260 L 600 420 L 0 420 Z' },
      { id: 'p18-snowman-bottom', name: 'Large Snow Base', color: '#FFFFFF', d: 'M 300 310 A 65 65 0 1 1 299.9 310 Z' },
      { id: 'p18-snowman-head', name: 'Round Snow Head', color: '#FFFFFF', d: 'M 300 170 A 42 42 0 1 1 299.9 170 Z' },
      { id: 'p18-hat', name: 'Purple Top Hat', color: '#9B59B6', d: 'M 260 135 L 340 135 L 340 145 L 260 145 Z M 275 85 L 325 85 L 325 135 L 275 135 Z' },
      { id: 'p18-scarf', name: 'Red Knitted Scarf', color: '#FF4757', d: 'M 270 205 C 290 220 310 220 330 205 L 340 225 C 315 240 285 240 260 225 Z M 315 220 L 340 220 L 335 270 L 315 270 Z' },
      { id: 'p18-carrot-nose', name: 'Carrot Nose', color: '#FF7F50', d: 'M 300 170 L 350 180 L 300 188 Z' },
      { id: 'p18-pine-tree', name: 'Evergreen Pine Tree', color: '#2ED573', d: 'M 100 160 L 130 110 L 160 160 L 145 160 L 175 210 L 160 210 L 190 270 L 70 270 L 100 210 L 85 210 L 115 160 Z' },
      { id: 'p18-bird', name: 'Blue Robin Bird', color: '#1E90FF', d: 'M 130 95 C 140 85 160 85 165 100 C 170 110 155 120 140 115 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 19: Friendly Playful Robot
  // ---------------------------------------------------------------------------
  {
    id: 'pic-19-cute-robot',
    title: 'Friendly Playful Robot',
    subtitle: 'A sweet futuristic robot with antenna, glowing screen visor, and tools',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p19-lab-wall', name: 'Workshop Back Wall', color: '#1E90FF', d: 'M 0 0 L 600 0 L 600 300 L 0 300 Z' },
      { id: 'p19-floor', name: 'Lab Workshop Floor', color: '#FFA502', d: 'M 0 300 L 600 300 L 600 420 L 0 420 Z' },
      { id: 'p19-robot-antenna', name: 'Red Antenna Bulb', color: '#FF4757', d: 'M 293 30 L 307 30 L 307 70 L 293 70 Z M 300 30 A 15 15 0 1 1 299.9 30 Z' },
      { id: 'p19-robot-head', name: 'Square Robot Head', color: '#FFFFFF', d: 'M 220 70 L 380 70 L 380 170 L 220 170 Z' },
      { id: 'p19-robot-eyes', name: 'Green Screen Visor', color: '#2ED573', d: 'M 245 95 L 355 95 L 355 140 L 245 140 Z' },
      { id: 'p19-robot-body', name: 'Purple Torso Box', color: '#9B59B6', d: 'M 210 180 L 390 180 L 390 310 L 210 310 Z' },
      { id: 'p19-robot-chest-screen', name: 'Meter Gauge Panel', color: '#FF7F50', d: 'M 245 200 L 355 200 L 355 260 L 245 260 Z' },
      { id: 'p19-robot-arms', name: 'Mechanical Arms', color: '#FF6B81', d: 'M 160 190 L 210 190 L 210 270 L 160 270 Z M 390 190 L 440 190 L 440 270 L 390 270 Z' },
      { id: 'p19-robot-treads', name: 'Rolling Wheel Treads', color: '#2F3542', d: 'M 200 310 L 400 310 L 390 370 L 210 370 Z' },
      { id: 'p19-spanner', name: 'Repair Toy Wrench', color: '#8B4513', d: 'M 440 250 L 480 210 L 510 240 L 470 280 Z' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Picture 20: Happy Safari Lion
  // ---------------------------------------------------------------------------
  {
    id: 'pic-20-safari-lion',
    title: 'Happy Safari Lion',
    subtitle: 'A majestic friendly lion resting under an acacia tree at sunset',
    viewBox: '0 0 600 420',
    regions: [
      { id: 'p20-savannah-sky', name: 'Sunset Savannah Sky', color: '#FF7F50', d: 'M 0 0 L 600 0 L 600 240 L 0 240 Z' },
      { id: 'p20-sunset-sun', name: 'Big Evening Sun', color: '#FFA502', d: 'M 100 80 A 45 45 0 1 1 99.9 80 Z' },
      { id: 'p20-grassland', name: 'Savannah Grassland', color: '#2ED573', d: 'M 0 240 L 600 240 L 600 420 L 0 420 Z' },
      { id: 'p20-lion-mane', name: 'Brown Fluffy Mane', color: '#8B4513', d: 'M 270 90 C 200 90 170 170 190 240 C 210 300 330 300 350 240 C 370 170 340 90 270 90 Z' },
      { id: 'p20-lion-head', name: 'Lion Face & Ears', color: '#FFA502', d: 'M 270 130 C 230 130 220 180 230 210 C 240 240 300 240 310 210 C 320 180 310 130 270 130 Z' },
      { id: 'p20-lion-body', name: 'Lion Golden Body', color: '#FFA502', d: 'M 290 240 L 430 240 C 470 240 480 320 460 360 L 280 360 Z' },
      { id: 'p20-lion-tail', name: 'Tail Tuft Tip', color: '#8B4513', d: 'M 460 270 C 490 250 520 280 500 310 C 480 300 470 285 460 270 Z' },
      { id: 'p20-acacia-leaves', name: 'Umbrella Acacia Tree', color: '#2ED573', d: 'M 30 120 C 10 90 120 70 180 90 C 220 100 150 140 80 130 Z' },
      { id: 'p20-acacia-trunk', name: 'Acacia Tree Trunk', color: '#2F3542', d: 'M 80 130 L 110 130 L 105 280 L 85 280 Z' },
      { id: 'p20-butterfly', name: 'Savannah Butterfly', color: '#1E90FF', d: 'M 210 70 C 200 50 230 45 225 65 M 240 70 C 250 50 220 45 225 65 Z' }
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
