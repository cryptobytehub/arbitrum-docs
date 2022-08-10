/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  introSidebar: [
    {
      type: "doc",
      id: "intro/intro",
      label: "A Gentle Introduction"
    }
  ],
  devsSideBar: [
    {
      type: "category",
      label: "Running Nodes",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "das/daserver-instructions",
          label: "Data Availability Server"
        }
      ]
    },
    {
      type: "category",
      label: "BUIDLing on Arbitrum",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Classic-to-Nitro Migration",
          id: "migration/dapp_migration"
        },
        {
          type: "doc",
          label: "Precompiles",
          id: "arbos/Precompiles"
        },
        {
          type: "link",
          label: "SDK",
          href: "/sdk"
        }
      ]
    },
    {
      type: "link",
      label: "Learn more",
      href: "https://example.com"
    }
  ],

  howItWorksSidebar: [
    {
      type: "doc",
      id: "arbos/ArbOS",
      label: "ArbOS"
    },
    {
      type: "category",
      label: "Fault Proofs",
      items: [
        {
          type: "doc",
          id: "proving/ChallengeManager",
          label: "Interactive Challenges"
        },
        {
          type: "doc",
          id: "proving/WASMToWAVM",
          label: "Wasm To WAVM"
        },
        {
          type: "doc",
          id: "proving/WAVMCustomOpcodes",
          label: "Custom WAVM Opcodes"
        },
        {
          type: "doc",
          id: "proving/WAVMFloats",
          label: "WAVM Floats"
        },
        {
          type: "doc",
          id: "proving/WAVMModules",
          label: "WAVM Modules"
        }
      ]
    },

    {
      type: "doc",
      id: "arbos/Geth",
      label: "Geth"
    },
    {
      type: "doc",
      id: "arbos/Gas",
      label: "L2 Gas"
    },
    {
      type: "doc",
      id: "arbos/L1 Pricing",
      label: "L1 Pricing"
    },
    {
      type: "doc",
      id: "inside_anytrust",
      label: "Inside AnyTrust"
    }
  ]
};

module.exports = sidebars;
