const navItems = document.querySelectorAll(".nav-item");

const itemList = [
  {
    name: "burger",
    category: "Breakfast",
    price: "199$",
    img: "img/burger.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem totam ducimus nam illum mollitia!",
  },
  {
    name: "italian",
    category: "Lunch",
    price: "199$",
    img: "img/italian.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem totam ducimus nam illum mollitia!",
  },
  {
    name: "pasta",
    category: "Shakes",
    price: "199$",
    img: "img/pasta.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem totam ducimus nam illum mollitia!",
  },
  {
    name: "sandwich",
    category: "Dinner",
    price: "199$",
    img: "img/sanwich.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem totam ducimus nam illum mollitia!",
  }
];
navItems.forEach((item) => {
  item.addEventListener("click", clickHandler);
});

function clickHandler(event) {
  const menuCategory = event.target.innerText;
  itemList.forEach(item=>{
  if (item.category===menuCategory){
    console.log(item);

  }
})
}
