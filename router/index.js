import Hello from '../src/components/Hello'
import Recipes from '../src/components/Recipes'
import About from '../src/components/About'


export const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/recipes',
    component: Recipes
  },
  {
    path: '/about',
    component: About
  }
]
