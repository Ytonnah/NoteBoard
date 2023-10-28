
//Global Colors;

var pastel1 = ["#ffc97f","#eb7777","#eb8291","#f0bbcd","#c9e7db"]

var add_note = document.getElementById("add_note")
var container1 = document.getElementById("div1")
//creating duplicate button instances
const Button_MAX = 6
var button_cap = Button_MAX
task_count = 1

class task_pad{
    constructor(textPad,clearTask){
        textPad = document.createElement("fieldset")
        clearTask = document.createElement("button")
    }
}

//automatically adds an object with parameters
function create_object(object="",parent,styles,text_value=""){
    

    var object = document.createElement(object);
    var text_vl = document.createTextNode(text_value);
    text_vl.style = "background-color:rgba(0,0,0,0);";
    text_vl.value = "placeholder";
    //array object property 2d array
    //ex [["height","2px"],["color",red]]
    var i,j;
    //console.log(styles);
    for(i=0;i<styles.length;i++){//rows
        // for(j=0;j<2;j++){
        //     object.styles[i][j]
        // }
        var x = styles[i][0];
        object.style[x]= styles[i][1];//col
    }
    console.log("successfully created an object");
    object.appendChild(text_vl);
    parent.appendChild(object);

    return object;
}

function createDaObj(){
    var randnm = Number(Math.floor(Math.random()*4)+1);//num between 3 and1
    //var parent = document.getElementById("notes_place");
    var note_submitted_value = document.getElementById("something").value;
    var note_color = document.getElementById("dialog1").style.backgroundColor;
    var color = "";
    console.log(randnm);


    //color pallettes:
    //var pastel1 = ["#ffc97f","#eb7777","#eb8291","#f0bbcd","#c9e7db"];
    if(randnm == 1){color = pastel1[0];}
    else if(randnm == 2){color = pastel1[1];}
    else if(randnm == 3){color = pastel1[2];}
    else{color = pastel1[3];}
    
    //use vw for transformative stuff
    var property1 = [["color","black"],["height","300px"],["width","20%"],["background-color",note_color],["text-align","center"],["vertical-align","middle"],["overflow-wrap","break-word"],["padding-top","5%"]];
    //document.getElementById('remove_note').addEventListener('click',create_object("text",sepra,property1));
    var obj1 = create_object("text",notes_place,property1,note_submitted_value);

    var property2 = [["background-color","red"]];
    var obj2 = create_object("text",obj1,property2);
    
}

function clear_modal_value(){
    document.getElementById("something").value = "";
}
//ready();
function change_modal_color(value_index){
    var colour1 = pastel1;
    
    //$("#dialog1").style.backgroundColor = colour1[value_index];
    document.getElementById("dialog1").style.backgroundColor =  colour1[value_index];
}


function create_palettes(){
    var palettes = pastel1;
    var i;
    var html = "";
    for(i=0;i<palettes.length;i++){
        html += '<div class="btn btn-primary" onclick="change_modal_color('+i+')" style="width:30px;height:30px;border-radius:100%; border:1px black solid; margin:0;background-color:' +palettes[i]+ ';"></div>';
    }
    $("#palettes").html(html);
}
//create_palettes();

function ready_create(){
    clear_modal_value();
    create_palettes();
}


















function create_note(){
    if (button_cap >= 1){
        var division1 = document.createElement("div")
        division1.style.display = "flex"
        division1.style.flexDirection = "column"


        var button = document.createElement("input")
        var textpd = document.createElement("input")
        button.setAttribute("name",task_count)
        //button.addEventListener("dblclick",clear_note())
        button.setAttribute("type","button")
        //button.style.backgroundColor = "cyan"
        button.style.borderRadius = "10px 10px 0 0"
        button.style.height = "30px"
        button.style.marginTop = "5px"
        button.setAttribute("value",("Task " + task_count))
        button.textContent = "Task " + task_count
        
        textpd.setAttribute("type","text")
        textpd.style.height="50px"
        textpd.style.marginBottom = "5px"
        textpd.style.textAlign = "center"

        division1.appendChild(button)
        division1.appendChild(textpd)
        container1.appendChild(division1)

        var xbtn = document.createElement("button")
        xbtn.value = "x"
        xbtn.style.width = "10px"
        xbtn.style.height = "10px"

        container1.appendChild(xbtn)
        //button.addEventListener(onchange,clear_note())

        // var property1 = [["color","red"],["height","50px"],["width","50px"],["background-color","black"]];
        // create_object("text",container1,property1);
    
        console.log("boop")
        task_count+=1
        button_cap-=1
    }
    
    console.log("available slot: "+button_cap)    
}



function clear_note(){
    if (button_cap < Button_MAX){
        container1.removeChild(container1.lastChild);
        console.log("widget deleted");
        task_count-=1;
        button_cap+=1;
    }

    console.log("available slot: "+button_cap);
}




//recreate the code stuff
const notefield = document.getElementById("notes");

function gen_note(){
    //
    var nbox = document.createElement("div");

    //var nfield = document.createElement("textarea");
    //nfield.style = "width:180px;height:100%;border:0;background-color:rgba(0,0,0,0);margin:10px;";
    
    nbox.style = "background-color:cyan;height:200px;width:200px;resize:none;border-radius:5px;";

    //nbox.appendChild(nfield);
    notefield.appendChild(nbox);
    console.log("child added");
    

}


// x = document.createElement("input")
// x.setAttribute("type","buton")
// document.getElementById("sepra").appendChild(x)

