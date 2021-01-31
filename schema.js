// register the root resolver

const { JomqlRootResolverType, BaseScalars, lookupSymbol } = require("jomql");

module.exports = new JomqlRootResolverType({
  name: "getHelloWorld",
  restOptions: {
    method: "get",
    route: "/hello_world",
    query: lookupSymbol,
  },
  allowNull: false,
  type: BaseScalars.string,
  resolver: () => "Hello World",
});
