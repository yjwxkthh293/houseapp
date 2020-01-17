import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Main from './main/Main'
import Chat from './chat/Chat'
import History from './history/History'
import My from './my/My'

export default class Nav extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',
            list: [{ name: '首页', key: 'main', icon: 'HOME', icons: 'HOME1' },
            { name: '微聊', key: 'chat', icon: 'CHAT', icons: 'CHAT1' },
            { name: '足迹', key: 'history', icon: 'footprint', icons: 'footprint1' },
            { name: '我的', key: 'my', icon: 'users', icons: 'users1' }
            ]
        };
    }

    renderContent() {
        
        switch(this.state.selectedTab){
            case 'main': return <Main/>
            case 'chat': return <Chat/>
            case 'history': return <History/>
            case 'my': return <My/>
        }
    }

    render() {

        let { list } = this.state

        return (
            <div className='nac_box' style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#30AE1E"
                    barTintColor="white"
                >

                    {
                        list.map(obj => <TabBar.Item

                            title={obj.name}
                            key={obj.key}
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/' + obj.icon + '.png')}) center center /  25px 25px no-repeat`
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/' + obj.icons + '.png')}) center center /  25px 25px no-repeat`
                            }}
                            />
                            }
                            selected={this.state.selectedTab === obj.key}
                            onPress={() => {
                                this.setState({
                                    selectedTab: obj.key,
                                });
                            }}
                        >
                            {this.renderContent('Life')}
                        </TabBar.Item>
                        )
                    }
                </TabBar>
            </div >
        )
    }
}
