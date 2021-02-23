let contactData = [
  {
    imageSrc: "../assets/instagram-brands.svg",
    linkSrc: "https://www.instagram.com/tsabitarubaya/",
    textContent: "Tsabit Arubaya",
  },
  {
    imageSrc: "../assets/twitter-brands.svg",
    linkSrc: "https://twitter.com/tsabitarubaya",
    textContent: "Si Tupi",
  },
  {
    imageSrc: "../assets/medium-m-brands.svg",
    linkSrc: "https://medium.com/@situpi",
    textContent: "Si Tupi",
  },
  {
    imageSrc: "../assets/envelope-regular.svg",
    linkSrc: "#",
    textContent: "abi.arubaya@gmail.com",
  },
  {
    imageSrc: "../assets/phone-alt-solid.svg",
    linkSrc: "#",
    textContent: "+62 896 7156 8812",
  },
];

let contactContainer = document.querySelector(".container-sosmed");

contactData.forEach((contact) => {
  contactContainer.innerHTML += `
  <div class="sosmed-list">
    <a
      class="icon-contact"
      href="${contact.linkSrc}"
    >
      <img src="${contact.imageSrc}" alt="" />
    </a>
    <div class="sosmed-detail">
      <div class="line"></div>
      <a href="${contact.linkSrc}"
        >${contact.textContent}</a
      >
    </div>
  </div>
  `;
});
