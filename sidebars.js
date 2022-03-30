/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: "doc",
      id: "api/intro",
      label: "Intro",
    },
    {
      type: "category",
      label: "SMS API",
      items: ["api/sms-api/intro", "api/sms-api/send-sms", "api/sms-api/receive-sms", "api/sms-api/history-sms"],
    },
  ],
};

module.exports = sidebars;
