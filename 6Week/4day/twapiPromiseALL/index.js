const express = require("express");
const app = express();
const twApi = require("./twApi");
const util = require("util");

app.use(express.static("./public"));

let apiToken = util.promisify(twApi.getToken);
let apiTweets = util.promisify(twApi.getTweets);

app.get("/data.json", (req, res) => {
    apiToken()
        .then(token => {
            console.log();
            Promise.all([
                apiTweets(token, "nytimes"),
                apiTweets(token, "theonion"),
                apiTweets(token, "bbcworld")
            ])
                .then(tweets => {
                    let nyTimes = tweets[0];
                    let theOnion = tweets[1];
                    let theBbc = tweets[2];
                    console.log(tweets);
                    let mergedArrayOfTweets = nyTimes.concat(theOnion, theBbc);

                    res.json(
                        mergedArrayOfTweets
                            .filter(
                                item =>
                                    item.entities.urls &&
                                    item.entities.urls.length == 1
                            )
                            .map(item => {
                                let title = item.full_text;
                                let slicedTitle = title.slice(
                                    0,
                                    title.indexOf("http")
                                );
                                return {
                                    name: slicedTitle,
                                    href: item.entities.urls[0].url
                                };
                            })
                    );
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
});
app.listen(8080, () => console.log(`I'm listening.`));
