(function(){

'use strict';

angular.module('ccApp',[])
	   .filter('identifycc', function(){
	   		return function(ccNumber) {
	   			var re = {
			        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
			        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
			        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
			        mastercard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
			        amex: /^3[47][0-9]{13}$/,
			        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
			        solo: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
			    }

			    /*if(re['maestro'].test(ccNumber)){
			    	return 'maestro';
			    }else if(re['electron'].test(ccNumber)){
			    	return 'electron';
			    }else if(re['visa'].test(ccNumber)){
			    	return 'visa';
			    }else if(re['mastercard'].test(ccNumber)){
			    	return 'mastercard';
			    }else if(re['amex'].test(ccNumber)){
			    	return 'amex';
			    }else if(re['discover'].test(ccNumber)){
			    	return 'discover';
			    }else if(re['solo'].test(ccNumber)){
			    	return 'solo';
			    }else{
			    	return 'default';
			    }*/
			    for(var card in re) {
			        if(re[card].test(ccNumber)) {
			            return card;
			        }
			    }
		    };
	   });
})();