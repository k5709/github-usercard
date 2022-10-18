import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = [ 'k509', 'r-gio28', 'coltonrhodenbaugh', 'justsml', 'luishrd', 'bigknell']

for(let i = 0; i < followersArray.length; i++){
  getGitCard(followersArray[i]);
}

function getGitCard(username){
  axios.get(`https://api.github.com/users/${username}`)
.then(resp => {
  document.querySelector('.cards').appendChild(gitHubCard(resp.data));
})
.catch(err => console.error(err))
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


  

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitHubCard(gitInfo)  {
const card = document.createElement("div")
const gitImage = document.createElement("img")
const cardInfo = document.createElement("div")
const gitName = document.createElement('h3')
const gitUserName = document.createElement('p')
const gitLocation = document.createElement('p')
const gitProfile = document.createElement('p')
const profileLink = document.createElement('a')
const gitFollowers = document.createElement('p')
const gitFollowing = document.createElement('p')
const gitBio = document.createElement('p')

gitImage.src = gitInfo.avatar_url;
gitImage.alt = "github user"
gitName.textContent = gitInfo.name;
gitUserName.textContent = gitInfo.login;
gitLocation.textContent = gitInfo.location;
gitProfile.textContent = "Profile"
profileLink.textContent = "Link to Profile"
profileLink.href = gitInfo.html_url;
gitFollowers.textContent = `Followers: ${gitInfo.followers_url}`;
gitFollowing.textContent = `Follwing: ${gitInfo.following_url}`;
gitBio.textContent = gitInfo.bio;

card.appendChild(gitImage);
card.appendChild(cardInfo);
cardInfo.appendChild(gitName);
cardInfo.appendChild(gitUserName);
cardInfo.appendChild(gitLocation);
cardInfo.appendChild(gitProfile);
cardInfo.appendChild(gitProfile);
gitProfile.appendChild(profileLink);
cardInfo.appendChild(gitFollowers);
cardInfo.appendChild(gitFollowing);
cardInfo.appendChild(gitBio);


card.classList.add('card');
cardInfo.classList.add('username');
gitName.classList.add('name');
gitUserName.classList.add('login')

return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
