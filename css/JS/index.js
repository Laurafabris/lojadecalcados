
document.querySelector('nav>button').addEventListener(
    //evento a ser tratado
    'click',
    //função que executa quando o bt é clicado
    function(){
        //capturando a ul do menu
        let ul = document.querySelector('nav>ul');
        //Alterando a aaltura da ul;
        ul.style.height = "400px"
    }
)