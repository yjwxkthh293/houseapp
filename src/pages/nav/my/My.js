import React, { Component } from 'react'
import { List, WhiteSpace } from 'antd-mobile';
// import { IP } from '../../../api/apis'
import './my.scss'

const Item = List.Item;
// const data = [{ icon: '积分', text: '我的积分' }]
export default class My extends Component {

    constructor() {
        super()
        this.state = {
            data: [
                { icon: '积分1', text: '我的积分' },
                { icon: '订阅', text: '我的订阅' },
                { icon: '联系人', text: '微聊联系人' },
                { icon: '' },
                { icon: '计算机', text: '房贷计算机' },
                { icon: '星星', text: '我的房子' },
                { icon: '' },
                { icon: '时间', text: '我的看房记录' },
                { icon: '我的', text: '我的问答' },
                { icon: '' },
                { icon: '设置1', text: '设置' },
                { icon: '反馈', text: '意见反馈' },
            ]
        }
    }

    render() {
        return (
            <div className='my_box'>
                <div className='header'>
                    <div className='top'>
                        <div className='chat'>
                            <img src={require('../../../assets/images/bg.PNG')} />
                            <div className='login_reg'>
                                <h3>登陆 / 注册</h3>
                                <p>可以和经纪人发起聊天</p>
                            </div>
                        </div>
                        <img src={require('../../../assets/images/设置.png')} style={{ width: '30px', height: "30px", marginTop: '5px' }} />
                    </div>
                    <div className='bottom'>
                        <div style={{ borderRight: '1px solid #fff', paddingRight: '40px' }} >
                            <span>0</span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={require('../../../assets/images/钱包.png')} style={{ width: '30px', height: "30px" }} />
                                <p style={{ textIndent: '5px' }}>钱包</p>
                            </div>
                        </div>
                        <div style={{ borderRight: '1px solid #fff', paddingRight: '40px' }}>
                            <span>0</span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={require('../../../assets/images/优惠.png')} style={{ width: '25px', height: "25px" }} />
                                <p style={{ textIndent: '10px' }}>优惠</p>
                            </div>
                        </div>
                        <div className='my_right'>
                            <span>0</span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={require('../../../assets/images/积分.png')} style={{ width: '25px', height: "25px" }} />
                                <p style={{ textIndent: '10px' }}>积分</p>
                            </div>
                        </div>
                    </div>
                </div>

                <WhiteSpace size="lg" />
                <List >
                    {
                        this.state.data.map((obj,i) => {

                            if (obj.icon != '') return <Item
                                thumb={require('../../../assets/images/' + obj.icon + '.png')}
                                arrow="horizontal"
                                onClick={() => { }}
                                key={i}
                            >{obj.text}</Item>
                           
                            
                            else return <div style={{backgroundColor: '#F4F4F4',height: 10}}></div>

                    })
                }

                </List>

            </div>
        )
    }
}
