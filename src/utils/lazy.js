import lazyPlugin from "vue3-lazy";
import loading from "@/assets/images/loading.gif";
import error from "@/assets/images/load.gif";
export const lazyImg =  {
  lazyOptions: {
    loading: loading,
    error: error,
  },
  lazyPlugin,
};
