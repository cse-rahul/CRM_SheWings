const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
        {
          id: 'attendance',
          title: 'Attendance',
          type: 'item',
          icon: 'feather icon-check',
          url: '/app/attendance'
        },
        {
          id: 'component',
          title: 'Client',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [
            {
              id: 'button',
              title: 'Person',
              type: 'item',
              url: '/basic/clientAdd/tabs-pills'
            },
            {
              id: 'badges',
              title: 'Companies',
              type: 'item',
              url: '/basic/companyAdd/companyAdd'
            },
            // {
            //   id: 'breadcrumb',
            //   title: 'Breadcrumb & Pagination',
            //   type: 'item',
            //   url: '/basic/breadcrumb-paging'
            // },
            // {
            //   id: 'collapse',
            //   title: 'Collapse',
            //   type: 'item',
            //   url: '/basic/collapse'
            // },
            // {
            //   id: 'tabs-pills',
            //   title: 'Tabs & Pills',
            //   type: 'item',
            //   url: '/basic/tabs-pills'
            // },
            // {
            //   id: 'typography',
            //   title: 'Typography',
            //   type: 'item',
            //   url: '/basic/typography'
            // }
          ]
        },
        {
          id: 'Team',
          title: 'Team',
          type: 'collapse',
          icon: "fa fa-users",

          children: [
            {
              id: 'button',
              title: 'Admin',
              type: 'item',
              url: '/basic/teamLogin'
            },
            {
              id: 'badges',
              title: 'Staff',
              type: 'item',
              url: '/basic/teamLogin2'
            },
            {
              id: 'badges',
              title: 'HR',
              type: 'item',
              url: '/basic/teamLogin3'
            },
          ]
        },
        {
          id: 'accounting',
          title: 'Accounting',
          type: 'collapse',
          icon: "fa fa-calculator",

          children: [
            {
              id: 'button',
              title: 'Staff Payement',
              type: 'item',
              url: '/basic/collapse'
            },
            {
              id: 'badges',
              title: 'Client Payement',
              type: 'item',
              url: '/basic/badges'
            },
            
          ]
        },
        {
          id: 'client-project',
          title: 'Client Project',
          type: 'collapse',
          icon: "fa fa-briefcase",

          children: [
            {
              id: 'button',
              title: 'Project-List',
              type: 'item',
              url: '/basic/breadcrumb-paging'
            },
            {
              id: 'badges',
              title: 'Create-Project',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            
          ]
        },
        {
          id: 'team-task',
          title: 'Team Task',
          type: 'collapse',
          icon: "fa fa-tasks",

          children: [
            {
              id: 'button',
              title: 'Running Task',
              type: 'item',
              url: '/basic/button'
            },
            {
              id: 'badges',
              title: 'Archieved Task',
              type: 'item',
              url: '/basic/badges'
            },
            
          ]
        }
        

      ]
    },
    {
      id: 'ui-forms',
      title: 'Feedback & Support',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Feedback',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/forms/form-basic'
        },
        {
          id: 'table',
          title: 'Table',
          type: 'item',
          icon: 'feather icon-server',
          url: '/tables/bootstrap'
        }
      ]
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'charts',
          title: 'Charts',
          type: 'item',
          icon: 'feather icon-pie-chart',
          url: '/charts/nvd3'
        },
        {
          id: 'maps',
          title: 'Maps',
          type: 'item',
          icon: 'feather icon-map',
          url: '/maps/google-map'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          badge: {
            title: 'New',
            type: 'label-danger'
          },
          children: [
            {
              id: 'signup-1',
              title: 'Sign up',
              type: 'item',
              url: '/auth/signup-1',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'signin-1',
              title: 'Sign in',
              type: 'item',
              url: '/auth/signin-1',
              target: true,
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          icon: 'feather icon-book',
          classes: 'nav-item',
          url: 'https://codedthemes.gitbook.io/datta/',
          target: true,
          external: true
        },
        // {
        //   id: 'menu-level',
        //   title: 'Menu Levels',
        //   type: 'collapse',
        //   icon: 'feather icon-menu',
        //   children: [
        //     {
        //       id: 'menu-level-1.1',
        //       title: 'Menu Level 1.1',
        //       type: 'item',
        //       url: '#!'
        //     },
        //     // {
        //     //   id: 'menu-level-1.2',
        //     //   title: 'Menu Level 2.2',
        //     //   type: 'collapse',
        //     //   children: [
        //     //     {
        //     //       id: 'menu-level-2.1',
        //     //       title: 'Menu Level 2.1',
        //     //       type: 'item',
        //     //       url: '#'
        //     //     },
        //     //     {
        //     //       id: 'menu-level-2.2',
        //     //       title: 'Menu Level 2.2',
        //     //       type: 'collapse',
        //     //       // children: [
        //     //       //   {
        //     //       //     id: 'menu-level-3.1',
        //     //       //     title: 'Menu Level 3.1',
        //     //       //     type: 'item',
        //     //       //     url: '#'
        //     //       //   },
        //     //       //   {
        //     //       //     id: 'menu-level-3.2',
        //     //       //     title: 'Menu Level 3.2',
        //     //       //     type: 'item',
        //     //       //     url: '#'
        //     //       //   }
        //     //       // ]
        //     //     }
        //     //   ]
        //     // }
        //   ]
        // },
        {
          id: 'disabled-menu',
          title: 'Logout',
          type: 'item',
          url: '#',
          classes: 'nav-item',
          icon: 'feather icon-power'
        }
      ]
    }
  ]
};

export default menuItems;
