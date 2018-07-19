export default [
  {
    name: "Twitter",
    icon: "twitter-icon.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `https://twitter.com/intent/tweet?text=${title} ${encodedDescription} ${encodedUrl}`
    },
  },
  {
    name: "Facebook",
    icon: "facebook-icon.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
  },
  {
    name: "Linkedin",
    icon: "linkedin-icon.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}&summary=${encodedDescription}`
    },
  },
  {
    name: "WhatsApp",
    icon: "whatsapp-icon.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `whatsapp://send?text=${encodedUrl}`
    },
  },
  {
    name: "Email",
    icon: "mail.svg",
    shareUrl: ({encodedDescription, encodedUrl, title}) => {
      return `mailto:?&subject=${title}&body=${encodedUrl}`
    },
  },
]