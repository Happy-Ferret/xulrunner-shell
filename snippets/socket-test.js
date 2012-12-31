

// settings


var host = "www.google.com"
var port = 80


// shortcuts


const Cc = Components.classes;
const Ci = Components.interfaces;
const Cr = Components.results;
const Cu = Components.utils;


// create transport


var transport_service =
  Cc["@mozilla.org/network/socket-transport-service;1"].
  getService(Ci.nsISocketTransportService);

var transport = 
  transport_service.createTransport( null, 0, host, port, null );

if(!transport) 
  throw ("Error opening transport.");


// create a status listener


var status_codes = {};
status_codes[Ci.nsISocketTransport.STATUS_RESOLVING]       =   "resolving";
status_codes[Ci.nsISocketTransport.STATUS_CONNECTING_TO]   =   "connecting";
status_codes[Ci.nsISocketTransport.STATUS_CONNECTED_TO]    =   "connected";
status_codes[Ci.nsISocketTransport.STATUS_SENDING_TO]      =   "sending";
status_codes[Ci.nsISocketTransport.STATUS_WAITING_FOR]     =   "waiting";
status_codes[Ci.nsISocketTransport.STATUS_RECEIVING_FROM]  =   "receiving";
status_codes[Ci.nsITransport.STATUS_READING]               =   "reading";
status_codes[Ci.nsITransport.STATUS_WRITING]               =   "writing";

var event_sink_listener = {
  onTransportStatus: function( transport, status, progress, progressMax ){
    print("status: "+status_codes[status]);
  }
};

transport.setEventSink( event_sink_listener, null );


// open input and output streams


var input_stream = 
  transport.openInputStream( 0, 0, 0 );

if(!input_stream)
  throw("Error opening input stream.");

var output_stream = 
  transport.openOutputStream( 0, 0, 0 );

if(!output_stream)
  throw("Error opening output stream.");


// create scriptable interface for streams


var scriptable_input_stream =
  Cc["@mozilla.org/scriptableinputstream;1"].
  createInstance(Ci.nsIScriptableInputStream);

scriptable_input_stream.init( input_stream );


// create stream pumper for asynchronouse read


var input_stream_pump =
  Cc["@mozilla.org/network/input-stream-pump;1"].
  createInstance(Ci.nsIInputStreamPump);

input_stream_pump.init(input_stream,-1,-1,0,0,false);

var input_listener = {
  onStartRequest: function(channel, context){
    print('start');
  },
  onStopRequest:  function(channel, socketContext, status, errorMsg){
    print('stop')
  },
  onDataAvailable: function (channel, socketContext, inputStream, sourceOffset, count){
    print('data')
  }
};

input_stream_pump.asyncRead( input_listener, null );


// try to send some data


var data = "http hello!\n";
output_stream.write( data, data.length );


// print some stuff


// is always false!!!!!!!!!!!!
print( "alive: "+transport.isAlive() );

var available = scriptable_input_stream.available();
print( "available: "+available );

if(available)
  print( scriptable_input_stream.read( available ) );

