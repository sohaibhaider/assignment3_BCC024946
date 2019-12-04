var arrayQ = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h2>Qualifications:<br/>");
for(var i=0;i<arrayQ.length;i++)
{
    document.write("<br/>"+(i+1)+") "+arrayQ[i]);
}