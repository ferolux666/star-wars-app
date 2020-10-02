import React from "react";

const context = React.createContext();

const {Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer} = context;

export {SwapiServiceProvider, SwapiServiceConsumer};