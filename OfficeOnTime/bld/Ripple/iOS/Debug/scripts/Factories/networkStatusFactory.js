'use strict';
ootApp.factory('networkStatus', function ($rootScope, cordovaReady) {
    return {
        checkNetworkConnection: cordovaReady(function () {
          
            if (navigator && navigator.connection && navigator.connection.type != Connection.NONE) {
               return true;
            }

            return false;
        })
    };
});