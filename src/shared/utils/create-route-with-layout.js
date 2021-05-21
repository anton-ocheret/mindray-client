import { mergeDeepRight } from 'ramda';
import LayoutDefault from '@shared/components/layouts/default';

const createRouteWithLayout = (layout) => (options) =>
  mergeDeepRight(options, { meta: { layout } });

export const configureDefaultLayout = createRouteWithLayout(LayoutDefault);
