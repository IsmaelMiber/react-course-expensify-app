import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( ({ createAt, description }) => {
            const createAtMoment = moment(createAt);
            const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
            const textMatch = description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};