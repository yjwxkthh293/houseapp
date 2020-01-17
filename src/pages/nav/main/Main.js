import React, { Component } from 'react'
import { Carousel, Grid, WhiteSpace, WingBlank } from 'antd-mobile';
import { gethouselist, IP } from '../../../api/apis'
import './main.scss'

const data = [{ icon: '新房', text: '新房' },
{ icon: '二手房', text: '二手房' },
{ icon: '租房', text: '租房' },
{ icon: '写字楼', text: '写字楼' },
{ icon: '房产-买房卖房', text: '卖房' },
{ icon: '海外房产', text: '海外房产' },
{ icon: '小区', text: '小区房价' },
{ icon: '问答', text: '问答' }]

const data1 = [{ icon: '贷款', text: '我要贷款' },
{ icon: '计算机 算数', text: '房贷计算' },
{ icon: '知识', text: '知识' },
{ icon: '扫一扫', text: '扫一扫' },]

export default class Main extends Component {

    state = {
        data: ['banner1', 'banner2', 'banner3'],
        imgHeight: 176,

        list: [],
        mysity: '定位中'
    }


    render() {
        // let { list } = this.state
        return (
            <div className="main_container">
                <div className='search_box'>
                    <label onClick={this.clickTitle.bind(this, '#/citylist')}>{this.state.mysity}▼</label>
                    <div className='search' onClick={this.clickTitle.bind(this, '#/search')}>
                        <img src={require('../../../assets/images/search.png')} />
                        <label>挑好房，上安居客</label>
                    </div>
                    <img src={require('../../../assets/images/map.png')} onClick={this.clickTitle.bind(this, '#/map')} />
                </div>


                <Carousel
                    autoplay={false}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="https://chengdu.anjuke.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../../assets/images/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>


                <Grid data={data} hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <img src={require('../../../assets/images/' + dataItem.icon + '.png')} style={{ width: '30px', height: '30px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />

                <div style={{ marginTop: '10px' }}>
                    <Grid data={data1} hasLine={false}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>

                                <img src={require('../../../assets/images/' + dataItem.icon + '.png')} style={{ width: '30px', height: '30px' }} alt="" />

                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    >

                    </Grid>
                </div>

                <WhiteSpace size="lg" />
                <div style={{ background: '#fff' }}>
                    <p style={{ textIndent: "15px", margin: '0', fontSize: '16px', paddingTop: '10px' }}>猜你喜欢</p>
                    {
                        this.state.list.map((obj, i) => {
                            return (
                                <div key={i} className='like'>
                                    <div className='left'>
                                        <div>
                                            <img src={IP + obj.imgs} style={{ width: '100px', height: '100px' }} />
                                        </div>
                                        <div className='msg'>
                                            <h2>{obj.name}</h2>
                                            <p>{obj.area} <span>{obj.range}</span></p>
                                            <p>{obj.type} <span>{obj.point}平</span></p>
                                        </div>

                                    </div>
                                    <div className='right'>
                                        <h3 style={{ color: 'red' }}>{obj.price}/平</h3>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }
    clickTitle(val) {
        window.location.href = val
        
    }

    componentWillUnmount(){
        this.setState=(data,callback)=>{
            return;
        }
    }


    componentDidMount() {

        gethouselist().then((res) => {

            this.setState({
                list: res.data
            })
            // console.log(this.state.list);
        });

        var vm = this
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;

                    vm.setState({
                        mysity:cityinfo
                    })
                    // document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                document.getElementById('info').innerHTML = result.info;
            }
        });
    }
}
