    const CLASS_ID    = Components.ID("273beb30-4719-495a-856b-4688e8a09b71");
    const CONTRACT_ID = "@deadly.methods/axel;1";
    const CLASS_NAME  = "AXEL";
    const GLOBAL_NAME = "Axel";


  var Axel = function() {
    this.init()
  };
    
  Axel.prototype = {
  

      init: function(){

var print = function( str ) { dump( str + "\n" ); }





}catch(e){
  print( e );
}
      },
      

//=================================================
// Everything past this line is required for XPCOM
//=================================================
    
      QueryInterface: function(aIID)
      {
        if (!aIID.equals(Components.interfaces.nsISupports) &&
            !aIID.equals(Components.interfaces.nsIObserver))
          throw Components.results.NS_ERROR_NO_INTERFACE;
        return this;
      },
      
      observe: function(){}
      
    }

    var AxelFactory = {
      singleton: null,
      createInstance: function (aOuter, aIID)
      {
        if (aOuter != null)
          throw Components.results.NS_ERROR_NO_AGGREGATION;
        if (this.singleton == null)
          this.singleton = new Axel();
        return this.singleton.QueryInterface(aIID);
      }
    };


    var AxelModule = {

      registerSelf: function(aCompMgr, aFileSpec, aLocation, aType)
      {
        aCompMgr = aCompMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
        aCompMgr.registerFactoryLocation(CLASS_ID, CLASS_NAME, CONTRACT_ID, aFileSpec, aLocation, aType);
       
        var categoryManager = Components.classes["@mozilla.org/categorymanager;1"]
                                .getService(Components.interfaces.nsICategoryManager);
        
        // start component at app-startup
        categoryManager.addCategoryEntry("app-startup", CLASS_NAME, "service," + CONTRACT_ID, true, true);
     
        // register global property for easy access                                     
        categoryManager.addCategoryEntry("JavaScript global property", GLOBAL_NAME, CONTRACT_ID, true, true); 
        
      },
    
      unregisterSelf: function(aCompMgr, aLocation, aType)
      {
        aCompMgr = aCompMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
        aCompMgr.unregisterFactoryLocation(CLASS_ID, aLocation);
        var categoryManager = Components.classes["@mozilla.org/categorymanager;1"]
                                .getService(Components.interfaces.nsICategoryManager);
 
        // clearn up categories
        categoryManager.deleteCategoryEntry("app-startup", CONTRACT_ID, true);
        categoryManager.deleteCategoryEntry("JavaScript global property", CONTRACT_ID, true);
        
      },
      
      getClassObject: function(aCompMgr, aCID, aIID)
      {
        if (!aIID.equals(Components.interfaces.nsIFactory))
          throw Components.results.NS_ERROR_NOT_IMPLEMENTED;
    
        if (aCID.equals(CLASS_ID))
          return AxelFactory;
    
        throw Components.results.NS_ERROR_NO_INTERFACE;
      },
    
      canUnload: function(aCompMgr) {
        return true;
      }
      
    };
    
    //module initialization
    function NSGetModule(aCompMgr, aFileSpec) { return AxelModule; }
    
    
    
