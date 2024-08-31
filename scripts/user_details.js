const userId = new URLSearchParams(window.location.search).get("user_id");
console.log(userId);

const singleUser = async (userId) => {
    if (!userId) {
        console.error("No user ID provided in URL parameters.");
        return;
    }

    try {
        const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
        const user = await res.json();
        console.log(user);

        const userDetailContainer = document.getElementById("userDetail");

        if (!userDetailContainer) {
            console.error("No element found with ID 'User'");
            return;
        }

        const userDiv = document.createElement("div");
        userDiv.classList.add("row");
        userDiv.innerHTML = `
            <div class="col-6">
                <img  src="../images/avator.png" alt="User Avatar">
            </div>
            <div class="col-4">
            <h3>Profile Details</h3>
                <div class="mt-5">
                    <h5>${user.name.firstname} ${user.name.lastname}</h5>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias laudantium quasi, ex unde
                reprehenderit minus accusantium numquam delectus nemo porro totam voluptatum consectetur dignissimos
                placeat impedit sit beatae fugit?</p>
                </div>
            </div>
           
        `;

        userDetailContainer.appendChild(userDiv);

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

singleUser(userId);
