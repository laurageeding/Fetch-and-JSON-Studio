window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json) {
            // console.log(json);
            json.forEach((astronaut) => {
                const container = document.getElementById("container");
                container.innerHTML += 
                `<div class="astronaut">
                <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>`
            });
        });
    });
});
