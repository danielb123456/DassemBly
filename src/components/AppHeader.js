import React from 'react';  
import '../styles/AppHeader.css';

function AppHeader({onCreatePost}){
    return(
        <header>
            <div className="headerContainer">
                <h1 className="headerTitle">DassemBly</h1>
                <button onClick={onCreatePost} className="createPostButton">
                    Create Post
                </button>    
            </div>  
        </header>
    )
}

export default AppHeader;