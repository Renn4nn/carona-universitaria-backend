import { expressjwt } from "express-jwt";

export const segredo = 'chave_secreta_da_api';

export const protegerRota = expressjwt({
  secret: segredo,
  algorithms: ['HS256'],
});

export default protegerRota;