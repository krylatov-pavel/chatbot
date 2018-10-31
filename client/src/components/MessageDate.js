import React from 'react';

const todayFormatter = Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric'
});

const thisWeekFormatter = Intl.DateTimeFormat('en-US', {
    weekday:  'short',
    hour: 'numeric',
    minute: 'numeric'
});

const defaultFormatter = Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});

const daysAgo = (date, x) => {
    const dateCopy = new Date(date);

    return new Date(dateCopy.setDate(dateCopy.getDay() - 1));
};

const getThisWeek = (today) => {
    const isoWeekDay = (today.getDay() + 6) % 7;
    return daysAgo(today, isoWeekDay);
}

const MessageDate = ({dateString}) => {
    let formatter = defaultFormatter;
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date >= today) {
        formatter = todayFormatter;
    } else if (date >= getThisWeek(today)) {
        formatter = thisWeekFormatter;
    } 

    return (<span>{formatter.format(date)}</span>);
}

export default MessageDate;