import { crispWebsiteId } from '../../static/data/app.json'

window.CRISP_WEBSITE_ID = crispWebsiteId
window.$crisp = []
$crisp.push(["do", "chat:open"])

const crisp = document.createElement("script")
crisp.src = "https://client.crisp.chat/l.js"
crisp.async = 1
document.getElementsByTagName("head")[0].appendChild(crisp)
