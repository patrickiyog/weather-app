import React from 'react';

// Third Party Imports
import { format } from 'date-fns';

const Today = () => {
    return (
        <div>
            <h1>{format(new Date(), 'eeee, dd MMMM yyyy')}</h1>
        </div>
    );
};

export default Today;