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
  
];


const computerDesktops = [
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
    immagine: 'https://st.depositphotos.com/1000128/2642/i/600/depositphotos_26429241-stock-photo-desktop-computer-with-touchscreen-interface.jpg'
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
    immagine: 'https://shorturl.at/uxMR7'
  }
];



function loadScriptSmartphone() {
  const smartphoneContainer = document.querySelector('.smartphone-container');

  smartphones.forEach(smartphone => {
    const card = document.createElement('div');
    card.classList.add('smartphone-card');

    const image = document.createElement('img');
    image.src = smartphone.immagine;
    card.appendChild(image);

    const brand = document.createElement('h3');
    brand.textContent = smartphone.marca;
    card.appendChild(brand);

    const model = document.createElement('p');
    model.textContent = smartphone.modello;
    card.appendChild(model);

    const price = document.createElement('p');
    price.textContent = `Price: $${smartphone.prezzo}`;
    card.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Aggiungi al carrello';
    addToCartButton.addEventListener('click', () => {
      console.log(smartphone);
    });
    card.appendChild(addToCartButton);


    smartphoneContainer.appendChild(card);
  });
}



function loadScriptDesktop() {
  const desktopContainer = document.querySelector('.desktop-container');

  computerDesktops.forEach(desktop => {
    const card = document.createElement('div');
    card.classList.add('desktop-card');

    const image = document.createElement('img');
    image.src = desktop.immagine;
    card.appendChild(image);

    const marcaProcessore = document.createElement('h3');
    marcaProcessore.textContent = desktop.marcaProcessore;
    card.appendChild(marcaProcessore);

    const price = document.createElement('p');
    price.textContent = `Price: $${desktop.prezzo}`;
    card.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Aggiungi al carrello';
    addToCartButton.addEventListener('click', () => {
      console.log(desktop);
    });
    card.appendChild(addToCartButton);

    desktopContainer.appendChild(card);
  });
}




