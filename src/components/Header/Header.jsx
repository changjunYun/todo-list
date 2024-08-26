import React from 'react';

export default function Header({filters, filter, onFilterChange}) {
    return (
        <header>
            <ui>
                {filters.map((value, index) => 
                <li key={index}>
                    <button onClick={() => onFilterChange(value)}>{value}</button>
                </li>)}
            </ui>
        </header>
    );
}

