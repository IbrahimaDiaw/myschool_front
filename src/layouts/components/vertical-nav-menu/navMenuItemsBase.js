/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: 'Dashboard',
    tag: '2',
    tagColor: 'warning',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
    submenu: [
      {
        url: '/dashboard/analytics',
        name: 'Analytics',
        slug: 'dashboard-analytics',
        i18n: 'Analytics'
      },
      {
        url: '/dashboard/ecommerce',
        name: 'eCommerce',
        slug: 'dashboard-ecommerce',
        i18n: 'eCommerce'
      }
    ]
  },
  {
    header: 'UI',
    icon: 'LayersIcon',
    i18n: 'SAMA ECOLE',
    items: [
      {
        url: null,
        name: 'Data List',
        // tag: 'new',
        tagColor: 'primary',
        icon: 'ListIcon',
        i18n: 'Gestion d\'ecole',
        submenu: [
          {
            url: '/samaecole/Gestion/classes/classe',
            name: 'Classe',
            slug: 'classe',
            i18n: 'Classe'
          },
          {
            url: '/samaecole/Gestion/niveaux/niveau',
            name: 'Niveau',
            slug: 'niveau',
            i18n: 'Niveau'
          },
          {
            url: '/samaecole/Gestion/AnneeScolaire/anneescolaire',
            name: 'Annee Scolaire',
            slug: 'Annee-Scolaire',
            i18n: 'Annee Scolaire'
          }
        ]
      },
     
      {
        url: null,
        name: 'RH',
        icon: 'LayoutIcon',
        i18n: 'RH',
        submenu: [
          {
            url: '/samaecole/RH/eleves/eleve',
            name: 'eleve',
            slug: 'eleves',
            i18n: 'Eleve'
          },
          {
            url: '/samaecole/RH/Enseignant/enseignant',
            name: 'Enseignant',
            slug: 'enseignant',
            i18n: 'Enseignant'
          },
          {
            url: '/samaecole/RH/Parents/parent',
            name: 'Parent',
            slug: 'Parent',
            i18n: 'Parent'
          }
        ]
      },
      {
        url: '/samaecole/Gestion/EmploiDuTemps/emploi_du_temps',
        name: 'Emploi du Temps',
        slug: 'emploi_du_temps',
        icon: 'emploi-du-temps',
        i18n: 'Emploi du Temps'
      },
      {
        url: null,
        name: 'Gestion Notes',
        icon: 'CreditCardIcon',
        i18n: 'Gestion Notes',
        submenu: [
          {
            url: '/samaecole/Gestion/Evaluations/evaluation',
            name: 'Evaluation',
            slug: 'evaluation',
            i18n: 'Evaluation'
          },
          {
            url: '/samaecole/Gestion/Matieres/matiere',
            name: 'Matiere',
            slug: 'matiere',
            i18n: 'Matiere'
          }
        ]
      },
      {
        url: '/samaecole/Gestion/Absences/absence',
        name: 'Absences absences',
        slug: 'Absences',
        icon: '',
        i18n: 'Absences'
      },
      {
        url: '/samaecole/Gestion/Retards/Retard',
        name: 'Retard retard',
        slug: 'retard',
        icon: '',
        i18n: 'Retards'
      }
    ]
  },
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: '/apps/email',
        name: 'Email',
        slug: 'email',
        icon: 'MailIcon',
        i18n: 'Email'
      },
      {
        url: '/apps/chat',
        name: 'Chat',
        slug: 'chat',
        icon: 'MessageSquareIcon',
        i18n: 'Chat'
      },
      {
        url: '/apps/todo',
        name: 'Todo',
        slug: 'todo',
        icon: 'CheckSquareIcon',
        i18n: 'Todo'
      },
      {
        url: '/apps/calendar/vue-simple-calendar',
        name: 'Calendar',
        slug: 'calendar-simple-calendar',
        icon: 'CalendarIcon',
        tagColor: 'success',
        i18n: 'Calendar'
      },
      
      {
        url: null,
        name: 'User',
        icon: 'UserIcon',
        i18n: 'User',
        submenu: [
          {
            url: '/apps/user/user-list',
            name: 'List',
            slug: 'app-user-list',
            i18n: 'List'
          },
          {
            url: '/apps/user/user-view/268',
            name: 'View',
            slug: 'app-user-view',
            i18n: 'View'
          },
          {
            url: '/apps/user/user-edit/268',
            name: 'Edit',
            slug: 'app-user-edit',
            i18n: 'Edit'
          }
        ]
      }
    ]
  },
  
  
  {
    header: 'Pages',
    icon: 'FileIcon',
    i18n: 'Pages',
    items: [
      {
        url: '/pages/profile',
        slug: 'page-profile',
        name: 'Profile',
        icon: 'UserIcon',
        i18n: 'Profile'
      },
      {
        url: '/pages/user-settings',
        slug: 'page-user-settings',
        name: 'User Settings',
        icon: 'SettingsIcon',
        i18n: 'UserSettings'
      },
      {
        url: '/pages/faq',
        slug: 'page-faq',
        name: 'FAQ',
        icon: 'HelpCircleIcon',
        i18n: 'FAQ'
      },
      {
        url: '/pages/knowledge-base',
        slug: 'page-knowledge-base',
        name: 'Knowledge Base',
        icon: 'InfoIcon',
        i18n: 'KnowledgeBase'
      },
      {
        url: '/pages/search',
        slug: 'page-search',
        name: 'Search',
        icon: 'SearchIcon',
        i18n: 'Search'
      },
      {
        url: '/pages/invoice',
        slug: 'page-invoice',
        name: 'Invoice',
        icon: 'InfoIcon',
        i18n: 'A propos'
      }
    ]
  },
  {
    header: 'Maps',
    icon: 'PieChartIcon',
    i18n: 'ChartsAndMaps',
    items: [
      {
        url: '/charts-and-maps/maps/google-map',
        name: 'Google Map',
        icon: 'MapIcon',
        slug: 'extra-component-maps-google-map',
        i18n: 'GoogleMap'
      }
    ]
  },
  {
    header: 'Others',
    icon: 'MoreHorizontalIcon',
    i18n: 'Others',
    items: [
      {
        url: null,
        name: 'Support',
        icon: 'SmileIcon',
        i18n: 'Support',
        submenu: [
          {
            url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
            name: 'Documentation',
            icon: 'BookOpenIcon',
            slug: 'external',
            i18n: 'Documentation',
            target: '_blank'
          },
          {
            url: 'https://pixinvent.ticksy.com/',
            name: 'Raise Support',
            icon: 'LifeBuoyIcon',
            slug: 'external',
            i18n: 'RaiseSupport',
            target: '_blank'
          }
        ]
      }
    ]
  }
]

