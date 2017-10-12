
    var suffix =  'room';            
    
    var url = 'wss://io.adafruit.com:443/mqtt/',
    username = 'Frozen',
    aio_key  = '70b6668f4477431ab6568661861558ec',
    topic = username + '/feeds/'+ suffix;
    
    
      var client = mqtt.connect(url, {
            username: username,
            password: aio_key
       });
      
      client.on('connect', function() {
            console.log('connected');
            client.subscribe(topic);
            client.subscribe(username + '/errors');
            client.subscribe(username + '/throttle');         
                    
      });
      
          client.on('error', function(e) {
            $('pre').append('ERROR: ' + e + '\n');
      });
      
          client.on('message', function(topic, payload) {
            $('pre').append('/feeds/'+ suffix +'/ value: '+ payload+ '\n');
            var payload =new TextDecoder("utf-8").decode(payload);
            console.log(payload);
          });
  