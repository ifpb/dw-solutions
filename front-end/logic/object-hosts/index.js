let hosts = [
	{hostname: 'PC 1', address:'192.168.0.1', mask: '255.255.255.0'}, {hostname: 'Server', address:'10.0.0.1', mask: '255.255.255.0'},

];

for (let pcs of hosts) {
	console.log(`${pcs.hostname} | ${pcs.address} | ${pcs.mask}`)
};
