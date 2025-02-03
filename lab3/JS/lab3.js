//Ex1
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const statsContainer = document.getElementById("stats");

async function fetchAndAnalyzePosts() {
    try {
        const response = await fetch(apiUrl);
        const posts = await response.json();

        const totalPosts = posts.length;
        const averageTitleLength = posts.reduce((acc, post) => acc + post.title.length, 0) / totalPosts;
        const user1Posts = posts.filter(post => post.userId === 1).length;

        statsContainer.innerHTML = `
                <p><strong>Total Posts:</strong> ${totalPosts}</p>
                <p><strong>Average Title Length:</strong> ${averageTitleLength.toFixed(2)} characters</p>
                <p><strong>Posts by User ID 1:</strong> ${user1Posts}</p>
            `;
    } catch (error) {
        statsContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
        console.error("Error fetching posts:", error);
    }
}

fetchAndAnalyzePosts();



//Ex2
const apiUrlUser = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("userList");
const searchInput = document.getElementById("search");
let users = [];

async function fetchUsers() {
    try {
        const response = await fetch(apiUrlUser);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        users = await response.json();
        displayUsers(users);
    } catch (error) {
        userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
        console.error("Error fetching users:", error);
    }
}

function displayUsers(userData) {
    userContainer.innerHTML = "";
    userData.forEach(user => {
        if (user.name && user.email) {
            const userItem = document.createElement("p");
            userItem.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            userContainer.appendChild(userItem);
        }
    });
}

searchInput.addEventListener("input", function () {
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayUsers(filteredUsers);
});

fetchUsers();
