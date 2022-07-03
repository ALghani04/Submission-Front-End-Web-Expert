/* eslint-disable no-unused-vars */
import TheRestaurantDBSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template';

const Restaurant = {
  async render() {
    return `
    <div class="content">
        <h2 class="content_heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDBSource.RestaurantsList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
