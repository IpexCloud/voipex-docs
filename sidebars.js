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
    {
      type: "category",
      label: "PBX API",
      items: ["api/pbx-api/getting-started", "api/pbx-api/call-list"],
    },
    {
      type: "category",
      label: "SIP trunk API",
      items: ["api/sip-trunk-api/getting-started"],
    },
    {
      type: "category",
      label: "Callcenter API",
      items: ["api/callcenter-api/getting-started", "api/callcenter-api/pauses"],
    },
  ],
};

module.exports = sidebars;
