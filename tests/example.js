describe('identifycc filter', function() {
	'use strict';

	var $filter;
	beforeEach(function () {
	   module('ccApp');
	});

	beforeEach( inject(function (_$filter_) { //<-- Get the filter provider
	   $filter = _$filter_;
	}));
    
	var ccNumber = {
  	  	'4916114502597184':'visa',
  	  	'491611450259718':'default',
  	  	'3478348':'default',
  	  	'5386637701952766':'mastercard',
  	  	'6011645586626091':'discover',
  	  	'6011159035997988':'discover',
  	  	'379319992306602':'amex',
  	  	'4485262739766':'visa',
  	  	'4658857956208342':'visa',
  	  	'4252147573405723':'visa',
  	  	'4556097847562317':'visa', 
  	  	'5333209656901125':'mastercard',
  	  	'5425967037527351':'mastercard',
  	  	'5228062504278032':'mastercard',
  	  	'5577458272739436':'mastercard',
  	  	'6011370516026417':'discover',
  	  	'6011267147973563':'discover',
  	  	'6011975555150215':'discover',
  	  	'343716741998162':'amex',
  	  	'371578169777337':'amex',
  	  	'347084066027273':'amex',
  	  	'372167864934655':'amex',
  	  	'676782009988007706':'solo',
  	  	'6759649826438453':'maestro',
  	  	'0604553593992207':'maestro',
  	  	'6304637299288802':'maestro',
  	  	'50187':'maestro',
  	  	'49131':'electron',
  	  	'4026021384070072':'electron'
  	  }

    Object.keys(ccNumber).forEach(function(number) {
            it('should detect card ' + number + ' as ' + ccNumber[number], function() {
                expect($filter('identifycc')(number)).toEqual(ccNumber[number]);
            });
            
        });
});