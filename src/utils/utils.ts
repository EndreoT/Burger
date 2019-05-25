export function convertStringToBoolean(input: string): boolean {
  try {
    const result: number =  JSON.parse(input);
    if (result >= 1) {
      return true;
    }
    return false;
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
