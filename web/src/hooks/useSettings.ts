const STORAGE_KEY = 'ssml-settings'

export interface Settings {
  email: string
  password: string
}

const defaults: Settings = {
  email: '',
  password: '',
}

export function getSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaults
    return { ...defaults, ...JSON.parse(raw) }
  } catch {
    return defaults
  }
}

export function saveSettings(data: Settings): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
