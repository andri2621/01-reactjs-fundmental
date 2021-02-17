import React, { Component } from 'react'
import Tabs from './../chapter-08/components/Tabs';
import { Form09 } from './FormStyle';
import CounterHook from './counter/CounterHook';
import MovieHook from './rest-api/MovieHook';
import MoviesCrud from './crud/MoviesCRUD';


export default class Forms09 extends Component {
  render() {
    return (
      <Form09>
        <Tabs>
				<div label="Counter">
				  <CounterHook />
				</div>
				<div label="Rest API">
          <MovieHook/>
				</div>
				<div label="CRUD">
          <MoviesCrud/>
				</div>
			</Tabs>
      </Form09>
    )
  }
}
