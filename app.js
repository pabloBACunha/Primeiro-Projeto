var mensagem = $(".mensagem");
mensagem.on("click", function(){
    console.log("clicou na bagacinha");
    mensagem.animate({
        left: "100px",
    },1000);
});