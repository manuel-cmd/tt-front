import './ExpenseDate.css'

function ExpenseDate(props){
    console.log('El date es:', props.date)
    /*month = props.date.toLocaleString('en-US', {month: 'long'});
    date = props.date.toLocaleString('en-US', {day: '2-digit'});
    year = props.date.getFullYear();*/
    const month = '11';
    const day = '21';
    const year = '2021';

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;