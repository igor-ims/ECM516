// const axios = require('axios');

// const d = 1743260400
// const d2 = new Date(d * 1000)
// console.log(d2.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }))
// console.log(d2.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }))
// console.log(d2.toString())
// console.log(d2.toISOString())
// console.log('***********************************\n')
// const q = 'Itu'
// const apiKey = '2275ea7a14475e831a49685f063276bf'
// const cnt = '2'
// const baseUrl = 'api.openweathermap.org/data/2.5/forecast'
// const units = 'metric'
// const lang = 'pt_br'
// const url = `https://${baseUrl}?q=${q}&appid=${apiKey}&cnt=${cnt}&units=${units}&lang=${lang}`

// console.log(url)

// const previsoes = axios.get(url).then((res) =>{
//     console.log(res.data)
//     console.log('***********************************')
//     return res.data
// }).then(function(res){
//     console.log(`Cnt: ${res.cnt}`)
//     console.log('***********************************')
//     return res
// }).then((res) => {
//     console.log(`Temperaturas máximas:`)
//     console.log(`${res.list[0].dt_txt}: ${res.list[0].main.temp_max.toString().replace('.',',')}°C`)
//     console.log(`${res.list[1].dt_txt}: ${res.list[1].main.temp_max.toString().replace('.',',')}°C`)
//     console.log('***********************************')
//     return res
// }).then((res) => {
//     res.list.forEach(previsao => {
//         console.log(`Data: ${new Date(previsao.dt * 1000).toLocaleString()}`)
//         console.log(`Descrição: ${previsao.weather[0].description}`)
//         console.log(`Sensação térmica: ${previsao.main.feels_like.toString().replace('.',',')}°C`)
//     });
//     console.log(`Nascer do sol do dia ${new Date(res.list[0].dt * 1000).toLocaleDateString()}: ${new Date(res.city.sunrise * 1000).toLocaleTimeString()}`)
//     console.log(`Por do sol do dia ${new Date(res.list[0].dt * 1000).toLocaleDateString()}: ${new Date(res.city.sunset * 1000).toLocaleTimeString()}`)
// })
// .catch((err) => {
//     console.log(`Error: ${err}`)
// })

// async / await

const fatorial = (n) => {
  if (n < 0) return Promise.reject("Número negativo");
  if (n === 0) return 1;
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return Promise.resolve(res);
};

const comThenCatch = () => {
  fatorial(10)
    .then((res) => {
      console.log(`Fatorial de 10: ${res}`);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  fatorial(-10)
    .then((res) => {
      console.log(`Fatorial de -10: ${res}`);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

comThenCatch();

const comAsyncAwait = async () => {
  try {
    const f1 = await fatorial(10);
    console.log(`Fatorial de 10: ${f1}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  try {
    const f2 = await fatorial(-10);
    console.log(`Fatorial de -10: ${f2}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

comAsyncAwait();
