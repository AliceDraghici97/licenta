interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  /*{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: ''
    }
  },*/
  {
    name: 'Pagina Principala',
    url: '/base/home_page',
    icon: 'icon-drop'
  },
  //CONTABILITATE
  {
    title: true,
    name: 'Contabilitate'
  },
  {
    name: 'Conturi contabile',
    url: '/base/conturi_contabile',
    icon: 'icon-puzzle'
  },
  {
    name: 'Note contabile',
    url: '/base/note_contabile',
    icon: 'icon-pencil'
  },

  //FINANCIAR
  {
    title: true,
    name: 'Financiar'
  },
  {
    name: 'Facturi Vanzare',
    url: '/base/facturi_vanzare',
    icon: 'icon-puzzle'
  },
  {
    name: 'Facturi Aprovizionare',
    url: '/base/facturi_aprovizionare',
    icon: 'icon-pencil'
  },
  {
    name: 'Raport Facturi',
    url: '/base/facturi_raport',
    icon: 'icon-drop'
  },


  //PARTENERI
  {
    title: true,
    name: 'Parteneri'
  },
  {
    name: 'Definire',
    url: '/base/parteneri_definire',
    icon: 'icon-puzzle'
  },
  {
    name: 'Raport',
    url: '/base/parteneri_raport',
    icon: 'icon-bell'
  },


  //VANZARI
  {
    title: true,
    name: 'Vanzari'
  },
  {
    name: 'Creare Comanda',
    url: '/base/creare_comanda',
    icon: 'icon-puzzle'
  },
  {
    name: 'Definire Angajat',
    url: '/base/definire_agent',
    icon: 'icon-pencil'
  },
  {
    name: 'Definire Masina',
    url: '/base/definire_masina',
    icon: 'icon-bell'
  },
  {
    name: 'Raport Vanzari',
    url: '/base/vanzari_raport',
    icon: 'icon-drop'
  },

  //APROVIZIONARE
  {
    title: true,
    name: 'Aprovizionare'
  },
  {
    name: 'Cerere oferta',
    url: '/base/cerere_oferta',
    icon: 'icon-puzzle'
  },
  {
    name: 'Calcul Necesar',
    url: '/base/calcul_necesar',
    icon: 'icon-bell'
  },
  {
    name: 'Contracte furnizori',
    url: '/base/contracte_furnizori',
    icon: 'icon-bell'
  },

  //GESTIUNE
  {
    title: true,
    name: 'Gestiune'
  },
  {
    name: 'Depozite si locatii',
    url: '/base/locatii',
    icon: 'icon-puzzle'
  },
  {
    name: 'Definire Articole',
    url: '/base/definire_articole',
    icon: 'icon-drop'
  },
  {
    name: 'Transferuri',
    url: '/500',
    icon: 'icon-bell'
  },
  {
    name: 'Inventariere',
    url: '/base/inventariere',
    icon: 'icon-pencil'
  },

  //PRODUCTIE
  {
    title: true,
    name: 'Productie'
  },
  {
    name: 'Raport Productie',
    url: '/base/productie_raport',
    icon: 'icon-puzzle'
  },
  {
    name: 'Raport Stocuri',
    url: '/base/stocuri_raport',
    icon: 'icon-drop'

  },
  {
    name: 'Fisa de magazie',
    url: '/404',
    icon: 'icon-bell'
  },




  // {
  //   name: 'Error 404',
  //   url: '/404',
  //   icon: 'icon-star'
  // },
  // {
  //   name: 'Error 500',
  //   url: '/500',
  //   icon: 'icon-star'
  // }


];




