function set() {
    const Home=document.querySelector("#Home")
    const About=document.querySelector(".header-text#About")
    const Games=document.querySelector(".header-text#Games")
    const Account=document.querySelector(".header-text#Account")

    Home.tabIndex=0
    About.tabIndex=0
    Games.tabIndex=0
    Account.tabIndex=0

    Home.onclick=() => {window.location.href="index.html"}
    About.onclick=() => {window.location.href="about.html"}
    Games.onclick=() => {window.location.href="games.html"}
    Account.onclick=() => {window.location.href="account.html"}

    Home.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="index.html"}
    About.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="about.html"}
    Games.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="games.html"}
    Account.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="account.html"}
}

window.onload=set
