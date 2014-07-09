var app = (function() {
	
	return {

		// Calculate Plant Spacing

		calcDist: function() {
			
			var wPlantA = $('#wPlantA').val();
			var wPlantB = $('#wPlantB').val();
			var minDistance = (parseFloat(wPlantA,10) + parseFloat(wPlantB,10))/2;
			var distance = minDistance * 1.333;
							   
			//this changes the pop up dialog to inches or feet
			
			if ($('#radio-choice-h-2a').prop('checked')){
				uom1.innerHTML = 'inches';
				uom2.innerHTML = 'inches';
				} else {
				uom1.innerHTML = 'feet';
				uom2.innerHTML = 'feet';
			};
			
			$( '#plantAnswerPop' ).popup( 'open' );
			plantDist_1.innerHTML = (Math.round(distance * 4) / 4).toFixed(2);
			plantDist_2.innerHTML = (Math.round(minDistance * 4) / 4).toFixed(2);
		},           


		// Calculate Hedge Spacing

		calcDistHedge: function() {

			var wPlantA = $("#wPlantAH").val();
			var distance = (parseFloat(wPlantA,10)) * 0.666;
			var lenHedgeRow = $("#lenHedgeRow").val();
			var hedgePlantCount = Number(lenHedgeRow)/distance;
			
			plantDist_3.innerHTML = (Math.round(distance * 4) / 4).toFixed(2);
			plantsNeeded1.innerHTML = (Math.round(hedgePlantCount * 4) / 4).toFixed(0);
			
			$( "#hedgeAnswerPop" ).popup( "open" );

		},

		// Calculate Ground Cover

		calculateGC: function() {
			
			var wPlantGC = $("#wPlantGC").val();
			var lPlantAGC = $("#lPlantAGC").val();
			var wPlantAGC = $("#wPlantAGC").val();
			var area1 = (parseFloat(lPlantAGC,10)) * (parseFloat(wPlantAGC,10)) * 144;
			
			if ($('#radio-choice-1').prop('checked')){
				var noPlantsZig = area1/((parseFloat(wPlantGC) * .866)* parseFloat(wPlantGC));
				var noPlantsGrid = area1/(parseFloat(wPlantGC) * parseFloat(wPlantGC));
			} else {
				var wPlantGC = wPlantGC * .667;
				var noPlantsZig = area1/((parseFloat(wPlantGC) * .866)* parseFloat(wPlantGC));
				var noPlantsGrid = area1/(parseFloat(wPlantGC) * parseFloat(wPlantGC));
			};
			
			plantsNeeded2.innerHTML = (Math.round(noPlantsZig * 4) / 4).toFixed(0);
			plantsNeeded3.innerHTML = (Math.round(noPlantsGrid * 4) / 4).toFixed(0);
			distNeeded1.innerHTML = (Math.round(wPlantGC * 4) / 4).toFixed(0);
			distNeeded2.innerHTML = (Math.round(wPlantGC * 4) / 4).toFixed(0);
			
			$( "#GCAnswerPop" ).popup( "open" );
		},
						   
		// Calculate for Mulch

		calculateM: function() {

			var depth = $("#select-native-2").val();
			var lAreaM = $("#lAreaM").val();
			var wAreaM = $("#wAreaM").val();
			var areaCuIn = parseFloat(depth) * (parseFloat(lAreaM)*12)*(parseFloat(wAreaM)*12);
			var cuFt2 = areaCuIn / 3456;
			var cuFt3 = areaCuIn / 5184;
			var cuFt1 = areaCuIn / 1728;
			var cuYd1 = areaCuIn / 46656;
			var truckLoad = areaCuIn / 69984;

			mulchDepth.innerHTML = depth;                       
			bag2.innerHTML = (Math.round(cuFt2 * 4) / 4).toFixed(2);
			bag3.innerHTML = (Math.round(cuFt3 * 4) / 4).toFixed(2);
			cuFt.innerHTML = (Math.round(cuFt1 * 4) / 4).toFixed(2);
			cuYd.innerHTML = (Math.round(cuYd1 * 4) / 4).toFixed(2);
			truck.innerHTML = (Math.round(truckLoad * 4) / 4).toFixed(2);

		$( "#MAnswerPop" ).popup( "open" );

		}
	};
})();

// Click Events

$('#calc').on('click',app.calcDist);
$("#calcH").on("click",app.calcDistHedge);
$("#calcGC").on("click",app.calculateGC);
$("#calcM").on("click",app.calculateM);
