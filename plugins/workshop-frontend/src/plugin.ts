import {
  createComponentExtension,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const workshopFrontendPlugin = createPlugin({
  id: 'workshop-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const WorkshopFrontendPage = workshopFrontendPlugin.provide(
  createRoutableExtension({
    name: 'WorkshopFrontendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

export const WorkshopEntityPage = workshopFrontendPlugin.provide(
  createComponentExtension({
    name: 'WorkshopEntityPage',
    component: {
      lazy: () =>
        import('./components/EntityTabComponent').then(m => m.EntityTabComponent),
    },
  }),
)
