const searchInput = document.getElementById("searchInput");
const image = document.querySelector(".image");
const publicRepo = document.getElementById("publicRepo");
const publicGists = document.getElementById("publicGists");
const Followers = document.getElementById("Followers");
const Following = document.getElementById("Following");
const Company = document.getElementById("Company");
const WebSite = document.getElementById("WebSite");
const Location = document.getElementById("Location");
const MemberSince = document.getElementById("MemberSince");
const repoul = document.getElementById("repoul");
const resultWrapper = document.getElementById("resultWrapper");
const resultWrapper2 = document.getElementById("resultWrapper2");
const button = document.getElementById("button");

console.log(repoul.innerHTML);

const TOKEN =
  "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";
const HEADERS = {
  Authorization: `token ${TOKEN}`,
  Accept: "application/vnd.github.v3+json",
};
async function searchUser(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    return null; // or return an error object or throw the error if preferred
  }
}

async function searchRepo(username) {
  const url = `https://api.github.com/users/${username}/repos?sort=latest&direction=desc&per_page=5`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    return null; // or return an error object or throw the error if preferred
  }
}

async function search() {
  resultWrapper.style = "display:flex";
  resultWrapper2.style = "display:flex";
  const impo = await searchUser(searchInput.value);
  const repos = await searchRepo(searchInput.value);
  image.src = impo.avatar_url;
  publicRepo.innerText = `Public Repositories: ${impo.public_repos}`;
  publicGists.innerText = `publicGists: ${impo.public_gists}`;
  Followers.innerText = `Followers: ${impo.followers}`;
  Following.innerText = `Following: ${impo.following}`;
  Company.innerHTML = `<strong>World</strong>: ${impo.company}`;
  WebSite.innerHTML = `<strong>WebSite</strong>: ${impo.blog}`;
  Location.innerHTML = `<strong>Location</strong>: ${impo.location}`;
  MemberSince.innerHTML = `<strong>MemberSince</strong>: ${impo.created_at}`;
  repos.forEach(
    (v) =>
      (repoul.innerHTML += `<li  style="border-bottom:2px solid #f3f3f3;"><a href=${v.html_url}>${v.name}</a> <div class="list1">
              <span class="badge" style="background-color: #4582ec"
                >stars: ${v.stargazers_count}</span
              ><span class="badge" style="background-color: #adb5bd"
                >Watchers: ${v.watchers}</span
              ><span class="badge" style="background-color: #02b875"
                >Forks: ${v.forks}</span
              ><span class="badge" style="background-color: #17a2b8"
                >Language: ${v.language}</span
              >
            </div ></li>`)
  );
  button.href = impo.html_url;
  searchInput.value = "";
}
