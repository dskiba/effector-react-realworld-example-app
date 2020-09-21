import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as auth from 'features/auth';
import { removeNotASCII } from 'library/ascii';
import * as router from 'library/router';
import * as types from './types';

export const RootGate = createGate();

export const $$currentTag = router.model.$location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const getUserFx = createEffect(() =>
  api.get<auth.types.AuthUserResponse>('/user'),
);

export const getTagsFx = createEffect(() => api.get<types.Tags>('/tags'));

export const initAuthAppFx = createEffect(() =>
  Promise.all([getUserFx(), getTagsFx()]),
);

export const $tags = createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
