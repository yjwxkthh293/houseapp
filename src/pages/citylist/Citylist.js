import React, { Component } from 'react'
import listArr from '../../json/citylist'
import BScroll from 'better-scroll'
import './citylist.scss'

console.log(listArr);

export default class Citylist extends Component {

    render() {
        return (
            <div className='city_box'>
                <div id='citylist_left'>
                    <ul className='comtent'>
                        {
                            listArr.map((obj, i) => <div key={i} id={obj.title}>
                                <h3>{obj.title}</h3>

                                {
                                    obj.child.map((val, i) => <p key={i} >{val}</p>)
                                }
                            </div>)
                        }
                    </ul>
                </div>

                <div className='citylist_right' onTouchMove={this.moveTitle.bind(this)}>
                    {
                        listArr.map((obj, i) => <p className='Letter' key={i} onClick={this.clickTitle.bind(this, obj.title)}>{obj.title}</p>)
                    }
                </div>
            </div>
        )
    }
    clickTitle(title) {
        this.list_left.scrollToElement('#' + title, 600)


    }
    moveTitle(e) {
        let elt = Document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        if (elt.className == 'Letter') {
            this.list_left.scrollToElement('#' + elt.innerText, 600)
        }
    }

    componentDidMount() {
        // this.list_left = new BScroll('#citylist_left')
        this.list_left = new BScroll('#citylist_left')

    }
}
