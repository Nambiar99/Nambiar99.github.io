
const landing = document.querySelector(".landing");
const design = document.querySelector("#design");
const data = document.querySelector("#data");

design.addEventListener("mouseenter", () => {
	landing.classList.add("active-design");
	landing.classList.remove("active-data");
});

data.addEventListener("mouseenter", () => {
	landing.classList.add("active-data");
	landing.classList.remove("active-design");
});

landing.addEventListener("mouseleave", () => {
	landing.classList.remove("active-design");
	landing.classList.remove("active-data");
});
