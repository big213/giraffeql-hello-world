// register the root resolver

const { JomqlRootResolverType, BaseScalars } = require("jomql");

module.exports = new JomqlRootResolverType({
  name: "getHelloWorld",
  restOptions: {
    method: "get",
    route: "/hello_world",
  },
  allowNull: false,
  type: BaseScalars.string,
  resolver: () => "Hello World",
});
