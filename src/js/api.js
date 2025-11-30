const list = document.querySelector(".unList")

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const json = await response.json();
        list.innerHTML = json.name

        let name = document.createElement("li");
        let email = document.createElement("li");
        name.innerHTML = `name: ${json.name} email: ${json.email}`;
        email.innerHTML = `name: ${json.name} email: ${json.email}`;
        list.appendChild(name);
        list.appendChild(email);

    } catch (error) {
        console.error("there was a probolem fetching the data: ", error);
    }
    console.log(response)
}
list.textContent = "loading...";
getUsers();
