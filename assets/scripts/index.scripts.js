// 

function enviarEmail() {
  const public_key = "El7W1iDkpIByI4RwB";
  const secret_key = "9_MBsXwTAQcNHLk456_Yt";

  (function () {
    emailjs.init(public_key);
  })();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos");
        return;
      }

      const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
      };

      const serviceId = "service_0xcltct";
      const templateId = "template_a7fdelp";

      emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
          document.getElementById("nome").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mensagem").value = "";
          console.log(res);
          alert("Sua mensagem foi enviado para o Cantinho Pet com sucesso!");
        })
        .catch((err) => console.log(err));
}
