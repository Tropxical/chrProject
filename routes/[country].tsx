import { Context } from "fresh"

import { findDestination, getDistance } from "../modules/bfsCountries.js"

export const handler = {
    GET(ctx: Context<any>) {

        let { country } = ctx.params;

        if (!country || typeof country !== "string" || country.length > 5) return new Response(JSON.stringify({
            error: "Country parameter is required and must be a valid string."
        }), { status: 400 });

        country = country.toUpperCase();

        const getDestination = findDestination("USA", country);
        const routeDistance = getDistance(getDestination)

        if (!getDestination) return new Response(JSON.stringify({
            error: "No valid destination found for the specified country, please try again."
        }), { status: 404 });


        return new Response(JSON.stringify({
            destination: country,
            list: getDestination,
            routeDistance
        }), { status: 200 });
        
    }
}