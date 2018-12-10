// @flow
import Loadable from 'react-loadable';
import PageLoading from './client/components/loaders/PageLoading';

export default [{
  component: Loadable({
    loader: () => import('./client/App'),
    loading: PageLoading,
  }),
  routes: [
  {
    path: '/contact',
    component: Loadable({
      loader: () => import('./client/pages/Contact'),
      loading: PageLoading,
    }),
  },
  {
    path: '/about',
    component: Loadable({
      loader: () => import('./client/pages/About'),
      loading: PageLoading,
    }),
  },{
    path: '/',
    component: Loadable({
      loader: () => import('./client/pages/Home'),
      loading: PageLoading,
    }),
    exact: true,
  }, {
    component: Loadable({
      loader: () => import('./client/pages/NotFound'),
      loading: PageLoading,
    }),
  }],
}];
