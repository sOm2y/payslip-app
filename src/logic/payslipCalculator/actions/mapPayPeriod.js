//@flow

import generateDateRange from '../../../shared/generateDateRange';
import { rejectEmptyNullUndefined } from '../shared/stringGuard';

function mapPayPeriod(getDatesRange: () => MonthAndRange[]) {
  return (month: string): string => {
    if (rejectEmptyNullUndefined(month)) {
      throw new Error('input month is invalid, please check logic/payslipCalculator/mapPayPeriod, got:', month);
    }

    const entry = getDatesRange().filter((mr) => mr.month === month)[0];

    if (entry === null || typeof entry === 'undefined') {
      throw new Error('input month is wrong, please check logic/payslipCalculator/mapPayPeriod, got:', month);
    }

    return getDatesRange().filter((mr) => mr.month === month)[0].range;
  };
}

export default (input: PaymentStartDateInput) => mapPayPeriod(generateDateRange)(input.paymentStartDate);
