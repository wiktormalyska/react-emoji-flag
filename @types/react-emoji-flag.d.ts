declare module 'react-emoji-flag' {
    import * as React from 'react';

    export interface CountryFlagProps {
        countryCode: string;
        title?: string;
        className?: string;
    }

    export const CountryFlag: React.FC<CountryFlagProps>;
    export function useCountryFlag(options?: { className?: string }): void;
    export function flag(countryCode: string): string;

    export default CountryFlag;
}