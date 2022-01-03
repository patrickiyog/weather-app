import React from 'react';

// Third Party Imports
import { format } from 'date-fns';

const Today = () => {
    return (
        <div>
            <h1>{format(new Date(), 'eeee, d MMMM yyyy')}</h1>
        </div>
    );
};

export default Today;