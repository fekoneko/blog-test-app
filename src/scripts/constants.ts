export const BASE_URL =
  (import.meta as any).env.BASE_URL[(import.meta as any).env.BASE_URL.length - 1] === '/'
    ? (import.meta as any).env.BASE_URL
    : `${(import.meta as any).env.BASE_URL}/`;
