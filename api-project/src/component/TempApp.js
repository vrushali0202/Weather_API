import React, { useEffect, useState } from 'react'
import './css/TempApp.css'
import pic from './img/weather_img.jpg';

export default function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3e8d79e5c76eeb8525aab30724c881ec`;
      const response = await fetch(url);
      // console.log(response);
      const respJson = await response.json();
      console.log(respJson)
      setCity(respJson.main);
      //console.log(city);

    }
    fetchApi();
  }, [search])

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">

              <h2 className="data mb-4 pb-2 fw-bold">Check the weather forecast</h2>

              <div className="card mx-auto text-dark">
                <img src={pic} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <div className="input-group rounded mb-5" >
                    <input type="search" className="form-control rounded-pill " placeholder="City" aria-label="Search"
                      aria-describedby="search-addon" onChange={(event) => { setSearch(event.target.value) }} />
                  </div>

                  {!city ? (
                    <h3 className='text-white'>No Data Found</h3>
                  ) :
                    (
                      <div className='data text-white'>
                        <h1 className="location mb-1 sfw-normal text-capitalize">{search}</h1>
                        <h3 className="m-3"><strong>{city.temp}°C</strong></h3>
                        <h6>Max : {city.temp_max}°C  |  Min : {city.temp_min}°C</h6>
                      </div>
                    )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


    </>
  )
}
