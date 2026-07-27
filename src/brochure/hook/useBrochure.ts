import { useQuery } from "@tanstack/react-query";

import { getBrochureInfo } from "@/api/brochure.api";
import type { Marca, TipoLista } from "@/api/pricesList.types";

export const brochureQueryKey = (marca: Marca, tipo: TipoLista) =>
  ["brochure", marca, tipo] as const;

// Info del PDF de brochure vigente (si existe) para una marca + tipo.
export function useBrochureInfo(marca: Marca, tipo: TipoLista) {
  return useQuery({
    queryKey: brochureQueryKey(marca, tipo),
    queryFn: () => getBrochureInfo(marca, tipo),
  });
}
