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
});