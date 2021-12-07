
const errorMessage = "There was an error while processing the request";

"use strict";
$(document).ready(function() {
    $("#btnSub").on("click", function () {
        $("#div1").fadeIn();
        const cty =$("#txtCity").val();
        console.log(cty);
        const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+cty+"&appid=d19374dddfc8208c8b3afbba05866eae";
        $.ajax({
            url: apiUrl,
            type: "GET"
        })
            .done(function (data) {
                //$("#output").text(JSON.stringify(data));
                //document.getElementById("demo").innerHTML =
                //obj.employees[1].firstName + " " + obj.employees[1].lastName;
                console.log(data.weather[0].main)
                const fl = (data.main.feels_like- 273.15).toFixed(1);
                const temp = (data.main.temp- 273.15).toFixed(1);
                const humidity = data.main.humidity;
                const ws = data.wind.speed;
                $("#output").html(cty+','+data.sys.country+'<br>'+data.weather[0].main+'<br> Temperature: '+temp+'0&#176C(Feels Like: '+fl+'0&#176C)<br> Humidity:' +humidity+'%<br> Wind speed: '+ws+'m/s')
            })
            .fail(function () {
                $("#output").text(errorMessage);
            });
    });
});
/*
    $(function() {

        $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid={d19374dddfc8208c8b3afbba05866eae}',
                type: 'GET',
                /*success:function(request){
                    console.log(request);
                },
                error:function(err){
                    console.log(err);
                }
            })
            .done(function(data) {

                // The GET response is a JavaScript object
                $('#response').html(data);
                $('#response_type').html(typeof data);
                
                // The object can be easily treated as an array
                const table = $('#parsed_object');
                for(let property in data) {
                    let row = $('<tr></tr>');

                    let cell = $('<td></td>', { 'text': property });
                    row.append(cell);
                    cell = $('<td></td>', { 'text': data[property] });
                    row.append(cell);

                    table.append(row);
                }
            });
    });
};*/