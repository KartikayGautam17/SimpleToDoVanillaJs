document.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        AddTask();
    }
});

const inputbox = document.getElementsByClassName("input-field")[0];

const searchbtn = document.getElementsByClassName("searchbtn")[0];
load_data();
const unorderedlist = document.getElementsByClassName("list-field")[0];
unorderedlist.addEventListener("click",function(e){  
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        unorderedlist.removeChild(e.target.parentNode);
    }
    save_data();
})


/** 
 * @param {HTMLUListElement} element  
 * @param {String} text
*/

function ltrim(text){
    for (let i = 0;i<text.length;i++){
        if (text[i] !== ' '){
            return text.substring(i,text.length);
        }
    }
    return "";
}

function newchild_li(element){
    element.innerText = inputbox.value;
    return element;
}

/**
 * @param {HTMLSpanElement} element 
 * @returns 
 */
function newchild_span(element){
    element.className = "cancel-task";
    element.innerHTML = "&#10006";
    return element;
}
function AddTask(){
    if (ltrim(inputbox.value) === ''){
        alert("Write something in task");
    }
    else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span = newchild_span(span);
        li = newchild_li(li);
        unorderedlist.appendChild(li);
        li.appendChild(span);
    }
    inputbox.value = "";
    save_data();
}

function RemoveTask(element){
    unorderedlist.removeChild(element);
    save_data();
}

searchbtn.addEventListener("click",AddTask);

function save_data(){
    localStorage.setItem("data",unorderedlist.innerHTML);
    console.log("Save Complete");
}
function load_data(){
    document.getElementsByClassName("list-field")[0].innerHTML = localStorage.getItem("data"); 
    console.log("Load Complete");
}