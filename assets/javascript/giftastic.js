        
      var gifbuttons=["dragons","unicorns","mermaids","minotaurs","efigie","owls","fantastic beasts"];
    
      function createButtons(){
        $(".buttons_div").html("");
        $.each(gifbuttons, function( i,gifbuttons) {
         
         //   $(".buttons_div").append("<button>"+gifbuttons+"</button>");
            $(".buttons_div").append('<button type="button" class="btn btn-outline-light button'+i+'">'+gifbuttons+'</button>'+'           ');
          });

    }  
        function addButton(){
            gifbuttons.push(" ");
        } 
      $("#boton").on('click',function event(){
        var newButton=$("#newAnimal").val();
        gifbuttons.push(newButton);    
        createButtons();
        $("#newAnimal").val("");
            
      });
      $(".buttons_div").on("click",function(event){
            debugger;
            $(".gifs").html("<h1>"+event.target.innerText+"</h1>");
            console.log(event);
      });
      $(document).ready(function(){
           var i=0;
           createButtons(i,gifbuttons);
      });