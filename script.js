fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      `;
      gallery.appendChild(card);
    });
  });
