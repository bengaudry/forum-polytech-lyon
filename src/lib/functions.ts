import { useNow } from '@/composables/useNow.ts'

export const shuffle = <T>(items: T[]): T[] => {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const valueAtI = shuffled[i]
    const valueAtJ = shuffled[j]
    if (valueAtI === undefined || valueAtJ === undefined) continue
    shuffled[i] = valueAtJ
    shuffled[j] = valueAtI
  }
  return shuffled
}

export const getTimeIndicator = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Horaire a confirmer'

  const now = useNow()

  const diffToStartMs = startTime.getTime() - now.value.getTime()
  const diffToEndMs = endTime.getTime() - now.value.getTime()

  if (diffToEndMs < 0) return 'Termine'
  if (diffToStartMs <= 0) return 'En cours'

  const diffMinutes = Math.ceil(diffToStartMs / 60000)
  if (diffMinutes > 60) return "Dans plus d'une heure"
  return diffMinutes === 1 ? 'Dans 1 minute' : `Dans ${diffMinutes} minutes`
}

export const formatSchedule = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Toute la journee'
  const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${dateFormatter.format(startTime)} - ${dateFormatter.format(endTime)}`
}
