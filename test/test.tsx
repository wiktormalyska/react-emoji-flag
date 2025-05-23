import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountryFlag, flag, useCountryFlag } from '../src';

// Component to test useCountryFlag hook
const FlagWithHook = () => {
    useCountryFlag({ className: "custom-flag-class" });

    return (
        <div className="custom-flag-class">
            {flag('DE')} Germany (using hook)
        </div>
    );
};

// Component to test all props and features
const Example = () => (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>react-emoji-flag Type Testing</h1>

        <h2>CountryFlag Component Testing:</h2>
        <div>
            <p>Default usage: <CountryFlag countryCode="US" /></p>
            <p>With title: <CountryFlag countryCode="GB" title="United Kingdom" /></p>
            <p>With custom class: <CountryFlag countryCode="JP" className="japan-flag" /></p>
            <p>Invalid code: <CountryFlag countryCode="ZZ" /></p>
        </div>

        <h2>Flag Function Testing:</h2>
        <div>
            <p>Poland: <span>{flag('PL')}</span></p>
            <p>France: <span>{flag('FR')}</span></p>
        </div>

        <h2>Hook Testing:</h2>
        <FlagWithHook />
    </div>
);

// Set up the root element if it doesn't exist
if (!document.getElementById('root')) {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
}

// Render the example
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);