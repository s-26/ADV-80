guest_array=[];
function submit(){
    var display_guest=[];
    for(var j=1;j<=4;j++)
    {
    var name=document.getElementById("Name_"+j).value;
        console.log(name);
        guest_array.push(name);
    }
console.log(guest_array);
var length=guest_array.length;
console.log(length);
for(var k=0;k<length;k++)
{
    display_guest.push("<h4>Name -"+guest_array[k]+"</h4>");
    console.log(display_guest);
}
console.log(display_guest);
document.getElementById("display_name_with_commas").innerHTML=display_guest;
var remove_commas=display_guest.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    guest_array.sort()
    console.log(guest_array);
    var display_sorted=[];
    var length=guest_array.length;
console.log(length);
for(var k=0;k<length;k++)
{
    display_sorted.push("<h4>Name -"+guest_array[k]+"</h4>");
    console.log(display_sorted);
}
var remove_commas=display_sorted.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}