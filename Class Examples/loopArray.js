function loopArray( myArray)
{
    document.write( "<p>");
    for(var index=0; index< myArray.length; index++)
    {
        if( Array.isArray(myArray[index]) )
            loopArray( myArray[index]);
        else
            document.write( myArray[index] + ", " );
    }
    document.write( "</p>");
}

(function (){
    var myArray = ["abc", 
                    ["My array", "multidimensional"],
                    123, "xyz", 789];
    loopArray(myArray);

    alert(myArray[2][0]);
})();