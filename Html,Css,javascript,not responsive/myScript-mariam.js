    //this function can remove a array element.  
    Array.remove = function(array, from, to) {
        var rest = array.slice((to || from) + 1 || array.length);
        array.length = from < 0 ? array.length + from : from;
        return array.push.apply(array, rest);
    };


    var current_msg ="msgId";
    var current_box ="boxId";

    //this variable represents the total number of popups can be displayed according to the viewport width
    var total_popups = 0;
    
    //arrays of popups ids wich i should display
    var popups = [];

    //this is used to close a popup and remove it from the popups list
    function close_popup(id)
    {
        for(var iii = 0; iii < popups.length; iii++)
        {
            if(id == popups[iii])
            {
                Array.remove(popups, iii);
                
                document.getElementById(id).style.display = "none";
                
                calculate_popups();
                
                return;
            }
        }   
    }

    //displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
    //used in calculate popups function
    function display_popups()
    {
        var left = 220;
        
        var iii = 0;
        for(iii; iii < total_popups; iii++)
        {
            if(popups[iii] != undefined)
            {
                var element = document.getElementById(popups[iii]);
                element.style.left = left + "px";
                left = left + 320;
                element.style.display = "block";
            }
        }
        
        for(var jjj = iii; jjj < popups.length; jjj++)
        {
            var element = document.getElementById(popups[jjj]);
            element.style.display = "none";
        }
    }
    
    //creates markup for a new popup. Adds the id to popups array.
    function register_popup(id, name)
    {
        //current_msg ++;
        //current_box ++;
        
        for(var iii = 0; iii < popups.length; iii++)
        {   
            //already registered. Bring it to front.
            if(id == popups[iii])
            {
                Array.remove(popups, iii);   //iif it is alredy in the display remove it and put it in front 
            
                popups.unshift(id);
                
                calculate_popups();
                
                
                return;   //===============? return what
            }
        }               
        
        //create for the popup element 
        var msgId = current_msg+id;
        var boxId = current_box+id;
        var element = '<div class="popup-box chat-popup" id="'+ id +'">';
        element = element + '<div class="popup-head">';
        element = element + '<div class="popup-head-left">'+ name +'</div>';
        element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
        element = element + '<div style="clear: both"></div></div> ';
        element = element +'<div class="see-msg" style="background:aqua;" id="'+boxId+'"></div>';
        element = element + '<div class="popup-messages"><input type="text" id="'+msgId+'" class="send-box value ="" "/><button class="send-button" onclick="send_msg('+msgId+','+boxId+');"'
        +'">send</button></div></div>';

        document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  

        popups.unshift(id);
                
        calculate_popups();
        
    }
    
    //calculate the total number of popups suitable and then populate the toatal_popups variable.
    function calculate_popups()
    {
        var width = window.innerWidth;
        if(width < 540)    //===================????
        {
            total_popups = 0;
        }
        else
        {
            width = width - 200;
            //320 is width of a single popup box
            total_popups = parseInt(width/320);
        }
        
        display_popups();
        
    }
    
    //recalculate when window is loaded and also when window is resized.
    window.addEventListener("resize", calculate_popups);
    window.addEventListener("load", calculate_popups);


    //ajax request to send the msg to server

    /*function loadDoc(textId) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) 
          {
            document.getElementById("textId").innerHTML.value ="hello";

          }
        };
        xhttp.open("POST", "demo_post2.asp", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("msg=Henry");
      }
*/
   function send_msg(msg,box) 
   {
    console.log(msg);   
    console.log(box);  
    //console.log(msg.innerHTML);   
    //console.log( document.getElementById(box).innerHTML);
    //console.log( document.getElementById(msg));  
    box.innerHTML +=  msg.value+"<br/>"; 


   }


   document.getElementById("ss").innerHTML=accounts.data[index].name;
   document.getElementById("imgg").src=accounts.data[index].img;