import React from 'react';
import { connect } from 'react-redux';
import * as filterActions from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpensesListFilters extends React.Component {

    state = {
        focusedInput: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (focusedInput) => this.setState(()=>({focusedInput}));

    onSortByChange = (e) => e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();

    onTextChange =  (e) => this.props.setTextFilter(e.target.value);

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                 />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}

                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        filters: state.filters,
    }
);

export default connect(mapStateToProps, filterActions)(ExpensesListFilters);