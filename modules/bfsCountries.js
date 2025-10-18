export const NeighborMap = {
    CAN: [ "USA" ],
    USA: [ "CAN", "MEX" ],
    MEX: [ "USA", "GTM", "BLZ" ],
    BLZ: [ "MEX", "GTM" ],
    GTM: [ "MEX", "BLZ", "SLV", "HND" ],
    SLV: [ "GTM", "HND" ],
    HND: [ "GTM", "SLV", "NIC" ],
    NIC: [ "HND", "CRI" ],
    CRI: [ "NIC", "PAN" ],
    PAN: [ "CRI" ],
};

export const findDestination = (origin, destination) => {

    const visitedNeighbors = new Set();
    const visitQueue = [ [ origin ] ];


    while (visitQueue.length > 0) {
        const currentPath = visitQueue.shift();
        if (currentPath.includes(destination)) return currentPath;

        const neighbors = NeighborMap[currentPath.at(-1)];

        for (const neighbor of neighbors) {
            if (visitedNeighbors.has(neighbor)) continue;

            visitedNeighbors.add(neighbor);
            visitQueue.push([ ...currentPath, neighbor ]);
        }

    }

    return null

}