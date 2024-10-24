var weapons =
["landmine",
"bow",
"melee",
"paintball",
"basketball",
"octobrush",
"fidget spinner",
"assault rifle",
"frisbee",
"tank",
"pillow"];

var melee =
["sword",
"knife",
"golf club",
"baseball bat",
"stick",
"potato",
"shoe",
"dead platypus",
"toaster",
"diamond sword",
"dual swords",
"long stick",
"folding chair",
"steam controller",
"pear",
"battle axe",
"greatsword",
"Victorian broadsword",
"shortsword",
"mace",
"bottle of vodka",
"spear",
"hockey stick",
"frozen baguette",
"kebab skewer",
"balloon sword",
"mailbox",
"stop sign",
"caution sign",
"piece of wood",
"metal pipe"];

var itemsToFind =
["fruit tree",
"poisonous fruit tree",
"clean water",
"clean coal",
"clean Cole",
"OCC vending machine",
"wild Ohio Fried Chicken",
"glasses that cure color-blindness",
"bleach gummy bottle",
"paintball",
"used Band-Aid",
"clean water",
"pack of condoms",
"tent",
"biology textbook",
"bucket of KFC",
"empty bucket of KFC",
"Emoji Movie on laserdisc",
"anthology of life-changing poems",
"quenched and tempered steel",
"VIP ticket to Tana Mojo concert",
"unicorn",
"spiritual enlightenment in a Villanova brochure",
"Lapras",
"diamond pickaxe",
"Stalin mustache",
"bone-hurting juice",
"one spaghetti",
"50% off coupon to an SAT prep class",
"indescribable object",
"chocolate-covered cotton",
"stick of Old Spice deodorant",
"freeze ray",
"gnome",
"pokeball",
"microwave",
"mini fridge",
"backpack full of supplies",
"live sheep",
"briefcase full of money",
"christmas present",
"animal mask"];

var itemsThatGivePoints = [
"fruit tree",
"clean water",
"glasses that cure color-blindness",
"anthology of life-changing poems",
"stick of Old Spice deodorant",
"50% off coupon to an SAT prep class",
"pokeball",
"backpack full of supplies"];

var causeAndEffect =
["fruit tree",
"eats fruit and gains one point in strength",
"poisonous fruit tree",
"eats a poisonous fruit",
"clean water",
"drinks clean water and gains one point in constitution",
"clean coal",
"uses coal to cook food",
"clean Cole",
"uses clean Cole as food",
"OCC vending machine",
"gets a tin of Altoids",
"wild Ohio Fried Chicken",
"random chicken",
"glasses that cure color-blindness",
"is no longer color-blind",
"bleach gummy bottle",
"eats bleach gummy bottle",
"used Band-Aid",
"random bandaid",
"pack of condoms",
"safe dating",
"tent",
"constructs a tent",
"biology textbook",
"reads a biology textbook and falls asleep",
"bucket of KFC",
"eats KFC",
"empty bucket of KFC",
"is sad that they don't have KFC",
"Emoji Movie on laserdisc",
"dies of pure cancer after watching the Emoji Movie",
"anthology of life-changing poems",
"\'s life gets changed by poetry",
"quenched and tempered steel",
"constructs a geometrically stable truss",
"VIP ticket to Tana Mojo concert",
"gets assaulted by a toothbrush at Tana Mojo concert",
"unicorn",
"pets the pink fluffy unicorn",
"spiritual enlightenment in a Villanova brochure",
"sees the light and adheres to the all-boy advantage",
"box of pizza",
"eats an entire pizza",
"diamond pickaxe",
"mines diamond ore",
"bone-hurting juice",
"has major bone pain after drinking bone-hurting juice",
"Stalin mustache",
"gulag",
"one spaghetti",
"eats a singular spaghetti",
"50% off coupon to an SAT prep class",
"attends an SAT class for half the price",
"indescribable object",
"object",
"chocolate-covered cotton",
"gets indigestion from too much Egyptian cotton",
"stick of Old Spice deodorant",
"smells good, but it\'s Old Spice, not your boy\'s cologne",
"freeze ray",
"freezes",
"email",
"dies of shame after being kicked off the finance team",
"gnome",
"\'s gnome explodes",
"pokeball",
"catches a squirrel in a pokeball",
"microwave",
"puts some random fungi in a microwave",
"mini fridge",
"uses a mini fridge like a backpack",
"backpack full of supplies",
"is ready to survive",
"live sheep",
"snuggles up with a sheep",
"briefcase full of money",
"enjoys there money in peace",
"christmas present",
"received a loaf of bread for christmas",
"animal mask",
"blends in with nature"];

var killCauseAndEffect =
["landmine",
"random mine",
"bow",
"shoots",
"melee",
"kills",
"paintball",
"brings one less paintball, so",
"basketball",
"dunks on",
"octobrush",
"splats",
"fidget spinner",
"spins fidget spinner fatally at",
"assault rifle",
"shoots",
"frisbee",
"decapitates",
"tank",
"murders",
"pillow",
"smothers",
"chainsaw",
"saws"];

var shelter =
["cave",
"tree",
"cardboard box",
"geometrically stable truss",
"old shack",
"horse carcass",
"igloo",
"Olive Garden",
"couch",
"sleeping bag",
"queen-sized bed with a memory foam mattress and furnished headrest",
"abandoned camper van",
"large sandcastle",
"derelict manor",
"Chick-fil-a",
"Taco Bell",
"Wendy's",
"cabin in the woods",
"abandoned amuesment park",
"treehouse",
"telephone booth",
"broken down car",
"Freddy Fazbear's Pizzeria",
"shipwreck",
"derailed train",
"McDonalds"
"underground bomb proof shelter",
"air mattress"];

var cornucopia =
["run",
"supply",
"weapon",
"battle"];

var sponsor =
["empty box",
"paintball",
"used Band-Aid",
"clean water",
"pack of condoms",
"tent",
"biology textbook",
"bucket of KFC",
"empty bucket of KFC",
"Emoji Movie on laserdisc",
"anthology of life-changing poems",
"quenched and tempered steel",
"VIP ticket to Tana Mojo concert",
"box of pizza",
"Lapras",
"diamond pickaxe",
"Stalin mustache",
"bone-hurting juice",
"one spaghetti",
"50% off coupon to an SAT prep class",
"indescribable object",
"chocolate-covered cotton",
"stick of Old Spice deodorant",
"freeze ray",
"pokeball",
"backpack full of supplies",
"christmas present",
"animal mask"];

var misc =
["wanders around",
"picks flowers",
"heils Hitler",
"thinks about before this moment in time",
"talks to",
"drops a rant against",
"levels up",
"sings us a song",
"is the sheriff",
"plays some pranks (GONE WRONG GONE SEXUAL)",
"realizes maverick isn't all yellow",
"loses the game",
"cries",
"has nightmares",
"stabs asparagus",
"runs out of ammunition",
"is accused of mansplaining",
"gets doxxed by sssniperwolf",
"gets doxxed by keemstar",
"hides in a river",
"hides from",
"eats",
"attaches a measuring tape to a toaster",
"gains Disney Channel flo",
"sings opera",
"blames global warming",
"becomes a literary artist",
"complains about a test grade",
"catches a flying baseball",
"catches in the rye",
"raises the mission requirement to 65",
"tries to post a Vine",
"logs",
"changes genders",
"email",
"yells \"HAAAAAA!\"",
"finds Pepe",
"finds Chuck Norris",
"puts chemicals in the water to turn the frogs gay",
"fights the Ender dragon",
"watches WatchMojo for 3 hours",
"joins the Society of Teen Suicide Prevention",
"finds Elon Musk",
"barrel rolls",
"finds Dory",
"finds Nemo",
"screams at max volume",
"remembers nine eleven",
"drops a diss track against",
"figures out the answer to 9 + 10",
"hides behind a tree"];

var injury =
["gets a cold",
"gets the flu",
"gets mono",
"gets strep throat",
"loses 0.13 GPA points, and is severely injured",
"is stung by BEES",
"battles and wounds",
"sends a mass mail",
"goes deaf due to Jake Paul",
"triggered",
"gets carpal tunnel syndrome from playing osu",
"gets osteoporosis",
"gets crippling depression",
"tries to break the fourth wall",
"prank calls",
"sees things twice",
"sees things once",
"reads a disheartening message in Comic Sans",
"slips and slides on a banana peel",
"gets Hodgkin\'s Lymphoma",
"gets a bladder infection",
"gets their fingernails removed by a native tribe",
"gets devastating hiccups",
"gets yellow fever",
"gets forced into BEES",
"gets roasted by Pannapara. Slam!",
"unluckily trips despite the 1/100 chance",
"gets an ulcer",
"develops stage 4 brain cancer",
"gets necrosis",
"gets forced into fall mentorship",
"starts to hallucinate",
"gets a concussion",
"is attacked by a horde of bullet ants",
"slips on a pile of vomit",
"gets dementia"];

var injEffect =
["bow",
"injures",
"melee",
"injures",
"paintball",
"gets hit by a paintball shot by",
"basketball",
"gets juked by",
"octobrush",
"wounds",
"fidget spinner",
"spins fidget spinner nonfatally at",
"assault rifle",
"shoots and grazes"];

var variousDeaths =
["strangles",
"breaks",
"dies of Ebola",
"gets crushed by an unstable truss",
"forgets to get the AED for",
"gets burned to death from",
"hangs",
"decides to take a permanent nap",
"falls off a cliff while playing Pokemon Go",
"yells \"woag wiag wiag\" at",
"gets nuked from orbit by",
"chokes on crabapples in cheeks",
"forgets how to breathe",
"uses dank memes to kill",
"navy seals",
"unsafe dating",
"gets hit by a hurricane",
"falls through a portal into the blender dimension",
"loses circulation looking too good in those tight shorts",
"loses circulation looking too tight in those good shorts",
"fell into the void",
"was slain by a zombie pigman",
"withered away",
"stream",
"fatally roundhouse kicks",
"receives a bad Bishan test and dies",
"dies after a botched surgery",
"curses on a Christian server and gets smote",
"spontaneously combusts",
"lost connection to the server",
"coat hanger",
"falls in a well",
"dies in the Matrix",
"succumbs to lethal peer pressure from",
"accepts the Blue Whale challenge",
"breaks the laws of physics",
"is decapitated by a rogue frisbee",
"is crushed by a crashing plane",
"is killed by a rhino",
"is struck by lightning",
"is so constipated that they explode and die",
"\'s skull is crushed by the thighs of"];

var doubleDeath =
["strangles",
"forgets to get the AED for",
"gets nuked from orbit by",
"gets memed to death by",
"uses dank memes to kill",
"fatally roundhouse kicks",
"succumbs to lethal peer pressure from",
"drops a boulder on",
"is annoyed to death by"];

var options =
["weapons",
"items",
"use",
"shelter",
"use",
"misc",
"injury",
"use",
"death",
"heal",
"items",
"use",
"injury",
"use"];

var vowels = ["a","e","i","o","u"];
