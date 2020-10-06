let hosts = {
    1: {
        host: "PC1",
        address: "192.168.0.1",
        mask: "255.255.255.0",
    },
    2: {
        host:"Server",
        address:"10.0.0.1",
        mask: "255.255.255.0",
    },
}

console.log(hosts);
console.log("\n HOST 1: " + hosts[1].host);
console.log("\n HOST 1 - MASK: " + hosts[1].mask);

hosts[1].mask = "255.255.255.1";
console.log("\n HOST 1 - NEW MASK: " + hosts[1].mask);

console.log("\n HOST 2: " + hosts[2].host);

hosts[2].host = "SERVER";
console.log("\n HOST 2 - NEW NAME: " + hosts[2].host);
console.log("\n HOST 2 - ADDRESS: " + hosts[2].address);
