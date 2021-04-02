'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      const posts = await queryInterface.bulkInsert('Posts', [
        { postTitle: 'Raspberry Pi', description: 'This is a custom made raspberry pi good for any occasion', highlights: 'Handmade', listPicture: 'https://www.elektor.com/media/catalog/product/cache/1404d1bfd8e1ad71cc6f16950ff5c805/r/a/raspberry-pi-4-4gb.jpg', price: '$140.00', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Clicking Bot', description: 'I designed this program to autoclick anything you choose', highlights: 'Digital Download', listPicture: 'https://play-lh.googleusercontent.com/4z3pDJzRQYAgXYbytKJ2_oeqVQf0Vx9xentmS4wklg6Y3p-_ezVCJkm_JzuDPQz0HRC-', price: '$17', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Embroidery File', description: 'Custom embroidery files made right here in house cant get any better than that.', highlights: 'Digital Download', listPicture: 'https://i.etsystatic.com/14639078/r/il/197026/1144983650/il_570xN.1144983650_isrt.jpg', price: '$27', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Application finder', description: 'This is just a file that I created to see if it would hold up to the big leaguers.', highlights: 'Digital Download', listPicture: 'https://images.macrumors.com/t/5BiCx6nBBb0fGUFWfLHjqaD1zFk=/1200x1200/smart/article-new/2018/02/macos-finder-icon.jpg', price: '$4.47', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Coffee mug', description: 'This is a 3D printed coffee cup I dont know if it works.', highlights: 'Digital Download', listPicture: 'https://airwolf3d.com/wp-content/uploads/2015/12/Mug-3D-Printed-with-Coffee-PLA.jpg', price: '$75', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Old Motherboard', description: 'This is from one of my old rigs and it still works surprisingly', highlights: 'Handmade', listPicture: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Computer-motherboard.jpg', price: '$18.50', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Wooden Coffee Table', description: 'Spent hours upon days and upon weeks creating and shapping this beautiful piece of art', highlights: 'handmade', listPicture: 'none', price: '$100', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Watch holder', description: 'Made from dragon skin this is an item that cant be beat, hours upon days of crating have come to this.', highlights: 'handmade', listPicture: 'none', price: '$37', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'PVC Lamp', description: 'Lamp made from PVC that was bought with materials from the Home Depot', highlights: 'handmade', listPicture: 'none', price: '$50', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Laptop Stand', description: 'Ever wonder why your laptop sounds like a car running, well thats because it has no space to breath always sitting flat on the surface so why not give it a little elivation', highlights: 'handmade', listPicture: 'none', price: '$50', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Rubix Cube', description: 'I replaced the stickers on mine and no I have absolutely no use for it!', highlights: 'handmade', listPicture: 'none', price: '$5', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Kitchen Shelf Dividers', description: 'Why not keep spices and cans in the same cabnit, WELL now you can with the new shelf divider for your kitchen', highlights: 'handmade', listPicture: 'none', price: '$35', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Software of Choice', description: 'I will make any software that you desire', highlights: 'Digital Download', listPicture: 'none', price: '$150', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'HandMade Rug', description: 'This took at lease 15 hours to make now my hands hurt', highlights: 'handmade', listPicture: 'none', price: '$40', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Picture Book', description: 'Send me pictures and I will turn them into a one of a kind Picture book for you and the whole family to enjoy.', highlights: 'handmade', listPicture: 'none', price: '$27', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Coffee Grounds', description: 'I will hand grind the coffee seeds and send them to you so you dont have to so it!', highlights: 'handmade', listPicture: 'none', price: '$15', userId: 1, createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
