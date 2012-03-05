$(document).ready(function()
{
	var page = escape(window.location), trackType, pageName, zipCode;
	page = page.replace("http%3A//", "http://");
	
	$('button.submit').live('click', function(){
		trackType = 'Form Button Submit';
		pageName = $('h1').eq(1).text();
		zipCode = $('#find-a-provider form input.text').val();
		if(zipCode && pageName && zipCode != 'Enter Zip'){
			_gaq.push(
					['_setAccount', code],
					['_trackEvent', trackType, pageName, zipCode],
					['b._setAccount', oldcode],
					['b._trackEvent', trackType, pageName, zipCode],
					['c._setAccount', defaultcode],
					['c._trackEvent', trackType, pageName, zipCode]
			);
		}
	});
	
    $('a').not('[href="#"]').each(function()
	{	
		$(this).bind('click', function(e)
		{
			var href = $(this).attr('href');
			var atitle = $(this).attr('title');
			var isExternal = false;
			var isDownload = false;
			var isMail = false;
			var route = window.location.pathname;
			var prefix = href.substring(0,7);
			

			if(href == '/find-a-doctor/'){
				e.preventDefault();
				_gaq.push(['b._link', 'http://www.iuhealth.net/portal/IUH/findadoctor?paf_gear_id=6900001&paf_dm=full&paf_gm=content']);
			}
			
			var regex = /iuhealth.net/g;
			if(regex.test(href)){
				e.preventDefault();
				_gaq.push(['b._link', href]);
			}


			if( prefix == "http://" || prefix == "https:/" ) 
			{ 
				domainposition = href.search(new RegExp(/iuhealth.org/)); 
				if(domainposition < 0) { isExternal = true; }
				else { isExternal = false; }
			}

			isDownload = href.search(new RegExp(/\.(?:doc|eps|jpg|png|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/));
			if (isDownload != -1) { isDownload = true; } else { isDownload = false; }
			
			if (href.substring(0, 7) == "mailto:") { isMail = true; }
			
			if (isDownload != false && isExternal == false && isMail == false) 
			{ 
				if (href.substring(0,1) != "/")
				{ 
					var temp = route.split('/');
					temp.reverse();
					var pagetemp = temp[0];
					href = route.replace(pagetemp, "")+href;
				}
				href='http://'+window.location.hostname+href; 
				trackType = 'Download';
			}
			else if (isDownload == false && isExternal != false && isMail == false) { trackType = 'External'; }
			else if (isDownload != false && isExternal != false && isMail == false) { trackType = 'Download'; }
			else if (isDownload == false && isExternal == false && isMail != false) { trackType = 'Mailto'; }
			else 
			{
				if(prefix == "http://") { href = href.replace("http://"+window.location.hostname, ""); }
				else
				{
					if (href.substring(0,1) != "/")
					{ 
						var temp = route.split('/');
						temp.reverse();
						var pagetemp = temp[0];
						href = route.replace(pagetemp, "")+href;
					}
				}
				trackType = 'Internal';
			}
         	
			_gaq.push(
				['_setAccount', code],
				['_trackEvent', trackType, href, page],
				['b._setAccount', oldcode],
				['b._trackEvent', trackType, href, page],
				['c._setAccount', defaultcode],
				['c._trackEvent', trackType, href, page]
			);
			//alert("Track Type: "+trackType+"\nHREF: "+href+"\nPage: "+page);
		 });
    });
});