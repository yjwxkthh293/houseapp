import React, { Component } from 'react'
import { WhiteSpace, InputItem, WingBlank, Button, Checkbox } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Reg.scss'

const AgreeItem = Checkbox.AgreeItem;

export default class Reg extends Component {

    constructor(){
        super()
        this.state={
            phone:'',
            pwd:'',
            // code:''
        }
    }

    render() {

        let {phone,pwd} = this.state

        return (
            <div>
                {/* <WhiteSpace size="sm" /> */}
                <WingBlank size="md">
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入手机"
                        type="phone"
                        clear
                        value={phone}
                        onChange={(val)=>{this.setState({phone:val})}}
                    />
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入密码"
                        type="password"
                        clear
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}

                    />
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入验证码"
                        extra="获取验证码"
                        clear
                    ></InputItem>



                    {/* <CheckboxItem style={{ fontSize: '14' }}>
                        我已同意<span>《用户服务协议》及《隐私权政策》</span>
                    </CheckboxItem> */}
                    <AgreeItem >
                        我已同意<a>《用户服务协议》及《隐私权政策》</a>
                    </AgreeItem>

                    <WhiteSpace size="lg" />
                    <Button style={{ background: '#30AE1E', color: '#fff' }}>注册</Button>

                    <WhiteSpace size="lg" />
                    <Link to='/login' style={{ color: '#30AE1E' }}>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
}
