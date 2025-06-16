import About from '@/Portfolio/pages/about.tsx';
import Home from '@/Portfolio/pages/home.tsx';
import Projects from '@/Portfolio/pages/projects.tsx';
import { routerType } from '@/types/router.types';
import Project from '@/Portfolio/pages/project.tsx';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Accueil',
  },
  {
    path: '/about',
    element: <About />,
    title: 'A propos',
  },
  {
    path: '/projects',
    element: <Projects />,
    title: 'Projets',
  },
  {
    path: '/project/:projectId',
    element: <Project />,
    title: 'Projet',
  },
];

export default pagesData;
