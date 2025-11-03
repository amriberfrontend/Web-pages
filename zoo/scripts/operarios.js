
const images = [
    "operario01.jpg",
    "operario02.jpg",
    "operario03.jpg",
    "operario04.jpg",
    "operario05.jpg",
    "operario06.jpg",
    "operario07.jpg",
    "operario08.jpg",
    "operario09.jpg",
    "operario10.jpg"
];

addOperarios();

async function addOperarios() {
    const gallery = document.getElementById("image-gallery");
    for (const image of images) {
        const img = document.createElement("img");
        img.setAttribute("src", "../images/operarios/" + image);
        gallery.append(img);
    }

}
