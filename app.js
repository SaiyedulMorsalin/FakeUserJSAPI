const defaultDataLoad = async () => {
    const userContainer = document.getElementById("userContainer");

    try {
        const res = await fetch("https://fakestoreapi.com/users");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();

        // Clear the container before appending new data
        userContainer.innerHTML = '';

        data.forEach(user => {
            console.log(user);
            const userCard = document.createElement("div");
            userCard.classList.add("col-3", "my-1");

            userCard.innerHTML = `
                <div class="card" style="height: 400px;">
                    <img style="height:200px;cursor:pointer;" src="./images/avator.png" class="card-img-top" alt="User Avatar">
                    <div class="card-body">
                        <h6 class="card-subtitle  text-body-primary">${user.name.firstname} ${user.name.lastname}</h6>
                        <p class="card-base">@${user.email}</p>
                        <p class="card-base">City: ${user.address.city}</p>
                        <p class="card-base">Phone: ${user.phone}</p>
                        <div class="d-flex align-items-center justify-content-around ">
                            <h5>${user.username}</h5>
                            <h5 class ="btn btn-outline-primary"><a class ="nav-link active" href="/pages/user_details.html?user_id=${user.id}">Details</a></h5>
                        </div>
                    </div>
                    
                </div>
            `;

            const card = userCard.querySelector(".card");
            card.addEventListener("mouseover", () => {
                card.style.boxShadow = "4px 4px 8px gray";
            });
            card.addEventListener("mouseout", () => {
                card.style.boxShadow = "";
            });

            userContainer.appendChild(userCard);
        });

    } catch (error) {
        console.error("Failed to load data:", error);
    }
};

defaultDataLoad();
