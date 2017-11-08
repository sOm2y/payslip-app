//@flow

import format from 'date-fns/format';
import addMonths from 'date-fns/add_months';
import startOfMonth from 'date-fns/start_of_month';
import subtractDays from 'date-fns/sub_days';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';

function formatDate(date: Date) {
  return format(date, 'Do MMMM');
}

function from0To11() {
  return Array.from(Array(12).keys());
}

function firstDayOfCurrentMonth() {
  const today = new Date();

  return startOfMonth(today);
}

/**
 * put things together
 */
function generateDateRange(
  from0To11: () => number[],
  getFirstDayOfThisMonth: () => Date,
  addMonths: (Date, number) => Date,
  subtractDays: (Date, number) => Date,
  getYear: Date => number,
  getDateString: Date => string
) {
  const firstDayOfThisMonth = getFirstDayOfThisMonth();

  return (): MonthAndRange[] => {
    return from0To11().map((increment) => {
      const firstDay = addMonths(firstDayOfThisMonth, increment);
      const lastDay = subtractDays(addMonths(firstDay, 1), 1);
      const thisYear = getYear(firstDay);

      return {
        month: getMonth(firstDay).toString(),
        range: `${getDateString(firstDay)} - ${getDateString(lastDay)}, ${thisYear}`
      };
    });
  };
}

export default generateDateRange(from0To11, firstDayOfCurrentMonth, addMonths, subtractDays, getYear, formatDate);
