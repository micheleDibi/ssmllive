import { useState, useEffect } from 'react'
import { getSettings, saveSettings } from '../hooks/useSettings'

export function SettingsPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const s = getSettings()
    setEmail(s.email)
    setPassword(s.password)
  }, [])

  const handleSave = () => {
    saveSettings({ email, password })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="w-full h-full bg-[#0c0919] flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full max-w-[500px]" style={{ padding: '0 24px' }}>
        {/* Logo */}
        <div className="flex justify-center" style={{ marginBottom: 32 }}>
          <img src="/assets/logos/ssml-logo-white.png" alt="SSML" className="h-14" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center" style={{ marginBottom: 8 }}>
          Impostazioni
        </h1>
        <p className="text-sm text-white/40 text-center" style={{ marginBottom: 40 }}>
          Configura le credenziali per il digital signage
        </p>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Email */}
          <div>
            <label className="text-xs text-white/40 uppercase tracking-[0.15em] block" style={{ marginBottom: 8 }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info@ssmllameziaterme.it"
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-primary/50 transition-colors"
              style={{ padding: '14px 18px', fontSize: 16 }}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-white/40 uppercase tracking-[0.15em] block" style={{ marginBottom: 8 }}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-primary/50 transition-colors"
                style={{ padding: '14px 18px', fontSize: 16, paddingRight: 56 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 text-sm transition-colors"
              >
                {showPassword ? 'Nascondi' : 'Mostra'}
              </button>
            </div>
          </div>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="w-full rounded-xl text-white font-semibold transition-all"
          style={{
            marginTop: 32,
            padding: '14px',
            fontSize: 16,
            background: saved ? '#3db166' : '#ffb606',
            color: saved ? 'white' : '#0c0919',
          }}
        >
          {saved ? 'Salvato!' : 'Salva'}
        </button>

        {/* Back link */}
        <a
          href="/"
          className="block text-center text-sm text-white/30 hover:text-white/60 transition-colors"
          style={{ marginTop: 24 }}
        >
          ← Torna alla presentazione
        </a>
      </div>
    </div>
  )
}
