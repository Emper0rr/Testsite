const axios = require('axios')



axios.get('https://type.fit/api/quotes').then(function ( response )
{
  quoa = response.data
  var item = quoa[Math.floor(Math.random()*quoa.length)];
  
} )

