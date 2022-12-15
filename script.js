function showMore(){
    document.getElementById("magazine2").style.display="flex";
    document.getElementById("more").style.display="none";
    document.getElementById("work").style.height="auto";
};

function takeimg(){
    img=document.getElementsByClassName("mag-img");
    return img;
};

function changeimg(i,n){
    
    return i[n];
    
}

function taketext(){
    txt=document.getElementById("img-caption");
};

function testimg(){
    console.log(takeimg());
    console.log(changeimg(takeimg(),5));
};