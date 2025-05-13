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