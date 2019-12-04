var studentNames = ["Michael", "John", "Tony"];
var studentMarks = [320, 230, 480];

document.write("<h2>");
for(var i=0;i<studentMarks.length;i++)
{
    document.write("Score of "+studentNames[i]+" is "+studentMarks[i]+". Percentage: "+(100*studentMarks[i]/500).toFixed(0)+"%<br/>");
}