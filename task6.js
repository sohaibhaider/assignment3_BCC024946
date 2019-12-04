var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan"];
var o = ["th","st","nd","rd"];

//This Loop/Conditions will work correctly for array length between 1-20
/*for(var i=1;i<=aCities.length;i++)
{
    if(i<4)
    {
        document.write(i+o[i]+" choice is "+aCities[i-1]+"<br/>");
    }
    else
    {
        document.write(i+o[0]+" choice is "+aCities[i-1]+"<br/>");
    }
}*/

//This will work for even bigger array lengths
for(var i=1;i<=aCities.length;i++)
{
    if(i%10<4 && (i%100<11 || i%100>13))
    {
        document.write(i+o[i%10]+" choice is "+aCities[i-1]+"<br/>");
    }
    else
    {
        document.write(i+o[0]+" choice is "+aCities[i-1]+"<br/>");
    }
}