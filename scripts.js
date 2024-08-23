
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    const menuItemsContainer = document.querySelector('.menu-items');
    const menuItems = [
        { name: 'Coffee', description: 'Freshly brewed coffee', price: '$3', image: 'coffee.jpg' },  // Ensure this image is in the same directory
        { name: 'Sandwich', description: 'Delicious sandwich with fresh ingredients', price: '$5', image: 'sandwich.jpg' },  // Ensure this image is in the same directory
        { name: 'Cake', description: 'Homemade cake', price: '$4', image: 'cake.jpg' },  // Ensure this image is in the same directory
        
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
});