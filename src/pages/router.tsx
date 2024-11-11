import { Route, Routes } from 'react-router-dom';

import pagesData from '@/data/pagesData';
import { routerType } from '@/types/router.types';

// Composant Router qui définit les routes de l'application
const Router = () => {
  // Création des routes à partir des données des pages
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  // Retourne le composant Routes contenant toutes les routes
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
