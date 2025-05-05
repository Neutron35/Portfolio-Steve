import About from '@/pages/about';
import Home from '@/pages/home';
import { Navigate } from 'react-router-dom';
import NotFound from '@/pages/notfound';
import Projects from '@/pages/projects';
import Recipe from '@/pages/recipe';
import Recipes from '@/pages/recipes';
import { routerType } from '@/types/router.types';
import Project from '@/pages/project.tsx';
import Sign from '@/pages/sign';
import Account from '@/pages/account';
import ManageAccount from '@/pages/manageAccount.tsx';
import MyRecipes from '@/pages/myrecipes.tsx';
import AddRecipe from '@/pages/addRecipe.tsx';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Accueil',
  },
  {
    path: 'about',
    element: <About />,
    title: 'A propos',
  },
  {
    path: 'projects',
    element: <Projects />,
    title: 'Projets',
  },
  {
    path: 'project/:projectId',
    element: <Project />,
    title: 'Projet',
  },
  {
    path: 'recipes',
    element: <Recipes />,
    title: 'Recettes',
  },
  {
    path: 'recipe/:recipeId',
    element: <Recipe />,
    title: 'Recette',
  },
  {
    path: 'sign',
    element: <Sign />,
    title: 'Sign',
  },
  {
    path: 'account',
    element: <Account />,
    title: 'Account',
  },
  {
    path: 'manageaccount',
    element: <ManageAccount />,
    title: 'ManageAccount',
  },
  {
    path: 'myrecipes',
    element: <MyRecipes />,
    title: 'MyRecipes',
  },
  {
    path: 'addrecipe',
    element: <AddRecipe />,
    title: 'AddRecipe',
  },
  {
    path: 'notfound',
    element: <NotFound />,
    title: 'NotFound',
  },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
    title: 'Redirect',
  },
];

export default pagesData;
