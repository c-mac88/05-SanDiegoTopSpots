$.getJSON('topspots.json', function(data){
	$.each(data, function(i, spots){
		var myLink = "<a href=https://www.google.com/maps?q=" + spots.location + ">Location</a>"
		$('table').append('<tr><td>' + spots.name + '</td><td>' + spots.description + '</td><td>'+ myLink +'</td></tr>');
	})
});

