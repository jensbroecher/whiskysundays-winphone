function updatelog() {
var currentuser = localStorage.getItem("currentuser");
var useraction = localStorage.getItem("useraction");

$.post( "http://enunua.com/whiskysundays/admin/updatelog.php?currentuser="+currentuser+"&useraction="+useraction+"" );
}