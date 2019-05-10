const headlines = require("./headlines");
const twiApi = require("./twiApi");

jest.mock("./twiApi");

test("headlines filters out tweets that do not have exaactly one link", () => {
    twiApi.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [
                    {
                        url: "www.google.com"
                    }
                ]
            },
            full_text: "i am here"
        },
        {
            entities: {
                urls: [
                    {
                        url: "www.google.com"
                    },
                    {
                        url: "www.spiced.com"
                    }
                ]
            },
            full_text: "i am here"
        }
    ]);
});
