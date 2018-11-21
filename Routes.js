// @flow
import Loadable from 'react-loadable';
import PageLoading from './client/components/loaders/PageLoading';

export default [{
  component: Loadable({
    loader: () => import('./client/App'),
    loading: PageLoading,
  }),
  routes: [{
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
