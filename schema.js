// register the root resolver

const { GiraffeqlRootResolverType, BaseScalars } = require("giraffeql");

module.exports = new GiraffeqlRootResolverType({
  name: "getHelloWorld",
  restOptions: {
    method: "get",
    route: "/hello_world",
  },
  allowNull: false,
  type: BaseScalars.string,
  resolver: () => "Hello World",
});
