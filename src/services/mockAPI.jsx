const data = [
    {
        id: 1,
        title: "Nitro Natural Arveja 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/nitropeanatural1kg02.png',
        detail:
            "La versión sin sabor añadido de una de nuestras proteínas más aclamadas NitroPea. Esta versión natural contiene aún más proteína por porción y no contiene cacao, solo el sabor puro de la proteína de arveja ",
    },
    {
        id: 2,
        title: "Proteina de Arveja, limón 1Kg",
        price: 21990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/proteinaarbejalimon1kg02.png',
        detail:
            "Pea Limón es un aislado de proteínas, un extracto proteico directo del alimento natural mezclada con saborizante Limón, el mismo que por años ha sido el refrescante sabor de productos nuestros cómo BCAA, Arginina, Plant Energy, entre otros, aunque no había sido usado con las proteínas y ahora puedes ver y sentir su resultado! Tiene un toque ácido obviamente pero algo de dulce también, un equilibrio muy agradable para consumir una proteína vegetal solo con agua o mezclado con otros ingredientes. ",
    },
    {
        id: 3,
        title: "Proteina de Arveja, cacao 1Kg",
        price: 21990,
        stock: 16,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/proteinaarvejacacao1kg01.png',
        detail:
            "Una muy buena combinación de proteína orgánica de arvejas amarillas con cacao orgánico, hacen de esta proteína una gran alternativa para quienes buscan un batido protéico sin grasa, azúcares, colorantes, de suave digestión,  buen sabor, y sin los alérgenos más conocidos. Ideal para fines deportivos o sólo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calorías pero denso en nutrientes, sobre todo proteína y hierro. ",
    },
    {
        id: 4,
        title: "Proteina Arbeja banana 1Kg",
        price: 21990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/proteinaarvejabanana1kg01.png',
        detail:
            "Luna muy buena combinación de proteína orgánica de arvejas amarillas con plátano liofilizado y stevia, hacen de esta proteína una gran alternativa para quienes buscan un batido protéico sin grasa, azúcares, colorantes, de suave digestión,  buen sabor, y sin los alérgenos más conocidos. Ideal para fines deportivos o sólo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calorías pero denso en nutrientes, sobre todo proteína y hierro. 1 kg, 33 porciones. Ingredientes: Proteína aislada de arveja, banana liofilizada, stevia, goma guar.",
    },
    {
        id: 5,
        title: "Proteina Natural Arbeja 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/proteinaarvejanatural1kg01.png',
        detail:
            "Proteína aislada de arvejas amarillas, es una fuente de proteínas distinta a las más conocidas, y 100% vegetal.No tiene carbohidratos, grasas, ni azúcares. Tampoco saborizantes, colorantes, o edulcorante alguno. Se debe mezclar con jugos, frutas o simplemente agua y consumir. También puede ser usada para cocinar al tener un sabor neutral.Las proteínas en estado puro son recomendadas para quienes buscan concentración máxima de proteína, sin importarles el sabor. Si bien tiene un sabor neutral, no es recomendado para quienes buscan una proteína que quede rica sólo con agua, ya que se obtiene su mejor sabor al mezclar con frutas o leches vegetales. Ingredientes: proteína aislada de arvejas amarillas Formato de 1 kg, 33 porciones de 26 grs de proteína.",
    }, 
    {
        id: 6,
        title: "Nitro Cacao Arbeja 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/nitropeacacao1kg01.png',
        detail:
            "La versión sin sabor añadido de una de nuestras proteínas más aclamadas NitroPea. Esta versión natural contiene aún más proteína por porción y no contiene cacao, solo el sabor puro de la proteína de arveja ",
    },
    {
        id: 7,
        title: "Nitro Natural Rice 1Kg",
        price: 23990,
        stock: 50,
        category: "proteinas vegetales",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/nitrorice1kg01.png',
        detail:
            "La clasica NitroRice ahora sin sabor añadido y con más proteína por porción ¡25 grs! Más los 1000 mg de creatina y 300 mg de taurina en cada porción, con el sabor 100% natural del arroz",
    },
    {
        id: 8,
        title: "Nitro Cacao Rice 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/nitroricecacao1kg01.png',
        detail:
            "",
    },
    {
        id: 9,
        title: "Proteina arroz limon 1Kg",
        price: 24990,
        stock: 26,
        category: "proteinas vegetales",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/proteinaarrozlimon1kg01.png',
        detail:
            "",
    },
    {
        id: 10,
        title: "Proteina arroz banana 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/proteinaarrozbanana1kg01.png',
        detail:
            "",
    },
    {
        id: 11,
        title: "Proteína arroz cacao 1Kg",
        price: 24990,
        stock: 6,
        category: "proteinas vegetales",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/proteinaarrozcacao1kg01.png',
        detail:
            "",
    },
    {
        id: 12,
        title: "Proteina arroz natural 1Kg",
        price: 24990,
        stock: 8,
        category: "proteinas vegetales",
        subcategory: "arveja",
        tipo: "masa muscular",
        img: './productos/proteinaarroznatural1kg01.png',
        detail:
            "",
    },
    {
        id: 13,
        title: "Nitro Natural Mung 1Kg",
        price: 24990,
        stock: 8,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/nitromung1kg01.png',
        detail:
            "",
    },
    {
        id: 14,
        title: "Proteina Mung limón 1Kg",
        price: 23990,
        stock: 8,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/proteinamunglimon1kg01.png',
        detail:
            "",
    },
    {
        id: 15,
        title: "Nitro Mung cacao 1Kg",
        price: 24990,
        stock: 28,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/nitromungcacao1kg01.png',
        detail:
            "La proteína aislada de poroto mung se obtiene del poroto mung, sienda esta versión una mezcla del aislado proteíco del poroto con cacao natural, creatina y taurina Todos los productos Iron Plant son elaborados con las mejores materias primas sin ingredientes de origen animal. Formato: 1 Kilo / 33 porciones 20 gr de proteína por porció Ingredientes: Proteína aislada de poroto mung, cacao natural, sucralosa. Alérgenos: Elaborado en líneas que procesan soya. trigo, y cacao. Cantidad de sucralosa por porción 0.3 mg IDA 15 mg p/cada kg de peso ",
    },
    {
        id: 16,
        title: "Proteina Mung cacao 1Kg",
        price: 24990,
        stock: 21,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/proteinacacaomung1kg01.png',
        detail:
            "La proteína aislada de poroto mung se obtiene del poroto mung, sienda esta versión una mezcla del aislado proteíco del poroto con cacao natural. ",
    },
    {
        id: 17,
        title: "Proteina Mung Natural 1Kg",
        price: 24990,
        stock: 35,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/proteinamungnatural1kg01.png',
        detail:
            "",
    },
    {
        id: 18,
        title: "Proteina Mung Banana 1Kg",
        price: 24990,
        stock: 35,
        category: "proteinas vegetales",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/proteinamungbanana1kg01.png',
        detail:
            "",
    },







    {
        id: 101,
        title: "Monster Fava Plant Banana 4 Kg",
        price: 39990,
        stock: 35,
        category: "ganadores de peso",
        subcategory: "fava",
        tipo: "masa muscular",
        img: './productos/monsterfavabanana4kg01.png',
        detail:
            "Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porción de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer más, o no quieren saltarse comidas, así como también aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.",
    },
    {
        id: 102,
        title: "Monster Fava Plant Cacao 4 Kg",
        price: 39990,
        stock: 35,
        category: "ganadores de peso",
        subcategory: "fava",
        tipo: "masa muscular",
        img: './productos/monsterfavacacao4kg01.png',
        detail:
            "Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porción de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer más, o no quieren saltarse comidas, así como también aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.",
    },
    {
        id: 103,
        title: "Monster Mung Plant Banana 4 Kg",
        price: 39990,
        stock: 35,
        category: "ganadores de peso",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/monstermungbanana4kg01.png',
        detail:
            "",
    },
    {
        id: 104,
        title: "Monster Mung Plant Cacao 4 Kg",
        price: 39990,
        stock: 35,
        category: "ganadores de peso",
        subcategory: "mung",
        tipo: "masa muscular",
        img: './productos/monstermungcacao4kg01.png',
        detail:
            "",
    },
    {
        id: 105,
        title: "Monster Rice Plant Cacao 4 Kg",
        price: 39990,
        stock: 35,
        category: "ganadores de peso",
        subcategory: "arroz",
        tipo: "masa muscular",
        img: './productos/monsterricecacao4kg01.png',
        detail:
            "",
    }
];

export default function getItems() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
    });
}