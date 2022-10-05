import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "zxfn4scz", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2022-09-30",
  useCdn: false, // `false` if you want to ensure fresh data
});
