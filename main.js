var image_of_family=["https://i.postimg.cc/s2yjVKZR/2fqx11a40go1000.jpg","https://i.postimg.cc/9QBMwv2f/images.jpg","https://i.postimg.cc/yd2YzKmL/download.jpg","https://i.postimg.cc/bwqYP3nf/WIN-20210628-22-25-27-Pro.jpg"];
var names = ["Mum","Dad","Grandma","Me"];
console.log(names);
    
var i=0;
function eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee()
{
    i++;
    var number_of_family_members=3;
    if(i>number_of_family_members){
        i=0;
    }
    var updateimage= image_of_family[i];
    var updateName= names[i];
    document.getElementById("family").src = updateimage;
    document.getElementById("family_name").innerHTML = updateName;

}