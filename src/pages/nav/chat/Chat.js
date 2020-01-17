import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import './chat.scss'

export default class Chat extends Component {
    render() {
        return (
            <div className='chat_box'>
                <div className='chat'>
                    <p><img src={require('../../../assets/images/bg.PNG')} /></p>

                    <h3>职业顾问：<span style={{color:'#30AE1E'}}>张小妹</span></h3>
                    <h4>专业服务诚信做人诚心做事</h4>

                    <Button type="primary" style={{width:'50%',marginLeft:'25%',background:'#30AE1E'}}>我要聊天</Button>

                </div>
            </div>
        )
    }
}
