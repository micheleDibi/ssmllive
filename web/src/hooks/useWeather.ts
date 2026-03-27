import { useState, useEffect } from 'react'

interface Weather {
  temperature: number
  description: string
  icon: string
  city: string
}

const weatherCodes: Record<number, { desc: string; icon: string }> = {
  0: { desc: 'Sereno', icon: '☀️' },
  1: { desc: 'Prevalentemente sereno', icon: '🌤️' },
  2: { desc: 'Parzialmente nuvoloso', icon: '⛅' },
  3: { desc: 'Nuvoloso', icon: '☁️' },
  45: { desc: 'Nebbia', icon: '🌫️' },
  48: { desc: 'Nebbia con brina', icon: '🌫️' },
  51: { desc: 'Pioggerella leggera', icon: '🌦️' },
  53: { desc: 'Pioggerella', icon: '🌦️' },
  55: { desc: 'Pioggerella intensa', icon: '🌧️' },
  61: { desc: 'Pioggia leggera', icon: '🌧️' },
  63: { desc: 'Pioggia', icon: '🌧️' },
  65: { desc: 'Pioggia intensa', icon: '🌧️' },
  71: { desc: 'Neve leggera', icon: '🌨️' },
  73: { desc: 'Neve', icon: '❄️' },
  75: { desc: 'Neve intensa', icon: '❄️' },
  80: { desc: 'Rovesci leggeri', icon: '🌦️' },
  81: { desc: 'Rovesci', icon: '🌧️' },
  82: { desc: 'Rovesci intensi', icon: '🌧️' },
  95: { desc: 'Temporale', icon: '⛈️' },
  96: { desc: 'Temporale con grandine', icon: '⛈️' },
  99: { desc: 'Temporale con grandine', icon: '⛈️' },
}

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get user location
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
        })
        const { latitude, longitude } = pos.coords

        // Get city name
        const geoRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
        )
        const geoData = await geoRes.json()

        // Reverse geocode for city name
        const cityRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=it`
        )
        const cityData = await cityRes.json()
        const city = cityData.address?.city || cityData.address?.town || cityData.address?.village || 'Posizione attuale'

        const code = geoData.current.weather_code
        const info = weatherCodes[code] || { desc: 'N/D', icon: '🌡️' }

        setWeather({
          temperature: Math.round(geoData.current.temperature_2m),
          description: info.desc,
          icon: info.icon,
          city,
        })
      } catch {
        // Fallback to Lamezia Terme if geolocation fails
        try {
          const res = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=38.96&longitude=16.31&current=temperature_2m,weather_code&timezone=Europe/Rome'
          )
          const data = await res.json()
          const code = data.current.weather_code
          const info = weatherCodes[code] || { desc: 'N/D', icon: '🌡️' }
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            description: info.desc,
            icon: info.icon,
            city: 'Lamezia Terme',
          })
        } catch {
          // silently fail
        }
      }
    }

    fetchWeather()
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return weather
}
