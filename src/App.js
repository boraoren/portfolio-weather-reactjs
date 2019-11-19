import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/HomePage'
import Amplify, { API } from 'aws-amplify';

function App() {

    useEffect(() => {
        getData()
    }, [])

    const [data, setData] = useState(null)

    Amplify.configure({
        API: {
            endpoints: [
                {
                    name: "Simple Weather API",
                    endpoint: "https://ta25rz0hvl.execute-api.ap-southeast-2.amazonaws.com/dev"
                },
            ]
        }
    });


    const getData = async () => {
        try {
        
        let apiName = 'Simple Weather API';
        let path = '/weather'; 
        let init = { 
            headers: {
                'X-Api-Key':'v0ZIMTueCGapLuX75Kbc2IDPvb3UM5T3P0O5CHTi',
            },
            response: true,
            queryStringParameters: {
                byCityName: 'London'
            }
        }

            const response = await API.get(apiName, path, init)    
            setData(response.data)
            console.log(response.data.cityName)
        } catch (err) {
        console.log('error fetching data..', err)
        }
    }


  return (
    <HomePage data={data}/>
  );
}

export default App;
