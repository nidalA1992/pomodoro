export interface IStatisticData {
  date: DateTimeString;
  timeExpired: Seconds;
  pauseTime: Seconds;
  completedTasks: number;
  stopsAmount: number;
}

// export interface IStatistic
export type CounterCallback = (
  stats: IStatisticData[],
  startTime: Date,
  finishTime: Date
) => void;

const DAYS_REMEMBER_MEMBERS = 21;

export const statsControls = {
  countDayWorkTime: timeCounter.bind(null, updateData(updateDayWorkTime)),
  updateDayPauseTime: timeCounter.bind(null, updateData(updateDayPauseTime)),
  updateTasksAmount: updateData(updateTasksAmount),
  updateStopsAmount: updateData(updateStopsAmount),
};

function createStatisticObject(_date?: Date): IStatisticData {
  const date = _date ?? new Date();

  return {
    date: date.toLocaleDateString(),
    timeExpired: 0,
    pauseTime: 0,
    completedTasks: 0,
    stopsAmount: 0,
  };
}

function updateDayWorkTime(
  dayMember: IStatisticData,
  start: Date,
  finish: Date
) {
  const timeExpired = Math.round(+finish - +start);
  dayMember.timeExpired += timeExpired;
  return dayMember;
}

function updateStopsAmount(dayMember: IStatisticData) {
  dayMember.stopsAmount += 1;
  return dayMember;
}

function updateTasksAmount(dayMember: IStatisticData) {
  dayMember.completedTasks += 1;
  return dayMember;
}

function updateDayPauseTime(
  dayMember: IStatisticData,
  start: Date,
  finish: Date
) {
  dayMember.pauseTime += +finish - +start;
  return dayMember;
}

function updateData(
  cb: (dayMember: IStatisticData, start: Date, finish: Date) => IStatisticData
) {
  return (stats: IStatisticData[], start = new Date(), finish = new Date()) => {
    const existMember = stats.find(
      stat => stat.date === start.toLocaleDateString()
    );

    if (existMember) {
      cb(existMember, start, finish);
    } else {
      const newStatsObject = createStatisticObject(finish || start);
      stats.push(cb(newStatsObject, start, finish));
    }

    if (stats.length > DAYS_REMEMBER_MEMBERS) {
      stats.shift();
    }
  };
}

function timeCounter(
  cb: CounterCallback,
  stats: IStatisticData[],
  _date?: Date
) {
  const start = _date ?? new Date();

  return (_finish?: Date) => {
    const finish = _finish ?? new Date();

    cb(stats, start, finish);
  };
}
