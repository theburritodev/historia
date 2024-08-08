const historia = [
  "Ana: Olá, Pedro! Como você está? :)",
  "Pedro: Oi, Ana! Estou bem, e você? :3",
  "Ana: Estou ótima, obrigada por perguntar! :D",
  "Pedro: Que bom! Você tem planos para o fim de semana? :P",
  "Ana: Sim, vou fazer uma trilha na montanha. E você? :)",
  "Pedro: Eu estava pensando em ir ao cinema, mas talvez eu me junte a você na trilha! :O",
  "Ana: Uau, seria ótimo! Vou adorar ter companhia. :D",
  "Pedro: Perfeito! Vou precisar me preparar, então. :3",
  "Ana: Sem problemas! Podemos combinar os detalhes mais tarde. :)",
  "Pedro: Combinado! Até mais então. :D",
  "Ana: Até mais, Pedro! :)"
];

var mensagem_id = 0;

const enviar = ()=>{
    const element = document.createElement("li");
    element.innerText = historia[mensagem_id];
    element.setAttribute("class","message");
    document.getElementById("mensagens").appendChild(element);

    const element1 = document.createElement("li");
    element1.innerText = historia[mensagem_id+1];
    element1.setAttribute("class","message me");
    document.getElementById("mensagens").appendChild(element1);

    mensagem_id+=2;
}