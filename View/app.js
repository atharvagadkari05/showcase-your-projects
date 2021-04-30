
let Application = document.querySelector(".application");

let Projects = document.querySelector(".projects")

fetch('../Data/projects.json')
  .then((res) => res.json())
  .then((res) => {
    for (let project_details in res) {
      let project_card = document.createElement("div");
      project_card.classList.add('project_card');

      let project_title = document.createElement("h2");
      project_title.classList.add('project_title');
      project_title.textContent = res[project_details].project_name;

      let project_github_url = document.createElement("button");
      project_github_url.classList.add('project_github_url');
      project_github_url.textContent = "See project";
      project_github_url.onclick = function () {
        window.open(res[project_details].project_github_url);
      }

      let project_author = document.createElement("p");
      project_author.classList.add('project_author');
      project_author.textContent = `By, ${res[project_details].project_author}`;

      let project_description = document.createElement("p");
      project_description.classList.add('project_description');
      project_description.textContent = res[project_details].project_description;

      let project_card_bottom_layer = document.createElement("div");
      project_card_bottom_layer.classList.add('project_card_bottom_layer');

      let project_tech_stack = document.createElement("p");
      project_tech_stack.classList.add('project_tech_stack');
      project_tech_stack.textContent = `Tech Stack - ${res[project_details].project_tech_stack}`;

      project_card.append(project_title);
      project_card.append(project_author);
      project_card.append(project_description);
      
      project_card_bottom_layer.append(project_tech_stack);
      project_card_bottom_layer.append(project_github_url);

      project_card.append(project_card_bottom_layer);

      // appending project card into projects layer
      Projects.append(project_card)
    }
  });