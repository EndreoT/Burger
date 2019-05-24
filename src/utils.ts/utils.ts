export function convertToBoolean(input: string): boolean {
  try {
    return JSON.parse(input);
  } catch (err) {
    return false;
  }
}

export function convertToInteger(input: string): number {
  let result: number = Number(input);
  if (isNaN(result) || !Number.isInteger(result)) {
    result = -1;
  }
  return result;
}