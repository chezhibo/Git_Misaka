import React, { Component } from 'react';

import axios from 'axios'

export default class Detail extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr:[],
			num:this.props.location.pathname.split('/')[2]
		}
		console.log(this.state.num)
	}
	
	componentDidMount(){
		var url = 'http://vue.wclimb.site/vi/getVideoById'
		var data = 'videoId='+this.state.num
		axios.post(url,data).then((res)=>{
			this.setState({
				arr:res.data.data[0]
			})
			console.log(this.state.arr)
		})
	}
	
	render(){
		return (
			<div  className='detail'>
				{
					this.state.arr.map((ele,index)=>{
						return (
							<div key={ index }><img src={ `http://vue.wclimb.site/images/${ ele.img }` } /></div>
						)
					})
				}
			</div>
		)
	}
}
