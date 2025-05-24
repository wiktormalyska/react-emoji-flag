# ts-react-emoji-flag

[![npm version](https://badge.fury.io/js/ts-react-emoji-flag.svg)](https://www.npmjs.com/package/ts-react-emoji-flag)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Display country flags using Unicode emoji - no images or SVGs required, works even on Windows!

## Overview

The most efficient way to display country flags in React applications - using Unicode emoji characters directly. Supports all modern browsers and operating systems.

Example: "🇨🇭" (If this looks like a Swiss flag, your system supports emoji flags natively)

## Installation

```bash
npm install react-emoji-flag
# or
yarn add react-emoji-flag
```

## Usage

### Basic Component Usage

```jsx
import CountryFlag from 'react-emoji-flag';

function MyComponent() {
  return <CountryFlag countryCode="US" title="United States" />;
}
```

### Alternative Usage with Hook and Function

```jsx
import { useCountryFlag, flag } from 'react-emoji-flag';

function MyComponent() {
  // Initialize the flag support
  useCountryFlag({ className: "country-flag" });

  return (
    <div className="country-flag">
      {flag("JP")} Japan
    </div>
  );
}
```

## API Reference

### `CountryFlag` Component

```jsx
<CountryFlag 
  countryCode="FR"       // Required: ISO 3166-1 alpha-2 country code
  title="France"         // Optional: Text for the title attribute
  className="my-flag"    // Optional: Additional CSS class
  forceLoadFont={false}  // Optional: Force custom font loading even on systems with native support
/>
```

### `useCountryFlag` Hook

```jsx
useCountryFlag({
  className: "country-flag",  // Optional: CSS class name (default: "country-flag")
  forceLoadFont: false        // Optional: Force custom font loading
});
```

### `flag` Function

```jsx
flag("DE"); // Returns a JSX element with the German flag emoji
```

## TypeScript Support

This library includes TypeScript definitions. Example usage with TypeScript:

```tsx
import CountryFlag, { useCountryFlag, flag } from 'react-emoji-flag';

const MyComponent: React.FC = () => {
  return <CountryFlag countryCode="CA" title="Canada" />;
};
```

## Windows Compatibility

On Windows, which doesn't natively display country flags from Unicode, the library automatically loads a special font to ensure proper flag display. You don't need to do anything extra for this feature to work.

If you want to force the custom font loading even on systems with native support, use the `forceLoadFont` prop:

```jsx
<CountryFlag countryCode="IT" forceLoadFont={true} />
```

## How It Works

The library:
1. Converts country codes to their corresponding Unicode flag sequence
2. Automatically detects if you're on Windows
3. Loads a special font only when needed for compatibility
4. Applies the appropriate CSS to ensure proper display

## Credits

Inspired by [country-flag-emoji-polyfill](https://github.com/talkjs/country-flag-emoji-polyfill)

## Fork

This project is a fork of [react-country-flag](https://github.com/fixthestatusquo/react-emoji-flag)