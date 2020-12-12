const routes = {
  home: {
    url: '/',
    name: 'Accueil',
  },
  signIn: {
    url: '/signin',
    name: 'Connexion',
  },
  signUp: {
    url: '/signup',
    name: 'Inscription',
  },
  addMerchant: {
    url: '/become-merchant',
    name: 'Devenir marchand',
  },
};

export const rootUrl = routes.home.url;
export default routes;
