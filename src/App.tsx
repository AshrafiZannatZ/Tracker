import React from 'react'
import { useStore } from './store/useStore'
import Button from './components/ui/Button'

export default function App() {
  const { count, increment, reset } = useStore()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Tracker — Frontend Bootstrap</h1>
        <p className="mb-4 text-gray-600">A Vite + React + Tailwind starter using Zustand for state.</p>

        <div className="flex items-center gap-4">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={reset} className="bg-gray-200 text-gray-800">Reset</Button>
          <div className="ml-auto font-mono">Count: {count}</div>
        </div>
      </div>
    </div>
  )
}
