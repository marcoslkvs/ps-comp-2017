Vue.component('my-nav',{
    template: 
            "<nav>"+
                "<div class=\"nav-wrapper\">"+     
                    "<img id=\"logo-nav\" src=\"assets/media/svg/LogoComp.svg\" class=\" brand-logo\">"+
                    "<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>"+
                    "<ul class=\"right hide-on-med-and-down\">"+
                        "<li><a  href=\"index.html\">Home</a></li>"+
                        "<li><a class=\"effect-scroll\" href=\"#about\">A Comp</a></li>"+
                        "<li><a href=\"inscription.html\">Inscreva-se</a></li>"+
                        "<li><a href=\"assets/media/png/edital.png\">Edital</a></li>"+
                    "</ul>"+
                    "<ul class=\"side-nav\" id=\"mobile-demo\">"+
                        "<li><a href=\"index.html\">Home</a></li>"+
                        "<li><a class=\"effect-scroll\" href=\"#about\">A Comp</a></li>"+
                        "<li><a href=\"inscription.html\">Inscreva-se</a></li>"+
                        "<li><a href=\"assets/media/png/edital.png\">Edital</a></li>"+
                    "</ul>"+
                "</div>"+
            "</nav>"
});

Vue.component('my-footer',{
    template: 
        "<div class\"container\">"+
            "<div class=\"row m0\">"+
                "<div class=\"col s12 m6 l6 xl6\">"+
                    "<img id=\"logo-footer\" src=\"assets/media/svg/LogoComp.svg\">"+
                "</div>"+
                "<div class=\"col s12 m6 l6 xl6 right-align\">"+                    
                    "<img  src=\"assets/media/svg/facebook.svg\" class=\" social-ico\">"+
                    "<img  src=\"assets/media/svg/instagram.svg\" class=\"social-ico\">"+
                "</div>"+
            "</div>"+
        "</div>"
});

