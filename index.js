const description = {
  no: "006",
  level: 100,
  type: "Fire",
  hability: "Flames",
  height: "1.7 m",
  weight: "90,5 Kg",
};

const pokemosImg = [
  { image: "/img/Bulbasaur.webp" },
  { image: "/img/picachu.png" },
  { image: "/img/Mew.webp" },
  { image: "/img/Treecko.png" },
];

const ulDescription = document.querySelector(".description-poke__ul--skills");

for (const key in description) {
  if (description.hasOwnProperty(key)) {
    const liDescription = document.createElement("li");
    liDescription.className = "description-poke__ul-li--skills-list";
    liDescription.textContent = key.toUpperCase();

    const divDescription = document.createElement("div");
    divDescription.textContent = String(description[key]).toUpperCase();

    ulDescription.appendChild(liDescription);
    liDescription.appendChild(divDescription);
  }
}

const ulFooter = document.querySelector(".footer-poke__ul");

pokemosImg.forEach((element) => {
  const liFooter = document.createElement("li");
  liFooter.className = "footer-poke__ul--image";
  const imgFooter = document.createElement("img");
  imgFooter.src = element.image;

  ulFooter.appendChild(liFooter);
  liFooter.appendChild(imgFooter);
});
