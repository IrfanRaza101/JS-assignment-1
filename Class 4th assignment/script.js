const items = [
  { 
      id: 1, 
      name: "Product 1", 
      price: "$20", 
      description: "This is product 1",
      image: "https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  { 
      id: 2, 
      name: "Product 2", 
      price: "$30", 
      description: "This is product 2",
      image: "https://images.pexels.com/photos/6878018/pexels-photo-6878018.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  { 
      id: 3, 
      name: "Product 3", 
      price: "$40", 
      description: "This is product 3",
      image: "https://images.pexels.com/photos/20992934/pexels-photo-20992934/free-photo-of-wooden-chess-pieces.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];



function importItems() {
  const ctr = document.getElementById("main-ctr");

  ctr.innerHTML = ``;

  items.map(item => {

    const cardctr = document.createElement('div');
    cardctr.className = 'card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'item-image';

    const pname = document.createElement('h2');
    pname.textContent = item.name;

    const pprice = document.createElement('p');
    pprice.textContent = item.price;

    const pDescription = document.createElement('p');
    pDescription.textContent = item.description;


    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';


    deleteButton.addEventListener('click', function(){
      deleteProduct(item.id)
    });

    cardctr.appendChild(img);
    cardctr.appendChild(pname);
    cardctr.appendChild(pprice);
    cardctr.appendChild(pDescription);
    cardctr.appendChild(deleteButton);

    ctr.appendChild(cardctr);
  });
}

function deleteProduct(itemId) {
  const updatedItems = items.filter(item => item.id !== itemId);

  items.length = 0;
  items.push(...updatedItems);

  importItems();
}

importItems();
