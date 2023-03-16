const input1 = document.querySelector(".coin1");
const input2 = document.querySelector(".coin2");
const btn = document.querySelector(".submit");
const resultDiv = document.querySelector(".result");

btn.addEventListener("click", () => {
  const coin = input1.value.toUpperCase() + input2.value.toUpperCase();

  axios
    .get(`https://economia.awesomeapi.com.br/last/${input1.value}-${input2.value}`)
    .then((response) => {
      const bid = response.data[coin].bid;
      const formattedBid = parseFloat(bid).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const resultText = `1 ${input1.value.toUpperCase()} costs: ${formattedBid} ${input2.value.toUpperCase()}`;
      resultDiv.innerHTML = resultText;
    })
    .catch((error) => {
      resultDiv.innerHTML = error;
    });
});