import restaurant from '../views/pages/restaurant';
import favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': restaurant, // default page
  '/restaurant': restaurant,
  '/favorites': favorites,
  '/detail/:id': Detail,
};

export default routes;
