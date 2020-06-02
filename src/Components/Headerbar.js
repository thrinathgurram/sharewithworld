
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'
import '../css/App.css'
import {faTwitter}  from '@fortawesome/free-brands-svg-icons';
import {faFacebook}  from '@fortawesome/free-brands-svg-icons';
import {faTelegram}  from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp}  from '@fortawesome/free-brands-svg-icons';
import {faYoutube}  from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const headeritems = [
    {
        "price": "470",
        "_id": "5e9d391fd62b4e0017309207",
        "title": "Best Paid apps to subscribe",
        "itemid": 4,
        "category": "Electronics",
        "subCategory": "Softwares",
        "author": "Sumateja K",
        "description": "Must buy subscription based apps to get on with your busy schedule",
        "image": "http://res.cloudinary.com/dtvxe0tur/image/upload/v1587361886/jsgnlwqx19ql3snafsze.png",
        "post_date": "2020-04-20T05:54:39.815Z",
        "__v": 0
    },
    {
        "price": "470",
        "_id": "5e9d3823d62b4e0017309205",
        "title": "Top USB Pen drives",
        "itemid": 4,
        "category": "Electronics",
        "subCategory": "Accessories",
        "author": "Sumateja K",
        "description": "Top USB Pen drives",
        "image": "http://res.cloudinary.com/dtvxe0tur/image/upload/v1587361711/ljkbmv6ik54af0dqqi65.jpg",
        "post_date": "2020-04-20T05:50:27.998Z",
        "__v": 0
    },
    {
        "price": "250000",
        "_id": "5e9d370bd62b4e0017309203",
        "title": "Best Macbooks for Web developers",
        "itemid": 4,
        "category": "Electronics",
        "subCategory": "Laptops",
        "author": "Sumateja K",
        "description": "Best Macbooks for Web developers",
        "image": "http://res.cloudinary.com/dtvxe0tur/image/upload/v1587361331/uujyls6lgv66bnbvmthw.jpg",
        "post_date": "2020-04-20T05:45:47.942Z",
        "__v": 0
    },
    {
        "price": "25000",
        "_id": "5e9b229f1abd0800175d332b",
        "title": "Top 5 laptops under 30k",
        "itemid": 4,
        "category": "Electronics",
        "subCategory": "Laptops",
        "author": "Sumateja K",
        "description": "Top 5 laptops under 30k ideal for office and home use",
        "image": "http://res.cloudinary.com/dtvxe0tur/image/upload/v1587217171/nxdwnrntnscwtsfcptbp.jpg",
        "post_date": "2020-04-18T15:54:07.656Z",
        "__v": 0
    }
]

function Headerbar() {
    return (
        <div class="navbar sticky-top apptheme navbar-expand-md">
                <Link to="/trendingarticles"> <a class="navbar-brand" href="#"><b>MyTop 10</b> </a></Link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarText">☰</button>
                <div class="pull-left navbar-collapse collapse" id="navbarText">
                    <ul class="mr-auto nav-links navbar-nav">
                        <Link to="/trendingarticles">
                            <li class="nav-item"><a class="nav-link">Gadgets</a></li>
                        </Link>
                        <Link to="/trendingarticles">
                            <li class="nav-item"><a class="nav-link">Home Decor</a></li>
                        </Link>
                        <Link to="/latestvideos">
                            <li class="nav-item"><a class="nav-link" >Electronics</a></li>
                        </Link>
                        <Link to="/topcashbackstores">
                            <li class="nav-item"><a class="nav-link" >Unique Stuff</a></li>
                        </Link>
                        <Link to="/newsandarticles">
                            <li class="nav-item"><a class="nav-link" >Toys & Stuff</a></li>
                        </Link>
                        <Link to="/about">
                            <li ><a class="nav-link" >About</a></li>
                        </Link>
                        <Link to="/create">
                            <li ><a class="nav-link" >Create Post</a></li>
                        </Link>
                        <li class="dropdown menu-large nav-item caret"> <a class="dropdown-toggle nav-link" data-toggle="dropdown"> Product Listing </a>
                            <ul class="dropdown-menu megamenu border border-success rounded" style={{"border-width": "50px"}}>
                                <li class="dropdown-item">
                                    <div class="row">
                                        {headeritems.map((item) => (
                                            <div class="col-md-6 col-lg-3 text-center">
                                                <div class="card">
                                                    <p><b>{item.title}</b></p>
                                                    <a href="#" class="thumbnail">
                                                        <img src={item.image} />
                                                    </a>
                                                    <p><b>{item.author}</b></p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown menu-large nav-item"> <a class="dropdown-toggle nav-link" data-toggle="dropdown">Categories </a>
                            <ul class="dropdown-menu megamenu">
                                <div class="row">
                                    <li class="col-md-3 dropdown-item">
                                        <ul>
                                            <li class="dropdown-header">Glyphicons</li>
                                            <li><a href="#">Available glyphs</a>
                                            </li>
                                            <li class="disabled"><a href="#">How to use</a>
                                            </li>
                                            <li><a href="#">Examples</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Dropdowns</li>
                                            <li><a href="#">Example</a>
                                            </li>
                                            <li><a href="#">Aligninment options</a>
                                            </li>
                                            <li><a href="#">Headers</a>
                                            </li>
                                            <li><a href="#">Disabled menu items</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="col-md-3 dropdown-item">
                                        <ul>
                                            <li class="dropdown-header">Button groups</li>
                                            <li><a href="#">Basic example</a>
                                            </li>
                                            <li><a href="#">Button toolbar</a>
                                            </li>
                                            <li><a href="#">Sizing</a>
                                            </li>
                                            <li><a href="#">Nesting</a>
                                            </li>
                                            <li><a href="#">Vertical variation</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Button dropdowns</li>
                                            <li><a href="#">Single button dropdowns</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="col-md-3 dropdown-item">
                                        <ul>
                                            <li class="dropdown-header">Input groups</li>
                                            <li><a href="#">Basic example</a>
                                            </li>
                                            <li><a href="#">Sizing</a>
                                            </li>
                                            <li><a href="#">Checkboxes and radio addons</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Navs</li>
                                            <li><a href="#">Tabs</a>
                                            </li>
                                            <li><a href="#">Pills</a>
                                            </li>
                                            <li><a href="#">Justified</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="col-md-3 dropdown-item">
                                        <ul>
                                            <li class="dropdown-header">Navbar</li>
                                            <li><a href="#">Default navbar</a>
                                            </li>
                                            <li><a href="#">Buttons</a>
                                            </li>
                                            <li><a href="#">Text</a>
                                            </li>
                                            <li><a href="#">Non-nav links</a>
                                            </li>
                                            <li><a href="#">Component alignment</a>
                                            </li>
                                            <li><a href="#">Fixed to top</a>
                                            </li>
                                            <li><a href="#">Fixed to bottom</a>
                                            </li>
                                            <li><a href="#">Static top</a>
                                            </li>
                                            <li><a href="#">Inverted navbar</a>
                                            </li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </li>
                       
                    </ul>
                    <div class="nav-links navbar-nav">
                        <a href="https://www.facebook.com" target="_blank" class="nav-item nav-link" ><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                        <a href="https://www.twitter.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                        <a href="https://www.youtube.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
                        <a href="https://www.telegram.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faTelegram} size="lg"/></a>
                        <a href="https://www.whatsapp.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faWhatsapp} size="lg"/></a>
                   </div> 
                </div>
            </div>

    )
}

export default Headerbar;