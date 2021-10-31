import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
const [contry, setContry] = useState([])
const [countries, setCountries] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [countriesPerPage] = useState(10)
useEffect(() => {
  const getContry = async () =>{
    setLoading(true)
    const res = await axios.get('https://api.sampleapis.com/countries/countries')
    console.log(res.data.name)
    //let jsonData = res.JSON()
   // setContry(res.data[2].media.flag)
    //setCountries(res.data)
    setLoading(false)
  }
  
    getContry()
  }, [])

useEffect(() => {
const getCountries = async () =>{
  setLoading(true)
  const res = await axios.get('https://api.sampleapis.com/countries/countries')
  //console.log(res.data[2].media.flag)
  //let jsonData = res.json()
  //console.log(jsonData)
  setCountries(res.data)
  setLoading(false)
}

  getCountries()
}, [])

  return (
    <div className="container mt-10">
      <h1 className='text-primary'>
      Countries
</h1>
<Countries countries={countries} loading={loading}/>
    </div>
  );
}

export default App;
