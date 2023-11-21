export interface IDayStatistics {
  date: DateTimeString;
  timeExpired: Seconds;
  pauseTime: Seconds;
  completedTasks: number;
  stopsAmount: number;
}

export type CounterCallback = (
  stats: IDayStatistics[],
  startTime: Date,
  finishTime: Date
) => void;

const DAYS_REMEMBER_MEMBERS = 21;

export const stats = {
  countDayWorkTime: timeCounter.bind(null, updateData(updateDayWorkTime)),
  updateDayPauseTime: timeCounter.bind(null, updateData(updateDayPauseTime)),
  updateTasksAmount: timeCounter.bind(null, updateData(updateTasksAmount)),
  updateStopsAmount: timeCounter.bind(null, updateData(updateStopsAmount)),
};

function createStatisticObject(_date?: Date): IDayStatistics {
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
  dayMember: IDayStatistics,
  start: Date,
  finish: Date
) {
  const timeExpired = Math.round(+finish - +start);
  dayMember.timeExpired += timeExpired;
  return dayMember;
}

function updateStopsAmount(dayMember: IDayStatistics) {
  dayMember.stopsAmount += 1;
  return dayMember;
}

function updateTasksAmount(dayMember: IDayStatistics) {
  dayMember.completedTasks += 1;
  return dayMember;
}

function updateDayPauseTime(
  dayMember: IDayStatistics,
  start: Date,
  finish: Date
) {
  dayMember.pauseTime += +finish - +start;
  return dayMember;
}

function updateData(
  cb: (dayMember: IDayStatistics, start: Date, finish: Date) => IDayStatistics
) {
  return (stats: IDayStatistics[], start: Date, finish: Date) => {
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
  stats: IDayStatistics[],
  _date?: Date
) {
  const start = _date ?? new Date();

  return (_finish?: Date) => {
    const finish = _finish ?? new Date();

    cb(stats, start, finish);
  };
}
