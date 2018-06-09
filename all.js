var pageNumber = 0 ;

changePage(pageNumber) ;
function changePage(page) {
	var list ;
	var footLab = document.getElementsByClassName("content_foot")[0];
	var manu = document.getElementsByClassName("manu");

	// clear previous manual bar
	manu[pageNumber].style.borderBottomColor= "#4A90E2";
	// set manual manual bar
	manu[page].style.borderBottomColor = "#00408B";

	pageNumber = page ;

	/*
		list[i].style.visibility = "hidden";      // 不顯示,但佔空間
		list[i].style.visibility = "visibility";
		list[i].style.display = "none";						// 不顯示,不佔空間
		list[i].style.display = "block";
	*/
	if (page == 0) {
		// hide task create
		list =  document.getElementsByClassName("create");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "none";
		}

		// show task my item
		list =  document.getElementsByClassName("task_my");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "block";
		}

		// show task process item
		list = document.getElementsByClassName("task_process");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "block";
		}

		// show last text
		footLab.innerText = list.length + " tasks left"

		// show task complete item
		list =  document.getElementsByClassName("task_complete");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "block";
		}
	}
	else  {
		// show task create
		list =  document.getElementsByClassName("create");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "block";
		}

		// hide task my item
		list =  document.getElementsByClassName("task_my");
		for (var i=0 ; i<list.length ; i++) {
			list[i].style.display = "none";
		}

		if (page == 1) {
			// show task process item
			list = document.getElementsByClassName("task_process");
			for (var i=0 ; i<list.length ; i++) {
				list[i].style.display = "block";
			}

			// show last text
			footLab.innerText = list.length + " tasks left"

			// hide task complete item
			list =  document.getElementsByClassName("task_complete");
			for (var i=0 ; i<list.length ; i++) {
				list[i].style.display = "none";
			}
		}
		else {
			// show task complete item
			list =  document.getElementsByClassName("task_complete");
			for (var i=0 ; i<list.length ; i++) {
				list[i].style.display = "block";
			}

			// show last text
			footLab.innerText = list.length + " task completed"

			// hide task process item
			list = document.getElementsByClassName("task_process");
			for (var i=0 ; i<list.length ; i++) {
				list[i].style.display = "none";
			}
		}

	}
}
