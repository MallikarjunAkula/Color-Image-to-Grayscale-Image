function ConvertImage()
      {
       var img = document.createElement("img");
        img.src = "load.gif";
        $("#ConvertedImage").html(img);
        var form_data = new FormData();
        var property = document.getElementById("image").files[0];
        form_data.append("file", property);
        $.ajax({
          url: "imageConverter.php",
          method: "post",
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          success: function(result){
            $("#ConvertedImage").html(result);
          }
        });
      }
      function DisplayImage(input)
      {
        if (input.files && input.files[0])
        {
          var reader = new FileReader();
          reader.onload = function (e) {
                      $('#SourceImage')
                          .attr('src', e.target.result)
                          .width(500);
                          //.height(400);
                    };
           reader.readAsDataURL(input.files[0]);
        }
          }