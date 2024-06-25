import React, {useEffect, useState} from 'react';
import axios from 'axios';

const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

interface ICountry {
    alpha3Code: string;
    name: string;
}

interface ICountryProps {
    countrySelect: (countryCode: string) => void;
}

const Country: React.FC<ICountryProps> = ({countrySelect}) => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(
                    COUNTRIES_URL
                );
                setCountries(response.data);
            } catch (error) {
                console.error('Fail:', error);
            }
        };
        fetchCountries().catch(error => console.error(error));
    }, []);


    const countryClick = (alpha3Code: string) => {
        countrySelect(alpha3Code);
    };

    return (
        <>
            <h3>List of Countries</h3>
            {countries.map((country) => (
                <p key={country.alpha3Code}
                   onClick={() => countryClick(country.alpha3Code)}
                   className="card p-1 text-bg-info"
                   style={{cursor: "pointer"}}
                >
                    {country.name}
                </p>
            ))}
        </>
    );
};

export default Country;