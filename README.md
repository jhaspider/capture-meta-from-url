# capture-meta-from-url

Capture/Scrap meta information from a website url. 
<br>
You must have seen it on social media as soon as you paste a link in the textbox, it scraps data from that website and makes a sharable card on the fly.
<br>
<br>
<br>

## Backend ( NodeJS In this example )

It is advised to write that logic in backend. If you make a call from front end it will run into CORS error.

Server is written in NodeJs in this example

## Frontend

Front-end is showing basic Axios call to load the data.

Alternatively, if you can make a CURL request to check it.

```
curl -X POST localhost:8080/meta/content -H "Content-Type: application/json" -d '{ "link" : "https://medium.com/@barackobama/my-statement-on-ukraine-dc18ef76ad88"}'

```

<br><br><br>

Last but not the least - You would need to write regular expression to read a <meta> information.
