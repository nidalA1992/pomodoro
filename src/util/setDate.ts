type TimeUnitType = 'Seconds' | 'Minutes' | 'Hours' | 'Date';

export function setDate(unit: TimeUnitType, value: number, _date?: Date): Date {
  const currentDate = _date ? new Date(_date) : new Date();
  const setUnit = `set${unit}` as
    | 'setSeconds'
    | 'setMinutes'
    | 'setHours'
    | 'setDate';

  const getUnit = `get${unit}` as
    | 'getSeconds'
    | 'getMinutes'
    | 'getHours'
    | 'getDate';

  return new Date(currentDate[setUnit](currentDate[getUnit]() + value));
}
