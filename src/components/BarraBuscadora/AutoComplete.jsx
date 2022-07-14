import axios from "axios"
import { useState,useEffect } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'


const AutoComplete = () => {

  const [cities, setCities] = useState([])    
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  
  const consultApi = async () => {
    const res = await axios.get("https://agenciasenlinea.aviatur.com/aviatur/cities.json")
    setCities(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    consultApi()
  },[])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0){
      matches = cities.filter( city =>{
        const regex = new RegExp(`^${text}`, 'gi')
        return city.name_city.match(regex)
      })
    }
    console.log('matches:', matches)
    setSuggestions(matches)
    setText(text)
  }

  return (
    <div>
      <div className="container">
        <input
          className=""
          style={{marginTop: "20px"}} 
          type="text"
          placeholder="Busca la Ciudad"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
        {suggestions && suggestions.map((city, index) => {
          return (
            <div key={index}>
              {city.name_city}
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default AutoComplete