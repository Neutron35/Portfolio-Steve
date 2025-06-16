import Recipe from '@/Savoria/pages/recipe.tsx';
import Home from '@/Savoria/pages/home.tsx';
import { routerType } from '@/types/router.types';
import Sign from '@/Savoria/pages/sign.tsx';
import Account from '@/Savoria/pages/account.tsx';
import ManageAccount from '@/Savoria/pages/manageAccount.tsx';
import MyRecipes from '@/Savoria/pages/myrecipes.tsx';
import AddRecipe from '@/Savoria/pages/addRecipe.tsx';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Accueil',
  },
  {
    path: '/recipe/:recipeId',
    element: <Recipe />,
    title: 'Recette',
  },
  {
    path: '/sign',
    element: <Sign />,
    title: 'Sign',
  },
  {
    path: '/account',
    element: <Account />,
    title: 'Account',
  },
  {
    path: '/manageaccount',
    element: <ManageAccount />,
    title: 'ManageAccount',
  },
  {
    path: '/myrecipes',
    element: <MyRecipes />,
    title: 'MyRecipes',
  },
  {
    path: '/addrecipe',
    element: <AddRecipe />,
    title: 'AddRecipe',
  },
];

export default pagesData;
