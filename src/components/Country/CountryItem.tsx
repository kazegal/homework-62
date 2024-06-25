import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Preloader from "../Preloader/Preloader";

const ALFA_URL = 'https://restcountries.com/v2/alpha/';

interface ICountryDetails {
    alpha3Code: string;
    name: string;
    borders: string[];
    flag: string;
    capital: string;
    population: string;
    region: string;
}

interface IBorderCountry {
    alpha3Code: string;
    name: string;
    capital: string;
    flag: string;
}

interface ICountryItemProps {
    countryCode: string | null;
}

const CountryItem: React.FC<ICountryItemProps> = ({countryCode}) => {
    const [countryDetails, setCountryDetails] = useState<ICountryDetails | null>(null);
    const [borderCountries, setBorderCountries] = useState<IBorderCountry[]>([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchCountryDetails = async () => {
            setLoading(true);
            if (countryCode) {
                try {
                    const response = await axios.get(
                        ALFA_URL + countryCode
                    );
                    setCountryDetails(response.data);
                } catch (error) {
                    console.error('Fail', error);
                }
                setLoading(false);
            }
        };
        fetchCountryDetails().catch(error => console.error(error));
    }, [countryCode]);

    useEffect(() => {
        const fetchBorderCountries = async () => {
            setLoading(true);
            if (countryDetails && countryDetails.borders) {
                try {
                    const response = await axios.get(
                        `https://restcountries.com/v2/alpha?codes=${countryDetails.borders}`
                    );
                    setBorderCountries(response.data);
                } catch (error) {
                    console.error('Fail', error);
                }
                setLoading(false);
            }
            setLoading(false);
        };
        fetchBorderCountries().catch(error => console.error(error));
    }, [countryDetails]);


    if (!countryCode) {
        return <div className="text-center fw-bold fs-4 text-success">Выберите страну</div>;
    }

    if (!countryDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {loading && <Preloader/>}
            <h4 className="text-center">Country Details</h4>
            <img src={countryDetails.flag}
                 alt={countryDetails.name}
                 style={{width: '200px', height: 'auto'}}
                 className="d-flex ms-auto border"
            />
            <span className="d-block fw-bold">Country:
                <span className="fs-5 d-inline text-success">{countryDetails.name}</span></span>
            <span className="d-block fw-bold">Capital:
                <span className="fs-5 d-inline text-primary">{countryDetails.capital}</span></span>
            <span className="d-block fw-bold">Population:
                <span className="fs-5 d-inline text-primary">{countryDetails.population}</span></span>
            <p className="fw-bold">Region: <span className="fw-bold text-danger">{countryDetails.region}</span></p>
            {countryDetails.borders ? (
                <div>
                    <p className="fw-bold fs-4">Borders:</p>
                    <ul>
                        {borderCountries.map((borderCountry) => (
                            <li className="mb-3" key={borderCountry.alpha3Code}>
                                {borderCountry.name} (Capital: {borderCountry.capital})
                                <img alt={borderCountry.name}
                                     src={borderCountry.flag}
                                     style={{width: "50px", height: "auto"}}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Country has no borders</p>
            )}
        </div>
    );
};

export default CountryItem;

