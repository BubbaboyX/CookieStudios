function set() {
    const Home=document.createElement("p");Home.innerHTML="Home";Home.className="header-text"
    const About=document.createElement("p");About.innerHTML="About";About.className="header-text"
    const Games=document.createElement("p");Games.innerHTML="Games";Games.className="header-text"
    const Account=document.createElement("p");Account.innerHTML="Account";Account.className="header-text"
    const EE=document.createElement("p");EE.innerHTML="Easter Egg";EE.className="header-text"
	const OST=document.createElement("p");OST.innerHTML="OST";OST.className="header-text"

    Home.tabIndex=0
    About.tabIndex=0
    Games.tabIndex=0
    Account.tabIndex=0
	OST.tabIndex=0
    EE.style.opacity="0%"

    Home.onclick=() => {window.location.href="index"}
    About.onclick=() => {window.location.href="about"}
    Games.onclick=() => {window.location.href="games"}
    Account.onclick=() => {window.location.href="account"}
    EE.onclick=() => {window.location.href="ee"}
	OST.onclick=() => {window.location.href="ost"}
    
    Home.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="index.html"}
    About.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="about.html"}
    Games.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="games.html"}
    Account.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="account.html"}
	OST.onkeydown=(key) => {if (key.key=="Tab") return;window.location.href="ost.html"}

    document.body.querySelector("div#header").appendChild(Home)
    document.body.querySelector("div#header").appendChild(About)
    document.body.querySelector("div#header").appendChild(Games)
    document.body.querySelector("div#header").appendChild(Account)
	document.body.querySelector("div#header").appendChild(OST)
    document.body.querySelector("div#header").appendChild(EE)
}

window.onload=set
