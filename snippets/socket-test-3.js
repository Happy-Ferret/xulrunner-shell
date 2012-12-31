
var host = "irc.freenode.net"
var port = 6667

const Cc = Components.classes;
const Ci = Components.interfaces;

var transport_service =
  Cc["@mozilla.org/network/socket-transport-service;1"].
  getService(Ci.nsISocketTransportService);

var transport = 
  transport_service.createTransport( null, 0, host, port, null );

var input_stream = 
  transport.openInputStream( 0, 0, 0 );

do {
  var i = input_stream.available();
  print( "available: "+i );
}while(!i)

