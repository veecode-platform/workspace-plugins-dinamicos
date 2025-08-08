import { createDevApp } from '@backstage/dev-utils';
import { workshopFrontendPlugin, WorkshopFrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(workshopFrontendPlugin)
  .addPage({
    element: <WorkshopFrontendPage />,
    title: 'Root Page',
    path: '/workshop-frontend',
  })
  .render();
