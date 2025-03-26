import Input from "./components/Input"
import InfoDisplay from "./components/InfoDisplay"
import Map from './components/Map'
import { useEffect, useState } from "react"
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [apiData, setApiData] = useState([])
  const [location, Setlocation] = useState([51.505, -0.09])

  async function getAPI(input) {
    try {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input}&domain=${input}`)
      const data = await res.json()
      setApiData({
        ip: data.ip,
        country: data.location.country,
        region: data.location.region,
        timezone: data.location.timezone,
        isp: data.isp
      })
      const { lat, lng } = data.location
      Setlocation([lat, lng])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getVisitorData(){
      const res = await fetch('https://api.ipify.org?format=json')
      const data = await res.json()
      const visitorIp = data.ip

      const visitorRes = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${visitorIp}`)
      const visitorData = await visitorRes.json()
      console.log(visitorData)

      setApiData({
        ip: visitorIp,
        country: visitorData.location.country,
        region: visitorData.location.region,
        timezone: visitorData.location.timezone,
        isp: visitorData.isp,
      });

      const { lat, lng } = visitorData.location
      Setlocation([lat, lng])
    }

    getVisitorData()
  }, [])

  return (
    <>
      <div id="header" className="relative pb-32 pt-10 flex flex-col items-center justify-center gap-6">
        <h1 className="capitalize font-rubik font-medium text-3xl md:text-4xl text-center text-gray-100 mt-8">IP Adress Tracker</h1>
        <Input onGetIP={getAPI}/>
        <InfoDisplay info={apiData} />
      </div>
      <Map location={location}/>


    
    </>
  )
}

export default App
