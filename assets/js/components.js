Vue.component('my-nav',{
    template: 
            "<nav>"+
                "<div class=\"nav-wrapper\">"+     
                    "<img id=\"logo-nav\" onclick=\"window.location.href='index.html'\" alt=\"Logo da CompJúnior\" tabindex=\"1\" src=\"assets/media/svg/LogoComp.svg\" class=\" brand-logo\">"+
                    "<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\" style=\"color:white;\">menu</i></a>"+
                    "<ul class=\"right hide-on-med-and-down\">"+
                        "<li class=\"optionHome\"><a  tabindex=\"2\" aria-label=\"Clique para ir para a página principal do site.\" href=\"index.html\">Home</a></li>"+
                        "<li class=\"optionAbout\"><a tabindex=\"3\" aria-label=\"Clique saber um pouco sobre a CompJúnior.\" class=\"effect-scroll\" href=\"#about\">A Comp</a></li>"+
                        "<li class=\"optionInscription\"><a tabindex=\"4\"aria-label=\"Clique para ir para a página de inscrição do processo seletivo.\"  href=\"inscription.html\">Inscreva-se</a></li>"+
                        "<li><a tabindex=\"5\" aria-label=\"Clique para ir para abrir o edital do processo seletivo.\" href=\"assets/pdf/edital2017.pdf\">Edital</a></li>"+
                    "</ul>"+
                    "<ul class=\"side-nav\" id=\"mobile-demo\">"+
                        "<li class=\"optionHome\"><a  aria-label=\"Clique para ir para a página principal do site.\" href=\"index.html\">Home</a></li>"+
                        "<li class=\"optionAbout\"><a aria-label=\"Clique saber um pouco sobre a CompJúnior.\" class=\"effect-scroll\" href=\"#about\">A Comp</a></li>"+
                        "<li class=\"optionInscription\"><a href=\"inscription.html\">Inscreva-se</a></li>"+
                        "<li><a aria-label=\"Clique para ir para abrir o edital do processo seletivo.\" href=\"assets/media/png/edital.png\">Edital</a></li>"+
                    "</ul>"+
                "</div>"+
            "</nav>"
});

Vue.component('my-footer',{
    template: 
        "<div class=\"row m0\">"+
            "<div class=\"col s12 m6 l6 xl6 logo-f\">"+
                "<img id=\"logo-footer\" src=\"assets/media/svg/LogoComp.svg\">"+
            "</div>"+
            "<div class=\"col s12 m6 l6 xl6 social-icons\">"+         
                "<a href=\"https://www.facebook.com/compjunior/\" target=\"_blanck\"><i class=\"fa fa-facebook-square fa-3x social-ico\"></i></a>"+
                "<a href=\"https://www.instagram.com/compjunior/\" target=\"_blanck\"><i class=\"fa fa-instagram fa-3x social-ico\"></i></a>"+
                "<a href=\"https://twitter.com/compjunior\" target=\"_blanck\"><i class=\"fa fa-twitter-square fa-3x social-ico\"></i></a>"+
            "</div>"+
        "</div>"
});

Vue.component('form-inscription',{
    template:
    "<form id=\"form-inscription\" method=\"POST\">"+    
        "<div class=\"input-field \">"+
            "<i class=\"material-icons prefix\">account_circle</i>"+
            "<input id=\"name\" maxlength=\"50\" type=\"text\" required class=\"validate\">"+
            "<label for=\"name\" data-error=\"Preencha este campo com seu nome completo. Máximo: 50 caracteres.\" >Nome Completo <span>*</span></label>"+
        "</div>"+
        "<div class=\"input-field \">"+
            "<i class=\"fa fa-calendar prefix ico_form\"></i>"+
            "<input id=\"age\" type=\"text\" required class=\"datepicker\">"+
            "<label for=\"age\" >Data de Nascimento <span>*</span></label>"+
        "</div>"+
        "<div class=\"input-field \">"+
            "<i class=\"material-icons prefix\">email</i>"+
            "<input  id=\"mail\" type=\"email\" required class=\"validate\">"+
            "<label for=\"mail\" data-error=\"Preencha este campo com um email válido: exemplo@exemplo.com\" >Email <span>*</span></label>"+
        "</div>"+
        "<div class=\"input-field \">"+
            "<i class=\"material-icons prefix\">credit_card</i>"+
            "<input  max=\"201799999\" id=\"registration\" type=\"number\" required class=\"validate\">"+
            "<label data-error=\"Digite um número de matrícula válido.\" for=\"registration\" >Número de matrícula <span>*</span></label>"+
        "</div>"+
        "<div class=\"input-field \">"+
            "<i class=\"fa fa-graduation-cap prefix ico_form\"></i>"+
            "<input  maxlength=\"40\" id=\"course\" type=\"text\" required class=\"validate\">"+
            "<label for=\"course\" >Curso <span>*</span></label>"+
        "</div>"+
        "<div class=\"input-field\">"+
            "<i class=\"material-icons prefix\">assignment</i>"+
            "<textarea id=\"cv\" required class=\"materialize-textarea\"></textarea>"+
            "<label for=\"cv\">Experiências/Currículo *</label>"+
        "</div>"+
        "<button type=\"submit\"  class=\"waves-effect mtop30 waves-light btn-large btn light-green lighten-1\">Próximo</button>"+
    "</form>"
        
})
