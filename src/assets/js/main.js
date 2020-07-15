(function(window){
    function scrollSmoothTo(elementId) {
        //var element = document.getElementById(elementId);
        var element = document.querySelector("."+elementId);
        console.log(element);
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
    }
    var oldLink;
    var findElements = function(tag) {
        var elements = document.getElementsByTagName(tag);
        var found = [];
        for (var i = 0; i < elements.length; i++) {
            var hashtagArray = elements[i].href.match(/#[a-z]+/gi);
          if (hashtagArray && hashtagArray.length > 0) {
            found.push(elements[i]);
            if(!oldLink){
                oldLink = elements[i];
            }
            elements[i].addEventListener('click', function (event) {
                let elementRedirect = event.target.href.match(/#[a-z]+/gi)[0].substr(1);
                scrollSmoothTo(elementRedirect);
                console.log(oldLink, "first");
                if(oldLink != event.target){
                    oldLink.classList.remove("active");
                }
                event.target.classList.add("active");
                oldLink = event.target;
                console.log(oldLink, "oldLink");
                event.preventDefault();
            });
          }
        }
        
        return found;
      }
      console.log(findElements('a'));
} (this) );