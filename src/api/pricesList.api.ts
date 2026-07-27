import axios from "axios";

import { apiClient } from "./axiosInstance";
import type { Marca, PriceList, TipoLista } from "./pricesList.types";

const BASE_PATH = "/price-list";

// El backend responde 404 cuando una marca/tipo aún no tiene listas creadas.
// Para el sitio público eso es un estado normal ("todavía no hay listas"),
// no un error, así que se traduce a un arreglo vacío.
const isNotFound = (error: unknown) =>
  axios.isAxiosError(error) && error.response?.status === 404;

// ---- Lecturas (GET) ----
// Este proyecto es de solo lectura (sitio público): no incluye las
// operaciones de escritura (crear/editar/eliminar listas y lotes), que
// viven en el panel de administración de BrochureAvellano.

export const getPriceListsByMarca = async (marca: Marca): Promise<PriceList[]> => {
  try {
    const { data } = await apiClient.get<PriceList[]>(`${BASE_PATH}/brand/${marca}`);
    return data;
  } catch (error) {
    if (isNotFound(error)) return [];
    throw error;
  }
};

export const getPriceListsByMarcaAndTipo = async (
  marca: Marca,
  tipo: TipoLista,
): Promise<PriceList[]> => {
  try {
    const { data } = await apiClient.get<PriceList[]>(`${BASE_PATH}/brand/${marca}/${tipo}`);
    return data;
  } catch (error) {
    if (isNotFound(error)) return [];
    throw error;
  }
};
