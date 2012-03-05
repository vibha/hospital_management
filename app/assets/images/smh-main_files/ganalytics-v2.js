var url = location.pathname;
var path = url.split('/');
var dirlevel = 1;
var msg = "";
var dir = path[dirlevel].replace("-", "");
if(path[dirlevel+1]) { subdir = path[dirlevel+1].replace("-", ""); }
else { var subdir = ''; }
var code = "", defaultcode = "UA-20541602-1", oldcode = "UA-497082-1", adwords = "UA-22105779-1";
var _gaq = _gaq || [];

switch(dir)
{
	case "arnett": 			code = "UA-20541602-2";		break;
	case "ballmemorial": 	code = "UA-20541602-3";		break;
	case "bedford": 		code = "UA-20541602-9";		break;
	case "blackford": 		code = "UA-20541602-10";	break;
	case "bloomington": 	code = "UA-20541602-11";	break;
	case "goshen": 			code = "UA-20541602-12";	break;
	case "physicians": 		code = "UA-20541602-13";	break;
	case "laporte": 		code = "UA-20541602-14";	break;
	case "methodist": 		code = "UA-20541602-4"; 	break;
	case "mpri": 			code = "UA-20541602-15";	break;
	case "north": 			code = "UA-20541602-5"; 	break;
	case "paoli": 			code = "UA-20541602-16";	break;
	case "riley": 			code = "UA-20541602-6"; 	break;
	case "starke": 			code = "UA-20541602-17";	break;
	case "tipton": 			code = "UA-20541602-18";	break;
	case "university": 		code = "UA-20541602-7"; 	break;
	case "west": 			code = "UA-20541602-8"; 	break;
	case "pulse": 			code = "UA-20541602-20";	break;
	case "unite":			code = "UA-20541602-19";	break;
	case "saxony":			code = "UA-20541602-22";	break;
	case "pharmacy":		code = "UA-20541602-23";	break;
	default:				code = "UA-20541602-1";
}
if(dir == 'patientportal' && subdir == 'pharmacyinfo') { code = "UA-20541602-23"; }

if(code != defaultcode)
{
	_gaq.push(
		['_setAccount', code],
		['_trackPageview'],
		['b._setAccount', oldcode],
		['b._setDomainName', 'iuhealth.org'],
		['b._setAllowLinker', true],
		['b._trackPageview'],
		['c._setAccount', defaultcode],
		['c._trackPageview'],
		['d._setAccount', adwords],
		['d._trackPageview']
		);
}
else
{
	_gaq.push(
		['_setAccount', defaultcode],
		['_trackPageview'],
		['b._setAccount', oldcode],
		['b._setDomainName', 'iuhealth.org'],
		['b._setAllowLinker', true],
		['b._trackPageview'],
		['c._setAccount', adwords],
		['c._trackPageview']
		);
}

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();