import React from 'react'
import '../../assets/css/HomeScreen.css'

const openFileMenu = () => {
    document.getElementById("fileDropdown").classList.toggle("show");
}
const openEditMenu = () => {
    document.getElementById("editDropdown").classList.toggle("show");
}
const openViewMenu = () => {
    document.getElementById("viewDropdown").classList.toggle("show");
}
const openSearchMenu = () => {
    document.getElementById("searchDropdown").classList.toggle("show");
}
const openHelpMenu = () => {
    document.getElementById("helpDropdown").classList.toggle("show");
}

const HomeScreen = () => {
    return (
        <>
            <div className="container">
                <div className="header">

                </div>
                <div className="sidebar">

                </div>
                <div className="terminalContainer">
                    <div className="terminal">
                        <div className="terminalHeading">
                            <div className="top">
                                <div>
                                    <span className="title">guest@thomasgroenendijk.nl: ~</span>
                                </div>
                                <div className="buttons">
                                    <div className="btn closeBtn"></div>
                                    <div className="btn minBtn"></div>
                                    <div className="btn maxBtn"></div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="buttons">
                                    <div className="btn fileBtn" onClick={openFileMenu}>File</div>
                                    <div id="fileDropdown" className="dropdown-content file">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div className="btn editBtn" onClick={openEditMenu}>Edit</div>
                                    <div id="editDropdown" className="dropdown-content edit">
                                        <a href="/login">Login</a>
                                        <a href="/register">Registreer</a>
                                        <a href="/setusername">Gebruikersnaam instellen</a>
                                    </div>
                                    <div className="btn viewBtn" onClick={openViewMenu}>View</div>
                                    <div id="viewDropdown" className="dropdown-content view">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div className="btn searchBtn" onClick={openSearchMenu}>Search</div>
                                    <div id="searchDropdown" className="dropdown-content search">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div className="btn helpBtn" onClick={openHelpMenu}>Help</div>
                                    <div id="helpDropdown" className="dropdown-content help">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
