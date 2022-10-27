// document.querySelector("#iframe1").setAttribute("src", "https://ascendo.bestraining.app/opcode-view-course-run-by-search?NumberRegistration=10&RegistrationClosingDate=" + today);
 call_iframe("iframe1","opcode-search-course-run","NumberRegistration","10","RegistrationClosingDate",today)

 var CourseEmployerRecordID=0;
 var CourseRunRecordID=0;


function TbHide(){

TB.hideComponent('component_28');
TB.hideComponent('component_36')}

TbHide();




// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementById("close");
span.onclick = function() {
  modal.style.display = "none";
};

// modal4
var modal4 = document.getElementById("myModal4");
var span4 = document.getElementById("close4");
span4.onclick = function() {
  modal4.style.display = "none";
};






// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    // for madal 
  if (event.target == modal) {
    modal.style.display = "none";
  }

//   modal4
  else if(event.target == modal4){
     modal4.style.display = "none";  
  }

}



window.onmessage = function(e) {
   //alert(e.data.opcodeUrl)

       if(e.data.opcodeUrl =="opcode-search-course-run") {
            if(e.data.buttonType=='select'){ 
            CourseRunRecordID=e.data.recordId;
           
         TB.showComponent('component_28')
       
         call_iframe("iframeA","opcode-view-registration-by-search-enrolment","CourseRunRecordID",CourseRunRecordID)
        AutoScrollTo("reg_t");}
        
         if(e.data.buttonType=='details'){ 
           
           
        //  TB.showComponent('component_28')
       
         call_iframe("iframe_course_R_D","opcode-search-course-run/opcode-view-course-run-details",e.data.recordId)
         modal.style.display = "block";
        // AutoScrollTo("reg_t");
        }
        
        
        
            
        }   

       else if(e.data.opcodeUrl == "opcode-view-registration-by-search-enrolment") {
         
            
                    if(e.data.buttonType=='details'){
               
                       TB.showComponent('component_36')
                       
                       call_iframe("iframe_Reg_T_D","opcode-search-registration/opcode-view-enrolment-details-form",e.data.recordId)
                 
                          modal4.style.display = "block";
                        
                    }
        } 
      
    // }
};