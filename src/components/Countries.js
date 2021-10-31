import React from 'react'

const Countries = ({countries,loading}) => {

if(loading){
    return <h2>Loading...</h2>
}

    return (
       
        <ul className='list-group mb-2'>
            {
                countries.map((country, i) => (
                   
                    <li key={country.id} className='list-group-item'>
                   {country.id} - {country.name} 
                  
                   <li className='list-group-item'>
                   Phone : {country.phone}   Abbreviation : {country.abbreviation}  Capital : {country.capital}  Population : {country.population}
                   </li> 
                  
                  <img src={country.flag} alt='' className='ml-2' style={{width:25}}/>
                    </li>
                ))
           
            }
        </ul>
        
    )
}

export default Countries
