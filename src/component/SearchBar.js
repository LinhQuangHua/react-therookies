import React from 'react';
import { Input } from 'reactstrap';
import '../style.css';


export default function SearchBar() {
  return (
       <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="Search" />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
           </div>
        </div>
  );
}