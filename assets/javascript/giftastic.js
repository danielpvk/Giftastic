        
      var gifbuttons=["dragons","unicorns","mermaids","minotaurs","efigie","owls","fantastic beasts","alebrijes"];
    
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
        
        $(".gifs").html("<h1>"+event.target.innerText+"</h1>");
        // Grabbing and storing the data-animal property value from the button
        var animal = $(this).attr(event.target.innerText);

        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        event.target.innerText + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            // After data comes back from the request
            .then(function(response) {
                
              var results = response.data;
              debugger;
              // Looping through each result item
              for (var i = 0; i < results.length; i++) {
    
                // Creating and storing a div tag
                var animalDiv = $("<div>");
                animalDiv.attr("class","animal"+i);
    
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);
    
                // Creating and storing an image tag
                var animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-still",results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalImage.attr("data-state", "still");
    
                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);
    
                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $(".gifs").prepend(animalDiv);
              }
            });
        });
 
      $(document).ready(function(){
           var i=0;
           createButtons(i,gifbuttons);
      });