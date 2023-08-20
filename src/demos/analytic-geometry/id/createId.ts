let idCounter = 0

export function createId(): string {
  return String(idCounter++)
}
