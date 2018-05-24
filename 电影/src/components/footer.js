import React, { Component } from 'react';
import {
	Link,NavLink
} from 'react-router-dom'

import '../asset/font/font/iconfont.css'

export class Footer extends Component{
	render(){
		return (
			 <div  className='footer'>
					<NavLink to='/myindex' activeClassName='selected'>
						<i className='iconfont icon-ren'></i>
						<p>首页</p>
					</NavLink>
					<NavLink to='/mine' activeClassName='selected'>
						<i className='iconfont icon-dianying'></i>
						<p>我的</p>
					</NavLink>
			</div>
		)
	}
}
