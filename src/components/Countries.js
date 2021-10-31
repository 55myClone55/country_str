import React from 'react'

const Countries = ({countries,loading}) => {

if(loading){
    return <h2>Loading...</h2>
}

    return (
       
        <ul className='list-group mb-2'>
            {
                countries.map((country, i) => (
                   
                    <li className='list-group-item'>
                   {country.id} - {country.name} -
                  
                   <li className='list-group-item'>
                    Abbreviation - {country.abbreviation}
                    { console.log(country.media)}
                   </li> 
                   <li className='list-group-item'>Capital - {country.capital} </li>
                   <li className='list-group-item'>  </li>
                    <img src={country.media} alt='' className='ml-2'/>
                    </li>
                ))
           
            }
        </ul>
    )
}

export default Countries
