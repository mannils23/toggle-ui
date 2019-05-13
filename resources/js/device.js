 $(function() {
    getConnectionStatus();
    getPowerStatus();
    $("#add_device").click(addNewDevice);
    $("#toggle_device_status").click(toggleDevice);

});



function getConnectionStatus(){

    $.ajax({ 
        url: '/View/get_connection_status.php',
        data: {token : "test_token"},
        type: 'post',
        dataType:'json',
        success: function(data) {
            if(data["connection_status"] === "true"){
            $('#connectivity_status').val("Online");
            }else{
            $('#connectivity_status').val("Offline");
        }
        }
   }); 
};

function getPowerStatus(){
    $.ajax({ 
        url: '/View/get_power_status.php',
        data: {token : "test_token"},
        type: 'post',
        dataType:'json',
        success: function(data) {
            if(data["status_power"]=== "on"){
                $('#power_status').val("On");
                //$("#toggle_device_status").click(turnOffDevice);
            }else{
                $('#power_status').val("Off");
                //$("#toggle_device_status").click(turnOnDevice);
            }
        }
   }); 
};


function turnOnDevice() {
    let device = "test_token";
    $.ajax({ 
        url: '/View/turn_on_process.php',
        data: {
            token : device,
        },
        type: 'post',
        dataType:'json',
        success: function(data) {
            if(data["turn_on_result"] === "true"){
            $('#power_status').val("On");
            }else if(data["turn_on_result"] === "false"){
            $('#power_status').val("Off");
            }else{
                $('#power_status').val("UNKNOWN");
                getPowerStatus();
                }    
        },
        error: function(error){
        }
});
}

function turnOffDevice() {
    let device = "test_token";
    $.ajax({
      url: "/View/turn_off_process.php",
      data: {
        token: device
      },
      type: "post",
      dataType: "json",
      success: function(data) {
        if (data["turn_off_result"] === "true") {
          $("#power_status").val("Off");
        } else if (data["turn_off_result"] === "false") {
          $("#power_status").val("On");
        } else {
          $("#power_status").val("UNKNOWN");
          getPowerStatus();
        }
      },
      error: function(error) {}
    });
}




function toggleDevice(){
    let device = "test_token";
    let power_status = $('#power_status').val();
    if(power_status === "On"){
    $.ajax({
      url: "/View/turn_off_process.php",
      data: {
        token: device
      },
      type: "post",
      dataType: "json",
      success: function(data) {
        if (data["turn_off_result"] === "true") {
          $("#power_status").val("Off");
        } else if (data["turn_off_result"] === "false") {
          $("#power_status").val("On");
        } else {
          $("#power_status").val("UNKNOWN");
          getPowerStatus();
        }
      },
      error: function(error) {}
    });
}else{
    $.ajax({ 
        url: '/View/turn_on_process.php',
        data: {
            token : device,
        },
        type: 'post',
        dataType:'json',
        success: function(data) {
            if(data["turn_on_result"] === "true"){
            $('#power_status').val("On");
            }else if(data["turn_on_result"] === "false"){
            $('#power_status').val("Off");
            }else{
                $('#power_status').val("UNKNOWN");
                getPowerStatus();
                }    
        },
        error: function(error){
        }
});
}
}

function addNewDevice(){
    let device = "new_device";
    $.ajax({ 
        url: '/View/add_device.php',
        data: {
            token : device,
        },
        type: 'post',
        dataType:'json',
        success: function(data) {
            $("#new-devices").append(
                + <button id="toggle_device_status" type="submit"   
                name="action" 
                >Toggle</button>
                + "<p>" 
            + data[i]['user'] + "<br>"
                + data[i]['date'] + "<br>"
                + data[i]['message'] + "<br>"
                + deleteBtn + "</p>"
                + "</div>"
            );
},
error: function(error){
}
});
};   