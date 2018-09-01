import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const altFilters = {
    text: 'galaxy',
    sortBy: 'amount',
    startDate: moment(),
    endDate: moment().add(3, "days"),
};

export { filters, altFilters };