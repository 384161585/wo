$.fn.zjlx = function(x){
	var self = this;
	
	var moren = {
		width:600,
		height:300,
		title:'123',
		move:'move1'
	};
	
	self.init = function(){
		self.x = $.extend({}, moren, x);
		self._style();
		self._move();
		return self;
	}
	
	self._style = function(){
		$('.box').addClass(self.x.move);
		setTimeout(function(){
			$('.box').css({width:self.x.width,height:self.x.height,left:-self.x.width/2,top:-self.x.height/2});
		});
		$('.title').html(self.x.title);
	}
	
	self._move = function(){
		$('.close').on('click',function(){
			self.close();
		});
	}
	
	self.open = function(){
		self.show();
		self.x.ocb();
	};
	
	self.close = function(){
		self.hide();
		self.x.ccb();
	};
	
	return self.init();
};
