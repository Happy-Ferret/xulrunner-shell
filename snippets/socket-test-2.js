
var host = "irc.freenode.net"
var port = 6667

const Cc = Components.classes;
const Ci = Components.interfaces;

var transport_service =
  Cc["@mozilla.org/network/socket-transport-service;1"].
  getService(Ci.nsISocketTransportService);

var transport = 
  transport_service.createTransport( null, 0, host, port, null );

if(!transport)print("no transport");

var event_listener = {
  onTransportStatus: function( t, status ){
    print('status')
    if( status == Ci.nsISocketTransport.STATUS_CONNECTED_TO ){
      print("Connected!");
      print("isAlive: "+transport.isAlive());
      print("isAlive: (t) "+t.isAlive());
      // close connection
      transport.close(0);
      print( "PostClose..." );
      print("isAlive: "+transport.isAlive());
      print("isAlive: (t) "+t.isAlive());
    }
  }
};

//transport.setEventSink(event_listener,null);

var input_stream = 
  transport.openInputStream( 0, 0, 0 );

if(!input_stream)print("no stream")

var sis = Components.classes["@mozilla.org/scriptableinputstream;1"].
            createInstance(Components.interfaces.nsIScriptableInputStream);

sis.init( input_stream )

var output_stream =
  transport.openOutputStream( 0, 0, 0 );

var data = "this is a test";
output_stream.write( data, data.length );

var x = 0;
while(1){
    var i = sis.available()
    if(x!=i){
      print(i);
      x=i
    }
}

