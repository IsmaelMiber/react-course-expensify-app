import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createAt: this.props.expense ? moment(this.props.expense.createAt) : moment(),
        calendarFocused: false,
        error: '',
    };

    onDescriptionChange = (e) => {
        const description = e.target.value.trim();
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value.trim();
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) this.setState(() => ({amount}));
    }

    onDateChange = (createAt) => {
        if(createAt) this.setState(() => ({createAt}));
    }

    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'Please, provide description & amount'}));
        } else {
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : this.state.error}

                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />

                    <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                    <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}