var colors = ["Black", "White"];
var unsuedColors = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];

document.write("Array Initial Elements: {"+colors+"}<br/>");
console.log(colors);
colors.unshift(prompt("What color do you want to add to the beginning of the array?", unsuedColors[0]));
document.write("A: {"+colors+"}<br/>");
console.log(colors);
colors.push(prompt("What color do you want to add to the end of the array?", unsuedColors[1]));
document.write("B: {"+colors+"}<br/>");
console.log(colors);
/*for(var i=1;i>=0;i--)
{
    colors.unshift(prompt("What color do you want to add to the beginning of the array?", unsuedColors[2+i]));
}*/
colors.unshift(prompt("What color do you want to add to the beginning of the array?", unsuedColors[2]), prompt("What color do you want to add to the beginning of the array?", unsuedColors[3]));
document.write("C: {"+colors+"}<br/>");
console.log(colors);
colors.shift();
alert("First Color in Array Deleted");
document.write("D: {"+colors+"}<br/>");
console.log(colors);
colors.pop();
alert("Last Color in Array Deleted");
document.write("E: {"+colors+"}<br/>");
console.log(colors);
var colorIndex = prompt("At which index do you want to add a color?", 2)
colors.splice(colorIndex, 0, prompt("What color do you want to add at index '"+colorIndex+"'?", unsuedColors[4]));
document.write("F: {"+colors+"}<br/>");
console.log(colors);
colorIndex = prompt("At which index do you want to delete color/colors?", 2)
colorCount = prompt("How many colors do you want to delete?", 2)
colors.splice(colorIndex, colorCount);
document.write("G: {"+colors+"}<br/>");
console.log(colors);