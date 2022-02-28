# capture-meta-from-url

Capture meta information from a website url. You must have seen it on social media. As soon as you paste a link in the box it loads data from that site and makes beautiful looking sharable card.

## Backend

It is advised to write that logic in backend. If you make a call from front end it will run into CORS error.

Server is written in NodeJs in this example

## Frontend

Front is showing basic Axios call to load the data.

Alternatively, if you can make a CURL request to check it.

```
curl -X POST localhost:8080/meta/content -H "Content-Type: application/json" -d '{ "link" : "https://medium.com/@barackobama/my-statement-on-ukraine-dc18ef76ad88"}'

```

Its bare minimum example. So does not leverage webpack / nodemon etc for recompile upon changes.

Last but the least another big take away is the regular expression used to read the meta data.
