window.onload= function()
{
    var load=document.querySelector('#lookup');
    var httpRequest;
    
    load.addEventListener('click',function(e)
    {
        console.log('button clicked')
        e.preventDefault()

        httpRequest= new XMLHttpRequest();

        var url="http://localhost/info2180-lab5/world.php"; 
        httpRequest.onreadystatechange=loadsearch();
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    function loadsearch()
    {
        if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200)
        {
            var repsonse=httpRequest.responseText;
            var display=document.getElementById('result');
            display.innerHTML=repsonse;
        }
        else
        {
            console.log('Error');
        }             
    }
}