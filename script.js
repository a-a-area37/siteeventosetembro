
document.getElementById("formInscricao").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this).then(
    function () {
      document.getElementById("statusMsg").textContent = "✅ Inscrição enviada com sucesso!";
    },
    function (error) {
      document.getElementById("statusMsg").textContent = "❌ Ocorreu um erro ao enviar. Tente novamente.";
    }
  );
});
