import { useEffect, useState } from "react";

const monthDiff = (dateFrom: Date, dateTo: Date) => {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }

const useDateDifference = (startDate: string, endDate: string, isCurrentJob: boolean): string => {
    const [date, setDate] = useState('');
  
    useEffect(() => {
      const start: string = startDate.replace(/-/g, "/");
      const startDateObject = new Date(start);
      const end: string = endDate.replace(/-/g, "/");
      const endDateObject = new Date(end);

      const monthDifference: number = monthDiff(startDateObject, endDateObject);

      if (isCurrentJob) {
        setDate(`Depuis ${startDateObject.toLocaleString('fr-CA', { month: 'long' })} ${startDateObject.getFullYear()}`);
      } else if (monthDifference / 12 > 1) {
        setDate(`De ${startDateObject.toLocaleString('fr-CA', { month: 'long' })} ${startDateObject.getFullYear()} à ${endDateObject.toLocaleString('fr-CA', { month: 'long' })} ${endDateObject.getFullYear()} (${Math.trunc(monthDifference / 12)} ans, ${monthDifference % 12} mois)`);
      } else if (monthDifference / 12 == 1) {
        setDate(`De ${startDateObject.toLocaleString('fr-CA', { month: 'long' })} ${startDateObject.getFullYear()} à ${endDateObject.toLocaleString('fr-CA', { month: 'long' })} ${endDateObject.getFullYear()} (${Math.trunc(monthDifference / 12)} an, ${monthDifference % 12} mois)`);
      } else {
        setDate(`De ${startDateObject.toLocaleString('fr-CA', { month: 'long' })} ${startDateObject.getFullYear()} à ${endDateObject.toLocaleString('fr-CA', { month: 'long' })} ${endDateObject.getFullYear()} (${monthDifference % 12} mois)`);
      }

    }, [startDate, endDate, isCurrentJob]);
  
    return date;
  };
  
  export default useDateDifference;