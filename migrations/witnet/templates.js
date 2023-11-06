const Witnet = require("witnet-utils")
const retrievals = new Witnet.Dictionary(Witnet.Retrievals.Class, require("../../assets/witnet/retrievals"))

module.exports = {
    WitnetRequestTemplateOrdinalsWalletFloorPrice: Witnet.RequestTemplate({
        retrieve: Witnet.Retrievals.HttpGet({
            url: "https://turbo.ordinalswallet.com/collection/\\0\\/stats",
            script: Witnet.Script().parseJSONMap().getInteger("floor_price"),
        }),
        tally: Witnet.Reducers.Mode(Witnet.Filters.Mode()),
        tests: {
            "getting floor price for 'bitcoinpunks' works": ["bitcoinpunks",],
        }
    })
    /////// REQUEST TEMPLATES ///////////////////////////////////////////////////////
    // path: { ... path: {
    //      WitnetRequestTemplateXXX: Witnet.RequestTemplate({
    //          specs: {
    //              retrieve: [ retrievals['retrieval-artifact-name-x'], ... ],
    //              aggregate?: Witnet.Reducers..,
    //              tally?: Witnet.Reducers..,
    //          },
    //          tests?: {
    //              "test-description-1": [
    //                  [ "..", ... ], // retrieval #0 args (string[])
    //                  ...
    //              ],
    //              ...
    //          }
    //      },
    //      ...
    // }, ... },
};    