const router = require("express").Router(); // eslint-disable-line
const axios = require("axios");

function getMetaData(element, attr) {
  const pattern = new RegExp(`(name="|property=")[^"]*?${attr}(.*?)"`, "i");
  if (element.match(pattern)) {
    let value = element.match(/(?<=content=")(.*?)(?=")/i);
    if (value) return value[0];
    else {
      value = element.match(/(?<=content=")(.*?)(?=\.)/i);
      if (value) return value[0];
    }
  }
  return null;
}

router.post("/meta/content", async (request, response) => {
  if (request.method !== "POST") {
    response.status(400).send("Post methods only");
    return;
  }

  const link = request.body["link"];
  if (!link) {
    response.status(400).send("Link parameter is missing.");
    return;
  }

  try {
    const page_content = await axios.get(link);

    const metaMatch = page_content.data.matchAll(/<meta.*?>/gis);
    const meta = Array.from(metaMatch);
    let title;
    let description;
    let image;
    let url;
    let author;
    for (let index = 0; index < meta.length; index++) {
      const element = meta[index][0];
      if (!title) title = getMetaData(element, "title");
      if (!description) description = getMetaData(element, "desc");
      if (!image) image = getMetaData(element, "image");
      if (!url) {
        const temp = getMetaData(element, "url");
        if (temp && temp.startsWith("http")) url = getMetaData(element, "url");
      }
      if (!author) author = getMetaData(element, "author");
    }

    response.send({ title, description, image, url, author });
  } catch (err) {
    console.log(err);
    response.status(400).send("Something went wrong.");
  }
});

module.exports = router;
