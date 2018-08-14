/**
 * Object with array of routes supported by this application, 
 * and property to record the index of the currently selected route.
 * If the latter is 0, no route is selected.
 * This data previously resided in ctpssde:MPODATA.CTPS_CMP_2015_EXP_ROUTE_LIST.
 *
 * Call "oRoutes" in js script to use.
 *
 *  - EKE 5/31/17
 *
 */

(function() {

	return CMP_Express_Routes = { 
		
		oRoutes : {
			curRouteIx : 0,
			aRouteList : [
			  {
				"ROUTE": "US-1 Northbound",
				"DIRECTION": "NB",
				"RID": 19,
				"ROUTE_NUM": 1,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "US-1 Southbound",
				"DIRECTION": "SB",
				"RID": 20,
				"ROUTE_NUM": 1,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-2 Eastbound",
				"DIRECTION": "EB",
				"RID": 13,
				"ROUTE_NUM": 2,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-2 Westbound",
				"DIRECTION": "WB",
				"RID": 14,
				"ROUTE_NUM": 2,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-3 Northbound",
				"DIRECTION": "NB",
				"RID": 17,
				"ROUTE_NUM": 3,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-3 Southbound",
				"DIRECTION": "SB",
				"RID": 18,
				"ROUTE_NUM": 3,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "US-3 Northbound",
				"DIRECTION": "NB",
				"RID": 21,
				"ROUTE_NUM": 3,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "US-3 Southbound",
				"DIRECTION": "SB",
				"RID": 22,
				"ROUTE_NUM": 3,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-24 Northbound",
				"DIRECTION": "NB",
				"RID": 15,
				"ROUTE_NUM": 24,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-24 Southbound",
				"DIRECTION": "SB",
				"RID": 16,
				"ROUTE_NUM": 24,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "US-44 Eastbound",
				"DIRECTION": "EB",
				"RID": 31,
				"ROUTE_NUM": 44,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "US-44 Westbound",
				"DIRECTION": "WB",
				"RID": 32,
				"ROUTE_NUM": 44,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-90 Eastbound",
				"DIRECTION": "EB",
				"RID": 5,
				"ROUTE_NUM": 90,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-90 Westbound",
				"DIRECTION": "WB",
				"RID": 6,
				"ROUTE_NUM": 90,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-93 Northbound",
				"DIRECTION": "NB",
				"RID": 7,
				"ROUTE_NUM": 93,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-93 Southbound",
				"DIRECTION": "SB",
				"RID": 8,
				"ROUTE_NUM": 93,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-95 Northbound",
				"DIRECTION": "NB",
				"RID": 9,
				"ROUTE_NUM": 95,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-95 Southbound",
				"DIRECTION": "SB",
				"RID": 10,
				"ROUTE_NUM": 95,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-128 Northbound",
				"DIRECTION": "NB",
				"RID": 11,
				"ROUTE_NUM": 128,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-128 Southbound",
				"DIRECTION": "SB",
				"RID": 12,
				"ROUTE_NUM": 128,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-140 Eastbound",
				"DIRECTION": "EB",
				"RID": 27,
				"ROUTE_NUM": 140,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-140 Westbound",
				"DIRECTION": "WB",
				"RID": 28,
				"ROUTE_NUM": 140,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-146 Northbound",
				"DIRECTION": "NB",
				"RID": 29,
				"ROUTE_NUM": 146,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-146 Southbound",
				"DIRECTION": "SB",
				"RID": 30,
				"ROUTE_NUM": 146,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-213 Eastbound",
				"DIRECTION": "EB",
				"RID": 23,
				"ROUTE_NUM": 213,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "MA-213 Westbound",
				"DIRECTION": "WB",
				"RID": 24,
				"ROUTE_NUM": 213,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-290 Eastbound",
				"DIRECTION": "EB",
				"RID": 1,
				"ROUTE_NUM": 290,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-290 Westbound",
				"DIRECTION": "WB",
				"RID": 2,
				"ROUTE_NUM": 290,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-495 Northbound",
				"DIRECTION": "NB",
				"RID": 3,
				"ROUTE_NUM": 495,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "I-495 Southbound",
				"DIRECTION": "SB",
				"RID": 4,
				"ROUTE_NUM": 495,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "Lowell Connector Northbound",
				"DIRECTION": "NB",
				"RID": 25,
				"ROUTE_NUM": 999,
				"CONGESTION_SCAN_DIV": "scan_none"
			  },
			  {
				"ROUTE": "Lowell Connector Southbound",
				"DIRECTION": "SB",
				"RID": 26,
				"ROUTE_NUM": 999,
				"CONGESTION_SCAN_DIV": "scan_none"
			  }
			]
		}
		
	}
	
})();