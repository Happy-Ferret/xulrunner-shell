
var url = "http://www.google.com";
var asynchronouse = false;

var req = 
  Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
  .createInstance(Components.interfaces.nsIXMLHttpRequest);

req.open( "GET", url, asynchronouse );

req.send(null); 

print("Response Length: " + req.responseText.length );

