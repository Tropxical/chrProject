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

export const countryDistanceMap = {
    CAN: 2,
    USA: 2,
    MEX: 4,
    BLZ: 6,
    GTM: 6,
    SLV: 8,
    HND: 8,
    NIC: 10,
    CRI: 12,
    PAN: 14,
}

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

export const getDistance = (routeArray) => {

    if (!routeArray || typeof routeArray !== "object" || routeArray.length == 0) return 0

    const totalDistance = routeArray.reduce((distance, country) => {
        const currDistance = countryDistanceMap[country]

        return distance += currDistance
    }, 0)

    return totalDistance

}