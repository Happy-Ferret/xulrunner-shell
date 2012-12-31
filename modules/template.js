
let EXPORTED_SYMBOLS = ["Template"];

const Cu = Components.utils;
const Ci = Components.interfaces;
const Cc = Components.classes;

var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

var alert = function( str ){
  prompts.alert( null, "alert", str );
};

var Template = {

  load: function( file, params, document ){
    var text = this.parse_template( file, params );
    var doc = this.parse_xml( text );
    var root = doc.documentElement;
    if( document ){
      var imported = document.importNode( root, true );
      return imported;
    }
    return root;
  },
  
  read: function( file ){
    var request = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"]
                 .createInstance(Ci.nsIXMLHttpRequest);
    request.open( "GET", file, false );
    request.overrideMimeType('text/plain');
    try{
      request.send( null );
    }catch(e){
      return "";
    }
    return (request.responseText||""); 
  },
  
  parse_template: function( file, params ){
    var content = this.read( file );
    content = content.replace( /%j([^(j%)]*)j%/gmi, function(str,code){
alert(code)
      return (new Function( "params", code ))(params);
    });
    return content;
  },
  
  parse_xml: function( text ){
    var parser = Cc['@mozilla.org/xmlextras/domparser;1']
                 .createInstance(Ci.nsIDOMParser);
    var xml = parser.parseFromString( text, "text/xml" );
    if(xml.documentElement.tagName == 'parseerror')
      throw("Parsing of text failed.");
    return xml;
  },
  
};

