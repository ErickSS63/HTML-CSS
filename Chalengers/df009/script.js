function gritar(){
    alert("Você está vendo um alerta em JavaScript");
}

function tome(){
    var nome;
    nome= prompt("Qual o seu nome? ");
    alert("Olá,"+ nome);
}

function mudar_texto(){
    var h1=document.getElementsByTagName("h1")
    if (h1[0].innerText=="O mínimo de JavaScript"){
        h1[0].innerText="Evolua seu lado Geek!";
    }else{
        h1[0].innerText="O mínimo de JavaScript";
    }    
}

function incorporar(){
    var p1= document.getElementById("p1")
    p1.innerText=parseInt(p1.innerText) +1
}
