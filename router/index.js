import Hello from '../src/components/Hello'
import Recipes from '../src/components/Recipes'

export const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/recipes',
    component: Recipes
  }
]
