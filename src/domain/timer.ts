import { nanoid } from 'nanoid';

export interface ITimerOptions {
  roundTime: Minutes;
  bigBreakTime: Minutes;
  smallBreakTime: Minutes;
  bigBreakPeriod: number;
}

export const createTimerOptions = () => {
  return {
    id: nanoid(),
    roundTime: 25,
    bigBreakTime: 15,
    smallBreakTime: 5,
    bigBreakPeriod: 4,
  };
};

export const updateTimerOptions = (
  timer: ITimerOptions,
  updatedTimer: Partial<ITimerOptions>
) => {
  return {
    ...timer,
    ...updatedTimer,
  };
};
