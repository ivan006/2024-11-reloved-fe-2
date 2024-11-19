const routes = [
  {
    path: '/',
    component: () => import('src/views/layouts/EmptyLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/',
        component: () => import('src/views/layouts/MainLayout.vue'),
        redirect: to => { return '/about' },
        children: [
          {
            path: '/login',
            name: '/login',
            component: () => import('src/controllers/auth/SigninView.vue'),
            meta: { requiresAuth: false }
          },
          {
            path: '/register',
            name: '/register',
            component: () => import('src/controllers/auth/JoinView.vue'),
            meta: { requiresAuth: false }
          },
          {
            path: '/about',
            name: '/about',
            component: () => import('src/controllers/AboutController.vue'),
            meta: {
              breadcrumbName: 'About',
              breadcrumbParentName: '',
              requiresAuth: false,
            },
          },
          {
            path: '/lists/users',
            name: '/lists/users',
            component: () => import('src/controllers/lists/users/UserListController.vue'),
            meta: {
              breadcrumbName: 'Users',
              breadcrumbParentName: '',
              requiresAuth: false,
            },
          },
          {
            path: '/lists/users/:rId/:rName',
            name: '/lists/users/:rId/:rName',
            component: () => import('src/controllers/lists/users/UserReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/users',
              requiresAuth: false,
            },
          },

          {
            path: '/lists/brands',
            name: '/lists/brands',
            component: () => import('src/controllers/lists/brands/BrandListController.vue'),
            meta: {
              breadcrumbName: 'Brands',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/brands/:rId/:rName',
            name: '/lists/brands/:rId/:rName',
            component: () => import('src/controllers/lists/brands/BrandReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/brands',
            },
          },
          {
            path: '/lists/categories',
            name: '/lists/categories',
            component: () => import('src/controllers/lists/categories/CategoryListController.vue'),
            meta: {
              breadcrumbName: 'Categories',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/categories/:rId/:rName',
            name: '/lists/categories/:rId/:rName',
            component: () => import('src/controllers/lists/categories/CategoryReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/categories',
            },
          },
          {
            path: '/lists/genders',
            name: '/lists/genders',
            component: () => import('src/controllers/lists/genders/GenderListController.vue'),
            meta: {
              breadcrumbName: 'Genders',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/genders/:rId/:rName',
            name: '/lists/genders/:rId/:rName',
            component: () => import('src/controllers/lists/genders/GenderReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/genders',
            },
          },
          {
            path: '/lists/products',
            name: '/lists/products',
            component: () => import('src/controllers/lists/products/ProductListController.vue'),
            meta: {
              breadcrumbName: 'Products',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/products/:rId/:rName',
            name: '/lists/products/:rId/:rName',
            component: () => import('src/controllers/lists/products/ProductReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/products',
            },
          },
        ],
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/controllers/ErrorNotFound.vue'),
    meta: { requiresAuth: false }
  }
];

export default routes;
