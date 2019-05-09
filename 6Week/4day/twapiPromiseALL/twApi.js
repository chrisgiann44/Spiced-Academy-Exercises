const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getToken = function() {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
        "base64"
    );
    const req = https.request(
        {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                authorization: `Basic ${encoded}`
            }
        },
        res => {
            if (res.statusCode != 200) {
                throw new Error(res.statusCode);
            } else {
                let body = "";
                res.on("data", chunk => (body += chunk)).on("end", () => {
                    try {
                        body = JSON.parse(body);
                        return body.access_token;
                    } catch (err) {
                        console.log(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
    });
    req.write("grant_type=client_credentials");
    req.end();
};

exports.getTweets = function(token, screenName) {
    const req = https.request(
        {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended`,
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            }
        },
        res => {
            if (res.statusCode != 200) {
                return new Error(res.statusCode);
            } else {
                let tweets = "";
                res.on("data", chunk => (tweets += chunk)).on("end", () => {
                    try {
                        tweets = JSON.parse(tweets);
                        return tweets;
                    } catch (err) {
                        console.log(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
    });
    req.end();
};
