// data/players.ts

export type Player = {
  id: string
  slug: string
  name: string
  school: string
  state: string
  classYear: number
  position: string
  stars: number
  image?: string
  summary?: string
  college?: string
  height?: string
  weight?: string
  wingspan?: string
  offers?: string
  stats?: string
}

export const players: Player[] = [

{
id: "jj-andrews",
slug: "jj-andrews",
name: "JJ Andrews",
school: "Little Rock Christian",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 5,
height: "6'7",
college: "Arkansas",
image: "/players/jj-andrews.jpg",
summary: "Once-in-a-class physical scoring wing with elite downhill power, athleticism and defensive versatility."
},

{
id: "ethan-sheats",
slug: "ethan-sheats",
name: "Ethan Sheats",
school: "Denton HS",
state: "TX",
classYear: 2026,
position: "F/C",
stars: 5,
height: "6'9",
image: "/players/ethan-sheats.jpg",
summary: "Versatile frontcourt presence with reliable two-way production."
},

{
id: "austin-brown",
slug: "austin-brown",
name: "Austin Brown",
school: "Maryland Commit",
state: "MD",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'5",
college: "Maryland",
image: "/players/austin-brown.jpg",
summary: "Elite shooter with clean mechanics and high confidence from deep."
},

{
id: "zvon-king",
slug: "zvon-king",
name: "Zvon King",
school: "Hampton Commit",
state: "TX",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'5",
college: "Hampton",
image: "/players/zvon-king.jpg",
summary: "Dynamic scorer capable of creating separation and scoring at all three levels."
},

{
id: "trey-rhodes",
slug: "trey-rhodes",
name: "Trey Rhodes",
school: "Arkansas HS",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'4",
image: "/players/trey-rhodes.jpg",
summary: "Explosive athlete with highlight-level vertical ability and versatile scoring."
},

{
id: "tk-taylor",
slug: "tk-taylor",
name: "TK Taylor",
school: "San Angelo Central",
state: "TX",
classYear: 2026,
position: "Forward",
stars: 4,
height: "6'6",
image: "/players/tk-taylor.jpg",
summary: "Fast-rising Texas forward with elite physical tools and defensive versatility."
},

{
id: "dominic-fulton",
slug: "dominic-fulton",
name: "Dominic Fulton",
school: "Plainview",
state: "TX",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'4",
image: "/players/dominic-fulton.jpg",
summary: "Powerful three-level scorer with elite athleticism and leadership presence."
},

{
id: "cale-clingan",
slug: "cale-clingan",
name: "Cale Clingan",
school: "Derby HS",
state: "KS",
classYear: 2026,
position: "F/C",
stars: 4,
height: "6'9",
image: "/players/cale-clingan.jpg",
summary: "Modern stretch big with shooting touch and mobility."
},

{
id: "mj-ward",
slug: "mj-ward",
name: "Mahliek 'MJ' Ward",
school: "Arkansas HS",
state: "AR",
classYear: 2026,
position: "G",
stars: 4,
height: "6'1",
image: "/players/mj-ward.jpg",
summary: "High IQ floor general with elite shooting and defensive intensity."
},

{
id: "jayden-tyeskie",
slug: "jayden-tyeskie",
name: "Jayden Tyeskie",
school: "Longview HS",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 4,
height: "6'4",
image: "/players/jayden-tyeskie.jpg",
summary: "Deadeye sniper with elite shooting mechanics and defensive activity."
},

{
id: "jantz-alsup",
slug: "jantz-alsup",
name: "Jantz Alsup",
school: "South Central Prep",
state: "OK",
classYear: 2026,
position: "Forward",
stars: 3,
height: "6'6",
image: "/players/jantz-alsup.jpg",
summary: "Versatile hybrid forward comfortable on the perimeter or mid-post."
},

{
id: "greydon-howell",
slug: "greydon-howell",
name: "Greydon Howell",
school: "Broken Bow",
state: "OK",
classYear: 2027,
position: "Guard",
stars: 3,
height: "5'10",
image: "/players/greydon-howell.jpg",
summary: "Explosive multi-sport athlete with elite speed and playmaking instincts."
},

{
id: "carter-chism",
slug: "carter-chism",
name: "Carter Chism",
school: "Mt Pleasant",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 3,
height: "5'11",
image: "/players/carter-chism.jpg",
summary: "Fiery competitive floor general with high basketball IQ."
},

{
id: "brian-cal-jr",
slug: "brian-cal-jr",
name: "Brian Cal Jr.",
school: "Benton",
state: "AR",
classYear: 2028,
position: "Guard",
stars: 3,
height: "6'1",
image: "/players/brian-cal.jpg",
summary: "Young floor general with leadership instincts and scoring rhythm."
},

{
id: "jordan-valentine",
slug: "jordan-valentine",
name: "Jordan Valentine",
school: "Choctaw",
state: "OK",
classYear: 2026,
position: "G/F",
stars: 3,
height: "6'6",
image: "/players/jordan-valentine.jpg",
summary: "Physical two-way wing with rugged defensive presence."
},

{
id: "javonte-ford",
slug: "javonte-ford",
name: "Javonte Ford",
school: "Pleasant Hill",
state: "LA",
classYear: 2026,
position: "G/F",
stars: 3,
height: "6'4",
image: "/players/javonte-ford.jpg",
summary: "Explosive downhill attacker with high motor and athleticism."
},

{
id: "colton-spence",
slug: "colton-spence",
name: "Colton Spence",
school: "McLeod",
state: "TX",
classYear: 2027,
position: "Center",
stars: 3,
height: "6'11",
image: "/players/colton-spence.jpg",
summary: "Stretch big nicknamed Baby Porzingis with elite shooting touch."
},

{
id: "peyton-hicks",
slug: "peyton-hicks",
name: "Peyton Hicks",
school: "Genoa",
state: "AR",
classYear: 2026,
position: "F/C",
stars: 2,
height: "6'7",
image: "/players/peyton-hicks.jpg",
summary: "Skilled interior scorer with developing perimeter game."
},

{
id: "shawn-hall",
slug: "shawn-hall",
name: "Shawn Hall",
school: "Liberty-Eylau",
state: "TX",
classYear: 2028,
position: "G/F",
stars: 3,
height: "6'2",
image: "/players/shawn-hall.jpg",
summary: "High IQ wing with elite rebounding instincts."
},

{
id: "xavier-bazelle",
slug: "xavier-bazelle",
name: "Xavier Bazelle",
school: "Blevins",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 2,
height: "5'11",
image: "/players/xavier-bazelle.jpg",
summary: "Shifty left-handed scorer with elite shot creation."
},

{
id: "zuo-kpogba",
slug: "zuo-kpogba",
name: "Zuo Kpogba",
school: "Douglass HS",
state: "OK",
classYear: 2026,
position: "Guard",
stars: 2,
height: "6'2",
image: "/players/zuo-kpogba.jpg",
summary: "Explosive athlete who thrives in transition and downhill attacks."
},

{
id: "cj-whaley",
slug: "cj-whaley",
name: "CJ Whaley",
school: "Atlanta",
state: "TX",
classYear: 2028,
position: "F/C",
stars: 2,
height: "6'6",
image: "/players/cj-whaley.jpg",
summary: "Multi-sport athlete with explosive upside."
},

{
id: "isaac-aaron",
slug: "isaac-aaron",
name: "Isaac Aaron",
school: "El Dorado",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 1,
height: "6'1",
image: "/players/isaac-aaron.jpg",
summary: "Lights-out shooter with repeatable mechanics."
},

{
id: "kedrid-smith",
slug: "kedrid-smith",
name: "Kedrid Smith",
school: "Pleasant Grove",
state: "TX",
classYear: 2028,
position: "F/C",
stars: 1,
height: "6'5",
image: "/players/kedrid-smith.jpg",
summary: "Bruising physical rebounder with football toughness."
},

{
id: "zaybreion-cooper",
slug: "zaybreion-cooper",
name: "Zaybreion Cooper",
school: "Liberty-Eylau",
state: "TX",
classYear: 2027,
position: "Guard",
stars: 2,
height: "5'10",
image: "/players/zaybreion-cooper.jpg",
summary: "Electric playmaker with elite ballhandling."
},

{
id: "monti-mixon",
slug: "monti-mixon",
name: "Monti Mixon",
school: "Nevada HS",
state: "AR",
classYear: 2028,
position: "F/C",
stars: 3,
height: "6'8",
stats: "15 PPG • 10 RPG • 2.8 BPG",
image: "/players/monti-mixon.jpg",
summary: "Young athletic big with elite rim protection upside."
}

]
