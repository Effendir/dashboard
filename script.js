function sidebarLinks() {
  let div = document.querySelector(".sidebar-links");
  let projects = document.querySelectorAll("h4");

  projects.forEach(project => {
    let p = document.createElement("a")
    p.innerText = project.innerText;
    p.href = project.closest("a");
    div.appendChild(p)
  })

}

sidebarLinks()
