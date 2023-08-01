import Egipcios from './assets/egipcios.png';
import Griegos from './assets/griegos.png';
import Romanos from './assets/romanos.png';
import Nordicos from './assets/nordicos.png';



export const imgs = [
	Egipcios,
	Griegos,
	Romanos,
	Nordicos
];

export const categories = {
	egipcios: "Egipcios",
	griegos: "Griegos",
	romanos: "Romanos",
	nordicos: "Nórdicos"
};

const {
	egipcios,
	griegos,
	romanos,
	nordicos
} = categories;

export const questions = [
	{
		id: 1,
		question: "¿Con qué animal era representado el dios egipcio Horus?",
		category: egipcios,
		correct_answer:
			"Halcón",
		incorrect_answers: [
			"Buey",
			"Águila",
			"Serpiente"
		],
	},
	{
		id: 2,
		question: "¿Quién es la madre de los dioses Osiris, Isis, Seth y Horus?",
		category: egipcios,
		correct_answer:
			"Nut, la diosa del cielo",
		incorrect_answers: [
			"Bastet, la diosa de la guerra",
			"Heket, la diosa de la fertilidad"
		],
	},
	{
		id: 3,
		question: "¿Cuál dios de la mitología egipcia es representado como un hombre con cabeza de escarabajo?",
		category: egipcios,
		correct_answer:
			"Jepri",
		incorrect_answers: [
			"Jnum",
			"Harsomtus",
			"Nefertum"
		],
	},
	{
		id: 4,
		question: "¿Quién es el dios del sol y del origen de la vida en la mitología egipcia?",
		category: egipcios,
		correct_answer:
			"Ra",
		incorrect_answers: [
			"Thot",
			"Mut",
			"Isis"
		],
	},
	{
		id: 5,
		question: "¿Quién inventó la escritura?, según los egipcios.",
		category: egipcios,
		correct_answer:
			"Thot",
		incorrect_answers: [
			"Maat",
			"Anubis",
			"Amón"
		],
	},
	{
		id: 6,
		question: "¿A partir de qué fue creado el humano?",
		category: egipcios,
		correct_answer:
			"De las lágrimas de un ojo de Ra",
		incorrect_answers: [
			"De la sangre de Ra",
			"De las estrellas",
			"Del aliento de Ra"
		],
	},
	{
		id: 7,
		question: "¿Cuál dios egipcio es representado como un hombre con cabeza de chacal?",
		category: egipcios,
		correct_answer:
			"Anubis",
		incorrect_answers: [
			"Neit",
			"Happi",
			"Anuket"
		],
	},
	{
		id: 8,
		question: "¿Sobre qué va montado el sol en su viaje diario de oriente a occidente?",
		category: egipcios,
		correct_answer:
			"Barca",
		incorrect_answers: [
			"Caballo",
			"Dromedario",
			"Elefante"
		],
	},
	{
		id: 9,
		question: "¿Quién asesinó al dios egipcio Osiris?",
		category: egipcios,
		correct_answer:
			"Seth",
		incorrect_answers: [
			"Isis",
			"Nut",
			"Hathor"
		],
	},
	{
		id: 10,
		question: "¿Con cuál objeto era contrapesado el corazón del difunto en el juicio de Osiris?",
		category: egipcios,
		correct_answer:
			"Una Pluma",
		incorrect_answers: [
			"Una piedra",
			"Una manzana",
			"Un sarcófago"
		],
	},
	{
		id: 11,
		question: "¿Quién guía al espíritu del fallecido ante el tribunal de Osiris?",
		category: egipcios,
		correct_answer:
			"Anubis",
		incorrect_answers: [
			"Ra",
			"Hathor",
			"Horus",
			"Osiris"
		],
	},
	{
		id: 12,
		question: "¿Qué animal tiene el dios egipcio Geb sobre su cabeza?",
		category: egipcios,
		correct_answer:
			"Ganso",
		incorrect_answers: [
			"Conejo",
			"Serpiente",
			"Halcón"
		],
	},
	{
		id: 13,
		question: "¿Cuál dios está asociado con la crecida del río Nilo?",
		category: egipcios,
		correct_answer:
			"Happi",
		incorrect_answers: [
			"Seth",
			"Kek",
			"Montu"
		],
	},
	{
		id: 14,
		question: "¿Que se conoce en la mitología egipcia como la “Duat” ?",
		category: egipcios,
		correct_answer:
			"Inframundo",
		incorrect_answers: [
			"Mandamientos",
			"Ave Mitológica",
			"Bastón de Osiris"
		],
	},
	{
		id: 15,
		question: "¿Cuál dios de la mitología egipcia es representado como un hombre con cabeza de cocodrilo?",
		category: egipcios,
		correct_answer:
			"Sobek",
		incorrect_answers: [
			"Atum",
			"Harsomtus",
			"Nefertum"
		],
	},
	{
		id: 16,
		question: "¿Con qué animal era representado el dios egipcio Horus?",
		category: egipcios,
		correct_answer:
			"Halcón",
		incorrect_answers: [
			"Buey",
			"Águila",
			"Serpiente"
		],
	},
	{
		id: 17,
		question: "¿Con qué animal era representado el dios egipcio Horus?",
		category: egipcios,
		correct_answer:
			"Halcón",
		incorrect_answers: [
			"Buey",
			"Águila",
			"Serpiente"
		],
	},
	{
		id: 18,
		question: "¿Quiénes eran los padres de los titanes en la mitología griega?",
		category: griegos,
		correct_answer:
			"Gea y de Urano",
		incorrect_answers: [
			"Gea y Érebo",
			"Urano y Éter",
			"Crono y Afrodita"
		],
	},
	{
		id: 19,
		question: "¿Cuántos brazos tenían los Hecatónquiros?",
		category: griegos,
		correct_answer:
			"100 brazos",
		incorrect_answers: [
			"2 brazos",
			"8 brazos",
			"200 brazos"
		],
	},
	{
		id: 20,
		question: "¿Quién se convirtió en el rey de los Dioses tras derrocar a Kronos?",
		category: griegos,
		correct_answer:
			"Zeus",
		incorrect_answers: [
			"Hades",
			"Poseidón",
			"Kratos"
		],
	},
	{
		id: 21,
		question: "¿Cuál era el nombre del perro de tres cabezas que cuidaba las puertas del inframundo?",
		category: griegos,
		correct_answer:
			"Cerbero",
		incorrect_answers: [
			"Pegaso",
			"Basilisco",
			"Caribdis"
		],
	},
	{
		id: 22,
		question: "¿En qué se convertían aquellos que miraban fijamente a los ojos de medusa?",
		category: griegos,
		correct_answer:
			"En piedra",
		incorrect_answers: [
			"En marfil",
			"En bronce",
			"En mármol"
		],
	},
	{
		id: 23,
		question: "¿Dónde encerró el titán Cronos a los cíclopes tras derrotar a Urano?",
		category: griegos,
		correct_answer:
			"Tártaro",
		incorrect_answers: [
			"Hades",
			"Olimpo",
			"Averno"
		],
	},
	{
		id: 24,
		question: "¿Cuál diosa nació a partir de la espuma del mar?",
		category: griegos,
		correct_answer:
			"Afrodita",
		incorrect_answers: [
			"Hera",
			"Atenea",
			"Artemisa"
		],
	},
	{
		id: 25,
		question: "¿Qué le obsequiaron los cíclopes a Zeus luego de que los liberará del Tártaro?",
		category: griegos,
		correct_answer:
			"Rayo",
		incorrect_answers: [
			"Cetro dorado",
			"Tridente",
			"Carruaje"
		],
	},
	{
		id: 26,
		question: "¿Quién es el dios de la guerra?",
		category: griegos,
		correct_answer:
			"Ares",
		incorrect_answers: [
			"Hefesto",
			"Febo",
			"Vulcano"
		],
	},
	{
		id: 27,
		question: "¿Quién mató a la Hidra de Lerna?",
		category: griegos,
		correct_answer:
			"Heracles",
		incorrect_answers: [
			"Dionisio",
			"Hefesto",
			"Orfeo"
		],
	},
	{
		id: 28,
		question: "¿Cuál recipiente contenía todos los males del mundo?",
		category: griegos,
		correct_answer:
			"Caja de Pandora",
		incorrect_answers: [
			"Vasija de Hefesto",
			"Copa de Higía",
			"Copa de Néstor"
		],
	},
	{
		id: 29,
		question: "¿Cuál héroe de la guerra de troya era conocido como “El de los pies ligeros”?",
		category: griegos,
		correct_answer:
			"Aquiles",
		incorrect_answers: [
			"Agamenón",
			"Patroclpo",
			"Paris"
		],
	},
	{
		id: 30,
		question: "¿Que cargaba el titán Atlas sobre sus hombros?",
		category: griegos,
		correct_answer:
			"El cielo",
		incorrect_answers: [
			"Una roca",
			"Un buey",
			"Una serpiente"
		],
	},
	{
		id: 31,
		question: "¿Qué les robó Prometeo a los dioses para dárselo a los hombres?",
		category: griegos,
		correct_answer:
			"El fuego",
		incorrect_answers: [
			"El ingenio",
			"El ingenio",
			"El amor"
		],
	},
	{
		id: 32,
		question: "¿Qué tipo de criatura es Pegaso?",
		category: griegos,
		correct_answer:
			"Caballo alado",
		incorrect_answers: [
			"Serpiente emplumada",
			"Pájaro de fuego",
			"Zorro gigante"
		],
	},
	{
		id: 33,
		question: "¿Cuál de estos dioses griegos no era hermano de Poseidón?",
		category: griegos,
		correct_answer:
			"Apolo",
		incorrect_answers: [
			"Zeus",
			"Hades",
			"Deméter"
		],
	},
	{
		id: 34,
		question: "¿Quién era el dios de la medicina en la mitología griega?",
		category: griegos,
		correct_answer:
			"Asclepio",
		incorrect_answers: [
			"Apolo",
			"Hipócrates",
			"Quirón"
		],
	},

	{
		id: 35,
		question: "¿En qué convertía el rey midas todo lo que tocaba?",
		category: griegos,
		correct_answer:
			"Oro",
		incorrect_answers: [
			"Bronce",
			"Plata",
			"Carbón"
		],
	},
	{
		id: 36,
		question: "¿Quiénes son las divinidades inspiradoras del arte?",
		category: griegos,
		correct_answer:
			"Musas",
		incorrect_answers: [
			"Ninfas",
			"Sirenas",
			"Hadas"
		],
	},
	{
		id: 37,
		question: "¿Cuántos ojos tenían los cíclopes?",
		category: griegos,
		correct_answer:
			"Uno",
		incorrect_answers: [
			"Dos",
			"Tres",
			"Cuatro"
		],
	},
	{
		id: 38,
		question: "¿Cuál criatura de la mitología griega tiene el cuerpo de un hombre y la cabeza de un toro?",
		category: griegos,
		correct_answer:
			"Minotauro",
		incorrect_answers: [
			"Sátiro",
			"Centauro",
			"Bucentauro"
		],
	},
	{
		id: 39,
		question: "¿Quién es el barquero de Hades?",
		category: griegos,
		correct_answer:
			"Caronte",
		incorrect_answers: [
			"Pausianas",
			"Dante",
			"Nicteo"
		],
	},

	{
		id: 40,
		question: "¿Cuál dios de la mitología griega debía asistir a los matrimonios para traerles buena fortuna?",
		category: griegos,
		correct_answer:
			"Himeneo",
		incorrect_answers: [
			"Morfeo",
			"Dionisio",
			"Hermes"
		],
	},
	{
		id: 41,
		question: "¿Cuál reina amazona fue asesinada por Aquiles en la guerra de Troya?",
		category: griegos,
		correct_answer:
			"Pentesilea",
		incorrect_answers: [
			"Lampedo",
			"Antianira",
			"Marpesia"
		],
	},
	{
		id: 42,
		question: "¿Cuál instrumento musical toco Orfeo para dormir al temible Cancerbero en su travesía por el inframundo?",
		category: griegos,
		correct_answer:
			"Lira",
		incorrect_answers: [
			"Flauta",
			"Bandolina",
			"Pandereta"
		],
	}, 
	{
		id: 43,
		question: "¿Quién es la diosa de la limpieza y de la sanidad?",
		category: griegos,
		correct_answer:
			"Higía",
		incorrect_answers: [
			"Lampecia",
			"Panacea",
			"Epione"
		],
	},
	{
		id: 44,
		question: "¿Quién forjó la armadura del héroe Aquiles?",
		category: griegos,
		correct_answer:
			"Hefesto",
		incorrect_answers: [
			"Zeus",
			"Tetis",
			"Hades"
		],
	}, 
	{
		id: 45,
		question: "¿Cuál dios de la mitología griega es el encargado de guiar las almas al inframundo?",
		category: griegos,
		correct_answer:
			"Hermes",
		incorrect_answers: [
			"Poseidón",
			"Dionisio",
			"Apolo"
		],
	}, 
	{
		id: 46,
		question: "¿Quién era la diosa del amor y de la belleza en la mitología romana?",
		category: romanos,
		correct_answer:
			"Venus",
		incorrect_answers: [
			"Afrodita",
			"Minerva",
			"Proserpina"
		],
	}, 
	{
		id: 47,
		question: "¿Quién es el dios de la guerra en la mitología romana?",
		category: romanos,
		correct_answer:
			"Marte",
		incorrect_answers: [
			"Júpiter",
			"Saturno",
			"Plutón"
		],
	}, 
	{
		id: 48,
		question: "¿Sobre qué animal recorre el dios Neptuno los mares?",
		category: romanos,
		correct_answer:
			"Caballo",
		incorrect_answers: [
			"Delfín",
			"Orca",
			"Tiburón"
		],
	}, 
	{
		id: 49,
		question: "¿Cuál es la función de Plutón en la mitología romana?",
		category: romanos,
		correct_answer:
			"Dios del inframundo",
		incorrect_answers: [
			"Dios del comercio",
			"Dios de la luz",
			"Dios del vino"
		],
	}, 
	{
		id: 50,
		question: "¿Quiénes son los padres de Cupido?",
		category: romanos,
		correct_answer:
			"Venus y Marte",
		incorrect_answers: [
			"Minerva y Júpiter",
			"Venus y Mercurio",
			"Juno y Plutón"
		],
	}, 
	{
		id: 51,
		question: "Según la mitología romana, ¿cuál era la entrada al inframundo?",
		category: romanos,
		correct_answer:
			"El Averno",
		incorrect_answers: [
			"La Necrópolis",
			"El Ateneo",
			"Lacus Curtius"
		],
	}, 
	{
		id: 52,
		question: "¿Cuál es el nombre del árbol de la vida en la mitología nórdica?",
		category: nordicos,
		correct_answer:
			"Yggdrasil",
		incorrect_answers: [
			"Midgard",
			"Asgard",
			"Alfheim"
		],
	}, 
	{
		id: 53,
		question: "¿Qué es el Ragnarok?",
		category: nordicos,
		correct_answer:
			"La batalla del fin del mundo",
		incorrect_answers: [
			"El Martillo de Thor",
			"El Caballo de Odín",
			"Un templo Sagrado"
		],
	}, 
	{
		id: 54,
		question: "¿Cuál sustancia líquida es el origen de todas las cosas vivas?",
		category: nordicos,
		correct_answer:
			"Eitr",
		incorrect_answers: [
			"Maná",
			"Ambrosía",
			"Reite"
		],
	}, 
	{
		id: 55,
		question: "¿Cuál reina amazona fue asesinada por Aquiles en la guerra de Troya?",
		category: nordicos,
		correct_answer:
			"Pentesilea",
		incorrect_answers: [
			"Lampedo",
			"Antianira",
			"Marpesia"
		],
	}, 
	{
		id: 56,
		question: "¿Cuál es el nombre del reino de la oscuridad y de las tinieblas?",
		category: nordicos,
		correct_answer:
			"Niflheim",
		incorrect_answers: [
			"Jotunheim",
			"Alfheim",
			"Muspellheim"
		],
	}, 
	{
		id: 57,
		question: "¿Cuál es el nombre del puente de arco iris que une al mundo de los hombres con el mundo de los dioses",
		category: nordicos,
		correct_answer:
			"Bifrost",
		incorrect_answers: [
			"Andvarinaut",
			"Gjallarhorn",
			"Gungnir"
		],
	}, 
	{
		id: 58,
		question: "¿Qué nombre tiene el mundo de los hombres?",
		category: nordicos,
		correct_answer:
			"Midgard",
		incorrect_answers: [
			"Asgard",
			"Jotunheim",
			"Muspelheim"
		],
	}, 
	{
		id: 59,
		question: "¿Qué tipo de criaturas eran los Jotun?",
		category: nordicos,
		correct_answer:
			"Gigantes",
		incorrect_answers: [
			"Elfos",
			"Orcos",
			"Enanos"
		],
	}, 
	{
		id: 60,
		question: "¿Quién fue el fundador de la raza de los gigantes?",
		category: nordicos,
		correct_answer:
			"Ymir",
		incorrect_answers: [
			"Skaoi",
			"Mímir",
			"Hraesvelgr"
		],
	}, 
	{
		id: 61,
		question: "¿Cuántas patas tiene Sleipnir, el caballo de Odín?",
		category: nordicos,
		correct_answer:
			"Ocho patas",
		incorrect_answers: [
			"Dos patas",
			"Cuatro patas",
			"Doce patas"
		],
	}, 
	{
		id: 62,
		question: "¿Quién está considerado como el dios guardián en la mitología nórdica?",
		category: nordicos,
		correct_answer:
			"Heimdall",
		incorrect_answers: [
			"Sjofn",
			"Loki",
			"Bragi"
		],
	}, 
	{
		id: 63,
		question: "¿Quién es la diosa de la fertilidad el amor el matrimonio la maternidad y la sabiduría?",
		category: nordicos,
		correct_answer:
			"Frigg",
		incorrect_answers: [
			"Lofn",
			"Syn",
			"Gefjun"
		],
	}, 
	{
		id: 64,
		question: "¿Quién es el padre de la gigantesca serpiente Jormundgander?",
		category: nordicos,
		correct_answer:
			"Loki",
		incorrect_answers: [
			"Thor",
			"Odín",
			"Tyr"
		],
	}, 
	{
		id: 65,
		question: "¿De qué material están hechos los guantes de Thor?",
		category: nordicos,
		correct_answer:
			"Hierro",
		incorrect_answers: [
			"Acero",
			"Titanio",
			"Cobre"
		],
	}, 
	{
		id: 66,
		question: "¿Cómo se llama el mundo de los elfos?",
		category: nordicos,
		correct_answer:
			"Alfheim",
		incorrect_answers: [
			"Vanaheim",
			"Muspellheim",
			"Nilfheim"
		],
	}, 
	{
		id: 67,
		question: "¿Cuál era el arma utilizada por Odín?",
		category: nordicos,
		correct_answer:
			"Lanza",
		incorrect_answers: [
			"Martillo",
			"Arco y flecha",
			"Honda"
		],
	}, 
	{
		id: 68,
		question: "¿Quiénes se encargaban en la mitología nórdica de llevar a los más heroicos de los caídos en batalla hasta el Valhalla?",
		category: nordicos,
		correct_answer:
			"Las Valkirias",
		incorrect_answers: [
			"Las Nornas",
			"Las Ninfas",
			"Las Sirenas"
		],
	}

];
