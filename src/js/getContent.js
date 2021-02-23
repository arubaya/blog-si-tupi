let blogContent = [
  {
    imageSrc: './src/images/blog-1.jpg',
    linkSrc: 'https://medium.com/@situpi/bab-lingkungan-5a7e5e8c2191',
    title: 'BAB Lingkungan',
    subTitle: 'Apa yang aku pikirkan berlampau-lampau',
    textContent: `Persoalan diri, jati diri dan harga diri .<br>
    Kini aku mulai merasakan perbedaan.<br>
    Perubahan. <br>
    Dulu aku bukan apa apa di kalangan teman santri. <br>
    Meski kini aku masih belum apa apa jua.`,
    date: 'Feb 2, 2020'
  },
  {
    imageSrc: './src/images/blog-2.jpg',
    linkSrc: 'https://medium.com/@situpi/bab-singa-3c6f89fdd74',
    title: 'BAB Singa',
    subTitle: 'Masih kurang dalam diriku buat mendapat pujian.',
    textContent: `Ketika pujian ditopang seketika bangkitlah angkuh yang terpancing olehnya. <br>
    Bak sebuah singa liar yang dihadapkan seonggoh daging didepan kandangnya..
    yang merontaronta ingin keluar menunjukkan taringnya yang berbahaya.`,
    date: 'Feb 13, 2020'
  },
  {
    imageSrc: './src/images/blog-3.jpg',
    linkSrc: 'https://medium.com/@situpi/bab-hati-bf857eb1ad4a',
    title: 'BAB Hati',
    subTitle: 'Periih.. Pediih.. Sediih..',
    textContent: `Perih karena tergores. <br>
    Pedih karena terluka. <br>
    Sedih karena tak tau apa sebab.`,
    date: 'Jan 23, 2020'
  },
];

let contentContainer = document.querySelector('.content');

blogContent.forEach((content) => {
  contentContainer.innerHTML += `
    <article>
      <div class="container-article">
        <a href="${content.linkSrc}">
          <h1>${content.title}</h1>
        </a>
        <h2>${content.subTitle}</h2>
        <p>${content.textContent}</p>
        <p class="date">${content.date}</p>
      </div>
      <div class="container-img">
        <img src="${content.imageSrc}" alt="" />
      </div>
    </article>
  `
})

