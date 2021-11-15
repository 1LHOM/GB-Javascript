document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
   screen.orientation.unlock();
}

function vibration() {
   navigator.vibrate([300, 150, 300, 150, 300]);
}

function checkConnection() {
   var networkState = navigator.connection.type;
  
   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.CELL]     = 'Cell generic connection';
   states[Connection.NONE]     = 'No network connection';

   alert('Connection type: ' + states[networkState]);
}

  
function onBatteryStatus() {
   if( typeof navigator.getBattery!='undefined' ){

      navigator.getBattery().then(function(battery) {
  
          alert('Battery Level: ' + battery.level * 100 + '%');
  
      });
  
  }
  else{
      alert('Plugin missing');
  }
}
 
function getPosition() {
    var options = {
       enableHighAccuracy: true,
       maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
 
    function onSuccess(position) {
       alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
 }
 
 function watchPosition() {
    var options = {
       maximumAge: 3600000,
       timeout: 3000,
       enableHighAccuracy: true,
    }
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
 
    function onSuccess(position) {
       alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
    }
}

window.addEventListener("orientationchange", function(){

   const getGif = document.getElementById('gif')
   if (screen.orientation.type == 'landscape-primary') {
      getGif.src = 'img/landscape-primary.gif';
   }
   else if (screen.orientation.type == 'landscape-secondary') {
      getGif.src = 'img/landscape-secondary.gif';
   }
   else if (screen.orientation.type == 'portrait-primary') {
      getGif.src = 'img/portrait-primary.gif';
   }

});

