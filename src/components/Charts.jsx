import React from 'react';

import { Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({data: {confirmed,deaths,recovered},country}) => {
 
 
    const barChart = (
        confirmed
        ? (
            <Bar 
            data =  {{
            labels : ['Infected', 'Recovered','Deaths'],
            datasets : [{
                label : 'People',
                backgroundColor: [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                data : [confirmed.value,recovered.value,deaths.value]

            }]
            }}
            options = {{
                legend : {display: false},
                title : {display: true, text: `Current state in ${country? country : 'Global'}`},
            }}
            />
        ) : null 
    );

    return (
       <div className={styles.container}>
           {/* {country ? barChart : lineChart} */}
           {barChart}
       </div>
    )
}

export default Charts;