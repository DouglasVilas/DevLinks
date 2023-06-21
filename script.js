
//mudar o modo noturno ou light 
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light') 
    //trocar a imagem 

    const img = document.querySelector("#profile img")
    

    if(html.classList.contains('light')){
        img.setAttribute('src',"FOTOS/avatar_light.png")
        img.setAttribute('alt',"Foto de perfil de um usuário usando óculos escuro e estudando programação")

    }else{
        img.setAttribute("src","FOTOS/Avatar.png")
        img.setAttribute('alt',"Foto de perfil de um usuário usando óculos e estudando programação")
    }


  
}


