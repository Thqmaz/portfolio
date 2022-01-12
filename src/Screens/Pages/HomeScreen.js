import React from 'react'
import '../../assets/css/HomeScreen.css'

const HomeScreen = () => {
    return (
        <>
            <div class="container">
                <div class="header">

                </div>
                <div class="sidebar">

                </div>
                <div class="terminalContainer">
                    <div class="terminal">
                        <div class="terminalHeading">
                            <div class="top">
                                <div>
                                    <span class="title">guest@thomasgroenendijk.nl: ~</span>
                                </div>
                                <div class="buttons">
                                    <div class="btn closeBtn"></div>
                                    <div class="btn minBtn"></div>
                                    <div class="btn maxBtn"></div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="buttons">
                                    <div class="btn fileBtn" onclick="openFileMenu()">File</div>
                                    <div id="fileDropdown" class="dropdown-content file">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div class="btn editBtn" onclick="openEditMenu()">Edit</div>
                                    <div id="editDropdown" class="dropdown-content edit">
                                        <a href="/login">Login</a>
                                        <a href="/register">Registreer</a>
                                        <a href="/setusername">Gebruikersnaam instellen</a>
                                    </div>
                                    <div class="btn viewBtn" onclick="openViewMenu()">View</div>
                                    <div id="viewDropdown" class="dropdown-content view">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div class="btn searchBtn" onclick="openSearchMenu()">Search</div>
                                    <div id="searchDropdown" class="dropdown-content search">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                    <div class="btn helpBtn" onclick="openHelpMenu()">Help</div>
                                    <div id="helpDropdown" class="dropdown-content help">
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
