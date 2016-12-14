var canvas = null;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]
  
var line1;
var line2;
var line3;
var line4;

var applyColor = function(){
	$('.color-preview').click(function(){
		   var color = $(this).css("background-color");
		   document.getElementById("shirtDiv").style.backgroundColor = color;		   
	   });
}
var setPatternIntoCanvas = function(patternId,left, top, scale){
	 
	$('#'+patternId).click(function(e){
	  		var el = e.target; 

	  		fabric.Image.fromURL(el.src, function(image) {
		          image.set({
		            left: left,
		            top: top,
		            angle: 0,
		            padding: 10,
		            cornersize: 10,
	      	  		hasRotatingPoint:true
		          });
		          image.scale(scale).setCoords();
		          canvas.add(image);
		        });
  	});	      
  	// $('#'+patternId).click();
}
var applyCanvasAndShirt = function() {
		//setup front side canvas 
	 	if (!canvas){ 
	 		// var event = new Event('input', { bubbles: true });
			 // $('#patternTop')[0].dispatchEvent(event);
			 // $('#patternLeft')[0].dispatchEvent(event);

	 		canvas = new fabric.Canvas('shirtCanvas', {
			  hoverCursor: 'pointer',
			  selection: true,
			  selectionBorderColor:'blue'
			});
	 		canvas.on({
				 'object:moving': function(e) {		  	
				    e.target.opacity = 0.5;
				    
				  },
				  'object:modified': function(e) {		
				  	$('#patternTop')[0].value = e.target.getTop();
				    $('#patternLeft')[0].value = e.target.getLeft();
				    $('#patternScale')[0].value = e.target.getScaleX();
				    $('#patternAngle')[0].value = e.target.getAngle();
				     $('#patternAngle').trigger("click");
				    $('#patternTop').trigger("click");
				    $('#patternLeft').trigger("click");  	 
			        $('#patternScale').trigger("click");  	

				    e.target.opacity = 1;
				  },
				 'angular.isObject(value):selected':onObjectSelected,
				 'selection:cleared':onSelectedCleared
			 });
			// piggyback on `canvas.findTarget`, to fire "object:over" and "object:out" events
	 		canvas.findTarget = (function(originalFn) {
			  return function() { 
			    var target = originalFn.apply(this, arguments);
			     
			    return target;
			  };
			})(canvas.findTarget);
			canvas.add(new fabric.Object({hasBorders:true,hasControls:false,hasRotatingPoint:false,selectable:false,type:'rect'}));
	 	}
 		

		$(".shirtTypes").click(function(e){ 
			$("#shirtDiv").css('height','590');
  			$("#tshirtFacing")[0].src = e.currentTarget.src;
		});
		  document.getElementById('remove-selected').onclick = function() {		  
		    var activeObject = canvas.getActiveObject(),
		        activeGroup = canvas.getActiveGroup();
		    if (activeObject) {
		      canvas.remove(activeObject);
		      
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        canvas.remove(object);
		      });
		    }
	  };
	
	
		
	   
	  
	   $(".clearfix button,a").tooltip();
	   line1 = new fabric.Line([0,0,200,0], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line2 = new fabric.Line([199,0,200,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line3 = new fabric.Line([0,0,0,400], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line4 = new fabric.Line([0,400,200,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
		  $("#drawingArea").hover(
			        function() { 	       
			        	 canvas.add(line1);
				         canvas.add(line2);
				         canvas.add(line3);
				         canvas.add(line4); 
				         canvas.renderAll();
			        },
			        function() {	    	
			        	 canvas.remove(line1);
				         canvas.remove(line2);
				         canvas.remove(line3);
				         canvas.remove(line4);
				         canvas.renderAll();
			        }
			    );

 	// 	canvas.on('object:over', function(e) {		 
		// });
		
 	// 	canvas.on('object:out', function(e) {	 
		// });
		 		 	 
		

	  	// $(".img-polaroid").click(function(e){
	  	// 	var el = e.target; 

	  	// 	fabric.Image.fromURL(el.src, function(image) {
		  //         image.set({
		  //           left: left,
		  //           top: top,
		  //           angle: 0,
		  //           padding: 10,
		  //           cornersize: 10,
	   //    	  		hasRotatingPoint:true
		  //         });
		  //         image.scale(getRandomNum(0.1, 0.25)).setCoords();
		  //         canvas.add(image);
		  //       });
	  	// });	      
	
}//end
	 function getRandomNum(min,max){
	 	return Math.random() * (max-min) +min;
	 }
	 
	 function onObjectSelected(e) {	 
	 	
	    var selectedObject = e.target;
	    $("#text-string").val("");
	    selectedObject.hasRotatingPoint = true;
	    if (selectedObject && (selectedObject.type === 'text')) {
	    	//display text editor	    	
	    	$("#texteditor").css('display', 'block');
	    	$("#text-string").val(selectedObject.getText());	    	
	    	$('#text-fontcolor').miniColors('value',selectedObject.fill);
	    	$('#text-strokecolor').miniColors('value',selectedObject.strokeStyle);	
	    	$("#imageeditor").css('display', 'block');
	    }
	    else if (selectedObject && (selectedObject.type === 'image')){
	    	//display image editor
	    	$("#texteditor").css('display', 'none');	
	    	$("#imageeditor").css('display', 'block');
	    }
	  }
	 function onSelectedCleared(e){ 

		    	console.log('clearrrrrrrr');
	 }
 
	 // function removeWhite(){
		//   var activeObject = canvas.getActiveObject();
		//   if (activeObject && activeObject.type === 'image') {			  
		// 	  activeObject.filters[2] =  new fabric.Image.filters.RemoveWhite({hreshold: 100, distance: 10});//0-255, 0-255
		// 	  activeObject.applyFilters(canvas.renderAll.bind(canvas));
		//   }	        
	 // } 


 var applyEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var applyShirtCanvas = document.getElementById('applyShirtCanvas'); 
  applyShirtCanvas.dispatchEvent(applyEvent);
  applyShirtCanvas.click = function(){
	  	applyCanvasAndShirt(); 
 	}
  var addPatternEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var addPatternToShirt = document.getElementById('addPatternToShirt'); 
  addPatternToShirt.dispatchEvent(addPatternEvent);
  addPatternToShirt.click = function(patternId,left, top,scale){
	  	setPatternIntoCanvas(patternId,left, top,scale); 
 	}
 	var colorEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var applyColorChange = document.getElementById('applyColorChange'); 
  applyColorChange.dispatchEvent(colorEvent);
  applyColorChange.click = function(){
	  	applyColor(); 
 	}


