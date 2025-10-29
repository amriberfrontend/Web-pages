
/**
 * TODO: Fetch user based on input
 * TODO: Display user name
 * TODO: Add user posts to list
 */
const userInfo = document.getElementById("user-info");
const userId = document.getElementById("user-id");
const submitUserId = document.getElementById("submit-user-id");
const userPosts = document.getElementById("user-posts");


function createNameField(name) {
    const userName = document.createElement("h1");
    userName.classList.add("content__name");
    userName.textContent = name;
    return userName;
}
function createAddressField(address) {
    const userAddress = document.createElement("h2");
    userAddress.classList.add("content__address");
    userAddress.textContent = `${address.street}, ${address.suite}, ${address.zipcode}, ${address.city}`;
    return userAddress;
}

async function getUserById() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`);
    return await response.json();
}

async function getAndAppendPosts() {
    const list = document.createElement("ul");
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}/posts`);
    const posts = await response.json();
    posts.forEach(post => {
        const listItem = document.createElement("li");
        const postTitle = document.createElement("h3");
        const postBody = document.createElement("p");
        postTitle.textContent = post.title;
        postBody.textContent = post.body;
        listItem.append(postTitle);
        listItem.append(postBody);
        list.append(listItem);
    });
    console.log(posts);
    userPosts.append(list);
}

submitUserId.addEventListener("click", async () => {
    const user = await getUserById();
    console.log(user);
    userInfo.innerHTML = "";
    userPosts.innerHTML = "";
    userInfo.append(createNameField(user.name));
    userInfo.append(createAddressField(user.address));
    getAndAppendPosts();
})