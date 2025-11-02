
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
const submit = document.getElementById("submit");

const forms = document.getElementsByClassName("needs-validation");


addOperarios();

async function addOperarios() {
    const gallery = document.getElementById("image-gallery");
    for (const image of images) {
        const img = document.createElement("img");
        img.setAttribute("src", "../images/" + image);
        gallery.append(img);
    }

}

function toggleValidity(input) {

    if (input.checkValidity()) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

// Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event =>{
//         if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();

//         }

//         form.classList.add("was-validated");

//         const inputs = form.getElementsByClassName("form-control");
//         Array.from(inputs).forEach(input => {
//             /**
//              * For some reason, the fields don't change validity properly. I don't know why.
//              * I could spend hours trying to figure it out, but it's not required for the project and it works well enough.
//              */
//             input.addEventListener("change", toggleValidity(input));
//             input.addEventListener("keyup", toggleValidity(input));
//         });

//     });
// });
