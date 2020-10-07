import React from 'react';
import Cards from './components/Cards';
import Country from './components/Country';
import Charts from './components/Charts';
import styles from './Corona_tracker.module.css';
import {fetchData} from './api/index';  
import coronaImg from './imgs/covid19.png';

class CoronaTracker extends React.Component {

    state = {
        data : {},
        country : ''}

    async componentDidMount () {
        const fetchedData = await fetchData();
        // console.log(data);

        this.setState({data:fetchedData});

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({data:fetchedData, country: country });
                
    }

    render() {
        const {data,country} = this.state;

        return (
            <div className={styles.container}>
            <img className = {styles.image} src = {coronaImg} alt = "Covid-19" />
            <Cards data ={data} />
            <Country handleCountryChange = {this.handleCountryChange}/>
            <Charts data = {data} country = {country} />
            <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}
export default CoronaTracker;