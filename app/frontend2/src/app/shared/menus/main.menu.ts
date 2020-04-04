import { Menu } from '../classes/menu';

export const mainMenu: Menu = [
  {
    routerLink: 'dashboard',
    icon: 'home',
    title: 'Dashboard'
  },
  {
    routerLink: 'product/stock',
    icon: 'clipboard-list',
    title: 'Stock'
  },
  {
    routerLink: 'product/add',
    icon: 'inbox-in',
    title: 'Add Product'
  }
];
