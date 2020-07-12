let buttonValue=document.getElementById("click");
let text=document.getElementById("enter");
let ulist=document.querySelector("ul");
//Get the elements of li. 
//Note it is not single element rather multiple'elements' when you use classname
let childNode = document.getElementsByClassName("deleteItem");
console.log("button" + buttonValue);
console.log("text" + text);
console.log("ulist" + ulist);
// Use a for Loop to look for event listing of each items sequentially
for ( var i=0; i<childNode.length; i++)
{
    console.log(" listening for event on object" + childNode[i]);   
    childNode[i].addEventListener("click",removeElement);
}
// function to remove the element
function removeElement(event){
    //console.log("object selected during click" + childNode[i]); 
    console.log("event"+event); 
    console.log("event.target"+event.target); 
    console.log("this" +this);
    //event.target pulls current element
    //"this" pulls the parent element
    this.parentNode.remove();
}
function textValueLength(){
return text.value.length;
}
//1. create the List Item
//2. append the child by creating a text node. Child of element in DOM tree is textnode
//3. Step 1 and 2 has created List item and its child text node but has not placed the list item under 
// unordered list. Step 3 does the append to Unordered list
function createListElement(){
    let liItem = document.createElement("li");
    liItem.appendChild(document.createTextNode(text.value));
    ulist.appendChild(liItem);
    //add new button-delete whenever new item is added
    let buttonNew = document.createElement("button");
    buttonNew.appendChild(document.createTextNode("delete"));
    buttonNew.classList.add("deleteItem");
    liItem.appendChild(buttonNew);
    //Assign onclick function to remove the element
    buttonNew.onclick =removeElement;
    // reset the text entered everytime
    text.value="";
}

// Toggles done:
function toggleDone(event) {
	if (event.target.classList.contains("list")) {
		event.target.classList.toggle("done");
	}
}
// strikethrough(toggles done) the list item when clicked:
document.addEventListener("click", toggleDone);

//Function to add list item when Mouse click is used to add the item through button
function addListAfterClick(){
    if (textValueLength() > 0)
    {
        createListElement();
    }
}
// Function to add list item when Enter key is pressed
function addListAfterKeypress(keyvalue){
    if (textValueLength() > 0 && keyvalue.keyCode ===13)
    {
        createListElement();
    }
}
//Add List item by Click and keypress
buttonValue.addEventListener("click", addListAfterClick)
text.addEventListener("keypress", addListAfterKeypress)

 