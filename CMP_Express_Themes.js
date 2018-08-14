/**
 *
 * IMPORTANT --> Use of this library requires d3 version 4 so be sure to load 
 *				 <script src="https://d3js.org/d3.v4.js"></script> prior to this script
 *
 * IMPORTANT --> Use of this library requires OpenLayers 3
 *
 * Description:
 *		This JS library contains information about each of the map/visualization themes 
 * 		used by cmpExpApp.js.
 *
 * Usage:
 * 		The records in the "CMP_Express_Themes.aThemes" array are as follows:
 * 			name --> text description of the perfomance measure
 *			legend --> .png file for a theme's legend
 *			style --> an OpenLayers Style (ol.style.Style) that can be used to render 
 *					  the route based on the selected performance measure
 * 			theme --> index names for data returned from geoserver
 *			palette --> d3 threshold scale
 *			yAxisText --> yAxis label for d3 chart
 *
 *  - EKE 5/31/17, 6/13/17
 *  - BK 10/30/17 - First crack at refactoring code.
 *
 */

(function() {
	
	var strokeColor;
	
	// Domain, range, and threshold scale for the strokeColor for each metric.
	var congTimeDomain = [15, 30, 45, Infinity];
	var congTimeRange = ["rgba(175, 235, 186,0.9)", "rgba(105, 166, 148,0.9)", 
	                     "rgba(205, 138, 171,0.9)", "rgba(153, 0, 189,0.9)"];
	var congTimeStrokeScale = d3.scaleThreshold().domain(congTimeDomain).range(congTimeRange);
	
	var avgSpeedDomain = [25, 35, 45, 50, 55, Infinity]; 
	var avgSpeedRange = ["rgba(0, 0, 115,0.9)", "rgba(153, 0, 247,0.9)", "rgba(255, 0, 0,0.9)", 
	                     "rgba(245, 150, 0,0.9)", "rgba(245, 245, 0,0.9)", "rgba(130, 255, 46,0.9)"];
	var avgSpeedStrokeScale = d3.scaleThreshold().domain(avgSpeedDomain).range(avgSpeedRange);
	
	var speedIxDomain = [0.400, 0.500, 0.700, 0.900, Infinity];
	var speedIxRange = ["rgba(230, 0, 169,0.9)", "rgba(169, 0, 230,0.9)", "rgba(0, 112, 255,0.9)", 
	                    "rgba(115, 178, 255,0.9)", "rgba(190, 210, 255,0.9)"];
	var speedIxStrokeScale = d3.scaleThreshold().domain(speedIxDomain).range(speedIxRange);
	
	var dpmDomain = [0.250, 0.750, 1.500, Infinity];
	var dpmRange = ["rgba(130, 255, 46, 0.9)", "rgba(245, 245, 0, 0.9)", 
	                "rgba(245, 150, 0, 0.9)", "rgba(255, 0, 0, 0.9)"];
	var dpmStrokeScale = d3.scaleThreshold().domain(dpmDomain).range(dpmRange);
	
	var tTimeIxDomain = [1.150, 1.300, 2.000, Infinity];
	var tTimeIxRange = ["rgba(175, 235, 186, 0.9)", "rgba(105, 166, 148, 0.9)", 
	                    "rgba(205, 138, 171, 0.9)", "rgba(153, 0, 189, 0.9)"];
	var tTimeIxStrokeScale = d3.scaleThreshold().domain(tTimeIxDomain).range(tTimeIxRange);
						
	var pTimeIxDomain = [1.250, 2.000, 3.000, Infinity];
	var pTimeIxRange = ["rgba(190, 210, 255, 0.9)", "rgba(0, 112, 255, 0.9)", 
	                    "rgba(169, 0, 230, 0.9)", "rgba(230, 0, 169, 0.9)"];
	var pTimeIxStrokeScale = d3.scaleThreshold().domain(pTimeIxDomain).range(pTimeIxRange);
	
	
	return CMP_Express_Themes = {
		
		aThemes : [	
		
			{ name:		'Select a map theme', 
			  legend: 	'', 
			  sld:		'',
			  style: 	function(feature) {
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: "rgba(0,0,0,0.9)",
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'',
			  palette:	'',
			  yAxisText:''
			},
			{ name: 	'AM Congested Time',
			  legend:	'Congested_Time.png',
			  sld:		'exp_am_cong_mn',
			  style:	function(feature) {
							var val = feature.get("am_cong_mn");
							strokeColor = congTimeStrokeScale(val);
							
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_CONG_MN',
			  palette:	d3.scaleThreshold()
							.domain([15,30,45])
							.range(["rgb(175,235,186)", "rgb(105,166,148)", "rgb(205,138,171)", "rgb(153,0,189)"]),
			  yAxisText:'Minutes'
			},
			{ name : 	'PM Congested Time',
			  legend:	'Congested_Time.png',
			  sld:		'exp_pm_cong_mn', 
			  style:	function(feature) {
							var val = feature.get("pm_cong_mn");
							strokeColor = congTimeStrokeScale(val);
							
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_CONG_MN',
			  palette:	d3.scaleThreshold()
							.domain([15,30,45])
							.range(["rgb(175,235,186)", "rgb(105,166,148)", "rgb(205,138,171)", "rgb(153,0,189)"]),
			  yAxisText:'Minutes'
			},
			{ name : 	'AM Average Speed',
			  legend:	'Average_Speed.png',
			  sld:		'exp_am_avg_sp',
			  style:	function(feature) {
							var val = feature.get("am_avg_sp");
							strokeColor = avgSpeedStrokeScale(val);

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_AVG_SP',
			  palette:	d3.scaleThreshold()
							.domain([25,35,45,50,55])
							.range(["rgb(0,0,115)", "rgb(153,0,247)", "rgb(255,0,0)", "rgb(245,150,0)", "rgb(245,240,0)", "rgb(130,255,46)"]),
			  yAxisText:'Speed (MPH)'
			},
			{ name : 	'PM Average Speed',
			  legend:	'Average_Speed.png',
			  sld:		'exp_pm_avg_sp', 
			  style:	function(feature) {
							var val = feature.get("pm_avg_sp");
							strokeColor = avgSpeedStrokeScale(val);				  
				  
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_AVG_SP',
			  palette:	d3.scaleThreshold()
							.domain([25,35,45,50,55])
							.range(["rgb(0,0,115)", "rgb(153,0,247)", "rgb(255,0,0)", "rgb(245,150,0)", "rgb(245,240,0)", "rgb(130,255,46)"]),
			  yAxisText:'Speed (MPH)'
			},
			{ name : 	'AM Speed Index',
			  legend:	'Speed_Index.png',
			  sld:		'exp_am_spd_ix', 
			  style:	function(feature) {
							var val = feature.get("am_spd_ix");
							strokeColor = speedIxStrokeScale(val);

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_SPD_IX',
			  palette:	d3.scaleThreshold()
							.domain([0.4,0.5,0.7,0.9])
							.range(["rgb(230,0,169)", "rgb(169,0,230)", "rgb(0,112,255)", "rgb(115,178,255)", "rgb(190,210,255)"]),
			  yAxisText:'Speed Index'
			},
			{ name : 	'PM Speed Index',
			  legend:	'Speed_Index.png',
			  sld:		'exp_pm_spd_ix', 
			  style:	function(feature) {
							var val = feature.get("pm_spd_ix");
							strokeColor = speedIxStrokeScale(val);				  

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_SPD_IX',
			  palette:	d3.scaleThreshold()
							.domain([0.4,0.5,0.7,0.9])
							.range(["rgb(230,0,169)", "rgb(169,0,230)", "rgb(0,112,255)", "rgb(115,178,255)", "rgb(190,210,255)"]),
			  yAxisText:'Speed Index'
			},
			{ name : 	'AM Delay Per Mile',
			  legend:	'Delay_per_Mile.png',
			  sld:		'exp_am_del_mi', 
			  style:	function(feature) {
							var val = feature.get("am_del_mi");
							strokeColor = dpmStrokeScale(val);
				  
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_DEL_MI',
			  palette:	d3.scaleThreshold()
							.domain([0.25,0.75,1.50])
							.range(["rgb(130,255,46)", "rgb(245,245,0)", "rgb(245,150,0)", "rgb(255,0,0)"]),
			  yAxisText:'Minutes'
			},
			{ name : 	'PM Delay Per Mile',
			  legend:	'Delay_per_Mile.png',
			  sld:		'exp_pm_del_mi', 
			  style:	function(feature) {
							var val = feature.get("pm_del_mi");
							strokeColor = dpmStrokeScale(val);				  
				  
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_DEL_MI',
			  palette:	d3.scaleThreshold()
							.domain([0.25,0.75,1.50])
							.range(["rgb(130,255,46)", "rgb(245,245,0)", "rgb(245,150,0)", "rgb(255,0,0)"]),
			  yAxisText:'Minutes'
			},	
			{ name : 	'AM Travel Time Index',
			  legend:	'Travel_Time_Index.png',
			  sld:		'exp_am_avtt_ix', 
			  style:	function(feature) {
							var val = feature.get("am_avtt_ix");
							strokeColor = tTimeIxStrokeScale(val);

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_AVTT_IX',
			  palette:	d3.scaleThreshold()
							.domain([1.15, 1.30, 2.00])
							.range(["rgb(175,235,186)", "rgb(105,166,148)", "rgb(205,138,171)", "rgb(153,0,189)"]),
			  yAxisText:'Travel Time Index'
							
			},
			{ name : 	'PM Travel Time Index',
			  legend:	'Travel_Time_Index.png',
			  sld:		'exp_pm_avtt_ix',
			  style:	function(feature) {
							var val = feature.get("pm_avtt_ix");
							strokeColor = tTimeIxStrokeScale(val);			  

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_AVTT_IX',
			  palette:	d3.scaleThreshold()
							.domain([1.15, 1.30, 2.00])
							.range(["rgb(175,235,186)", "rgb(105,166,148)", "rgb(205,138,171)", "rgb(153,0,189)"]),
			  yAxisText:'Travel Time Index'
			},	
			{ name : 	'AM Planning Time Index',
			  legend:	'Planning_Time_Index.png',
			  sld:		'exp_am_pt_ix',
			  style:	function(feature) {
							var val = feature.get("am_5ptt_ix");
							strokeColor = pTimeIxStrokeScale(val);
				  
							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'AM_5PTT_IX',
			  palette:	d3.scaleThreshold()
							.domain([1.25, 2.00, 3.00])
							.range(["rgb(190,210,255)", "rgb(0,112,255)", "rgb(169,0,230)", "rgb(190,210,255)"]),
			  yAxisText:'Travel Time Index'
			},
			{ name : 	'PM Planning Time Index',
			  legend:	'Planning_Time_Index.png',
			  sld:		'exp_pm_pt_ix',
			  style:	function(feature) {
							var val = feature.get("pm_5ptt_ix");
							strokeColor = pTimeIxStrokeScale(val);

							return [new ol.style.Style({
								fill	: new ol.style.Fill({ color: 'rgba(255,255,255,0.1)' }), 
								stroke 	: new ol.style.Stroke({ 
											color: strokeColor,
											width: 4.0,
											lineCap: "butt"
										})
							})];
						},
			  theme: 	'PM_5PTT_IX',
			  palette:	d3.scaleThreshold()
							.domain([1.25, 2.00, 3.00])
							.range(["rgb(190,210,255)", "rgb(0,112,255)", "rgb(169,0,230)", "rgb(190,210,255)"]),
			  yAxisText:'Travel Time Index'
			}
			
		]
		
	};
	
})();