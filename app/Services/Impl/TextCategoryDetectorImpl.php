<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\TextCategoryDetector;

final class TextCategoryDetectorImpl implements TextCategoryDetector
{
    private $categories = [
        'animals' => [
            'Canidae',
            'Felidae',
            'Cat',
            'Cattle',
            'Dog',
            'Donkey',
            'Goat',
            'Guinea pig',
            'Horse',
            'Pig',
            'Rabbit',
            'Fancy rat varieties',
            'laboratory rat strains',
            'Sheep breeds',
            'Water buffalo breeds',
            'Chicken breeds',
            'Duck breeds',
            'Goose breeds',
            'Pigeon breeds',
            'Turkey breeds',
            'Aardvark',
            'Aardwolf',
            'African buffalo',
            'African elephant',
            'African leopard',
            'Albatross',
            'Alligator',
            'Alpaca',
            'American buffalo (bison)',
            'American robin',
            'Amphibian',
            'list',
            'Anaconda',
            'Angelfish',
            'Anglerfish',
            'Ant',
            'Anteater',
            'Antelope',
            'Antlion',
            'Ape',
            'Aphid',
            'Arabian leopard',
            'Arctic Fox',
            'Arctic Wolf',
            'Armadillo',
            'Arrow crab',
            'Asp',
            'Ass (donkey)',
            'Baboon',
            'Badger',
            'Bald eagle',
            'Bandicoot',
            'Barnacle',
            'Barracuda',
            'Basilisk',
            'Bass',
            'Bat',
            'Beaked whale',
            'Bear',
            'list',
            'Beaver',
            'Bedbug',
            'Bee',
            'Beetle',
            'Bird',
            'list',
            'Bison',
            'Blackbird',
            'Black panther',
            'Black widow spider',
            'Blue bird',
            'Blue jay',
            'Blue whale',
            'Boa',
            'Boar',
            'Bobcat',
            'Bobolink',
            'Bonobo',
            'Booby',
            'Box jellyfish',
            'Bovid',
            'Buffalo, African',
            'Buffalo, American (bison)',
            'Bug',
            'Butterfly',
            'Buzzard',
            'Camel',
            'Canid',
            'Cape buffalo',
            'Capybara',
            'Cardinal',
            'Caribou',
            'Carp',
            'Cat',
            'list',
            'Catshark',
            'Caterpillar',
            'Catfish',
            'Cattle',
            'list',
            'Centipede',
            'Cephalopod',
            'Chameleon',
            'Cheetah',
            'Chickadee',
            'Chicken',
            'list',
            'Chimpanzee',
            'Chinchilla',
            'Chipmunk',
            'Clam',
            'Clownfish',
            'Cobra',
            'Cockroach',
            'Cod',
            'Condor',
            'Constrictor',
            'Coral',
            'Cougar',
            'Cow',
            'Coyote',
            'Crab',
            'Crane',
            'Crane fly',
            'Crawdad',
            'Crayfish',
            'Cricket',
            'Crocodile',
            'Crow',
            'Cuckoo',
            'Cicada',
            'Damselfly',
            'Deer',
            'Dingo',
            'Dinosaur',
            'list',
            'Dog',
            'list',
            'Dolphin',
            'Donkey',
            'list',
            'Dormouse',
            'Dove',
            'Dragonfly',
            'Dragon',
            'Duck',
            'list',
            'Dung beetle',
            'Eagle',
            'Earthworm',
            'Earwig',
            'Echidna',
            'Eel',
            'Egret',
            'Elephant',
            'Elephant seal',
            'Elk',
            'Emu',
            'English pointer',
            'Ermine',
            'Falcon',
            'Ferret',
            'Finch',
            'Firefly',
            'Fish',
            'Flamingo',
            'Flea',
            'Fly',
            'Flyingfish',
            'Fowl',
            'Fox',
            'Frog',
            'Fruit bat',
            'Gamefowl',
            'list',
            'Galliform',
            'list',
            'Gazelle',
            'Gecko',
            'Gerbil',
            'Giant panda',
            'Giant squid',
            'Gibbon',
            'Gila monster',
            'Giraffe',
            'Goat',
            'list',
            'Goldfish',
            'Goose',
            'list',
            'Gopher',
            'Gorilla',
            'Grasshopper',
            'Great blue heron',
            'Great white shark',
            'Grizzly bear',
            'Ground shark',
            'Ground sloth',
            'Grouse',
            'Guan',
            'list',
            'Guanaco',
            'Guineafowl',
            'list',
            'Guinea pig',
            'list',
            'Gull',
            'Guppy',
            'Haddock',
            'Halibut',
            'Hammerhead shark',
            'Hamster',
            'Hare',
            'Harrier',
            'Hawk',
            'Hedgehog',
            'Hermit crab',
            'Heron',
            'Herring',
            'Hippopotamus',
            'Hookworm',
            'Hornet',
            'Horse',
            'list',
            'Hoverfly',
            'Hummingbird',
            'Humpback whale',
            'Hyena',
            'Iguana',
            'Impala',
            'Irukandji jellyfish',
            'Jackal',
            'Jaguar',
            'Jay',
            'Jellyfish',
            'Junglefowl',
            'Kangaroo',
            'Kangaroo mouse',
            'Kangaroo rat',
            'Kingfisher',
            'Kite',
            'Kiwi',
            'Koala',
            'Koi',
            'Komodo dragon',
            'Krill',
            'Ladybug',
            'Lamprey',
            'Landfowl',
            'Land snail',
            'Lark',
            'Leech',
            'Lemming',
            'Lemur',
            'Leopard',
            'Leopon',
            'Limpet',
            'Lion',
            'Lizard',
            'Llama',
            'Lobster',
            'Locust',
            'Loon',
            'Louse',
            'Lungfish',
            'Lynx',
            'Macaw',
            'Mackerel',
            'Magpie',
            'Mammal',
            'Manatee',
            'Mandrill',
            'Manta ray',
            'Marlin',
            'Marmoset',
            'Marmot',
            'Marsupial',
            'Marten',
            'Mastodon',
            'Meadowlark',
            'Meerkat',
            'Mink',
            'Minnow',
            'Mite',
            'Mockingbird',
            'Mole',
            'Mollusk',
            'Mongoose',
            'Monitor lizard',
            'Monkey',
            'Moose',
            'Mosquito',
            'Moth',
            'Mountain goat',
            'Mouse',
            'Mule',
            'Muskox',
            'Narwhal',
            'Newt',
            'New World quail',
            'Nightingale',
            'Ocelot',
            'Octopus',
            'Old World quail',
            'Opossum',
            'Orangutan',
            'Orca',
            'Ostrich',
            'Otter',
            'Owl',
            'Ox',
            'Panda',
            'Panther',
            'Panthera hybrid',
            'Parakeet',
            'Parrot',
            'Parrotfish',
            'Partridge',
            'Peacock',
            'Peafowl',
            'Pelican',
            'Penguin',
            'Perch',
            'Peregrine falcon',
            'Pheasant',
            'Pig',
            'Pigeon',
            'list',
            'Pike',
            'Pilot whale',
            'Pinniped',
            'Piranha',
            'Planarian',
            'Platypus',
            'Polar bear',
            'Pony',
            'Porcupine',
            'Porpoise',
            'Portuguese man owar',
            'Possum',
            'Prairie dog',
            'Prawn',
            'Praying mantis',
            'Primate',
            'Ptarmigan',
            'Puffin',
            'Puma',
            'Python',
            'Quail',
            'Quelea',
            'Quokka',
            'Rabbit',
            'list',
            'Raccoon',
            'Rainbow trout',
            'Rat',
            'Rattlesnake',
            'Raven',
            'Ray (Batoidea)',
            'Ray (Rajiformes)',
            'Red panda',
            'Reindeer',
            'Reptile',
            'Rhinoceros',
            'Right whale',
            'Roadrunner',
            'Rodent',
            'Rook',
            'Rooster',
            'Roundworm',
            'Saber-toothed cat',
            'Sailfish',
            'Salamander',
            'Salmon',
            'Sawfish',
            'Scale insect',
            'Scallop',
            'Scorpion',
            'Seahorse',
            'Sea lion',
            'Sea slug',
            'Sea snail',
            'Shark',
            'list',
            'Sheep',
            'list',
            'Shrew',
            'Shrimp',
            'Silkworm',
            'Silverfish',
            'Skink',
            'Skunk',
            'Sloth',
            'Slug',
            'Smelt',
            'Snail',
            'Snake',
            'list',
            'Snipe',
            'Snow leopard',
            'Sockeye salmon',
            'Sole',
            'Sparrow',
            'Sperm whale',
            'Spider',
            'Spider monkey',
            'Spoonbill',
            'Squid',
            'Squirrel',
            'Starfish',
            'Star-nosed mole',
            'Steelhead trout',
            'Stingray',
            'Stoat',
            'Stork',
            'Sturgeon',
            'Sugar glider',
            'Swallow',
            'Swan',
            'Swift',
            'Swordfish',
            'Swordtail',
            'Tahr',
            'Takin',
            'Tapir',
            'Tarantula',
            'Tarsier',
            'Tasmanian devil',
            'Termite',
            'Tern',
            'Thrush',
            'Tick',
            'Tiger',
            'Tiger shark',
            'Tiglon',
            'Toad',
            'Tortoise',
            'Toucan',
            'Trapdoor spider',
            'Tree frog',
            'Trout',
            'Tuna',
            'Turkey',
            'list',
            'Turtle',
            'Tyrannosaurus',
            'Urial',
            'Vampire bat',
            'Vampire squid',
            'Vicuna',
            'Viper',
            'Vole',
            'Vulture',
            'Wallaby',
            'Walrus',
            'Wasp',
            'Warbler',
            'Water Boa',
            'Water buffalo',
            'Weasel',
            'Whale',
            'Whippet',
            'Whitefish',
            'Whooping crane',
            'Wildcat',
            'Wildebeest',
            'Wildfowl',
            'Wolf',
            'Wolverine',
            'Wombat',
            'Woodpecker',
            'Worm',
            'Wren',
            'Xerinae',
            'X-ray fish',
            'Yak',
            'Yellow perch',
            'Zebra',
            'Zebra finch',
            'Animals by number of neurons',
            'Animals by size',
            'Common household pests',
            'Common names of poisonous animals',
            'Alpaca',
            'Bali cattle',
            'Cat',
            'Cattle',
            'Chicken',
            'Dog',
            'Domestic Bactrian camel',
            'Domestic canary',
            'Domestic dromedary camel',
            'Domestic duck',
            'Domestic goat',
            'Domestic goose',
            'Domestic guineafowl',
            'Domestic hedgehog',
            'Domestic pig',
            'Domestic pigeon',
            'Domestic rabbit',
            'Domestic silkmoth',
            'Domestic silver fox',
            'Domestic turkey',
            'Donkey',
            'Fancy mouse',
            'Fancy rat',
            'Lab rat',
            'Ferret',
            'Gayal',
            'Goldfish',
            'Guinea pig',
            'Guppy',
            'Horse',
            'Koi',
            'Llama',
            'Ringneck dove',
            'Sheep',
            'Siamese fighting fish',
            'Society finch',
            'Yak',
            'Water buffalo',
        ],
        'forest'  => [
            'forest',
            'wood',
            'deforestation',
            'tree',
            'woodland',
            'rainforest',
            'taiga',
            'grove',
            'ecosystem',
            'coniferous',
            'evergreen',
            'jungle',
            'savanna',
            'wood',
            'afforest',
            'land',
            'undergrowth',
            'rain forest',
            'wilderness',
            'vegetation',
            'forestry',
            'equator',
            'conifer',
            'timber',
            'timberland',
            'woods',
            'silva',
            'deforestation',
            'tropical rainforest',
            'bosk',
            'tree farm',
            'greenwood',
            'ground',
            'oak',
            'fir',
            'forrest',
            'woodlands',
            'wooded',
            'cedar',
            'biome',
            'swamp',
            'aspen',
            'deciduous',
            'habitat',
            'montane',
            'wildlife',
            'virgin forest',
        ],
        'poacher' => [
            'poacher',
            'hunting',
            'wildlife',
            'sea poacher',
            'sea poker',
            'cookware',
            'law',
            'africa',
            'natural resource',
            'bushmeat',
            'salmon',
            'trophy hunting',
            'gamekeeper',
            'opportunist',
            'marksman',
            'game warden',
            'survival international',
            'indigenous peoples',
            'ivory',
            'bighorn sheep',
            'impala',
            'duiker',
            'illegal',
            'animal',
            'peasant',
            'bushbuck',
            'theft',
            'plant',
            'possession',
            'transport',
            'sales',
            'threat',
            'population',
            'biodiversity',
            'species',
            'ecosystem',
            'vessel',
            'crime',
            'sociology',
            'criminology',
            'louisiana',
            'tiger',
            'agriculture',
            'hide',
            'gang',
            'tribe',
            'black market',
            'alligatorfish',
            'agonidae',
            'appropriator',
            'pogge',
            'scorpaenoid',
            'egg',
            'malaysia',
            'terengganu',
            'moose',
            'eagle',
            'snake',
            'bear',
            'aphrodisiac',
            'walrus',
            'tusk',
            'antler',
            'bobcat',
            'land use rights',
            'domestic animal',
            'sturgeon',
            'cattle raiding',
            'caviar',
            'plant poaching',
            'shellfish',
            'bone',
            'trout',
            'environmental science',
            'university of massachusetts amherst',
            'shipmaster',
            'environmental crime',
            'procurer',
            'mutineer',
            'boar',
            'sensualist',
            'arizona',
            'tailend',
            'ginseng',
            'wildlife biologist',
            'lugger',
            'mahout',
            'orchid',
            'conservation biology',
            'cultivator',
            'scavenger',
            'cactus',
            'purebred',
            'protected area',
            'basketful',
            'shipload',
            'lunge',
            'peddler',
            'aspen',
            'trespasser',
            'impaling',
            'cooking utensil',
            'aspidophoroides monopterygius',
            'armed bullhead',
            'scorpaenoid fish',
            'agonus cataphractus',
            'family agonidae',
            'luckless',
            'freebooter',
            'hunting laws',
            'snakehead',
            'wildflower',
            'untamable',
            'wildlife management',
            'pondo',
            'remorseless',
            'usurer',
            'plucky',
            'parsee',
            'wildlife conservation',
            'paddlefish',
            'roaster',
            'extinction',
            'shoplifter',
            'trillium',
            'free-kick',
            'poach',
            'wisconsin',
            'redfish',
            'north america',
            'seiner',
            'atchafalaya river',
            'trawler',
            'parrot',
            'mexico',
            'broiler',
            'nestling',
            'livestock husbandry',
            'left-footed',
            'off-spinner',
            '80-proof',
            'looter',
            'shrimper',
            'operculate',
            'fry',
            'sailfish',
            'traditional medicine',
            'boatload',
            'scherfig',
            'stew',
            'half-volley',
            'big-game',
            'handgrenade',
            'trawl',
            'crime syndicates',
            'rottweiler',
            'fricassee',
            'steamer',
            'struggler',
            'songkok',
            'escabeche',
            '1,200-pound',
            'anthill',
            'trainload',
            'kanha tiger reserve',
            'passer-by',
            'hedonist',
            'fungo',
            'arikan',
            'hatbox',
            'steamboat',
            'pot',
            'sin-offering',
            'landrace',
            'guinea-bissauan',
            'schlub',
            'attractant',
            'weimaraner',
            'slug-like',
            'belize',
            'porkpie',
            'sinkerballer',
            '22-meter',
            'virgate',
            'hatchboat',
            'hubner',
            'fryer',
            'pan',
            'panama',
            'world wide fund for nature',
            'right-footed',
            'rucking',
            'buzzer-beating',
            'fireship',
            'insect-eating',
            'shape-shifter',
            'mammal',
            'cigar-smoking',
            'kebab',
            'god-fearing',
            'clingfish',
            'demosponge',
            'red-handed',
            'cosmopolitan distribution',
            'nigerian-born',
            'wendelstedt',
            'south-african',
            'kimmorley',
            'harpalus',
            'gilled',
            'flik',
            'bagpiper',
            '80-pound',
            'good-for-nothing',
            'forkful',
            'roe',
            'leatherback sea turtle',
            'birder',
            'con-man',
            'mustached',
            'dzeko',
            'nutkin',
            'cauldron',
            'fisher',
            'watersports',
            'demi-god',
            'ewok',
            'sackful',
            'jailable',
            'counterfeiter',
            'sukur',
            'bicyclist',
            'iberico',
            'central america',
            'saute',
            'galley',
            'self-professed',
            'cooker',
            'south america',
            'caribbean sea',
            'griddle',
            'rudderfish',
            'canoe',
            'steamship',
            'chowder',
            'tode',
            'autoclave',
            'roast',
            'brochette',
            'goldenseal',
            'scallop',
            'skillet',
            'western united states',
            'cuisine',
            'coddle',
            'pottage',
            'braise',
            'wok',
            'microwave',
            'grizzly bear',
            'mackereler',
            'broil',
            'quenelle',
            'scull',
            'guatemala',
            'kitchener',
            'culinary',
            'grouper',
            'honduras',
            'cookery',
            'ballotine',
            'cook',
            'parboil',
            'kayak',
            'dredger',
            'trawlboat',
            'troller',
            'ketch',
            'saucepan',
            'nicaragua',
            'lyonnaise',
            'boat',
            'mountain lion',
            'grill',
            'paddle',
            'trireme',
            'poaching',
            'hitman',
            'striker',
            'trapper',
            'hunter',
            'plunderer',
            'forager',
            'elands',
            'antelope',
            'predator',
            'brigand',
            'woodsman',
            'napper',
            'muley',
            'rustlers',
            'winger',
            'hartebeest',
            'carnivore',
            'shrikes',
            'tusks',
            'rangers',
            'tusker',
            'rhinos',
            'pangolin',
            'mouser',
            'muntjac',
            'dogger',
            'sparrowhawk',
            'deers',
            'jackdaw',
            'leopards',
            'kudu',
            'poisoner',
            'bustard',
            'panther',
            'caracal',
            'smuggler',
            'brumby',
            'frizzle',
            'bungo',
            'barbecue',
            'chasseur',
            'fisherman',
            'cookroom',
            'concoct',
            'yacht',
            'ocelot',
            'american black bear',
            'fishling',
            'coulibiac',
            'walrus ivory',
            'steel',
            'catboat',
            'white-tailed deer',
            'papboat',
            'fishbowl',
            'frypan',
            'cookpot',
            'falconiformes',
            'seal penis',
            'brail',
            'coati',
            'broasted',
            'parfry',
            'sauceboat',
            'kamado',
            'tenderization',
            'saucepot',
            'fishcake',
            'canoeist',
            'cockleshell',
            'spatchcock',
            'rissole',
            'bald eagle',
            'cookstove',
            'trawlnet',
            'southwestern united states',
            'gamefish',
            'cacciatora',
            'gallopin',
            'hibachi',
            'recoct',
            'ridge-nosed rattlesnake',
            'precook',
            'paddleboat',
            'crotalus lepidus',
            'ribbie',
            'paprikash',
            'playboating',
            'pâté',
            'panfish',
            'overcook',
            'pilferer',
            'housebreaker',
            'gemsbok',
            'klipspringer',
            'twin-spotted rattlesnake',
            'undercook',
            'chinkara',
            'blesbok',
            'sclaffed',
            'tahr',
            'longbeard',
            'nyala',
            'javelina',
            'blacktail',
            'blackbuck',
            'rasper',
            'ringneck',
            'backheel',
            'serval',
            'arapaima',
            'pearler',
            'weka',
            'linkman',
            'loanee',
            'grafter',
            'bettong',
            'miskick',
            'waterfowler',
            'chital',
            'lechwe',
            'galoot',
            'overboil',
            'coatimundi',
            'markswoman',
            'merganser',
            'escaper',
            'nutmegged',
            'marauds',
            'bowhunter',
            'shirr',
            'rhib',
            'iceboat',
            'cookable',
            'braai',
            'supercook',
            'gillnet',
            'playboat',
            'lampropeltis pyromelana',
            'deglaze',
            'uncook',
            'boathook',
            'colombia',
            'margay',
            'sistrurus catenatus',
            'gallivat',
            'iucn red list vulnerable species',
            'brazil',
            'pitcher plant',
            'venus flytrap',
            'fish stick',
            'western red cedar',
            'great smoky mountains national park',
            'american ginseng',
            'pressure cooker',
            'cook pot',
            'fish boat',
            'dendrobates',
            'hoosier national forest',
            'colubridae',
            'fish slice',
            'pleasure craft',
            'body',
            'neotropical river otter',
            'fry pan',
            'fry food',
            'bahía magdalena',
            'poach egg',
            'hard boil',
            'anadara',
            'green sea turtle',
            'loggerhead sea turtle',
            'philippines',
            'olive ridley sea turtle',
            'mozambique',
            'hawksbill sea turtle',
            'cook utensil',
            'sea turtle',
            'boil egg',
            'bass boat',
            'zimbabwe',
            'harpyhaliaetus solitarius',
            'fauna',
            'bairds tapir',
            'rhinoceros',
            'costa rica',
            'endangered species',
            'drip pan',
            'pleasure boat',
            'cancer',
            'hot pot',
            'fish finger',
            'sunny side up',
            'keratin',
            'military',
            'texas',
            'bushmen',
            'counterculture',
            'verb',
            'jewelry',
            'vietnam',
            'china',
            'earth',
            'fur',
            'seahorse',
            'rhino',
            'etymology',
            'ballad',
            'bag',
            'dye',
            'red brocket deer',
            'fish and chip',
            'collared peccary',
            'brown bit',
            'shish kebab',
            'pudding basin',
            'common agouti',
            'on boat',
            'pan fry',
            'bone fish',
            'fish pole',
            'geoffroys tamarin',
            'alouatta palliata',
            'on sea',
            'cooker hood',
            'kitchen hood',
            'fry cook',
            'extractor hood',
            'cebus capucinus',
            'stir pot',
            'stick of butter',
            'food preparation',
            'common opossum',
            'deep fat fry',
            'cook spray',
            'multifunctional cooker',
            'in water',
            'mise en place',
            'west indian manatee',
            'range hood',
            'rice cooker',
            'small boat',
            'medium rare',
            'port honduras marine reserve',
            'stir fry',
            'reedbuck',
            'pressure cook',
            'float on water',
            'measure ingredient',
            'pot roast',
            'quarter chicken',
            'cook dish',
            'bushpig',
            'soft boil',
            'yucatán peninsula',
            'french fry',
            'brown meat',
            'pan broil',
            'raw meat',
            'travel on water',
            'black rhinoceros',
            'boil food',
            'barbecue food',
            'smoke salmon',
            'bake potato',
            'heat food',
            'dominican republic',
            'eat raw',
            'deer hunter',
            'spitting cobra',
            'striped hyena',
            'cape buffalo',
            'mountain goat',
            'puff adder',
            'komodo dragon',
            'drug peddler',
            'marsh harrier',
            'tufted puffin',
            'trumpeter swan',
            'wild boar',
            'nile crocodile',
            'green mamba',
            'whitetail deer',
            'elephant shrew',
            'bird watcher',
            'peanut oil',
            'expensive hobby',
            'clean up kitchen',
            'at sea',
            'outdoor sport',
            'geoffroys spider monkey',
            'kitchen appliance',
            'u boat',
            'sea bream',
            'deep fry',
            'sea pie',
            'recreational activity',
            'slow cooker',
            'hoisin sauce',
            'oreophasis derbianus',
            'crested guan',
            'great curassow',
            'south africa',
            'ocellated turkey',
            'ara ambiguus',
            'amazona ventralis',
            'aratinga chloroptera',
            'binturong',
            'african elephant',
            'ramphastos sulfuratus',
            'swainson’s toucan',
            'lichanura trivirgata',
            'crotalus durissus',
            'galápagos tortoise',
            'heloderma horridum charlesbogerti',
            'iguana iguana',
            'caiman crocodilus',
            'crocodylus moreletii',
            'crocodylus acutus',
            'ctenosaura similis',
            'strombus gigas',
            'pauxi pauxi',
            'near threatened',
            'aburria aburri',
            'aburria jacutinga',
            'atlantic rainforest',
            'white rhinoceros',
            'vietnamese people',
            'african lion',
            'greater kudu',
            'eland antelope',
            'common warthog',
            'chacma baboon',
            'greater cane rat',
            'hwange national park',
            'merry england',
            'robin hood',
            'guillaume budé',
            'night poaching act 1828',
            'game act 1831',
            'oyster wars',
            'chesapeake bay',
            'bering sea anti-poaching operations',
            'forest law',
            'middle english',
            'international anti-poaching foundation',
            'ivory carving',
            'damien mander',
            'unmanned aerial vehicles',
            'university of london',
            'destruction of ivory',
            'middle east',
            'central kalahari game reserve',
            'sumatran tiger',
        ],
        'illegal' => [
            'unlawful',
            'illicit',
            'illegitimate',
            'criminal',
            'contraband',
            'prohibited',
            'banned',
            'outlaw',
            'punishable',
            'penal',
            'extralegal',
            'unfair',
            'court',
            'outlawed',
            'ineligible',
            'smuggled',
            'bootleg',
            'extrajudicial',
            'illegally',
            'dirty',
            'felonious',
            'misappropriated',
            'legality',
            'punishment',
            'embezzled',
            'misbranded',
            'hot',
            'black',
            'mislabeled',
            'nonlegal',
            'prohibit',
            'unratified',
            'law enforcement',
            'ill-gotten',
            'under-the-counter',
            'black-market',
            'amerciable',
            'irregular',
            'police',
            'ban',
            'lawyer',
            'smuggling',
        ],
        'fire'    => [
            'fire',
            'burn',
            'fuel',
            'blast',
            'combustion',
            'flame',
            'light',
            'heat',
            'attack',
            'conflagration',
            'burning',
            'blaze',
            'ignite',
            'fusillade',
            'backfire',
            'firing',
            'discharge',
            'dismiss',
            'open fire',
            'go off',
            'send away',
            'chemical',
            'grassfire',
            'burn down',
            'inferno',
            'kindle',
            'flaming',
            'firefighter',
            'wildfire',
            'tinder',
            'arson',
            'myr',
            'campfire',
            'balefire',
            'oxidation',
            'hydrogen',
            'firestorm',
            'fireplace',
            'excite',
            'shoot',
            'counterfire',
            'crossfire',
            'bonfire',
            'combust',
            'incineration',
            'ignition',
            'flare',
        ],
        'urgent'  => [
            'pressing',
            'imperative',
            'urgency',
            'pressingly',
            'immediate',
            'immediately',
            'emergency',
            'insistent',
            'exigency',
            'dire',
            'exigent',
            'earnest',
            'urgently',
            'press',
            'push',
            'eds',
            'shove',
            'squeeze',
            'pressive',
            'urge',
            'pressingness',
            'jostle',
            'thrust',
            'nudge',
            'updates',
            'adds',
            'thring',
            'forthpushing',
            'urges',
            'confirms',
            'warns',
            'pressable',
            'thrutch',
            'pressure',
            'seeks',
            'insistence',
            'announces',
            'security',
            'unpushing',
            'desperate',
            'pusher',
            'need',
            'fails',
            'acute',
            'serious',
            'compress',
            'necessary',
            'priority',
            'desperately',
            'critical',
            'warning',
            'important',
        ],
    ];

    public function execute(string $text): array
    {
        $text              = strtolower($text);
        $words             = explode(' ', $text);
        $foundedCategories = [];
        foreach ($words as $word) {
            foreach ($this->categories as $k => $v) {
                foreach ($v as $item) {
                    if ($item === $word) {
                        if (!in_array($k, $foundedCategories, true)) {
                            $foundedCategories[] = $k;
                        }
                    }
                }
            }
        }
        return $foundedCategories;
    }
}