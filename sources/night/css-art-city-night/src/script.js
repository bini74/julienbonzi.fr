 let stari =   ()=>{
             for (var i = 1 ; i < 326 ; i++){
        
                        
        var star =  document.createElement("li") ; 
        star.classList.add("star"+i)  ;                                                 document.querySelector(".starbox").append(star);  
    star.style.animation = 
  "blink "+  (1+ Math.random()*1) +"s ease-in infinite" ;
                                               
     }
         } ;
        
    stari() ;    
    
 let windows = ()=>{
        
  var r3 = document.querySelectorAll(".row3 div") ;  
  var r2 = document.querySelectorAll(".row2 div") ;
  var r1 = document.querySelectorAll(".row1 div") ;  
     
    for (let j = 0 ; j < r3.length ; j++){         
   for (let i = 1 ; i < 19 ; i++){                                
        let win =  document.createElement("li") ; 
        win.classList.add("rw"+i)  ;                                                 
        r3[j].append(win);                                                 
     }
   }  
   
   for (let j = 0 ; j < r2.length ; j++){         
   for (let i = 1 ; i < 19 ; i++){                                
        let win =  document.createElement("li") ; 
        win.classList.add("rw"+i)  ;                                                 
        r2[j].append(win);                                                 
     }
   }  
   
   for (let j = 0 ; j < r1.length ; j++){         
   for (let i = 1 ; i < 10 ; i++){                                
        let win =  document.createElement("li") ; 
        win.classList.add("rw"+i)  ;                                                 
        r1[j].append(win);                                                 
     }
   }  
     
 } ;
  windows() ;   