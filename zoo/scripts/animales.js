

// TODO: list of animals with image, name and fun facts
const animals = [
    // Spoiler alert: most of these live in open fields.
    {
        image: 'Caballo.jpg',
        name: 'Caballo',
        cientificName: "Equus ferus caballus",
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Cebra.jpg',
        name: 'Cebra',
        cientificName: "Equus quagga",
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Coyote.jpg',
        name: 'Coyote',
        cientificName: "Canis latrans",
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Dromedario.jpg',
        name: 'Dromedario',
        cientificName: "Camelus dromedarius",
        habitat: 'Desierto',
        funFacts: ""
    },
    {
        image: 'Elefante.jpg',
        name: 'Elefante',
        cientificName: "Elephas maximus",
        habitat: 'Praderas',
        funFacts: ""
    },
    {
        image: 'Gavilan.png',
        name: 'Gavilán',
        cientificName: "Accipiter nisus",
        habitat: 'Bosques',
        funFacts: ""
    },
    {
        image: 'Guepardo.jpg',
        name: 'Guepardo',
        cientificName: "Acinonyx jubatus",
        habitat: 'Sabana',
        funFacts: ""
    },
    {
        image: 'Leon.jpg',
        name: 'León',
        cientificName: "Panthera leo",
        habitat: 'Sabana',
        funFacts: ""
    },
    {
        image: 'Oso.jpg',
        name: 'Oso',
        // This is just the brown bear; I can't tell if the one in the image is a grizzly.
        cientificName: "Ursus arctos",
        // They've lost mos of their habitat, but they tend to hang out in open areas, usually with snow.
        habitat: 'Paramo',
        funFacts: ""
    },
    {
        image: 'Pato.jpg',
        name: 'Pato',
        cientificName: "Aythya fuligula",
        // What do I do with animals that just live *everywhere*?
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Pelicano.jpg',
        name: 'Pelícano',
        cientificName: "Pelecanus onocrotalus",
        // I have to pick _something_! There's too few habitats...
        // This habitat is not correct. There *are* pelicans that live here, but not the one provided.
        habitat: 'Manglar',
        funFacts: ""
    },
    {
        image: 'Rinoceronte.jpg',
        name: 'Rinoceronte',
        cientificName: "Ceratotherium simum",
        habitat: 'Pradera',
        funFacts: ""
    },
    {
        image: 'Zorro.jpg',
        name: 'Zorro',
        cientificName: "Vulpes vulpes",
        // They tend to prefer forests, but they have adapted to live in the british countryside as well.
        habitat: 'Pradera',
        funFacts: ""
    }
];

// TODO: generate carousel with animal images
const carouselContent = document.getElementById("carousel-content");


let firstAnimal = true
for (const animal of animals) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (firstAnimal == true) {
        carouselItem.classList.add("active");
        firstAnimal = false
    }
    carouselContent.append(carouselItem);

    const image = document.createElement("img");
    image.setAttribute("src", "../images/animales/" + animal.image);
    image.setAttribute("alt", animal.name);
    image.classList.add("d-block", "w-100")
    carouselItem.append(image);
}

// TODO: show carousel on end of kangaroo animation
