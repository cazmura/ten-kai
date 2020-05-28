var app = new Vue({
  el: '#app',
  data: {
    city: null,
    temp: null,
    condition: {
      main: null
    }
  },
  mounted: function(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid=526000216e1c1aa81d4f5616f31300d8')
    .then(function(response){
      this.city = response.data.name
      this.temp = response.data.main.temp
      this.condition = response.data.weather[0]
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
  filters: {
    roundUp(value){
      return Math.ceil(value)
    }
  }
})