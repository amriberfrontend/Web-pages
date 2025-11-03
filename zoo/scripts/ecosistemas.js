const ecosystemList = document.getElementById("ecosystem-list");

const ecosystems = [
    {
        image: 'Desierto.jpg', 
        name: "Desierto",
        description: `<p>Un desierto es un bioma de clima árido, en donde las precipitaciones son escasas. Los desiertos forman la zona más extensa de la superficie terrestre: con más de <em>50 millones</em> de kilómetros cuadrados, ocupan casi un tercio de esta. De este total, 53 % corresponden a desiertos cálidos y 47 % a desiertos fríos.</p>
        
        <p>Los procesos de erosión son factores de suma importancia en la formación del paisaje desértico. Según el tipo y grado de erosión que los vientos eólicos y la radiación solar han causado, los desiertos presentan diferentes tipos de suelos: desierto arenoso es aquel que está compuesto principalmente por arena, que por acción de los vientos forman las dunas, y desierto pedregoso o rocoso es aquel cuyo terreno está constituido por rocas o guijarros.</p>`
    },
    {
        image: 'Manglar.jpg',
        name: "Manglar",
        description: `<p>El manglar es un área biótica o bioma formada por árboles muy tolerantes a las sales existentes en la zona intermareal cercana a la desembocadura de cursos de agua dulce en latitudes tropicales y subtropicales. Tienen una gran diversidad biológica con alta productividad y en ellas se encuentran muchas especies, tanto de aves como de peces, crustáceos, moluscos y otras.</p>
        
        <p>Los manglares protegen el litoral del golfo contra la erosión costera que deriva del oleaje y las mareas. También son un paliativo contra posibles cambios climáticos no solo por ser fijadores de CO<sub>2</sub>, sino además porque el manglar inmoviliza grandes cantidades de sedimentos ricos en materia orgánica.</p>`
    },
    {
        image: 'Paramo.jpg',
        name: "Paramo",
        description: `<p>El páramo es un ecosistema alpino intertropical con predominio de vegetación tipo matorral (arbustiva), por lo que está clasificado biogeográficamente como pradera y matorral de montaña.</p>`
    },
    {
        image: 'Pradera.jpg',
        name: "Pradera",
        description: `<p>Los pastizales y matorrales templados o dicho de otro modo, las praderas y estepas, conforman un bioma cuyos ecosistemas predominantes lo constituyen los herbazales de clima templado entre semiárido y húmedo, con una estación cálida y otra marcadamente fría en invierno.</p>
        
        <p>Los pastizales templados se encuentran en cinco áreas principales: las praderas (prairies) de las Grandes Llanuras de Norteamérica, la pampa de Sudamérica, los veld de Sudáfrica, las estepas de Asia y las sabanas del sur de Australia.</p>`
    },
    {
        image: 'Sabana.jpg',
        name: "Sabana",
        description: `<p>Las sabanas son zonas secas de transición entre selvas y semidesiertos. Las sabanas se encuentran ubicadas en zonas tropicales y subtropicales, sobre todo con climas tropicales secos.</p>
        
        <p>A menudo se cree que las sabanas presentan árboles muy espaciados y dispersos. Sin embargo, en muchas sabanas, las densidades de árboles son más altas y los árboles están más regularmente espaciados que en los bosques.</p>
        
        <p>Las sabanas también se caracterizan por la disponibilidad estacional de agua, con la mayoría de las precipitaciones confinadas a una estación; están asociadas a varios tipos de biomas, y con frecuencia se encuentran en una zona de transición entre bosque y desierto o pastizal, aunque mayoritariamente son una transición entre desierto y bosque.</p>`
    }
];

for (const ecosystem of ecosystems) {
    const card = document.createElement("div");
    card.classList.add("card", "ecosystem-card");
    card.setAttribute("id", ecosystem.name);
    ecosystemList.append(card);

    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", "../images/ecosistemas/" + ecosystem.image);
    image.setAttribute("alt", ecosystem.name)
    card.append(image);

    const body = document.createElement("div");
    body.classList.add("card-body");
    card.append(body);

    const title = document.createElement("h1");
    title.classList.add("card-title");
    title.textContent = ecosystem.name;
    body.append(title);

    
    const content = document.createElement("div");
    content.classList.add("card-text", "ecosystem-card__content");
    content.innerHTML = ecosystem.description;
    body.append(content);


}