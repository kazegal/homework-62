import {useState} from 'react';
import Country from "../../components/Country/Country";
import CountryItem from "../../components/Country/CountryItem";

const AboutCountries = () => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const countrySelect = (countryCode: string) => {
        setSelectedCountry(countryCode);
    };
    return (
        <>
            <h2 className="text-center text-primary mt-5">About Countries</h2>
            <div className="d-flex">
                <div className="col-3 card m-4 p-3" style={{height: '600px', overflow: 'scroll'}}>
                    <Country countrySelect={countrySelect}/>
                </div>
                <div className="col-8 card m-4 p-3" style={{height: '600px', overflow: 'scroll'}}>
                    <CountryItem countryCode={selectedCountry}/>
                </div>
            </div>
        </>
    );
};

export default AboutCountries;