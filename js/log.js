{    //Settings for changing the background of the body element and the icon
    let body = document.getElementById("body")
    let dark = document.querySelector(".change-mode")
    let iconDarkmode = document.querySelector(".icon-darkmode")
    dark.addEventListener("click", ()=>{
        body.classList.toggle("dark-mode")
        if (body.classList.contains("dark-mode")) {
            iconDarkmode.classList.add("mode")
        }else{
            iconDarkmode.classList.remove("mode")
        }
    })
    }
    
    {    // for moving the settings item
    let gear = document.getElementById("gear")
    let Settings = document.querySelector(".Settings")
    let closee = document.querySelector(".close")
    gear.addEventListener("click",()=>{
        Settings.style.right="0px"
    })
    closee.addEventListener("click",()=>{
        Settings.style.right="-250px"
    
    })
    }
    
    {    //Settings for changing the background of the header and the color of the text
    const change = ()=>{
        return Math.round(Math.random() * 360)
    }
    
    let headerBg = document.getElementById("headerBg")
    let header = document.getElementById("header")
    
    
    headerBg.addEventListener("click",()=>{
        header.style.backgroundColor= `hsl(${change()}, 100%, 50%)`
        
    
    })
    
    let changecolor = document.querySelector(".changecolor")
    
    changecolor.addEventListener("click",()=>{
        let heading = document.querySelectorAll("#body > div > div.screen-chat > div > h3")  //This is for defining all h3 elements inside the screen-chat element
        console.log("first")
        heading.forEach((item) => {
            item.style.color = `hsl(${change()}, 80%, 50%)`
        })
    })
    
    }

    {   //In order to download a profile picture
    
let dadImge = document.querySelector(".dad-img")
let change = document.querySelector(".change")
let active = document.querySelector(".active")

dadImge.addEventListener("click", (e)=>{
    change.style.display = "block"
})

    
    change.addEventListener("click",(e)=>{
    
        let srcimg = e.target.src
        let createimg = document.createElement("img")
        createimg.setAttribute("src", srcimg)
        change.style.display = "none"
        active.parentNode.replaceChildren(createimg, active)      //This is to replace the old item with the new one
        active.classList.add("remove")
    })




}

{    //This is for if the inputs are empty

    let hearts = document.querySelector(".hearts")
let button = document.getElementById("button")

const angry = ()=>{
    let prantheart = document.createElement("div")
        button.append(prantheart)
        let stophea = setInterval(() => {
            let heart = document.createElement("div")
        heart.classList.add("heart")
        heart.innerHTML = "&#128545;"   // This is to add an emoji code
        prantheart.appendChild(heart)
        heart.style.left= `${Math.random() * 100}%`
        heart.style.animationDuration = `${( Math.random() + .5) * 1.5}s`  //This is in order for the emoji to be downloaded in a random way
        },50 );
        setTimeout(() => {
            clearInterval(stophea)
        }, 3000);
    
        setTimeout(() => {
            prantheart.remove()
        }, 5000);
}


    button.addEventListener("click",(e) => {
        angry()
    })

}



