// Invent a company and give us some marketing material

const fishes = [
  'Goblin Shark',
  'Queen Parrotfish',
  'Peacock Flounder',
  'Minnow',
  'Salmon',
  'Swordfish',
  'Scaly Dragonfish',
  'Catfish',
  'Temperate perch',
  'Thorny catfish',
  'Stonefish',
  'Seahorse',
  'Smelt',
  'Spiny eel',
  'Manta ray',
  'Rainbowfish',
  'Roosterfish',
  'Lionfish',
  'Noodlefish',
  'Minnow of the deep',
  'Warmouth'
]
const fish = fishes[Math.floor(Math.random() * fishes.length)]


export default {
  companyName: `${fish} University`,
  logoUrl: 'https://i.imgur.com/qaes3xL.gif',
  headline: `Want to catch more and bigger ${fish}?`,
  subhead: `      /\`·.¸
     /¸...¸\`:·
 ¸.·´  ¸   \`·.¸.·´)
: © ):´;      ¸  {
 \`·.¸ \`·  ¸.·´\\\`·¸)
     \`\\\\´´\\¸.·´`,
  primaryButtonText: '><(((">',
  secondaryButtonText: '}-(((*>',
  heroImageUrls: ['http://shing.mobile9.com/download/media/41/aquariumsc_ma2vjufv.gif', 'https://i.pinimg.com/originals/d6/ef/28/d6ef28662a9b7543d7ac1eb69d75d430.gif'], // https://www.example.com/carousel_image1
  menuItems: [
    'Sixgill ray yellowfin tuna',
    'Koi platyfish',
    'Armored searobin ladyfish tripod fish',
    'Stargazer megamouth shark Mexican blind cavefish',
    'Pacific trout?',
  ],
}
