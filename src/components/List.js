import React from 'react'


const List = (props) => {
    const { data, filterId } = props;

    return (
        <div>
            <h1>List Countries</h1>
            {data.filter(item => item.country_name.includes(filterId)).map(keys => {
                return (
                    <li> {keys.country_id} {keys.country_name}</li>
                )
            })}



        </div>
    )
}

export default List;