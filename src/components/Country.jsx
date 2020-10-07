import React, { useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../api/index';
import styles from './Country.module.css';
import { useState } from 'react';

const Country = ({ handleCountryChange }) => {

    const[fetchedCountries,setfetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            setfetchedCountries(await countries());
        }
        fetchCountries();
    },[setfetchedCountries]);
    // console.log(fetchedCountries);
    return (
       <FormControl className = {styles.FormControl}  >
           <NativeSelect defaultValue = "" onChange = {(e) => {handleCountryChange(e.target.value)}}>
               <option value="">Global</option>
               {fetchedCountries.map((country,i) => <option key = {i} value = {country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default Country;