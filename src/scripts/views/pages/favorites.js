import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template';

const favorites = {
  async render() {
    return `
    <div class="content">
    <h2 class="content_heading">Favorite Restaurant</h2>
    <div id="restaurants" class="restaurants">

    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    // Jika data restaurant kosong
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      <div class="empty__favorite">
      Restaurant Favorite Kosong
      </div>`;
    }

    // Menampilkan seluruh restaurant
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default favorites;
