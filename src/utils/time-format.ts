export function timeFormat(time: string): string {
  const timer = time.slice(0, 10).replace(/-/g, ', ')
  const [newYear, ...newTime] = timer.split(',')

  return `${newTime.toString()} - ${newYear}`
}
