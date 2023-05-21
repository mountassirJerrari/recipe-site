import { useMemo, useState } from "react";

export const useNextPrev = (dataLength: number) => {
  const [state, setState] = useState(0);
  const handlers = useMemo(
    () => ({
      next: () => {
        if (!dataLength) return setState((prev) => prev + 1);
        if (dataLength - 1 === state) return setState(0);
        setState((prev) => prev + 1);
      },
      prev: () => {
        if (!dataLength) return setState((prev) => prev - 1);
        if (state === 0) return setState(dataLength - 1);
        setState((prev) => prev - 1);
      },
    }),
    [dataLength, state]
  );
  return { state, handlers };
};
