import create from 'zustand'

type State = {
  count: number
  increment: () => void
  reset: () => void
}

export const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set({ count: 0 })
}))
