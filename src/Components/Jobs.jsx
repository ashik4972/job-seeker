import React, { useEffect, useState } from 'react'
import Job from './Job'
import axios from 'axios'

function Jobs() {
    const [data, setData] = useState([])

    useEffect(function () {
        axios.get('http://192.168.247.82:5300/api/v1/job')
            .then(function (response) {
                setData(response.data.data)
            })
    }, [])

    return (
        <>
            {
                data.map(function(e){
                    return(
                        <Job job={e}/>
                    )
                })
            }
        </>
    )
}

export default Jobs