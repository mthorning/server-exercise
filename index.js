var tableData = $.getJSON('servers_table.json', function(data) {
	var html = '';
	data.forEach(function(row) {
		console.log(row);
		html += `
			<tr>
				<td>${row.name}</td>
				<td><div class="circle ${row.cmp_state}"></div></td>
				<td>${row.account.name}</td>
				<td>${row.location.datacenter.name}</td>
				<td>${row.cpu_cores}</td>
				<td>${row.cpu_cores}</td>
				<td>${row.ram_mb}</td>
				<td>${row.volumes_mb}</td>
			</tr>
		`
	});
	document.getElementById('tableContent').innerHTML = html;

	document.getElementById('tableContent').addEventListener('click', function(e) {
		alert(e.target.innerHTML + ' has been clicked');
	});
});

