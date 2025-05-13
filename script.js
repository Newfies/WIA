/*




                                                                
                                                                
                                                                
                                                                
  qq      q                        qqqq                         
  qqq    qq                       qq  q                         
  qqqq   q                        q                             
   q q   q                  q     q      🐶                      
   q q   q  qqqqq    q      q     q             qqq   qqqqq     
   q qq  q  q   q    q      q   qq🐶qq         qq q   q   qq    
   q  q  q  q  🐶q   q  🐶  q     q      q     q  q   qq        
   q  qq q  qq       q  q   q     qq     q     qq🐶q   qq       
   qq  qqq   qqqqq   q qqq  q      q     q     q        qq🐶     
    q  q🐶           qqq qq q      q     q     qq  q      qqq   
    q                      qq            q      qqqq     qqqq   
                                                        qq      
                                                                
                                                                
                                                                
                           q                                    
                           q    q                               
                          qq   qq                               
                          q    q                                
                         qq   qq                                
                  q      q    q                                 
                  q                                             
                 qq                q                            
                 q    qq🐶q        q                            
                 q  qqq  q        qq                            
                 qqqq    qqqqq   qq                             
                             qqqqq                              





*/

document.addEventListener("DOMContentLoaded", (event) => {
    // Functions Here
    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    // Event Listeners
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    })  

    // Other Stuff
    loadScript('res/app.js')

    // Progress Bars
    document.querySelectorAll('.progress-label').forEach(label => {
        const per = label.getAttribute('per');
        const originalText = label.textContent.trim();
        const fillDiv = label.closest('.progress-fill');

        fillDiv.style.width = per + '%';
        label.textContent = `${originalText} -  ${per}%`;
    });
});