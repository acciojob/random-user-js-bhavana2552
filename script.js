//your code here
//your code here
async function showUserDetails(){
    try{
        document.getElementById("showRelevantData").innerHTML=" ";
        let result=await fetch("https://randomuser.me/api/");
        data=await result.json();
        
       
        console.log(data)
        displayUserDetails();
    }
    catch(err){
        console.log(err);
    }
}
document.addEventListener("onclick",showUserDetails())
// showUserDetails();
function displayUserDetails(){
    let output=data.results[0];
    let image=output.picture.large
    let imageHtml=document.getElementById("image");
    imageHtml.src=image;

    let name=output.name
    console.log("name",name)
    let nameHtml=document.getElementById("name");
    nameHtml.innerText=name.title+" "+name.first+" "+name.last;

    console.log(image)

}
function showAge(){
    document.getElementById("showRelevantData").innerHTML=data.results[0].dob.age;
}
function showEmail(){
    document.getElementById("showRelevantData").innerHTML=data.results[0].email;
}
function showPhone(){
    document.getElementById("showRelevantData").innerHTML=data.results[0].phone;

}