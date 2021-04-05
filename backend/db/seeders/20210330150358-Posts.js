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
        { postTitle: 'Graphics Card', description: 'Spent hours upon days and upon weeks creating and shapping this beautiful piece of art', highlights: 'handmade', listPicture: 'https://observer.com/wp-content/uploads/sites/2/2020/09/AMDRadeonRX6700.png', price: '$300', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Watch holder', description: 'Made from dragon skin this is an item that cant be beat, hours upon days of crating have come to this.', highlights: 'handmade', listPicture: 'https://img1.cgtrader.com/items/108671/1dba7b80f0/large/wrist-watch-stand-3d-model-stl.jpg', price: '$37', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'PVC Lamp', description: 'Lamp made from PVC that was bought with materials from the Home Depot', highlights: 'handmade', listPicture: 'https://m.media-amazon.com/images/I/61YXh9VvLlL._AC_SL1500_.jpg', price: '$50', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Laptop Stand', description: 'Ever wonder why your laptop sounds like a car running, well thats because it has no space to breath always sitting flat on the surface so why not give it a little elivation', highlights: 'handmade', listPicture: 'https://i.pinimg.com/originals/bb/55/6a/bb556a0392c44e48ead99edb3fc8331e.jpg', price: '$50', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Rubix Cube', description: 'I replaced the stickers on mine and no I have absolutely no use for it!', highlights: 'handmade', listPicture: 'https://i.all3dp.com/wp-content/uploads/2016/01/27115212/corenpuzzle-e1453384417200.jpg', price: '$5', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Kitchen Shelf Dividers', description: 'Why not keep spices and cans in the same cabnit, WELL now you can with the new shelf divider for your kitchen', highlights: 'handmade', listPicture: 'https://cdn-0.tutorial45.com/wp-content/uploads/2016/11/3D-printing-Ideas-28.jpg', price: '$35', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Software of Choice', description: 'I will make any software that you desire', highlights: 'Digital Download', listPicture: 'http://www.purelogics.net/blog/wp-content/uploads/2017/07/vanrasoft-custom-software-development1.jpg', price: '$150', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'HandMade cpu', description: 'This took at lease 15 hours to make now my hands hurt', highlights: 'handmade', listPicture: 'https://img.dtcn.com/image/digitaltrends/amd-ryzen-7-cpu-inhandpins-3.jpg', price: '$40', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Custom Picture Book', description: 'Send me pictures and I will turn them into a one of a kind Picture book for you and the whole family to enjoy.', highlights: 'handmade', listPicture: 'https://uploads.ifdesign.de/award_img_287/oex_large/136040_01_287-136040_3d-printed-book_1.jpg', price: '$27', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { postTitle: 'Coffee holder', description: 'This will hold all of your coffee', highlights: 'handmade', listPicture: 'https://images1.sw-cdn.net/product/picture/710x528_28210840_15218358_1566608336_1_0.jpg', price: '$15', userId: 1, createdAt: new Date(), updatedAt: new Date()},
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
