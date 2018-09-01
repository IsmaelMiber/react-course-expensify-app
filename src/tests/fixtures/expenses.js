import moment from 'moment';
export default [
    {
        id: '1',
        description: 'galaxy note 9',
        note: '',
        amount: 5,
        createAt: 0,
    },
    {
        id: '2',
        description: 'iphone x',
        note: '',
        amount: 10,
        createAt: moment(0).add(4, 'days').valueOf(),
    },
    {
        id: '3',
        description: 'xiamoi redmi note 5',
        note: '',
        amount: 3,
        createAt: moment(0).subtract(4, 'days').valueOf(),
    }
];