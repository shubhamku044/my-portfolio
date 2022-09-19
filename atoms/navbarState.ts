import { atom } from 'recoil';

export const navBarState = atom<boolean>({
  key: 'navbarState',
  default: false,
});
