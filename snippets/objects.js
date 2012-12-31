var ignore = {

  key: "irc.this",

  get: function(){ return "" },
  set: function( value ){ Preferences.get( value ); },
  has: function( nick ){ this.get().split(',')
                         .indexOf( nick.toLowerCase() ) != -1 },

  add: function( nick ){
    var nicks = this.get().split(',').push( nick.toLowerCase() );
    this.set( nicks.join(',') );
  },
  del: function( nick ){
    this.set( this.get().split(',').filter(function( _nick ){
      return (nick.toLowerCase() != _nick);
    }));
  }

}

ignore.has
