import React, { Component } from 'react'
import { listRegion } from './api/api-regions';

export default class Regions extends Component {
    state = {
        regions: []
    }

    componentDidMount() {
        this.showListRegion();
       
    }

    showListRegion =()=> {
        listRegion().then(data =>{
            this.setState({
                regions : data
            })
        })
    };

    render() {
        const { regions } = this.state;
        return (
            <>
                <h1>Region List</h1>
                {
                    regions.map(el => {
                        return (<h1>{el.region_id}</h1>)
                    })
                }
            </>
        )
    }
}
