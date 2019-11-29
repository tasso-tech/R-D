function makeAjaxCall(url, methodType)
{
    let promiseObj = new Promise(function(resolve, reject)
    {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(methodType, url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState === 4)
            {
                if(xmlhttp.status === 200)
                {
                    console.log("XMLHTTP connected succesfully");
                    let serverResponse = xmlhttp.responseText;
                    console.log(serverResponse);
                    resolve(serverResponse);
                }
                else
                {
                    reject(xmlhttp.status);
                    console.log("XMLHTTP connecting failed!");    
                }
            }
            else
            {
                console.log("XMLHTTP processing going on");
            }            
        }
        console.log("Request sent succesfully!");
    });
    return promiseObj;
}
function errorHandler()
{
    console.log("failed with status: " + status);
}
