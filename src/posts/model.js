import { createEffect, createStore } from 'effector';
import { get } from '../request';
import { limit } from '../helpers';

export const getFavoritePostsByAuthor = createEffect().use((author, page) =>
  get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const getPostsByAuthor = createEffect().use((author, page) =>
  get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const getPosts = createEffect().use((page) =>
  get(`/articles?${limit(10, page)}`),
);

export const getUserPosts = createEffect().use(() =>
  get('/articles/feed?limit=10&offset=0'),
);

export const getPostsByTag = createEffect().use((tag, page) =>
  get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
);

const initialState = { articles: [], articlesCount: null };

export const $posts = createStore(initialState).on(
  getPosts.done,
  (state, { result }) => ({ ...state, ...result }),
);

export const $userPosts = createStore(initialState).on(
  getUserPosts.done,
  (state, { result }) => ({ ...state, ...result }),
);

export const $postsByTags = createStore(initialState).on(
  getPostsByTag.done,
  (state, { result }) => ({ ...state, ...result }),
);
