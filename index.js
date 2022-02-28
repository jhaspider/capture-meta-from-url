import axios from "axios";

// Link
const link = "https://jha-amarjit.medium.com/prescription-for-full-stack-in-2022-7161ec8e3c14";

// Call to API
axios
  .post("http://localhost:8080/meta/content", {
    link,
  })
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err.message));
