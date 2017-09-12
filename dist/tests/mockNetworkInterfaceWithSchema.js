"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var graphql_tools_1 = require("graphql-tools");
var chai_1 = require("chai");
var graphql_tag_1 = require("graphql-tag");
describe('mockNetworkInterfaceWithSchema', function () {
    it('can respond to a simple query', function () {
        var typeDefs = "\n      type User {\n        id: Int\n        name: String\n      }\n\n      type Query {\n        user: User\n      }\n    ";
        var schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs });
        graphql_tools_1.addMockFunctionsToSchema({ schema: schema });
        var NI = src_1.mockNetworkInterfaceWithSchema({ schema: schema });
        return NI.query({ query: (_a = ["{ user { name }}"], _a.raw = ["{ user { name }}"], graphql_tag_1.default(_a)) }).then(function (res) {
            return chai_1.expect(res).to.deep.equals({
                data: {
                    user: {
                        name: 'Hello World',
                    },
                },
            });
        });
        var _a;
    });
});
//# sourceMappingURL=mockNetworkInterfaceWithSchema.js.map