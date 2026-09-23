import type { AppState } from '../types'

const STORAGE_KEY = 'dietas-al-dia-state'

export function readStorage(): AppState | null {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as AppState
  } catch {
    return null
  }
}

export function writeStorage(state: AppState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function resetStorage(): void {
  window.localStorage.removeItem(STORAGE_KEY)
}
