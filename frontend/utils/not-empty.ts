export function notEmpty(
  value: number | string | boolean,
  defaultValue = ""
): number | string | boolean {
  return value !== null && value !== undefined ? value : defaultValue;
}
