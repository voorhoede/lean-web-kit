export default [
  {
    name: "twitter",
    icon: "/images/twitter-icon.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `https://twitter.com/intent/tweet?text=${title} ${encodedDescription} ${encodedUrl}`
    },
    title: "Twitter"
  }
]