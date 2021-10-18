# Mappit App

A mapping tool for real estates with heat-mapping capability to visualize properties with high demand.

Clone client-side code from [mappit_client](https://github.com/J-SophieCodes/mappit_client).<br />
Clone server-side code from [mappit_server](https://github.com/J-SophieCodes/mappit_server).

## Setup

1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
1. Install [yarn](https://yarnpkg.com/en/docs/install#mac-stable)
3. Install the `create-react-app` package globally: `yarn global add create-react-app`
4. Clone this repository and the [mappit_server](https://github.com/J-SophieCodes/mappit_server) repository.
5. `cd` into mappit_client and run `yarn install` from the command line to install all dependencies
6. `cd` into mappit_server and run `yarn install` from the command line to install all dependencies

## Google Maps Setup

`cd` into mappit_client, create new file `.env.local` and paste `REACT_APP_API_KEY=<paste your API key here>`

## MongoDB Setup

`cd` into mappit_server, create new file `.env` and paste `DB=<paste your MongoDB connection string here>`

## Running the app

1. `cd` into mappit_client and run `yarn start` to run the client.
2. `cd` into mappit_server and run `npm start` to run the server.