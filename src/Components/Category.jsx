import React, { useState } from 'react'
import Jobs from './Jobs'
import Filter from './Filter'


const style = { backgroundColor: `rgb(255, 0, 119)`, textAlign: `center`, color: 'white', padding: '10px' }

function Category() {

    return (
        <div className={`container-fluid`}>
            <h1 style={style}>We Prefered Jobs</h1>
            <div className="row">
                <div className="col-md-2">
                    <Filter />
                </div>
                <div className="col-md-10">
                    <Jobs />
                </div>
            </div>
           
        </div>
    )
}

export default Category