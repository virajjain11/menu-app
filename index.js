const navItems = document.querySelectorAll(".nav-item");

const itemList = [
  {
    name: "",
    category: "",
    price: "",
    img: "",
    description: "",
  },
];
navItems.forEach((item) => {
  item.addEventListener("click", clickHandler);
});

function clickHandler(event) {
  const menuCategory = event.target.innerText;
}
