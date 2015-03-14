//animations.js - Eli Moreta-Feliz
//File adds or removes classes depending on what type of animations are necessary

var transitions = {
	intervalID: false, 

	currentElement: false,

	activateTransitions: function(id){
		if(!this.currentElement){
			this.currentElement = id;
		}
		var div = document.querySelector('#' + id + ' div');
		if(!this.intervalID){
			this.intervalID = setInterval(function(){
				if(div.className === ''){
					div.className = id;
				}else{
					div.className = '';
				}
			}, 1000);
		}else{
			clearInterval(this.intervalID);
			this.intervalID = false;
			if(this.currentElement === id){
				return;
			}else{
				this.currentElement = id;
				this.activateTransitions(id);
			}
		}
	}
};
var headers = document.getElementsByTagName('h1');
for(var i = 0; i < headers.length; i++){
	headers[i].addEventListener('click', function(e){
		transitions.activateTransitions(this.parentNode.id);
	}, false);
}