
var host = "irc.freenode.net"
var port = 6667

const Cc = Components.classes;
const Ci = Components.interfaces;

var transport_service = 
  Cc["@mozilla.org/network/socket-transport-service;1"].
  getService(Ci.nsISocketTransportService);

var transport =
  transport_service.createTransport( null, 0, host, port, null );

/*
transport.setEventSink({
  onTransportStatus: function( t, status ){
    if( Ci.nsISocketTransport.STATUS_CONNECTED_TO == status )
      print('connected')
  }
},null);
print('event sink set')
*/

var input_stream = transport.openInputStream( 0, 0, 0 );

var output_stream = transport.openOutputStream( 0, 0, 0 );

var scriptable_input_stream =
  Cc["@mozilla.org/scriptableinputstream;1"].
  createInstance(Ci.nsIScriptableInputStream);
scriptable_input_stream.init( input_stream );

var pump =
  Cc["@mozilla.org/network/input-stream-pump;1"].
  createInstance(Ci.nsIInputStreamPump);
pump.init(input_stream,-1,-1,0,0,false);
pump.asyncRead({
  onStartRequest: function(channel,context){
    print('start request')
  },
  onStopRequest: function(channel,context,status,error_msg){
    print('stop request')
  },
  onDataAvailable: function(channel, context, input_stream, source_offset, count ){
    print('data available')
  }
}, null);

do{
  var i = scriptable_input_stream.available();
  if(i){
    print(scriptable_input_stream.read( i ));
  }
}while( 1 )

