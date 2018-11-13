//************меню***************
function list(index, itext) { 
  var eNavbar = Ext.get("navbar"); 
  var cLists = eNavbar.select("UL"); 
      cLists.setDisplayed(false); 
      eNavbar.select("LI").removeClass("selected"); 
  var sSelector = " > li:nth(" + index + ")"; 
  var eItem = eNavbar.child(sSelector); 
  var eList = eItem.child("UL"); 
  if (eList) { 
    eList.setDisplayed(true); 
    if (itext) { 
      sSelector = "LI:has(:contains(" + itext + "))"; 
      eItem.child(sSelector).addClass("selected"); 
    } 
  } else 
    eItem.addClass("selected"); 
}