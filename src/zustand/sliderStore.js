import { useRef } from "react";
import { create } from "zustand";

const useSliderStore = create((set) => ({
  bears: 10,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),

  sliderRef: { current: null },  
  setSliderRef: (ref) =>
    set((state) => ({ ...state, sliderRef: { current: ref } })),
}));

export default useSliderStore;
