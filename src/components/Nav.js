import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Menu from '../images/menu.svg';
import Close from '../images/close.svg';
import Cart from '../images/cart.svg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {cartAction} from '../redux/actions';

const Nav = ({cart, setCart}) => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.cartCount);
    const {pathname} = useLocation();
    // console.log(pathname)
    // console.log(count)
  return (
    <NavStyle className='block bg-blue'>
        <h2><span>V</span>-shop</h2>
        <div className='menu-sec'>
            <img src={Menu} alt="menu" className='menu'/>
            <div className='options'>
                <img src={Close} alt="exit" className='close'/>
                <ul>
                    <div className='bg-blue'>
                        <Link to='/'>
                        <li style={{color:`${pathname === '/'? '#2f2e2e':''}`}}>Home</li>
                        <div className={`line ${pathname==='/'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/electronics'>
                        <li style={{color:`${pathname === '/electronics'? '#2f2e2e':''}`}}>Electronics</li>
                        <div className={`line ${pathname==='/electronics'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/cosmetics'>
                        <li style={{color:`${pathname === '/cosmetics'? '#2f2e2e':''}`}}>Cosmetics</li>
                        <div className={`line ${pathname==='/cosmetics'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/cloths'>
                        <li style={{color:`${pathname === '/cloths'? '#2f2e2e':''}`}}>Cloths</li>
                        <div className={`line ${pathname==='/cloths'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/books'>
                        <li style={{color:`${pathname === '/books'? '#2f2e2e':''}`}}>Books</li>
                        <div className={`line ${pathname==='/books'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='furnitures'>
                        <li style={{color:`${pathname === '/furnitures'? '#2f2e2e':''}`}}>Furnitures</li>
                        <div className={`line ${pathname==='/furnitures'? 'w-[100%] h-[10px] bg-[#121212]':'0%'}`}></div>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
        <div className='cart' onClick={()=>dispatch(cartAction())}>
            <img src={Cart} alt="cart" />
            <p>{count}</p>
        </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
    display:flex;
    justify-content:space-between;
    padding:2rem 5rem;
    background-color:#FFF;
    position:fixed;
    box-shadow:0px 5px 15px rgba(0, 0, 0, 0.2);
    overflow:hidden;
    top:0;
    width:100%;
    margin:0;
    z-index:2;
    h2{
        font-size:2rem;
        span{
            color:#f56f94;
        }
    }
    img{
        width:30px;
        height:30px;
    }
    .menu-sec{
        .menu{
            display:none;
        }
    }
    .options{
        .close{
            display:none;
        }
        ul{
            display:flex;
            gap:3rem;
            li{
                list-style:none;
                font-size:1.2rem;
                font-weight:500;
                color: #aaabac;
                cursor:pointer;
            }
            li:hover{
                color:#121212;
                font-size:1.3rem;
            }
        }
    }
    .cart{
        position:relative;
        cursor:pointer;
        p{
            position:absolute;
            background-color: #f56f94;
            font-weight:700;
            padding:.2rem .5rem;
            top:-15px;
            left:15px;
            border-radius:50%;
        }
    }
`
export default Nav