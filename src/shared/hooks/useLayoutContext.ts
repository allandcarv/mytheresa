import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  title: string;
  setTitle?: (t: string) => void;
}

export function usePageTitle() {
  return useOutletContext<LayoutContext>();
}
