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
  shop: (shop: string) => ({
    url: `/shop/${shop}`,
    name: 'Commerce',
  }),
  product: (product: string) => ({
    url: `/product/${product}`,
    name: 'Produit',
  }),
  shopList: {
    url: `/shop/list`,
    name: 'Liste des commerces',
  },
  productList: {
    url: `/product/list`,
    name: 'Liste des produits',
  },
  account: {
    url: '/account',
    name: 'Mon compte',
  },
  accountCommands: {
    url: '/account/commands',
    name: 'Mes commandes',
  },
  basket: {
    url: '/account/basket',
    name: 'Mon panier',
  },
  adminShop: {
    url: '/admin/shop',
    name: 'Espace commerçant',
  },
  bill: {
    url: '/bill',
    name: 'Paiement',
  },
  billSuccess: {
    url: '/bill/success',
    name: 'Confirmation de paiement',
  },
};

export const rootUrl = routes.home.url;
export default routes;
