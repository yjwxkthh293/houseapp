import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button,Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { login } from '../../api/apis.js'
import './Login.scss'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            user: '',
            pwd: '',
            olduser: "",
            oldpwd: ''
        }
    }
    render() {
        let { user, pwd } = this.state
        return (
            <div className='login'>
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <div className='login-div'>

                        <img style={{ width: 120 }} src={require('../../assets/images/logo.jpg')} />
                    </div>
                </Flex>

                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                        value={user}
                        onChange={(val) => { this.setState({ user: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        clear
                        value={pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size="lg" />
                    <Button style={{ background: '#30AE1E', color: '#fff' }} activeStyle={{ background: '#0a0' }} onClick={this.clickLogin}>登陆</Button>

                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to='/reg' style={{ color: '#30AE1E' }}>手机快速注册</Link>
                        <Link to='' style={{ color: '#30AE1E' }}>忘记密码？</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }

    clickLogin= async ()=>{

        let user=this.state.user
        let pwd=this.state.pwd

        if(this.state.olduser==user&&this.state.oldpwd==pwd)

        this.setState({
            olduser:user,
            oldpwd:pwd
        })

        let res = await login(user,pwd)
        if(res.data==='ok'){
            window.location.href='#/'
        }else{
            Toast.fail('输入用户名或密码错误');
        }
    }
}
