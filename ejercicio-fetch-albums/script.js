
/**
 * TODO: Fetch user based on input
 * TODO: Display user name
 * TODO: Add user posts to list
 */
const userInfo = document.getElementById("user-info");
const userId = document.getElementById("user-id");
const submitUserId = document.getElementById("submit-user-id");
const userAlbums = document.getElementById("user-albums");


function createNameAndCityField(user) {
    const field = document.createElement("h1");
    field.classList.add("content__name");
    field.textContent = `${user.name} (${user.address.city})`;
    return field;
}

async function getUserById() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`);
    return await response.json();
}

/**
 * Get the albums from the API using [userId], create a list with them and append it to [userAlbums] 
 */
async function getAndAppendAlbums() {
    const list = document.createElement("ul");

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}/albums`);
    const albums = await response.json(); // convert the response into an array

    albums.forEach(album => {
        const listItem = document.createElement("li");
        const albumTitle = document.createElement("h3");
        albumTitle.classList.add("content__album-title")

        albumTitle.textContent = album.title;

        listItem.append(albumTitle);

        list.append(listItem);
    });
    
    userAlbums.append(list);
}

submitUserId.addEventListener("click", async () => {
    const user = await getUserById();
    console.log(user);
    userInfo.innerHTML = "";
    userAlbums.innerHTML = "";
    userInfo.append(createNameAndCityField(user));
    getAndAppendAlbums();
})