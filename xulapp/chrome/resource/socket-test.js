

/*
var freenode = {
  post_init: function(){
    print( "Connection established" );
  },
  unbind: function(){
    print( "Connected closed..." );
  },
  receive_data: function( data ){
    dump( data );
  }
};
*/

var socket = new Socket( 'irc.freenode.net', 6667 ); //, freenode );

var i = 0;
while(!i){
  i = socket.available();
  print(i)
}

/*

var freenode = {
  post_init: function( channel, socket ){
    print( "Connection established" );
  },
  unbind: function(){
    print( "Connected closed..." );
  },
  receive_line: function( line ){
    print( "<<< " + line );
  }
};

Socket.extend( freenode, Socket.protocols.lineText1 );

var socket = new Socket( 'irc.freenode.net', 6667, freenode );

*/

