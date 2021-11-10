window.onload =function()
{
    var loadsearch = document.getElementById('lookup');
    var citysearch = document.getElementById('cities');
    var httpRequest = new XMLHttpRequest();

    loadsearch.addEventListener('click', function(e)
    {
        console.log('button clicked')
        var country= document.getElementById('country').value;
        var url = "http://localhost/info2180-lab5/world.php?country="+country;
        e.preventDefault();
        httpRequest.onreadystatechange = function() 
        {
            if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200)
            {  
                var output = document.getElementById("result");
                var response = httpRequest.responseText;
                output.innerHTML = response;    
            }
            else
            {
                var msg ="problem";
                msg.innerHTML = msg;
            }   
        };
        httpRequest.open('GET', url);
        httpRequest.send(); 
    });

    citysearch.addEventListener('click', function(c)
    {
        console.log('button clicked')
        var cities= document.getElementById('country').value;
        var url = "http://localhost/info2180-lab5/world.php?context="+cities;
        c.preventDefault();
        httpRequest.onreadystatechange = function() 
        {
            if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200)
            {  
                var ans = document.getElementById("result");
                var response2 = httpRequest.responseText;
                ans.innerHTML = response2;    
            }
            else
            {
                var msg ="problem";
                msg.innerHTML = msg;
            }   
        };
        httpRequest.open('GET', url);
        httpRequest.send(); 
    });
}