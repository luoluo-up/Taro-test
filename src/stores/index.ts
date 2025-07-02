import { createPinia } from "pinia";
import { useVenueStore } from "@/stores/modules/venue";
export const store = createPinia();
const storeObj = {
  venue: useVenueStore,
};

export function useStore(key: string) {
  return storeObj[key]();
}
