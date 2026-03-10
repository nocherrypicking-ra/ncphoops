

export type Player = {
  id: string
  slug: string
  name: string
  school?: string
  state?: string
  classYear?: number
  position: string
  stars?: number
  height?: string
  image?: string
  summary?: string
  college?: string
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
summary: "JJ Andrews is a once-in-a-class, physical scoring wing who immediately sets the tone whenever he steps on the floor. At 6’7 with a 7-foot wingspan and a frame built like a grown man, he dominates downhill, finishes through traffic, and rises for emphatic dunks that change the momentum of a game. His perimeter shot is coming along smoothly (36% 3PT, 72% FT), making him a multi-dimensional scoring threat. Defensively, Andrews is long, aggressive, and versatile — disrupting passing lanes, switching across positions, and consistently elevating his team’s energy. He combines intelligence, effort, and elite physical tools to impact every possession. A University of Arkansas signee, JJ blends strength, athleticism, skill, and an unstoppable mentality, solidifying his spot as the premier prospect in the 2026 class."
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
height: "6'8",
image: "/players/ethan-sheats.jpg",
summary: "Versatile frontcourt player with size and strong two-way impact."
},

{
id: "austin-brown",
slug: "austin-brown",
name: "Austin Brown",
school: "Maryland Commit",
state: "TX",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'5",
college: "Maryland",
image: "/players/austin-brown.jpg",
summary: "Austin Brown is arguably the best shooter in his class — a smooth, confident perimeter threat whose touch and form stand out immediately. At 6’5, he brings ideal size for a scoring wing and has built his reputation on consistency, spacing, and shot-making under pressure. His shooting mechanics are clean, repeatable, and effortless — whether off the catch, off movement, or pulling up in rhythm. He stretches defenses and creates gravity the moment he crosses half court. Beyond his jumper, Brown shows improved comfort attacking closeouts and finishing with touch around the rim. Defensively, he competes with effort and positioning, embracing the challenge of guarding bigger wings. His poise and maturity fit the mold of a player who can contribute immediately at the next level.A marksman with confidence and range, Brown’s shooting alone makes him a difference-maker — and his continued growth as a secondary creator only raises his ceiling."
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
summary: "Zvon King is a pure scorer with high two-way potential and a motor that never quits. After flying under the radar for most of his high school career, he exploded onto the scene last season and over the summer — proving he belongs among the elite. At 6’5 with a long, athletic frame, King can get a bucket from anywhere on the floor. He’s dangerous off the dribble, confident shooting off movement, and thrives attacking gaps with balance and control. His ability to create separation and finish through contact makes him a constant scoring threat at all three levels. He is one of the most skilled perimeter players in Texas, capable of impacting the game anytime he’s on the floor. Defensively, King’s length, athleticism, and effort give him major upside as a perimeter stopper. He competes on every possession and has the tools to guard multiple positions when locked in. A confident, explosive wing who plays with purpose and edge, King’s blend of scoring ability, athleticism, and emerging two-way game make him one of the most intriguing prospects in the 2026 class."
},

{
id: "trey-rhodes",
slug: "trey-rhodes",
name: "Trey Rhodes",
school: "Arkansas High",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'4",
image: "/players/trey-rhodes.jpg",
summary: "Trey Rhodes is a freak of nature — smooth, explosive, and built like he was made for highlight reels. A transfer from Georgia, his game jumps off the floor from the moment the ball tips. He’s physically mature, with elite leaping ability and body control that makes him a matchup nightmare anywhere on the court. Rhodes blends power and finesse seamlessly — an athlete who plays with violence but finishes with touch. He’s dangerous spotting up or attacking off the dribble, forcing defenders to pick their poison. Add in his advanced post game and a perimeter attack that keeps improving, and it’s clear why his stock skyrocketed this past summer. Defensively, he’s versatile enough to guard every position. His mix of strength, lateral quickness, and instincts allow him to switch across matchups and impact the game in every area. A certified problem on both ends, Rhodes’ upside continues to rise — and his best basketball is still ahead of him. Projected Low-Major to Mid-Major, but if he can tap into his potential, he has all the tools to be a 5-star prospect."
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
summary: "TK Taylor is one of the fastest-rising prospects in Texas — a powerful, explosive 6’6 forward with the physical tools and mentality of a true high-major recruit. He combines size, athleticism, and fluid movement in a way that immediately pops on film and dominates in live action. Taylor attacks the rim with authority, finishing through or above traffic with ease. In transition, he’s a freight train; in the half-court, he thrives as a face-up scorer who gets downhill at will. His growing handle and improved shot creation make him increasingly difficult to contain, and he’s becoming more confident operating both on the wing and in the mid-post. Defensively, Taylor is a major problem. He blocks shots, slides with guards, rebounds in traffic, and uses his strength to eliminate advantages. His versatility lets him guard multiple positions and switch without being exploited — a major calling card at the next level. What makes Taylor even scarier is his trajectory. He’s expanding his perimeter skill, tightening his decision-making, and learning how to consistently impose his will without forcing the game. A two-way force with Division I size, athleticism, and upside, TK Taylor is trending up fast — and his name will only continue to rise as his skill set sharpens"
},

{
id: "dominic-fulton",
slug: "dominic-fulton",
name: "Dominic Fulton",
school: "Plainview HS",
state: "TX",
classYear: 2026,
position: "G/F",
stars: 4,
height: "6'4",
image: "/players/dominic-fulton.jpg",
summary: "Dominic Fulton is one of the most physically imposing and polished prospects in the region. At 6’4 with elite power, explosiveness, and body control, he plays with a maturity and presence that immediately stands out. Fulton is at his best in attack mode. He applies constant pressure by getting downhill, finishing above defenders, and scoring from all three levels. His offensive versatility is advanced for his age — he can space the floor with the three, create clean midrange looks, or overpower smaller guards and wings in the post. But Fulton’s value goes beyond scoring. He plays a mature, winning brand of basketball. He shares it, understands when to make the extra pass, and competes consistently on both ends. Defensively, his strength and athleticism allow him to guard multiple positions, rotate with purpose, and impact plays with timing and physicality. A vocal competitor with real leadership traits, Fulton already impacts winning at a high level — and still has upside left to tap into. As his perimeter consistency and creation continue to sharpen, expect his recruitment and recognition to rise."
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
summary: "Cale Clingan is rapidly becoming one of the most intriguing frontcourt prospects in the Midwest — a modern 6’9 big with perimeter skill, mobility, and a growing physical presence. Offensively, Clingan’s shooting touch immediately separates him. He’s a true stretch forward who knocks down threes with clean mechanics and confidence, whether spotting up from the trail, the slot, or the corners. He combines that shooting ability with real athletic pop — finishing above the rim, sprinting the floor, and attacking gaps with force when defenders close out too hard. What makes him even more valuable is his feel with the ball. Clingan is comfortable pushing the break, initiating sets, and making reads that most players his size simply can’t. There are flashes of point-forward instincts that hint at long-term upside once his handle tightens further. Defensively, he provides both rim protection and switchability. His length and timing allow him to anchor the paint, while his mobility gives him the versatility to hedge, recover, and survive on the perimeter when needed.With his rare blend of touch, mobility, and modern big-man versatility, Clingan projects as a matchup problem and a prospect whose stock should continue trending upward as he becomes more assertive physically."
},

{
id: "mj-ward",
slug: "mj-ward",
name: "Mahliek Ward",
school: "Arkansas High",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 4,
height: "6'1",
image: "/players/mj-ward.jpg",
summary: "Mahliek “MJ” Ward is one of the most complete and polished guards in the region — a high-IQ, two-way floor general whose game is defined by control, confidence, and elite skill. Ward operates with surgical precision. He dictates tempo, reads defenses like a veteran, and makes everything look effortless. Offensively, he’s dangerous at all three levels — armed with a smooth jumper and elite shot-making touch that ranks among the very best on the Watchlist. He’s arguably the top shooter and finisher among all guards listed, showcasing adaptive finishing instincts that allow him to score through contact, around length, and from multiple angles with either hand. Ward also has excellent feel as a playmaker, consistently finding teammates in transition or the half court, reading rotations early, and making the right play before the defense adjusts. Defensively, Ward sets the tone. He’s an elite on-ball defender who embraces tough assignments, using quick feet, anticipation, and discipline to completely take opposing guards out of rhythm. His IQ and communication make him a leader on that end, often anchoring the defensive energy for his team.Arguably the most skilled guard on the Watchlist, Ward’s maturity, balance, and competitive drive separate him. He plays chess while others play checkers — a true next-level guard built to win. With an improved physical frame, he could be extremely dangerous and further elevate his ceiling."
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
summary: "Deadeye sniper. The ball barely touches the rim when he shoots. With a high release point and smooth mechanics, Tyeskie is one of the most dangerous shooters in East Texas. He can heat up quickly, punishing defenses with lethal one-dribble pull-ups, shot fakes, and jab steps to attack closeouts. High-IQ guard with excellent shot selection and a low turnover count — capable of filling it up when in rhythm. Defensively, his long, active arms stand out, constantly agitating ball handlers and big wings, creating disruption and tipping the balance in his team’s favor."
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
summary: "Jantz Alsup is a long, versatile forward whose confidence, length, and feel make him one of the most intriguing prospects in his class. At 6’6, he brings true hybrid ability — comfortable on the perimeter or operating from the mid-post, adjusting seamlessly to different lineups and roles. Alsup shines in transition, using his stride and coordination to cover ground and finish fluidly through contact. In the half court, he plays with patience and control — reading defenders, finding his angles, and knocking down shots with smooth, balanced mechanics. His perimeter shooting continues to improve, giving him the ability to stretch the floor and force mismatches. Defensively, his frame and anticipation allow him to guard multiple positions, rotate effectively, and impact possessions as a rebounder and help defender. A poised, high-IQ forward who plays with confidence and efficiency, Alsup’s length, shooting touch, and composure give him the tools to develop into a reliable two-way force at the next level."
},

{
id: "greydon-howell",
slug: "greydon-howell",
name: "Greydon Howell",
school: "Broken Bow",
state: "OK",
classYear: 2027,
position: "Guard",
stars: 4,
height: "5'10",
image: "/players/greydon-howell.jpg",
summary: "Greydon Howell is an explosive, multi-sport athlete with blinding speed and a fearless motor that translates perfectly to the hardwood. At 5’10, he’s small in stature but impossible to contain — his burst, competitiveness, and ability to pressure defenses make him a nightmare matchup on both ends. Howell’s instincts and IQ on the court are elite. He processes the game at a high level, seeing plays before they develop and creating opportunities for teammates with next-level vision. As a finisher and playmaker, he’s right there with the best — attacking gaps, threading passes through traffic, and finishing through contact with creativity and balance. Still developing as a shooter, but the rest of his game is already elite. He pushes tempo, embraces big moments, and plays with an edge that fuels everyone around him. Already holding multiple Division I football offers, Howell’s athletic profile and work ethic suggest a rare ELITE 4-sport ceiling — a dynamic guard whose explosiveness, intelligence, and competitiveness set him apart."
},

{
id: "carter-chism",
slug: "carter-chism",
name: "Carter Chism",
school: "Mt Pleasant",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 4,
height: "5'11",
image: "/players/carter-chism.jpg",
summary: "Carter Chism is a fiery, competitive floor general who plays every possession like it’s personal. A product of a basketball family, his feel for the game, poise, and toughness shine through in every setting — whether it’s controlling tempo, making reads, or stepping up in big moments. A high-IQ guard with complete command of the floor, Chism combines crisp decision-making with the ability to create off the bounce and score at all three levels. He’s a clutch performer who thrives under pressure and embraces the challenge of the moment. Defensively, when he locks in, Chism can neutralize opposing stars, using anticipation, quick hands, and pride to make life miserable for primary scorers. Arguably the best guard in East Texas, Chism brings leadership, toughness, and edge every time he steps on the floor. A coach’s dream who sets the tone, competes relentlessly, and leads by example — the definition of a winner"
},

{
id: "brian-cal",
slug: "brian-cal",
name: "Brian Cal Jr",
school: "Benton",
state: "AR",
classYear: 2028,
position: "Guard",
stars: 4,
height: "6'1",
image: "/players/brian-cal.jpg",
summary: "Brian Cal Jr. is a poised young floor general stepping into a bigger spotlight as upperclassmen move on — ready to showcase the full range of his game. At 6’1, he plays with pace, patience, and a mature command that’s rare for his age. Cal brings a smooth offensive rhythm, blending shot creation, vision, and poise under pressure. His jumper is clean and confident, and he’s comfortable orchestrating out of pick-and-rolls or attacking gaps when defenses collapse. What stands out is how naturally he leads — communicating, directing traffic, and making the right read before the play even unfolds. Defensively, he competes with energy and pride, taking assignments personally and setting the tone with his focus. He doesn’t back down from older players — he welcomes the matchup, using anticipation and effort to stay in front and make plays.Already emerging as one of the premier young guards in Arkansas, Cal’s confidence, IQ, and command of the game continue to draw recognition beyond state lines. Expect him to remain a headlining name as he enters the national spotlight."
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
summary: "Jordan Valentine is one of the most rugged, hard-nosed two-way players in Oklahoma — a physical 6’6 guard/forward who impacts the game with force, energy, and toughness on every possession. Valentine plays downhill with aggression. He attacks gaps with purpose, absorbs contact, and finishes strong at the rim. His scoring comes from power and physicality rather than finesse, and he’s developing into a reliable midrange threat when defenders try to wall off the paint. Defensively, he sets the tone. Valentine welcomes physical matchups, guards multiple positions, and disrupts actions with active hands and a relentless motor. His toughness, communication, and willingness to do the dirty work make him one of the most dependable defenders in the gym. He plays with a controlled edge — competitive, confident, and unafraid of big moments. As he continues sharpening his perimeter skills, his overall impact and versatility will only expand. A rugged, aggressive, and highly competitive wing, Jordan Valentine brings a brand of toughness and two-way presence that every coach wants in the lineup."
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
summary: "Javonte Ford is a physically imposing, high-energy athlete who dominates every possession he touches. At 6’4, his combination of strength, explosiveness, and fearlessness makes him one of the most attention-grabbing players in Louisiana. Ford attacks downhill with authority, finishing through contact, above the rim, and in transition with ferocity. He forces defenses to react, collapsing lanes, creating chaos, and generating momentum-shifting plays for his team. Offensively, he’s beginning to expand beyond slashing. His jumper is improving, with growing confidence from midrange and beyond when defenders play off him. As he polishes his shot and ball-handling, his game will become increasingly versatile. Defensively, Ford is a nightmare match-up. His athleticism, motor, and physicality allow him to guard multiple positions, disrupt passing lanes, and set a tone that inspires teammates. A relentless competitor with elite tools, Javonte Ford combines strength, speed, and an aggressive mentality with a budding skillset, making him one of the most explosive young prospects in the region."
},

{
id: "matthew-widtfield",
slug: "matthew-widtfield",
name: "Matthew Widtfield",
school: "Lucas Lovejoy",
state: "TX",
classYear: 2027,
position: "Guard",
stars: 3,
height: "6'3",
image: "/players/matthew-widtfield.jpg",
summary: "Matthew Widtfield is a high-IQ, steady guard who controls the game with poise and purpose. At 6’3, he plays with a rare understanding of spacing, pace, and team flow, making every possession deliberate and effective. Offensively, Widtfield doesn’t force plays — he reads defenses, finds the right spots, and scores efficiently when needed. His true value lies in leadership and elevating teammates through smart decisions and unselfish play. Defensively, he competes with pride, communicates consistently, and sets the tone with effort and accountability. Balanced, polished, and mature beyond his years, Widtfield’s floor presence is dependable at every level."
},

{
id: "bernard-zylan",
slug: "bernard-zylan",
name: "Bernard Zylan",
school: "Denton Ryan",
state: "TX",
classYear: 2026,
position: "G/F",
stars: 3,
height: "6'5",
image: "/players/bernard-zylan.jpg",
summary: "Bernard Zylan is a smooth, athletic wing with real bounce and polish. At 6’5, he moves with fluid control — gliding into lanes, elevating with ease, and finishing above the rim. His athleticism gives him highlight potential, but it’s how effortlessly he blends it with a composed, controlled style of play that sets him apart. Offensively, Zylan is versatile. He attacks downhill with long strides, shows touch around the basket, and is growing into a perimeter shooter. His jumper continues to improve, giving him the potential to be a true three-level scorer. Defensively, his length, agility, and timing allow him to guard multiple positions, contest shots, and cover ground effectively. He brings consistent effort and energy on every possession. A smooth, high-upside wing with two-way potential, Bernard Zylan is one of the more intriguing prospects in his class as his game continues to evolve."
},

{
id: "xavier-bazzelle",
slug: "xavier-bazzelle",
name: "Xavier Bazelle",
school: "Blevins",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 2,
height: "5'11",
image: "/players/xavier-bazzelle.jpg",
summary: "Xavier BazZelle is a crafty, shifty left-handed guard with a smooth handle and confident scoring mentality. At 5’11, he uses pace, change of direction, and ball control to keep defenders off balance — capable of creating separation and getting to his spots efficiently. BazZelle is dangerous when he catches fire, especially from midrange and beyond the arc. He plays with rhythm and confidence, thriving when the game opens up and he’s given space to create. Though not a natural passer, his tight handle and ability to draw defenders in consistently keep his assist numbers up — delivering timely drop-offs and kickouts when defenses collapse. Defensively, his quickness and anticipation help him stay active in passing lanes and contest at the point of attack. As he continues to grow stronger and refine shot selection, his craftiness and competitive spirit give him room to rise. This season, BazZelle is off to a scorching start, averaging 33+ PPG through the first 8 games while also posting 5 assists per game and shooting 60% from the field — a clear indicator that his game is trending upward. A skilled lefty scorer with swagger and touch — BazZelle’s shot-making, pressure creation, and instincts make him a player poised to make an impact as his game develops."
},

{
id: "shawn-hall",
slug: "shawn-hall",
name: "Shawn Hall",
school: "Liberty-Eylau",
state: "TX",
classYear: 2028,
position: "G/F",
stars: 4,
height: "6'2",
image: "/players/shawn-hall.jpg",
summary: "Shawn Hall plays like a much bigger player than his size suggests — Truly a do it all PG... dominant rebounding guard who thrives with or without the ball. While the ball is in his hands you have a poised playmaker who excels creating for himself and teammates. Capable of high scoring outputs and stat stuffer lines. Without ball He constantly finds space on cuts, along the baseline, and in dunker spots, making intelligent reads in every situation. Hall flashes elite basketball instincts with forward passes, backdoor cuts, hockey assists, and short rolls — a versatile playmaker in every sense. While not the primary ball-handler or scorer on his team, Hall has shown that when needed, he can decisively go get a bucket, demonstrating his ability to step up in key moments. Offensively, he’s a strong catch-and-shoot threat and is trending upward with growing confidence off the bounce. Defensively, Hall sets the tone with his length, activity, and relentlessness. His anticipation, quick feet, and ability to guard multiple positions allow him to contest shots, disrupt drives, and anchor his team on that end. A high-IQ, versatile wing with a motor and instincts that stand out, Shawn Hall is one of East Texas’ most intriguing prospects over the next couple of years."
},

{
id: "zuo-kpogba",
slug: "zuo-kpogba",
name: "Zuo Kpogba",
school: "Douglass HS",
state: "OK",
classYear: 2026,
position: "Guard",
stars: 3,
height: "6'2",
image: "/players/zuo-kpogba.jpg",
summary: "Zuo Kpogba is one of the most explosive athletes in Oklahoma — a guard whose first step, vertical burst, and raw energy make him a constant threat to blow a game open at any moment. Kpogba’s athleticism is the first thing people notice. He plays above the rim with ease, finishing dunks in traffic and turning routine plays into momentum shifters. When he gets downhill, he’s almost impossible to stay in front of — using strength, speed, and body control to finish through or over defenders. Offensively, Zuo is still developing his perimeter consistency, but the confidence is growing. He’s not known as a shooter yet, but he’s shown he can hit open looks when defenders completely back off. His handle continues to sharpen, allowing him to attack in straight lines and create pressure on the rim possession after possession. Defensively, he’s a disruptor. His motor, length, and anticipation allow him to jump passing lanes, pressure the ball, and turn mistakes into instant transition opportunities. Kpogba brings a raw, aggressive, high-energy style that changes the feel of the game the second he steps on the floor. The physical tools are elite, and as the skillside continues to catch up, his trajectory points sharply upward."
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
summary: "Colton Spence is a raw but highly intriguing stretch big with rare size, touch, and offensive potential. At 6’11, he’s already earned the nickname “Baby Porziņģis” from scouts — a nod to his effortless shooting stroke and perimeter skill at his size. Spence is a deadeye sniper from deep — arguably the best shooter on the entire Watchlist. His release is smooth, high, and nearly impossible to contest, giving him the ability to space the floor and punish defenses that leave him open. Beyond his perimeter skill, he shows real promise as a rim protector, using his length and instincts to alter shots and control space defensively. Though still raw and developing, Spence’s natural tools are undeniable. Adding strength and improving mobility will be key steps in unlocking his full impact, especially against more physical competition inside. A modern big with guard-like touch, Spence’s blend of shooting, length, and untapped upside make him one of the most intriguing long-term prospects in the 2027 class — and the sky is the limit as he continues to grow."
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
summary: "CJ Whaley is a freak of nature athlete who already stands among the most dominant multi-sport athletes in the region — and he’s only getting started. At 6’6, Whaley blends size, power, and explosion with a natural fluidity that hints at something rare for a prospect his age. A three-sport standout with multiple Division I football offers, Whaley brings football toughness and elite movement to the hardwood. He runs the floor with purpose, finishes through contact, and plays well above the rim with violent athleticism — but what separates him is the guard-like fluidity he already displays. There are flashes of him handling in space, pushing in transition, and creating off the dribble — early signs of a forward who could one day operate as a primary ballhandler. Defensively, he’s versatile and disruptive, using length, quickness, and motor to guard multiple positions. Even as his footwork and polish continue to develop, he already impacts every game through energy, activity, and presence. Whaley is the definition of raw power meeting evolving skill. His blend of athletic dominance, coordination, and emerging perimeter ability make him one of the most intriguing young prospects in the South."
},

{
id: "peyton-hicks",
slug: "peyton-hicks",
name: "Peyton Hicks",
school: "Genoa",
state: "AR",
classYear: 2026,
position: "F/C",
stars: 3,
height: "6'7",
image: "/players/peyton-hicks.jpg",
summary: "Peyton Hicks is a highly skilled, fundamentally sound big with a polished interior game and a growing perimeter presence. At 6’7, he plays with patience, IQ, and touch, making him a mismatch nightmare in multiple spots on the floor. Hicks has excellent touch around the rim and is steadily developing his three-point shot — clean, confident, and repeatable mechanics give a glimpse of a future stretch-big weapon. He’s also growing as a ballhandler, comfortable initiating from the high post or attacking closeouts when the defense shifts. What separates Hicks is his composure. He controls tempo, reads the floor, and plays the game at his own pace — rarely rushed, always efficient. Not the most explosive athlete, but he consistently wins with skill, footwork, and poise. His athleticism has been a focal point, and with continued improvement, he can be special. Hicks has the potential to quickly rise into another tier."
},

{
id: "josiah-morales",
slug: "josiah-morales",
name: "Josiah Morales",
school: "Classen SAS",
state: "OK",
classYear: 2027,
position: "PG",
stars: 2,
height: "5'9",
image: "/players/josiah-morales.jpg",
summary: "Josiah Morales might not tower over defenders, but make no mistake — he’s one of the toughest matchups in any gym. At 5’10, Morales plays with a blend of confidence, craft, and IQ that separates him from nearly every guard in his class. Offensively, Morales is a walking bucket. His shooting ability borders on elite — deep range, quick release, and unwavering confidence. Whether it’s a step-back, pull-up, or a shot from well beyond the arc, he makes it look effortless. But he’s far from a one-dimensional scorer. His handle is tight, his pace is advanced, and he uses both to carve through defenses with precision. He plays off two feet in the paint, showing balance and poise against size. His floater game is textbook, and his passing instincts elevate everyone around him — consistently drawing help and hitting teammates right in rhythm. Defensively, Morales brings toughness and edge. He’s scrappy, competitive, and takes matchups personally — turning size disadvantages into fuel. A natural leader with elite shot-making, poise, and floor command, Josiah Morales fits the mold of a modern point guard who can take over games in multiple ways. His confidence and complete offensive toolbox make him one of the most dangerous guards in Oklahoma."
},

{
id: "ben-elam",
slug: "ben-elam",
name: "Ben Elam",
school: "Shattuck",
state: "OK",
classYear: 2026,
position: "Guard",
stars: 2,
height: "6'2",
image: "/players/ben-elam.jpg",
summary: "Ben Elam is one of those guards who instantly earns respect the moment the ball tips. At 6’2, he’s built strong, plays stronger, and backs it all up with one of the most complete offensive toolkits in his class. Elam doesn’t rely on flash — his game is built on control, craft, and confidence. He’s nearly impossible to speed up, dictating tempo with poise and precision. Off the bounce, he creates separation effortlessly, getting to his spots with spins, step-backs, and clean footwork. Once he’s there, his shot-making ability takes over — smooth from midrange, lethal from three, and calm under pressure. He’s also an underrated playmaker. While known primarily as a scorer, Elam reads defenses well and consistently delivers the right pass when help defenders collapse. Defensively, he competes with pride, matching up physically and crashing the glass with purpose — another reflection of his all-around maturity and motor. A polished scorer with a veteran-like floor presence, Elam has the kind of confidence and efficiency that make him a nightmare to defend. Expect him to continue trending upward as one of Oklahoma’s most reliable and composed backcourt threats."
},

{
id: "kristian-payne",
slug: "kristian-payne",
name: "Kristian Payne",
school: "Grind Prep",
state: "AR",
classYear: 2026,
position: "F/C",
stars: 4,
height: "6'7",
image: "/players/kristian-payne.jpg",
summary: "Kristian Payne is a fluid, positionless forward who moves exceptionally well for his size and impacts the game on both ends. At 6’7, he combines length, athleticism, and coordination with a growing offensive toolkit, making him one of the more intriguing developing prospects in his class. Payne is a legit shooter — confident from the perimeter and comfortable spacing the floor. He’s also a reliable lob threat, finishing plays above the rim with good timing and touch. Defensively, he shows real versatility — able to guard multiple positions, switch in space, and contest shots all over the floor. What separates Payne is his smooth movement and adaptability. As he continues to refine his handle and strength, he projects as a modern, positionless piece capable of thriving in a variety of systems. A high-upside prospect with a foundation built on mobility, length, and skill"
},

{
id: "braylon-guerin",
slug: "braylon-guerin",
name: "Braylon Guerin",
school: "Northeast High School",
state: "LA",
classYear: 2026,
position: "Guard / Forward",
stars: 2,
height: "6'5",
image: "/players/braylon-guerin.jpg",
summary: "Braylon Guerin is a long, athletic wing whose presence can immediately elevate a team on both ends of the floor. At 6’5, his combination of length, fluidity, and motor makes him a disruptive force defensively and a growing threat offensively. Defensively, Guerin is elite — capable of guarding 1–5 with confidence, switching seamlessly, and using his length to contest shots and erase space. His instincts, energy, and communication turn defense into transition opportunities and set the tone for his team. Offensively, he’s steadily expanding his game. Guerin can knock down shots from the perimeter when in rhythm, attack the rim with controlled aggression, and make smart reads in transition. As his confidence and decision-making grow, his scoring and playmaking potential continue to rise. A high-character, high-motor wing, Guerin combines defensive dominance with evolving offensive skills — a modern two-way prospect coaches can rely on."
},

{
id: "deunte-hamilton",
slug: "deunte-hamilton",
name: "Deunte Hamilton",
school: "Magnolia",
state: "AR",
classYear: 2026,
position: "G",
stars: 2,
height: "5'11",
image: "/players/deunte-hamilton.jpg",
summary: "Deunte Hamilton is a shifty, confident point guard who brings pace, shot-making, and poise to the floor. At 5’11, he uses change of direction and rhythm to keep defenders off balance, creating separation with ease and attacking gaps with purpose. A knockdown shooter, Hamilton can score from all three levels — smooth off the dribble or reliable in catch-and-shoot situations. He’s a strong finisher, absorbing contact well and converting tough looks around the rim. What elevates his game is his court vision and feel — reading defenses, delivering timely passes, and maintaining control even under pressure. Offensively, he runs the offense efficiently while keeping teammates involved, making his team better every possession. Defensively, Hamilton is a very capable defender when engaged, using effort and anticipation to disrupt opponents. A good scorer who keeps his team involved, his blend of shot creation, playmaking, and energy makes him one of the more promising point guards in South Arkansas."
},

{
id: "isaiah-robinson",
slug: "isaiah-robinson",
name: "Isaiah Robinson",
school: "El Dorado",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 2,
height: "6'3",
image: "/players/isaiah-robinson.jpg",
summary: "Isaiah Robinson is a solid, all-around wing built on strength, control, and reliability. At 6’3, he plays with a sturdy frame and physical presence, allowing him to compete through contact and finish in traffic. Robinson brings a balanced game on both ends — a capable scorer from midrange and the perimeter who can attack closeouts and make the right read when defenses collapse. He impacts winning through poise and efficiency rather than forcing plays. Defensively, his strength and discipline allow him to guard multiple positions, hold his ground against bigger players, and rebound effectively from the wing. Robinson takes pride in the small details — boxing out, rotating, and staying locked in. A dependable, team-first player with growing confidence offensively, his strength, effort, and versatility make him the type of glue piece every lineup needs."
},

{
id: "ty-palermo",
slug: "ty-palermo",
name: "Ty Palermo",
school: "Lafayette",
state: "LA",
classYear: 2027,
position: "G/F",
stars: 4,
height: "6'5",
image: "/players/ty-palermo.jpg",
summary: "Ty Palermo is a promising, athletic forward with the frame and bounce to make an early impact. At 6’5, he’s a very good athlete who can finish above the rim and affect the game through energy, length, and effort on both ends. Palermo’s offensive game is steadily developing — he’s learning to use his athleticism to create scoring opportunities and is beginning to show flashes of perimeter touch and control off the dribble. His length and agility also make him a natural fit for defensive versatility, able to switch and contest multiple positions. Still early in his growth curve, but the physical foundation and effort level stand out. Palermo’s upside is tied to his offensive development, and with continued confidence and polish, he could become a matchup problem in years to come. A high-motor athlete whose trajectory is trending upward — primed to make a name for himself as his game continues to evolve."
},

{
id: "monti-mixon",
slug: "monti-mixon",
name: "Monti Mixon",
school: "Nevada HS",
state: "AR",
classYear: 2028,
position: "Forward/Center",
stars: 3,
height: "6'8",
image: "/players/monti-mixon.jpg",
summary: "Monti Mixon is a young, athletic big with tremendous upside. At 6’8, his size, length, and energy make him a force around the rim on both ends of the floor. He’s ferocious protecting the paint and isn’t shy about throwing it down when given the opportunity. With the departure of standout Kavion Coleman, Mixon is expected to take on a larger role and emerge as a key contributor. His relentless motor ensures he stays impactful even against more talented or experienced opponents. An emerging talent in Southwest Arkansas, Mixon combines work ethic, athletic tools, and intensity with high potential — a name on the rise with limitless upside."
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
summary: "Zaybreion Cooper is an electric, high-energy guard whose skill, motor, and confidence make him one of the most exciting young prospects in East Texas. At 5’10, he plays with a fiery, passionate edge and controls the floor with elite quickness and command. Cooper is an elite ballhandler with a shifty, unpredictable rhythm, constantly putting defenders on skates and creating opportunities off the bounce. His court vision is special, delivering on-time passes in tight spaces. Offensively, he’s a deep-range streaky shooter who can heat up fast and swing momentum with confidence. He’s also a strong finisher for his size, using creativity, body control, and touch to convert in traffic. On defense, he thrives — earning Defensive Player of the Year honors last season with relentless pressure, quick hands, and pride in every assignment. A skilled, competitive guard with elite handle, defensive impact, and swagger, Cooper already proves he belongs among the best in his class."
},

{
id: "kaden-williams",
slug: "kaden-williams",
name: "Kaden Williams",
school: "Unknown",
state: "KS",
classYear: 2029,
position: "Guard",
stars: 2,
height: "5'10",
image: "/players/kaden-williams.jpg",
summary: "Kaden Williams is a young bull who attacks every possession with fearlessness and intensity. At 5’10, he already commands the floor like a seasoned point guard — vocal, confident, and always leading by example. Williams shows early versatility, capable of knocking down open shots, cutting with purpose, and defending multiple positions without hesitation. His combination of toughness, IQ, and competitive edge makes him a guard coaches can trust in any situation. Physically still growing, Williams’ mental approach and motor are well ahead of his years. He projects as a foundational floor general for the 2029 class — a true leader built for winning basketball."
},

{
id: "quincy-shelton",
slug: "quincy-shelton",
name: "Quincy Shelton",
school: "Hugo",
state: "OK",
classYear: 2026,
position: "G",
stars: 1,
height: "6'0",
image: "/players/quincy-shelton.jpg",
summary: "Quincy Shelton is a three-sport athlete and Sacramento State football commit whose elite athleticism and competitive drive translate seamlessly to the hardwood. At 6’0, he plays with confidence, burst, and physicality — a guard who thrives attacking downhill and applying constant pressure on defenses. Shelton’s shiftiness and body control allow him to navigate traffic and finish through contact, while his foot speed and quick first step make him a tough cover off the bounce. He’s a capable shooter with improving range and rhythm, keeping defenders honest and opening lanes for his aggressive drives. Defensively, his toughness and athletic background stand out — he competes with effort, takes pride in matchups, and has the tools to disrupt opposing guards with active hands and quick recovery. A natural athlete with high energy and leadership, Shelton brings a winning mentality to every sport he touches. On the court, he’s a fearless, explosive guard whose game creates opportunities for himself and teammates while setting the tone defensively."
},

{
id: "baker-hoskins",
slug: "baker-hoskins",
name: "Baker Hoskins",
school: "Idabel",
state: "OK",
classYear: 2026,
position: "F/C",
stars: 1,
height: "6'5",
image: "/players/baker-hoskins.jpg",
summary: "Baker Hoskins is a versatile forward with size, feel, and playmaking instincts that make him a unique piece in any lineup. At 6’5, he blends athleticism with high basketball IQ, showing the ability to impact games beyond scoring — facilitating, rebounding, and defending with purpose. Hoskins moves fluidly for his size and displays a natural feel with the ball. This season, he’s expected to take on more responsibility as a primary ballhandler, allowing his vision and decision-making to shine. He reads defenses well, finds open teammates, and initiates offense with confidence from multiple spots on the floor. Defensively, he’s reliable and positionally sound — capable of switching onto smaller players while still providing interior help. His combination of effort, awareness, and balance makes him a steady two-way contributor. A high-IQ, team-oriented player with growing confidence and skill, Hoskins’ expanding offensive role could unlock another level in his development."
},

{
id: "jason-webster",
slug: "jason-webster",
name: "Jason Webster",
school: "Jefferson",
state: "TX",
classYear: 2027,
position: "G/F",
stars: 1,
height: "6'6",
image: "/players/jason-webster.jpg",
summary: "Jason Webster is an athletic, versatile wing with size, length, and upside that jumps out immediately. At 6’6, he moves well in space and shows flashes of impacting the game on both ends — a developing prospect whose ceiling continues to rise. Offensively, Webster plays with balance and confidence. He’s effective in transition, runs the floor hard, and finishes well around the rim. As his handle and shooting mechanics tighten, he projects as a matchup problem with the tools to score inside and out. Defensively, his athleticism and size allow him to guard multiple positions and contest shots without fouling. He’s active on the glass and competes with energy — the kind of player who fills gaps and makes things happen without needing plays drawn up. Still early in his development, but the flashes are real. Webster’s blend of length, versatility, and athletic foundation make him a name to track closely in the coming years."
},

{
id: "micah-timmons",
slug: "micah-timmons",
name: "Micah Timmons",
school: "Gladewater High School",
state: "TX",
classYear: 2027,
position: "Guard",
stars: 2,
height: "6'1",
image: "/players/micah-timmons.jpg",
summary: "Micah Timmons is a composed, confident lead guard who controls the game with poise and precision. At 6’1, he pairs a smooth handle with advanced pace control, consistently dictating tempo and making smart reads. Offensively, Timmons is a versatile scorer with range at all three levels. He can pull up off the dribble, hit rhythm threes, and finish creatively around the rim. His poise under pressure and ability to deliver precise passes make him a natural floor general. Defensively, he’s active, disciplined, and smart with positioning, capable of offsetting size mismatches while setting a tone with effort and awareness. Timmons’ combination of IQ, skill, and composure makes him a steady, impactful guard."
},

{
id: "mason-lindsay",
slug: "mason-lindsay",
name: "Mason Lindsay",
school: "Kirby",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 1,
height: "6'3",
image: "/players/mason-lindsay.jpg",
summary: "Mason Lindsay is an all-around competitor who brings effort, toughness, and physicality every time he steps on the floor. At 6’3, he’s a strong-bodied guard/forward who embraces contact and looks to attack downhill and create opportunities. Lindsay thrives attacking the rim, using power, balance, and body control to finish through traffic. His midrange and inside scoring touch stand out, while his perimeter shot is still developing — the mechanics are there, just awaiting consistency. What defines him most is his mentality — countryboy tough, confident, and unafraid of physical play. He impacts the game beyond scoring, using defense, rebounding, and hustle to set the tone for his team. A reliable, hard-nosed competitor, Lindsay’s motor, toughness, and drive give him real staying power as he continues to refine his all-around game."
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
summary: "Isaac Aaron is a lights-out shooter with a smooth release and confident stroke from deep. At 6’1, he brings reliable perimeter scoring and spacing ability — the kind of guard who can punish defenses that leave him even a sliver of room. Aaron’s shooting mechanics are compact and repeatable, and when he’s in rhythm, he can string together makes in bunches. He’s also a decent athlete, capable of getting downhill when defenders overcommit and holding his own defensively with solid effort and positioning. Heading into this season, the focus is on increasing production and consistency. With his shooting already a weapon, improved aggressiveness and playmaking could elevate his role to a full-time scoring threat. A pure shooter with room to grow into a complete guard, Aaron’s development this year will be key to unlocking his next level."
},

{
id: "kedrid-smith",
slug: "kedrid-smith",
name: "Kedrid Smith",
school: "Pleasant Grove",
state: "TX",
classYear: 2028,
position: "F/C",
stars: 2,
height: "6'5",
image: "/players/kedrid-smith.jpg",
summary: "Kedrid Smith is a bruising, physical forward who plays with power, toughness, and effort on every possession. At 6’5, he’s built like a tank — a vigorous rebounder who thrives on contact and controls the paint through sheer force and energy. A Division I football recruit, Smith brings that same mentality and physical edge to the hardwood. He carves out space, finishes through bodies, and sets the tone on both ends with his relentless motor. Still developing his touch and polish, Smith’s raw athletic ability and competitiveness give him a strong foundation. As his footwork and offensive confidence evolve, he has the tools to become a versatile interior anchor. A high-motor, high-impact prospect whose effort and physicality define his game — Smith’s relentlessness makes him a name to watch in the 2028 class."
},

{
id: "devon-hall-clark",
slug: "devon-hall-clark",
name: "Devon Hall-Clark",
school: "Liberty-Eylau",
state: "TX",
classYear: 2027,
position: "F/C",
stars: 3,
height: "6'5",
image: "/players/devon-hall-clark.jpg",
summary: "Devon Hall-Clark is a long, sleek forward with a smooth, confident game and natural scoring instincts. At 6’5, he brings length, fluidity, and versatile offensive skill that allows him to impact the game from every spot on the floor. Hall-Clark owns beautiful shooting mechanics — high release, soft touch, and balance make his jumper repeatable and efficient. But he’s far more than a perimeter threat. He can attack from the elbows, finish around the rim, and score comfortably in midrange areas. His ability to stretch defenses while still playing through contact gives him modern two-way appeal. Defensively, he’s capable of guarding multiple positions, using length and timing to contest shots and disrupt passing lanes. The key to unlocking his next level is building aggression and assertiveness, tapping into the tools that make him special. A high-upside forward with touch, length, and all-around scoring ability — Hall-Clark’s versatility and feel make him a player with serious long-term potential."
},

{
id: "adam-orr",
slug: "adam-orr",
name: "Adam Orr",
school: "Texas High",
state: "TX",
classYear: 2027,
position: "G/F",
stars: 2,
height: "6'2",
image: "/players/adam-orr.jpg",
summary: "Adam Orr is a versatile, tough-minded player who embodies the 'whatever-you-need, coach' mentality. At 6’2, he brings a complete, team-first approach — capable of filling multiple roles and impacting the game through effort, intelligence, and adaptability. Orr is a capable scorer and shooter, confident from midrange and beyond the arc while also strong enough to finish through contact at the rim. He plays with poise and toughness, never afraid to mix it up or take on difficult assignments. His unselfish style allows him to seamlessly fit next to any lineup — doing whatever’s required to win. Defensively, Orr competes with pride and discipline. He rebounds well for his position, communicates, and takes on challenges head-first. A glue-guy with real skill and toughness, Adam Orr is the type of player every coach trusts — steady, versatile, and built for winning basketball."
},

{
id: "javon-raye",
slug: "javon-raye",
name: "Javon Raye",
school: "ESTEM Charter",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 3,
height: "6'4",
image: "/players/javon-raye.jpg",
summary: "Javon Raye brings a balanced, dependable presence to the floor. He rebounds well for his position, competes defensively, and shows confidence as a shooter. A strong two-foot finisher who plays with control and effort, Raye impacts the game through physicality and discipline. There’s clear potential for growth as he continues refining his offensive consistency and physical tools."
},

{
id: "holden-kirk",
slug: "holden-kirk",
name: "Holden Kirk",
school: "ESTEM Charter",
state: "AR",
classYear: 2026,
position: "F",
stars: 2,
height: "6'4",
image: "/players/holden-kirk.jpg",
summary: "Holden Kirk brings the feel of an international-style forward — not overly athletic, but skilled and intelligent in his approach. He uses angles, timing, and impressive gather footwork to create advantages against more athletic defenders. A confident shooter who isn’t shy about taking open looks, Kirk also shows polish when attacking closeouts or operating in the post. His craft and understanding of the game allow him to impact the floor in subtle but effective ways."
},

{
id: "landon-burley",
slug: "landon-burley",
name: "Landon Burley",
school: "Columbia Christian",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 1,
height: "6'0",
image: "/players/landon-burley.jpg",
summary: "Landon Burley is a combo guard capable of running the point or playing off the ball. He consistently finds opportunities attacking downhill and in transition, showing the ability to get to the paint and finish with either hand. While his perimeter shooting is still developing, Burley plays with confidence and a willingness to improve. His versatility and attacking mindset make him a guard who can impact the game in multiple roles."
},

{
  id: "riley-jones",
  slug: "riley-jones",
  name: "Riley Jones",
  school: "ESTEM Charter",
  state: "AR",
  classYear: 2026,
  position: "G",
  stars: 1,
  height: "5'10",
  image: "/players/riley-jones.jpg",
  summary: "Riley Jones is a tough, gritty guard who sets the tone defensively. Not afraid to pick up full court and agitate opposing ball handlers, he brings relentless pressure and energy on the defensive end. Offensively, Jones plays with poise and patience — a steady lead guard who takes what the defense gives him. He excels at creating scoring opportunities for teammates and is both a knockdown shooter and a shifty ballhandler capable of controlling tempo."
},

{
  id: "kingston-alexander",
  slug: "kingston-alexander",
  name: "Kingston Alexander",
  school: "ESTEM Charter",
  state: "AR",
  classYear: 2026,
  position: "G",
  stars: 1,
  height: "5'10",
  image: "/players/kingston-alexander.jpg",
  summary: "Kingston Alexander is a composed, low-mistake floor general who embodies the team-first mindset. A no-turnover lead guard, he keeps the offense organized and flowing. Alexander gets to his spots with purpose, reads defenses well, and understands when to be decisive as a scorer. He’s also a reliable defender who plays with focus and maturity beyond his years, bringing steadiness and leadership to the guard position."
},

{
id: "jace-sullivan",
slug: "jace-sullivan",
name: "Jace Sullivan",
school: "Mt. Pleasant Chapel Hill",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 2,
height: "5'10",
image: "/players/jace-sullivan.jpg",
summary: "Jace Sullivan is a true point guard — unselfish, composed, and always looking to make the right play. At 5’10, he runs an offense with maturity and control, prioritizing ball movement and decision-making over flash or volume scoring. While capable of scoring when needed, Sullivan is wired to facilitate first, consistently setting up teammates and keeping the floor balanced. Averaging around 15 points per game, he plays within rhythm and structure while leading with efficiency. What separates him is his basketball IQ, arguably one of the highest on the Watchlist. His understanding of spacing, timing, and reads allows him to compete with players possessing more size or raw athleticism — often outthinking them. A coach’s dream guard who values efficiency, leadership, and execution, Sullivan’s poise and IQ make him one of the most dependable floor generals in the region."
},

{
id: "fabean-grigsby",
slug: "fabean-grigsby",
name: "Fabean Grigsby",
school: "Hooks",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 1,
height: "5'9",
image: "/players/fabean-grigsby.jpg",
summary: "Fabean Grigsby is a blindingly quick point guard with a sharp mind for the game and a knack for making plays in tight spaces. At 5’9, he controls tempo with poise and confidence, using his speed to pressure defenses and create opportunities for himself and others. Grigsby’s court vision and IQ stand out — he sees the floor well, anticipates rotations, and consistently finds open teammates in stride. His floater game is exceptional, one of his signature weapons, allowing him to score efficiently over length in the paint. Defensively, he’s an annoying matchup for any opposing ballhandler, using quick hands, anticipation, and relentless energy to disrupt rhythm and force turnovers. His effort and attitude make him a tone-setter on that end. While his in-between game is still developing, his pace, ball control, and playmaking instincts make him a constant problem for opposing defenses. A quick, intelligent guard with creativity, confidence, and grit — Grigsby’s speed, defensive tenacity, and feel make him a name to monitor in the 2026 class."
},

{
id: "gavyn-young",
slug: "gavyn-young",
name: "Gavyn Young",
school: "Kirby",
state: "AR",
classYear: 2027,
position: "Guard",
stars: 1,
height: "5'10",
image: "/players/gavyn-young.jpg",
summary: "Gavyn Young is a deadeye shooter with range, confidence, and rhythm that make him one of the best pure shooters on the entire Watchlist. At 5’10, he may be undersized, but his ability to space the floor and knock down shots from anywhere keeps him impactful in every lineup. Young’s release is quick, compact, and consistent — a true catch-and-shoot threat who forces defenses to extend. He moves well without the ball, finds open windows, and thrives off kickouts and relocation opportunities. When he’s in rhythm, he can catch fire and shift momentum instantly. While size and strength will continue to be areas of growth, his shooting ability translates at every level. A confident scorer who plays to his strengths, Young’s elite touch and feel from beyond the arc make him a valuable floor spacer and specialist in the 2027 class."
},

{
id: "devaurionte-jackson",
slug: "devaurionte-jackson",
name: "Devaurionte Jackson",
school: "Liberty-Eylau HS",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 1,
height: "5'9",
image: "/players/devaurionte-jackson.jpg",
summary: "Devaurionte Jackson may be one of the smaller players on the floor, but he competes with unmatched heart and intensity. A feisty, relentless defender, he uses his size as a weapon to pressure ball-handlers, disrupt rhythm, and create turnovers. Offensively, Jackson is a skilled shooter with excellent catch-and-shoot ability and a capable ball-handler who can contribute in multiple ways. Beyond his on-court impact, he’s praised as a perfect locker-room presence — bringing energy, communication, leadership, and a fun, competitive spirit that elevates his team."
},

{
id: "kobe-hughey",
slug: "kobe-hughey",
name: "Kobe Hughey",
school: "Nevada County HS",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 2,
height: "5'10",
image: "/players/kobe-hughey.jpg",
stats: "18 PPG | 8 RPG | 3.5 APG",
summary: "Kobe Hughey is a solid lead guard with a smooth, repeatable shooting stroke. Capable of scoring off the bounce, he consistently takes high-percentage shots within the flow of the offense. Hughey plays with a balanced attack and fiery competitiveness that energizes his team and helps set the pace. His scoring instincts, leadership, and ability to control the floor make him a dependable presence in the backcourt."
},

{
id: "keyonte-wingfield",
slug: "keyonte-wingfield",
name: "Keyonte Wingfield",
school: "Nevada County HS",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 1,
height: "5'10",
image: "/players/keyonte-wingfield.jpg",
Summary: "Keyonte Wingfield is a guard who plays bigger than his size through toughness, effort, and defensive commitment. He isn’t afraid to take on difficult matchups, crash the boards, or do the dirty work that helps his team win. While not a high-volume scorer, Wingfield is steady, reliable, and fundamentally sound, providing consistent energy and stability on both ends of the floor."
},

{
id: "javier-gomez",
slug: "javier-gomez",
name: "Javier Gomez",
school: "Blevins",
state: "AR",
classYear: 2026,
position: "Guard",
stars: 1,
height: "5'10",
image: "/players/javier-gomez.jpg",
summary: "Though small in stature, Javier Gomez plays with the poise and control of a veteran floor general. A true point guard, he directs the offense with purpose and consistently finds teammates in rhythm. Gomez is a steady ballhandler with a strong assist-to-turnover ratio and an underrated ability to score when needed. His leadership, court awareness, and reliability make him an extension of the coaching staff on the floor."
},

{
id: "keedan-adamson",
slug: "keedan-adamson",
name: "Keedan Adamson",
school: "Paris HS",
state: "TX",
classYear: 2026,
position: "PG",
stars: 3,
height: "6'0",
image: "/players/keedan-adamson.jpg",
summary: "Keedan Adamson is a true three-level scoring point guard who combines shot-making, playmaking, and defensive grit. Comfortable creating off the bounce or spotting up, he consistently pressures defenses with the ability to score from deep, the midrange, and at the rim. Adamson plays with a competitive edge and isn’t afraid to get physical defensively despite his size. A vocal leader who sets the tone for Paris, he controls tempo well and consistently impacts the game as both a scorer and facilitator. Widely viewed as one of the top guards in East Texas."
},

{
id: "jaydrien-henderson",
slug: "jaydrien-henderson",
name: "jayDrien Henderson",
school: "Paris HS",
state: "TX",
classYear: 2026,
position: "F",
stars: 3,
height: "6'5",
image: "/players/jaydrien-henderson.jpg",
summary: "JayDrien Henderson is one of the most electric wings in East Texas, bringing a rare mix of three-level scoring and above-the-rim athleticism. He can score off the catch, off the bounce, and attacking downhill, making him a constant threat in transition and half-court sets. Defensively, Henderson uses his size, length, and mobility to guard multiple positions, giving him strong two-way value. His combination of athletic tools and offensive versatility makes him a high-upside forward with plenty of room to keep climbing."
},

{
id: "nick-henderson",
slug: "nick-henderson",
name: "Nick Henderson",
school: "Western Heights",
state: "OK",
classYear: 2026,
position: "PG",
stars: 3,
height: "5'9",
image: "/players/nick-henderson.jpg",
summary: "Nick Henderson is a true traditional point guard who may go an entire game without looking to score — and that’s by design. What you can depend on every night is minimal turnovers and complete control of the offense. He displays superb ball handling, with arguably the tightest handle of any guard evaluated over the past two seasons. Henderson operates with high IQ, constant floor awareness, and a natural eagerness to find teammates in their spots. Functioning as an extension of the coach on the floor, he directs traffic and manages pace while keeping the offense organized. A coach’s guard — low-risk, high-trust point guard who impacts winning through decision-making, organization, and ball security."
},

{
id: "jakyvian-hill",
slug: "jakyvian-hill",
name: "Jakyvian Hill",
school: "Marshall HS",
state: "TX",
classYear: 2026,
position: "Guard",
stars: 2,
height: "6'2",
image: "/players/jakyvian-hill.jpg",
summary: "Jakyvian Hill is a good-sized guard with plenty of room to grow. Steady, confident, and reliable, he doesn’t jump off the screen but consistently does whatever the game calls for. Hill can shoot, pass, and score while willingly accepting defensive assignments. His long arms paired with solid athleticism give him versatility on both ends of the floor. With a strong foundation and feel for the game, he profiles as a low-maintenance, high-trust guard whose value shows up in winning plays. Not flashy, but effective — a prospect worth keeping an eye on as his physical tools and overall game continue to develop."
},

{
id: "victor-easter",
slug: "victor-easter",
name: "Victor Easter",
school: "Lake Hamilton HS",
state: "AR",
classYear: 2026,
position: "G",
stars: 4,
height: "6'0",
image: "/players/victor-easter.jpg",
summary: "Victor Easter is a crafty, explosive scoring guard who plays with the utmost confidence. Comfortable finishing around paint protectors with an array of gathers, he consistently pressures defenses when attacking downhill. Easter can also heat up quickly from three-point range, making him a dangerous scoring threat when he finds rhythm. When he gets rolling, he can pile up points in a hurry and challenge defenses with his aggressive scoring mentality."
},

{
id: "anthony-spratt-jr",
slug: "anthony-spratt-jr",
name: "Anthony Spratt Jr.",
school: "Benton HS",
state: "AR",
classYear: 2028,
position: "G",
stars: 4,
height: "6'5",
image: "/players/anthony-spratt-jr.jpg",
summary: "Anthony Spratt Jr. is a high-level young guard with real size and athletic tools that already separate him from others in his class. At 6’5, he combines length and fluid athleticism with a spicy handle that allows him to create space and attack defenders off the bounce. Spratt is a capable playmaker who can score in multiple ways without forcing the game, bringing both offensive versatility and two-way value. His positional size and developing feel give him a strong high-major foundation, and his ceiling continues to rise as his consistency and overall skill set evolve."
},

{
id: "javarious-russell",
slug: "javarious-russell",
name: "Javarious Russell",
school: "Benton HS",
state: "AR",
classYear: 2026,
position: "G",
stars: 3,
height: "5'11",
image: "/players/javarious-russell.jpg",
summary: "Javarious Russell is a sparkplug guard who plays with confidence and edge. A shifty ballhandler capable of changing the game in short bursts, he thrives when he finds an offensive rhythm. When Russell gets hot, he becomes one of the toughest guards to deal with in Arkansas, bringing relentless energy and constant pressure every time he steps on the floor."
},

{
id: "axl-janske",
slug: "axl-janske",
name: "Axl Janske",
school: "Hot Springs Lakeside",
state: "AR",
classYear: 2028,
position: "PG",
stars: 3,
height: "6'2",
image: "/players/axl-janske.jpg",
summary: "Axl Janske is an extremely smooth playmaker who controls the game at his own pace and plays beyond his years. Already posting multiple 30+ point performances early in his sophomore campaign, he combines scoring confidence with natural feel for the game. Janske continues to develop across the board with no glaring weaknesses and appears to still be growing physically, making him a long-term prospect worth tracking closely."
},

{
id: "landon-woods",
slug: "landon-woods",
name: "Landon Woods",
school: "England HS",
state: "AR",
classYear: 2026,
position: "G",
stars: 2,
height: "5'11",
image: "/players/landon-woods.jpg",
summary: "Landon Woods is a shifty guard and high-volume scorer capable of catching fire and filling it up quickly. A reliable floor general for a talented England roster, Woods consistently shows excellent court vision while making sure teammates are involved. His competitive edge and attacking style keep constant pressure on opposing defenses."
},

{
id: "aden-scribner",
slug: "aden-scribner",
name: "Aden Scribner",
school: "England HS",
state: "AR",
classYear: 2026,
position: "G/F",
stars: 3,
height: "6'5",
image: "/players/aden-scribner.jpg",
summary: "Aden Scribner is a gifted athlete who stands out with explosive lift, able to elevate off one or two feet and consistently play above the rim. His athleticism drives his impact, but he’s more than just a finisher — Scribner is a capable playmaker who brings relentless energy and pressure on both ends of the floor. He thrives on activity, effort, and physical tools that immediately jump off the screen."
},

{
id: "isaiah-robinson",
slug: "isaiah-robinson",
name: "Isaiah Robinson",
school: "El Dorado HS",
state: "AR",
classYear: 2026,
position: "G",
stars: 2,
height: "6'1",
image: "/players/isaiah-robinson.jpg",
summary: "Isaiah Robinson is a poised, all-around guard who leads with control and rarely forces the game. He regularly attacks the paint and isn’t shy about challenging defenders at the rim, bringing an aggressive edge to his scoring approach. Robinson provides steadiness, balance, and leadership on both ends of the floor, making him a dependable two-way presence with very few weaknesses in his overall game."
},

{
id: "chris-bloodsoe",
slug: "chris-bloodsoe",
name: "Chris Bloodsoe",
school: "Idabel HS",
state: "OK",
classYear: 2026,
position: "F",
stars: 1,
height: "6'4",
image: "/players/chris-bloodsoe.jpg",
summary: "Chris Bloodsoe is a big, strong-bodied forward who embraces the physical side of the game and handles the dirty work every possession. He has a good feel for finishing around the rim and rebounding, using football-built strength and athleticism that translate well to the hardwood. Coming from a strong basketball culture, Bloodsoe plays with noticeable IQ, toughness, and discipline in the way he approaches the game."
},

{
id: "damien-vickz",
slug: "damien-vickz",
name: "Damien Vickz",
school: "McLeod HS",
state: "AR",
classYear: 2028,
position: "G",
stars: 1,
height: "6'0",
image: "/players/damien-vickz.jpg",
summary: "Damien Vickz is a developing guard whose early varsity experience has accelerated his growth. Starting as a freshman has allowed him to gain valuable reps against older competition. Vickz is a steady ball handler and capable catch-and-shoot guard who plays within himself and avoids forcing the game. With continued development over the next several years, he projects as a long-term prospect worth monitoring as his skill set and confidence continue to mature."
},

{
id: "jaidyn-king-kirkindoff",
slug: "jaidyn-king-kirkindoff",
name: "Jaidyn King-Kirkindoff",
school: "Longview HS",
state: "TX",
classYear: 2028,
position: "G",
stars: 1,
height: "5'11",
image: "/players/jaidyn-king-kirkindoff.jpg",
summary: "Jaidyn King-Kirkindoff is a poised young guard with a tight handle that makes him dangerous in open space. He shows strong feel for the game, consistently delivering passes where teammates want them and operating comfortably within the flow of the offense. His pull-up jumper in transition and out of the pick-and-roll is already a reliable weapon. One of the more promising young guards in East Texas, King-Kirkindoff has the skill and composure to continue trending upward."
},

{
id: "travis-gary-jr",
slug: "travis-gary-jr",
name: "Travis Gary Jr.",
school: "Jefferson HS",
state: "TX",
classYear: 2027,
position: "G",
stars: 3,
height: "5'10",
image: "/players/travis-gary-jr.jpg",
summary: "Travis Gary Jr. is a high-IQ guard with elite ballhandling and creativity who controls the game at his own pace. Capable of creating his own shot whenever needed, he combines downhill pressure with reliable perimeter shooting. Despite knowing he can take over offensively, Gary remains unselfish and consistently gets teammates involved. Defensively he sets the tone with effort and leadership. As the floor general of a talented Jefferson program, Gary is widely regarded as one of the top guards in East Texas and has his team positioned for another state run."
},

{
id: "caden-mcclain",
slug: "caden-mcclain",
name: "Caden McClain",
School: "Redwater HS",
state: "TX",
classYear: 2026,
position: "G",
stars: 2,
height: "5'10",
image: "/players/caden-mcclain.jpg",
summary: "Caden McClain is a skilled guard with a clean, repeatable jumper and excellent shooting mechanics. He keeps his game efficient and simple, rarely wasting movement and consistently making the right play within the offense. While not flashy, McClain handles the ball well and provides dependable scoring as a catch-and-shoot option. A low-maintenance player who does his job and impacts winning, he has real sleeper potential as his role and confidence continue to grow."
},

{
id: "hudson-roberts",
slug: "hudson-roberts",
name: "Hudson Roberts",
school: "Redwater HS",
state: "TX",
classYear: 2028,
position: "G",
stars: 1,
height: "6'1",
image: "/players/hudson-roberts.jpg",
summary: "Hudson Roberts is a young prospect worth keeping an eye on as his game continues to develop. Already shooting the ball at an elite clip — nearly 70% from three through December — he currently thrives as a high-level floor spacer who punishes defenses for leaving him open. As he continues to round out the rest of his game, the shooting foundation gives him a very real long-term weapon that can translate at higher levels."
},

{
id: "elijah-sanders",
slug: "elijah-sanders",
name: "Elijah Sanders",
school: "Prosper Prep",
state: "TX",
classYear: 2026,
position: "F",
stars: 2,
height: "6'7",
image: "/players/elijah-sanders.jpg",
stats: "14.6 PPG | 7.9 RPG | 1.0 SPG | 1.0 BPG",
summary: "Elijah Sanders is a high-upside project with elite physical tools. At 6'7, he possesses freakish length, explosive leaping ability, and impressive mobility for his size. Sanders checks nearly every physical projection box and plays with a motor that makes him a difficult cover even while his offensive game continues to develop. His athleticism and defensive potential already stand out, and noticeable improvement in his shooting and post footwork during his time with Prosper Prep shows encouraging progress. Under the right direction and continued skill development, Sanders has the tools to grow into an elite-level prospect."
},

{
id: "joseph-gilbert",
slug: "joseph-gilbert",
name: "Joseph Gilbert",
school: "Prosper Prep",
state: "TX",
classYear: 2028,
position: "G",
stars: 1,
height: "6'1",
image: "/players/joseph-gilbert.jpg",
stats: "10.8 PPG | 6.1 RPG | 2.0 SPG",
summary: "Joseph Gilbert is one of the freshmen who quietly caught attention this season at Prosper Prep. Playing up against older competition has already accelerated his development, and his game reflects a maturity beyond his years. Gilbert may not always jump off the screen, but he consistently plays the right way and already fits the mold of a varsity contributor. He shows good understanding of when to be aggressive and brings one of the most underrated traits in basketball — feel for the game. With a very smooth shooting stroke that should only improve as the rest of his skillset develops, Gilbert is a young prospect worth tracking closely."
},

{
id: "john-gilbert",
slug: "john-gilbert",
name: "John Gilbert",
school: "Prosper Prep",
state: "TX",
classYear: 2027,
position: "PG",
stars: 2,
height: "6'3",
image: "/players/john-gilbert.jpg",
stats: "14.4 PPG | 7.1 RPG | 6.8 APG | 2.6 SPG",
summary: "John Gilbert is an explosive 6'3 left-handed point guard playing for the newly formed Prosper Prep program based in Marshall, Texas. A high-flying guard with exceptional speed and agility, Gilbert is an intriguing backcourt prospect who impacts the game in multiple ways. He brings scoring, playmaking, rebounding, and defensive disruption to the floor while controlling the pace of the offense. His athletic tools and competitiveness stand out, and with continued development of his overall skillset, Gilbert has the potential to rise quickly among his peers. His fiery competitive spirit and natural athletic gifts make him a prospect worth watching."
},

{
id: "isaiah-sanders",
slug: "isaiah-sanders",
name: "Isaiah Sanders",
school: "Prosper Prep",
state: "TX",
classYear: 2028,
position: "C",
stars: 2,
height: "6'8",
image: "/players/isaiah-sanders.jpg",
stats: "11.9 PPG | 9.6 RPG | 2.3 BPG",
summary: "Isaiah Sanders is a long, high-upside center with the physical tools to become one of the standout players in the 2028 class. At 6'8 with freakishly long arms, he alters and blocks shots with ease — often without even needing to leave the floor. Sanders still appears to be growing and already shows flashes of a developing skill set. Early signs of touch on the block and the ability to stretch the floor have appeared in spurts, while his feel for the game allows him to comfortably handle the ball on the perimeter or operate as a pressure release against pressing defenses. With continued development, his combination of length, mobility, and emerging skill gives him significant long-term upside."
},

{
id: "kaiden-eason",
slug: "kaiden-eason",
name: "Kaiden Eason",
school: "Dallas Carter",
state: "TX",
classYear: 2027,
position: "F",
stars: 4,
height: "6'6",
image: "/players/kaiden-eason.jpg",
summary: "Kaiden Eason is one of Dallas’ most promising two-way prospects. At 6'6, the Carter forward has the tools to guard virtually any position on the floor. His freakish length, quick feet, and projectable frame give him the foundation to become an elite lockdown defender at the collegiate and professional levels. While his defensive projection stands out, Eason is far from limited offensively. He is a true three-level scoring threat with a polished all-around game both inside and out. His athleticism shows up loudly on the offensive end as well, where his size, bounce, and explosiveness make him a constant poster threat around the rim."
},

{
id: "amarion-hunter",
slug: "amarion-hunter",
name: "Amarion Hunter",
school: "Dallas Carter",
state: "TX",
classYear: 2027,
position: "PG",
stars: 4,
height: "6'2",
image: "/players/amarion-hunter.jpg",
summary: "Amarion Hunter is arguably one of the most underrated point guards in the 2027 class nationally. The 6'2 Dallas Carter floor general is a true hidden gem whose recruitment is expected to take off following another summer with the Dallas Mustangs. Hunter is a coach’s dream guard, combining elite basketball IQ with a complete three-level scoring package highlighted by a superb pull-up jumper. He controls the game with poise and decision-making, eliminating the need for panic timeouts when he’s on the floor. Capable of both scoring and defending at a high level, Hunter consistently rises to the moment and has a knack for performing when the lights are brightest."
},

{
id: "terrell-jackson",
slug: "terrell-jackson",
name: "Terrell Jackson",
school: "Dallas Carter",
state: "TX",
classYear: 2028,
position: "C",
stars: 5,
height: "6'10",
image: "/players/terrell-jackson.jpg",
summary: "Terrell Jackson is an eye-popping prospect the moment he steps in the gym. Standing 6'10 with a freakish wingspan, the Dallas Carter big man immediately looks the part of a high-level prospect. His play backs it up, combining impressive mobility and athleticism for his size that make him a constant problem around the rim. Jackson plays well above the rim with ease and is a lob threat on nearly every possession. Defensively, his length, timing, and athletic tools allow him to protect the paint at an elite level, already projecting as one of the premier defensive prospects in the country. As he continues to add strength and polish to his offensive skill set, Jackson’s ceiling becomes even more intriguing, making him one of the most exciting young prospects nationally."
},
]
