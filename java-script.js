function GFG_Fun(){


	 var example_array = ["Asian Heart Institute, Bandra-Kurla Complex","Bhabha Hospital, Bandra","Bhaktivedanta Hospital, Mira Road","Bombay Hospital, Marine Lines","Breach Candy Hospital, Mahalaxmi","	D Y Patil Hospital, Nerul","Cooper Hospital, Vile Parle","Gokuldas Tejpal Hospital, Fort","Grant Medical College and Sir Jamshedjee Jeejebhoy Group of Hospitals, Sandhurst Road ","Hinduja Healthcare Surgical, Khar, Mumbai"];
    
     	


    
   
    
    var select = document.getElementById("arr");
    for(index in example_array) {
        select.options[select.options.length] = new Option(example_array[index], index);

    }

}

		function save1(){
            var tname=document.getElementById("tname").value;
            var tdate=document.getElementById("tdate").value;
           var tprice=document.getElementById("cash").value
            var tresult=document.getElementById("tresult").value;
            var dremark=document.getElementById("dremark").value;
            console.log(tname,tdate,tresult,dremark,tprice);

            document.getElementById("t1").innerText=tname; 
            document.getElementById("t2").innerText=tdate; 
            document.getElementById("t3").innerText=tprice; 
            document.getElementById("t4").innerText=tresult; 
            document.getElementById("t5").innerText=dremark; 

        }

        function ageCalculator() {
            var userinput = document.getElementById("DOB").value;
            var dob = new Date(userinput);
            if(userinput==null || userinput=='') {
            
              return false; 
            } else {
            
            //calculate month difference from current date in time
            var month_diff = Date.now() - dob.getTime();
            
            //convert the calculated difference in date format
            var age_dt = new Date(month_diff); 
            
            //extract year from date    
            var year = age_dt.getUTCFullYear();
            
            //now calculate the age of the user
            var age = Math.abs(year - 1970);
            console.log(age)
            //display the calculated age
            return document.getElementById("Age").value=age ;
            }
        }

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            var actions = $("table td:last-child").html();
            // Append table with add row form on add new button click
          
            // Edit row on edit button click
            $('#btn').click(function() 
            {		
                $(this).parents("tr").find("td:not(:last-child)").each(function(){
                    $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
                });		
                
            });
            // Delete row on delete button click
            $('#btn1').click(function() {
                $(this).parents("tr").remove();
                $(".add-new").removeAttr("disabled");
            });
        });
        