var studentarray=[]
function submit(){
    var displayarray=[]
    for(var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value
        console.log(name)
        studentarray.push(name)
    }
    console.log(studentarray)
   
    var arraylength=studentarray.length
    for(var k=0;k<arraylength;k++){
        displayarray.push("<h4> name: "+studentarray[k]+"</h4>")
    }
    console.log(displayarray)
    document.getElementById("display_name_with_commas").innerHTML=displayarray
    var removecommas=displayarray.join(" ")
    console.log(removecommas)
    document.getElementById("display_name_without_commas").innerHTML=removecommas
  document.getElementById("submit_button").style.display="none"
  document.getElementById("sort_button").style.display="inline-block"
    }
function sorting(){
    var displaysortingarray=[]
    studentarray.sort()
    console.log(studentarray)
    var arraylength=studentarray.length
    for(var k=0;k<arraylength;k++){
        displaysortingarray.push("<h4> name: "+studentarray[k]+"</h4>")
    }
    console.log(displaysortingarray)
    document.getElementById("display_name_with_commas").innerHTML=displaysortingarray
    var removecommas=displaysortingarray.join(" ")
    console.log(removecommas)
    document.getElementById("display_name_without_commas").innerHTML=removecommas
}