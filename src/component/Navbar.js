import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

const Navbar = ({checkIdentity,setCheckIdentity}) => {
    const nav_menu=["여성","남성","신생아/유아","아동","H&M HOME","Sale","지속가능성"];
    const navigate=useNavigate();
    const search=(e)=>{
        if(e.key==="Enter"){
        let search_value=e.target.value
        navigate(`/?q=${search_value}`)
        }
        
    }
    const goToLogin=()=>{
        navigate("/login");
        setCheckIdentity(false);
    };
    return (
    <div>
        <div className="nav-login" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            {checkIdentity?"로그아웃":"로그인"}
        </div>
        <div className="nav-logo">
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160517_276%2Fks6773n_1463481758989LlJEz_PNG%2F709px-HM-Logo.svg.png&type=sc960_832'></img>
        </div>
        <div className="nav-main">
            <ul className="nav-menu">
            {nav_menu.map((item)=><li>{item}</li>)}
            </ul>
            <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
            <input type="text" className="nav-input" onKeyPress={(e)=>search(e)}/>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar