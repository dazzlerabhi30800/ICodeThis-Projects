const memberships = document.querySelectorAll(".membership");
const orderBtn = document.querySelector("button");

memberships.forEach((item) => {
  item.addEventListener("click", () => {
    memberships.forEach((item) => item.classList.remove("active"));
    orderBtn.removeAttribute("disabled");
    item.classList.add("active");
  });
});
