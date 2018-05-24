import React, { Component } from 'react';

import {
	Link
} from 'react-router-dom'

import { Footer } from './footer'
import axios from 'axios'

export default class Index extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr:[]
		}
	}
	
	componentDidMount(){
		var url = 'http://vue.wclimb.site/vi/list'
		axios.get(url).then((res)=>{
			this.setState({
				arr:res.data.data[3]
			})
			console.log(this.state.arr)
		})
	}
	
	render(){
		return (
			<div  className='container'>
				<div className='section'>
					<div className='box'>
					{
						
						this.state.arr.map((ele,index)=>{
							
							return (
								<Link to={`/detail/${ele.id}`} key={ele.id}>
									<div className = 'box1'>
									<img src = { `http://vue.wclimb.site/images/${ ele.img }` } />
										{ ele.name }
									</div>
								</Link>	
							)
							
						})
						
						
					}
					</div>	
				</div>
				
				<Footer></Footer>
			</div>
		)
	}
}
