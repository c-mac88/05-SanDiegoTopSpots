$.getJSON('topspots.json', function(data){
	console.log('success');
	$.each(data, function(i, spots){
		$('table').append('<tr><td>'+spots.name+'</td><td>'+spots.description+'</td><td>'+spots.location+'</td></tr>');
	})
});
