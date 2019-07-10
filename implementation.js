const arr = {"ajjtak":"AJJ Tak","indiatv":"India TV","zeenews":"Zee News","abpnews":"ABP News","ndtv":"NDTV","indiatv":"India TV",
"timesnow":"Times Now","republic":"Republic","channelnbc":"Channel NBC","foxnews":"Fox News"};

function setup(){
    
    Setup_Header();
    Setup_Footer();
    Setup_Main();
}
function Setup_Footer(){
   
    var h1 = document.createElement("h1");
    h1.innerHTML = " &copy; NewsFeed 2019";
    h1.className = "footer1";
    document.getElementById("footer").appendChild(h1);
}
function Setup_Header(){
    var h1 = document.createElement("h2");
    h1.innerHTML = "NEWSFEED <span class=" + "subhead" + "> Yet another Newsfeed </span>";
    h1.id = "head";
    document.getElementById("heading").appendChild(h1);
}
function Setup_Main(){
   
    var main_tag = document.getElementById("main_content"); 
    Create_Aside(main_tag)
    Create_ContentDiv(main_tag)   
}
function Create_Aside(parent_node){
    
    let aside = document.createElement("aside");
    parent_node.appendChild(aside);
    
    let category = document.createElement("p");
    category.innerHTML = "SELECT CATEGORY";
    category.style.fontStyle = "bold";
    aside.appendChild(category);

    var newList = document.createElement("select");
    newList.id = "dropdown";
    newList.addEventListener("change",setupdropdown);
    newList.appendChild(new Option("All","all"));
    newList.appendChild(new Option("AJJ Tak","ajjtak"));
    newList.appendChild(new Option("India TV","indiatv"));
    newList.appendChild(new Option("Zee News","zeenews"));
    newList.appendChild(new Option("ABP News","abpnews"));
    newList.appendChild(new Option("NDTV","ndtv"));
    newList.appendChild(new Option("India Tv","indiatv"));
    newList.appendChild(new Option("Times Now","timesnow"));
    newList.appendChild(new Option("Republic","republic"));
    newList.appendChild(new Option("Channel NBC","channelnbc"));
    newList.appendChild(new Option("Fox News","foxnews"));
    aside.appendChild(newList);

    let side_panel_subscribe_text = document.createElement("p");
    side_panel_subscribe_text.style.fontStyle = "bold";
    side_panel_subscribe_text.innerHTML = "SUBSCRIBE";
    aside.appendChild(side_panel_subscribe_text);
   
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Email Address";
    input.id = "input";
    aside.appendChild(input);

    let subscribe_button = document.createElement("button");
    subscribe_button.id = "subscribe-button";
    subscribe_button.innerHTML = "Subscribe";
    subscribe_button.addEventListener("click",Validate_email);
    aside.appendChild(subscribe_button);
}

function Create_ContentDiv(parent_node){
    window.Content_Div = document.createElement("div");
    window.Content_Div.className = "content-div";
    parent_node.appendChild(window.Content_Div);
    Show_All_Channels(Content_Div,arr);
}
function Create_InsideDiv(parent_node,text){
    var inside_div = document.createElement("div");
    inside_div.className = "inside-div";
    parent_node.appendChild(inside_div);

    let img = document.createElement("img");
    img.src = "";
    img.alt = "";
    img.className = "img";
    inside_div.appendChild(img);

    let h1 = document.createElement("h1");
    h1.innerHTML = text;
    h1.className = "title";
    inside_div.appendChild(h1);

    let p = document.createElement("p");
    p.innerHTML = "<span class=" + "posted" + ">Posted on: </span>29 June, 2019 <span class=" + "posted" + ">// Category: </span> Category One";
    p.className = "subscript";
    inside_div.appendChild(p);

    let lorem = document.createElement("p");
    lorem.className = "lorem";
    lorem.innerHTML = "Lorem ipsum dolorng onsectetur officia omnis repudiandae harum exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, tenetur, enim quod officiis exercitationem sed minus non possimus cupiditate iste totam.";
    lorem.appendChild(document.createElement("br"));
    inside_div.appendChild(lorem);

    let Continue_reading_button = document.createElement("button");
    Continue_reading_button.innerHTML = "Continue Reading";
    Continue_reading_button.className = "button";
    inside_div.appendChild(Continue_reading_button);

    parent_node.appendChild(document.createElement("hr"));
}
function Show_All_Channels(Content_Div,arr){
    while (window.Content_Div.firstChild) {
        window.Content_Div.removeChild(window.Content_Div.firstChild);
    }
    for(var key in arr){
        Create_InsideDiv(Content_Div,arr[key]);
    }
}

function setupdropdown(){
    console.log("hii");

    let e = document.getElementById("dropdown");
    let option = e.options[e.selectedIndex].value;
    if(option != "all"){
        Show_Specific_Channel(option);
    }else{
        Show_All_Channels(window.Content_Div,arr);
    }
}
function Show_Specific_Channel(option){
    console.log("hello");
    while (window.Content_Div.firstChild) {
        window.Content_Div.removeChild(window.Content_Div.firstChild);
    }
    let news_channel = arr[option];
    Create_InsideDiv(window.Content_Div,news_channel    );
    
}
function Validate_email(){
    let email = document.getElementById("input").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        
        let emails = JSON.parse(localStorage.getItem("email"));
        if(emails == null){
            emails = [];
        }
        emails.push(email);
        localStorage.setItem("email",JSON.stringify(emails));
        alert("Email Address Saved");
        document.getElementById("input").value = "";
        return;
    }
    alert("You have entered an invalid email address!")
}