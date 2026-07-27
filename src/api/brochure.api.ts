import { apiClient } from "./axiosInstance";
import type { BrochureInfo, Marca, TipoLista } from "./pricesList.types";

const BASE_PATH = "/price-list";

// Info del PDF de brochure vigente (si existe) para una marca + tipo.
// Este proyecto es de solo lectura: la subida/eliminación del PDF vive en
// el panel de administración de BrochureAvellano.
export const getBrochureInfo = async (
  marca: Marca,
  tipo: TipoLista,
): Promise<BrochureInfo> => {
  const { data } = await apiClient.get<BrochureInfo>(
    `${BASE_PATH}/brand/${marca}/${tipo}/brochure`,
  );
  return data;
};
