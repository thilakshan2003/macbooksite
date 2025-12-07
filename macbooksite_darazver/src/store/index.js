// Import the `create` helper from Zustand to build a global store hook.
import { create } from 'zustand'

// `useStore` is a hook components will call to read/update shared state.
// The function passed to `create` receives `set`, a helper to update state.
const useStore = create((set) => ({
  color: '#2e2c2e',
  // setColor: action to update the `color` state. `set` performs a shallow merge.
  setColor: (color) => set({ color }),

  scale: 0.08,
  // setScale: action to update the `scale` state.
  setScale: (scale) => set({ scale }),

  // reset: action that restores both `color` and `scale` to their defaults.
  reset: () => set({ color: '#2e2c2e', scale: 0.08 }),
}))

export default useStore