/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorites');
});

Scenario('menampilkan halaman kosong restaurant favorite', ({ I }) => {
  I.seeElement('#restaurants');
  I.wait(10);
  I.see('Restaurant Favorite Kosong', '.empty__favorite');
});

Scenario('menyukai satu restaurant', async ({ I }) => {
  I.waitForElement('.empty__favorite', 5);
  I.see('Restaurant Favorite Kosong', '.empty__favorite');

  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.seeElement('.restaurant__name');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('batal menyukai satu restaurant', async ({ I }) => {
  I.waitForElement('.empty__favorite', 5);
  I.see('Restaurant Favorite Kosong', '.empty__favorite');

  /* menuju ke halaman utama */
  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  /* klik suka restaurant */

  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  /* batal menyukai restaurant */

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.wait(5);
  I.click('#likeButton');

  /* halaman favorite kosong */
  I.amOnPage('/#/Favorites');
  I.seeElement('#restaurants');
  I.waitForElement('.empty__favorite', 5);
  I.see('Restaurant Favorite Kosong', '.empty__favorite');
});
