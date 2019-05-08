const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.json(
                        tweets
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
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening.`));
