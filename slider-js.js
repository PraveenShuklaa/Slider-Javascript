function change(data){
    if (data==1){
       document.getElementById('slideimg1').style.display='block'; 
       document.getElementById('slideh11').style.display='block'; 
       document.getElementById('slideimg2').style.display='none'; 
       document.getElementById('slideh12').style.display='none'; 
       document.getElementById('slideimg3').style.display='none'; 
       document.getElementById('slideh13').style.display='none'; 
    } else  if (data==2){
        document.getElementById('slideimg1').style.display='none'; 
       document.getElementById('slideh11').style.display='none'; 
       document.getElementById('slideimg2').style.display='block'; 
       document.getElementById('slideh12').style.display='block'; 
       document.getElementById('slideimg3').style.display='none'; 
       document.getElementById('slideh13').style.display='none'; 
    }
    else {
        document.getElementById('slideimg1').style.display='none'; 
       document.getElementById('slideh11').style.display='none'; 
       document.getElementById('slideimg2').style.display='none'; 
       document.getElementById('slideh12').style.display='none'; 
       document.getElementById('slideimg3').style.display='block'; 
       document.getElementById('slideh13').style.display='block'; 
    }
}