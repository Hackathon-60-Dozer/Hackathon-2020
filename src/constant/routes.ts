const routes = {
  home: {
    url: '/',
    title: 'Accueil',
  },
  about: {
    url: '/about',
    title: 'À propos',
  },
  cgv: {
    url: '/cgv',
    title: 'Conditions générales de vente',
  },
  mentionLegales: {
    url: '/mention-legales',
    title: 'Mention Legales',
  },
  account: {
    url: '/account',
    title: 'Mon compte',
  },
  shops: {
    url: '/commerces',
    title: 'Commerces',
  },
  dashboard: {
    url: '/dashboard',
    title: 'Espace commerçant',
  },
};

export const routesByUrl = Object.entries(routes).reduce(
  (acc, [key, { url, ...route }]) => ({
    ...acc,
    [url]: {
      key,
      ...route,
    },
  }),
  {}
);

export default routes;
