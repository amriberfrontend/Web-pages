

// TODO: list of animals with image, name and fun facts
const animals = [
    // Spoiler alert: most of these live in open fields.
    {
        image: 'Caballo.jpg',
        name: 'Caballo',
        scientificName: "Equus ferus caballus",
        habitat: 'Pradera',
        funFacts: `Los caballos pueden dormir tanto tumbados como de pie. La esperanza de vida de un caballo esta entre 25 - 30 años, ¡pero algunos han llegado hasta los 40! Uno, llamado Viejo Bily, llego hasta los <em>62 años.</em>`
    },
    {
        image: 'Cebra.jpg',
        name: 'Cebra de llanuras',
        scientificName: "Equus quagga",
        habitat: 'Sabana',
        funFacts: `Las cebras son animales sociales. Sus grupos suelen estar compuestos por un solo macho y varias hembras y sus crias. Se han observado 6 señas auditivas que emiten para comunicarse.`
    },
    {
        image: 'Coyote.jpg',
        name: 'Coyote',
        scientificName: "Canis latrans",
        habitat: 'Pradera',
        funFacts: `En los siglos 18 y 19 se solían confundir con lobos. De hecho, uno de sus nombres es "lobo de las praderas". El nombre viene del Nawatl "coyōtl", el cual Francisco Javier Clavijero adapto a su iteración moderna en su libro <em>Historia de méxico</em>`
    },
    {
        image: 'Dromedario.jpg',
        name: 'Dromedario',
        scientificName: "Camelus dromedarius",
        habitat: 'Desierto',
        funFacts: `El profesor de este curso lo confundió con un camello. Es la especie más alta del género camelus llegando hasta los 2,4 m a la altura del hombro.`
    },
    {
        image: 'Elefante.jpg',
        name: 'Elefante asiático',
        scientificName: "Elephas maximus",
        habitat: 'Praderas',
        funFacts: `Es la última especie existente del género elephas. Se puede diferenciar de los elefantes africanos por la forma de las orejas.`
    },
    {
        image: 'Gavilan.png',
        name: 'Gavilán',
        scientificName: "Accipiter nisus",
        habitat: 'Bosques',
        funFacts: ``
    },
    {
        image: 'Guepardo.jpg',
        name: 'Guepardo',
        scientificName: "Acinonyx jubatus",
        habitat: 'Sabana',
        funFacts: `El guepardo es el animal terrestre más rápido.`
    },
    {
        image: 'Leon.jpg',
        name: 'León',
        scientificName: "Panthera leo",
        habitat: 'Sabana',
        funFacts: ""
    },
    {
        image: 'Oso.jpg',
        name: 'Oso',
        // This is just the brown bear; I can't tell if the one in the image is a grizzly.
        scientificName: "Ursus arctos",
        // They've lost mos of their habitat, but they tend to hang out in open areas, usually with snow.
        habitat: 'Paramo',
        funFacts: ""
    },
    {
        image: 'Pato.jpg',
        name: 'Pato',
        scientificName: "Aythya fuligula",
        // What do I do with animals that just live *everywhere*?
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Pelicano.jpg',
        name: 'Pelícano',
        scientificName: "Pelecanus onocrotalus",
        // I have to pick _something_! There's too few habitats...
        // This habitat is not correct. There *are* pelicans that live here, but not the one provided.
        habitat: 'Manglar',
        funFacts: ""
    },
    {
        image: 'Rinoceronte.jpg',
        name: 'Rinoceronte',
        scientificName: "Ceratotherium simum",
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Zorro.jpg',
        name: 'Zorro',
        scientificName: "Vulpes vulpes",
        // They tend to prefer forests, but they have adapted to live in the british countryside as well.
        habitat: 'Pradera',
        funFacts: ""
    }
];

// TODO: generate carousel with animal images
const carouselContent = document.getElementById("carousel-content");
const carousel = document.getElementById("animals-carousel");


let firstAnimal = true;
for (const animal of animals) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (firstAnimal == true) {
        carouselItem.classList.add("active");
        firstAnimal = false;
    }
    carouselContent.append(carouselItem);

    const image = document.createElement("img");
    image.setAttribute("src", "../images/animales/" + animal.image);
    image.setAttribute("alt", animal.name);
    image.classList.add("d-block", "w-100");
    carouselItem.append(image);

    const caption = document.createElement("div");
    caption.classList.add("carousel-caption", "d-none", "d-md-block");
    carouselItem.append(caption);

    const name = document.createElement("h5");
    name.textContent = animal.name;
    caption.append(name);

    const scientificName = document.createElement("h6");
    scientificName.textContent = animal.scientificName;
    caption.append(scientificName);

    const facts = document.createElement("div");
    facts.innerHTML = animal.funFacts;
    caption.append(facts);

    const learnMore = document.createElement("a");
    learnMore.setAttribute("href", "../paginas/ecosistemas.html#" + animal.habitat);
    caption.append(learnMore);

    const learnMoreButton = document.createElement("button");
    learnMoreButton.classList.add("btn", "btn-primary");
    learnMoreButton.textContent = "¡Aprende más sobre su habitat!";
    learnMore.append(learnMoreButton);


}


const bouncer = document.getElementById("bouncer");
bouncer.addEventListener("animationend", function() {
    bouncer.classList.add("invisible");
    carousel.classList.remove("invisible");
});
// TODO: show carousel on end of kangaroo animation
