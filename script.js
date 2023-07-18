const smartphones = [
  {
    id: 1,
    prezzo: 1000,
    marca: 'Apple',
    modello: 'iPhone 12',
    memoriaRAM: 4,
    memoriaStorage: 128,
    immagine: 'https://cdn.moglix.com/p/VyNL75lcCIoSt.jpg'
  },
  {
    id: 2,
    prezzo: 1200,
    marca: 'Samsung',
    modello: 'Galaxy S21',
    memoriaRAM: 8,
    memoriaStorage: 256,
    immagine: 'https://d33i50qtfold6x.cloudfront.net/cate/new_product/Reno8+Lite_Black_2400x2400_Cover.webp'
  },
  {
    id: 3,
    prezzo: 800,
    marca: 'Google',
    modello: 'Pixel 5',
    memoriaRAM: 6,
    memoriaStorage: 128,
    immagine: 'https://data.wikomobile.com/documents/images/IT/dbd2f986d94529fc20c0864e2c5c978c.jpg'
  },
  {
    id: 4,
    prezzo: 1500,
    marca: 'OnePlus',
    modello: '9 Pro',
    memoriaRAM: 12,
    memoriaStorage: 256,
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PZMC1KerFBykOM8U70eVEawa1yNiM9KZh7PHu74Mu_Z4nZleB2I-P5DCivSw3ImEpu4&usqp=CAU'
  },
  {
    id: 5,
    prezzo: 1100,
    marca: 'Apple',
    modello: 'iPhone 13',
    memoriaRAM: 6,
    memoriaStorage: 256,
    immagine: 'https://cdn.moglix.com/p/VyNL75lcCIoSt.jpg'
  },
  {
    id: 6,
    prezzo: 900,
    marca: 'Samsung',
    modello: 'Galaxy S20 FE',
    memoriaRAM: 8,
    memoriaStorage: 128,
    immagine: 'https://d33i50qtfold6x.cloudfront.net/cate/new_product/Reno8+Lite_Black_2400x2400_Cover.webp'
  },
  {
    id: 7,
    prezzo: 1300,
    marca: 'Google',
    modello: 'Pixel 6 Pro',
    memoriaRAM: 8,
    memoriaStorage: 512,
    immagine: 'https://data.wikomobile.com/documents/images/IT/dbd2f986d94529fc20c0864e2c5c978c.jpg'
  },
  {
    id: 8,
    prezzo: 950,
    marca: 'OnePlus',
    modello: 'Nord 2',
    memoriaRAM: 6,
    memoriaStorage: 128,
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PZMC1KerFBykOM8U70eVEawa1yNiM9KZh7PHu74Mu_Z4nZleB2I-P5DCivSw3ImEpu4&usqp=CAU'
  }
];

const computerDesktop = [
  {
    id: 0,
    prezzo: 1000,
    marcaProcessore: 'Intel',
    marcaSchedaMadre: 'ASUS',
    quantitaRAM: 8,
    quantitaStorage: 512,
    immagine: 'https://st.depositphotos.com/1000128/2642/i/600/depositphotos_26429241-stock-photo-desktop-computer-with-touchscreen-interface.jpg'
  },
  {
    id: 1,
    prezzo: 1200,
    marcaProcessore: 'AMD',
    marcaSchedaMadre: 'Gigabyte',
    quantitaRAM: 16,
    quantitaStorage: 1,
    immagine: 'https://www.ilcorrieredellacitta.com/wp-content/uploads/2019/03/PC-desktop.jpg'
  },
  {
    id: 2,
    prezzo: 800,
    marcaProcessore: 'Intel',
    marcaSchedaMadre: 'MSI',
    quantitaRAM: 8,
    quantitaStorage: 256,
    immagine: 'https://m.media-amazon.com/images/I/71ar8PIgR8L._AC_SY450_.jpg'
  },
  {
    id: 3,
    prezzo: 1500,
    marcaProcessore: 'AMD',
    marcaSchedaMadre: 'ASRock',
    quantitaRAM: 16,
    quantitaStorage: 2,
    immagine: 'https://www.pngplay.com/wp-content/uploads/12/Computer-Desktop-PC-Transparent-Images-Clip-Art.png'
  },
  {
    id: 4,
    prezzo: 1100,
    marcaProcessore: 'Intel',
    marcaSchedaMadre: 'Gigabyte',
    quantitaRAM: 16,
    quantitaStorage: 512,
    immagine: 'https://www.pngplay.com/wp-content/uploads/2/Desktop-PC-Transparent-Images.png'
  },
  {
    id: 5,
    prezzo: 900,
    marcaProcessore: 'AMD',
    marcaSchedaMadre: 'MSI',
    quantitaRAM: 8,
    quantitaStorage: 1,
    immagine: 'https://www.ilcorrieredellacitta.com/wp-content/uploads/2019/03/PC-desktop.jpg'
  },
  {
    id: 6,
    prezzo: 1300,
    marcaProcessore: 'Intel',
    marcaSchedaMadre: 'ASUS',
    quantitaRAM: 16,
    quantitaStorage: 256,
    immagine: 'https://m.media-amazon.com/images/I/71ar8PIgR8L._AC_SY450_.jpg'
  },
  {
    id: 7,
    prezzo: 950,
    marcaProcessore: 'AMD',
    marcaSchedaMadre: 'ASRock',
    quantitaRAM: 8,
    quantitaStorage: 2,
    immagine: 'https://w7.pngwing.com/pngs/524/847/png-transparent-dell-vostro-laptop-desktop-computers-computer-desktop-pc-computer-network-electronics-computer.png'
  }
];


const cartArray = [
];

function desktopLoader() {
  const desktopContainer = document.querySelector(".desktopContainer");
  
  computerDesktop.map(desktop => {
    const desktopCard = document.createElement('div');
    desktopCard.classList.add('desktopCard');

    const brand = document.createElement('h1')
    brand.textContent = desktop.marcaProcessore
    desktopCard.appendChild(brand)

    const image = document.createElement('img');
    image.classList.add("desktopImg")
    image.src = desktop.immagine
    desktopCard.appendChild(image)

    const price = document.createElement('p');
    price.textContent = `Prezzo: ${desktop.prezzo}€`
    price.classList.add('desktopPrice')
    desktopCard.appendChild(price)





    const detailsLink = document.createElement('a');
    detailsLink.classList.add("detailsLink")
    detailsLink.href = "./details.html";
    detailsLink.textContent = "vedi dettagli";
    detailsLink.addEventListener('click', () => {
      localStorage.setItem('selectedDesktop', JSON.stringify(desktop));
    });

    desktopCard.appendChild(detailsLink);
    // const detailsLink = document.createElement('a');
    // detailsLink.href = "./Details.html"
    // detailsLink.textContent = "vedi dettagli"
    // detailsLink.addEventListener('click', () => {
    //   globalize(desktop);
    // });

      
      
      
    

    // detailsButton.textContent = 'Dettagli';
    // detailsButton.classList.add('detailsButton');
    // detailsButton.addEventListener('click', () => {
    //   console.log(desktop);
    // });

    


    desktopContainer.appendChild(desktopCard)
  });

}

function globalize(selectedDesktop) {
  window.desktop = selectedDesktop;
}


function smartphonesLoader() {
  const link = 'https://encr.pw/xK2Pg'
  


}


function detailsLoader() {
  const selectedDesktop = JSON.parse(localStorage.getItem('selectedDesktop'));
  console.log(selectedDesktop);

  // Access the properties of the selectedDesktop object and update the HTML elements
  document.getElementById('detailsImage').src = selectedDesktop.immagine;
  document.getElementById('detailsTitle').textContent = selectedDesktop.marcaProcessore;
  document.getElementById('detailsPrice').textContent = `Prezzo: ${selectedDesktop.prezzo}€`;
  document.getElementById('detailsMarcaProcessore').textContent = `Marca Processore: ${selectedDesktop.marcaProcessore}`;
  document.getElementById('detailsMarcaSchedaMadre').textContent = `Marca Scheda Madre: ${selectedDesktop.marcaSchedaMadre}`;
  document.getElementById('detailsQuantitaRAM').textContent = `Quantità RAM: ${selectedDesktop.quantitaRAM}`;
  document.getElementById('detailsQuantitaStorage').textContent = `Quantità Storage: ${selectedDesktop.quantitaStorage}`;

  // Clear the selectedDesktop from localStorage after retrieving the data
  localStorage.removeItem('selectedDesktop');
}


































