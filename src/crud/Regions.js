import React, { Component } from 'react'
import { listRegion } from './api/api-regions';
import {TableRegion, AddEditForm} from './RegionComponent'

export default class Regions extends Component {
    state = {
        regions: [],
        isModalShow : false
    }

    componentDidMount() {
        this.showListRegion();

    }

    showListRegion = () => {
        listRegion().then(data => {
            this.setState({
                regions: data
            })
        })
    };

    onShowModal=(value)=>{
        this.setState({
            isModalShow : value
        })
    }

    render() {
        const { regions,isModalShow } = this.state;
        return (
            <>
                <TableRegion regions = {regions} setShowModal={this.onShowModal}></TableRegion>
                {
                    (isModalShow ? (<AddEditForm setShowModal={this.onShowModal}/>) : null)
                }
            </>
        )
    }
}
