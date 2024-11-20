    
function editColorText(){
    if(document.getElementById("title").classList.contains("hide")){
        document.getElementById("title").classList.remove("hide")
    }else{
        document.getElementById("title").classList.add("hide")
    }
}

document.getElementById("hideBtn").addEventListener("click",editColorText)

function addElement(){
    let newElement = document.createElement("p")
    newElement.innerHTML = document.getElementById("todo").value
    document.getElementById("result").appendChild(newElement)
}

document.getElementById("showBtn").addEventListener("click",addElement)

function deleteElement(){
if(document.getElementById("showAll").classList.contains("hide")){
    document.getElementById("showAll").classList.remove("hide")
}else{
    document.getElementById("showAll").classList.add("hide")
}
}



function deleteElement1(newElement){
    document.getElementById("todo").value = ""
    document.getElementById("result").innerHTML = ""
}

document.getElementById("hideElement").addEventListener("click",deleteElement1)


