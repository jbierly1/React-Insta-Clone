import React from 'react';
import { Button } from 'reactstrap';
import { Input} from 'reactstrap';
import styles from "./SearchBar.css";
import styled from 'styled-components';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "@fortawesome/fontawesome-free-brands/faInstagram";


{/* <FontAwesomeIcon icon="search"/> */}

const Header=styled.div`

`

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={

        }
    };

    render(){
        return(
            <nav id="topnav">
                <div class="insta">
                <FontAwesomeIcon icon={instagram} />
                
                &ensp;|&ensp;
                  Instagram
                </div>
                <form onSubmit={this.props.onSearch}>
                <input value={this.props.SBval} onChange={this.props.onChange}id="inputty" type="text" placeholder="&#x1f50d; search"/>
                </form>
                <div class="threenav">
                
                <FontAwesomeIcon icon="compass"/>
                &ensp;
                <FontAwesomeIcon icon="heart"/>
                &ensp;
                <FontAwesomeIcon icon="user"/>
                &ensp;
                </div>
            </nav>

        )
    }

}

export default SearchBar;