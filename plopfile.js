const requireField = (fieldName) => (value) =>
  String(value).length === 0 ? `${fieldName} is required` : true;

const yesNoChoices = () => [
  {
    name: "Yes",
    value: true,
  },
  {
    name: "No",
    value: false,
  },
];

const storyPathChoices = () => [
  {
    name: "Inputs",
    value: "Inputs",
  },
  {
    name: "Utils",
    value: "Utils",
  },
  {
    name: "Feedback",
    value: "Feedback",
  },
  {
    name: "Display",
    value: "Display",
  },
];

const componentTypeChoices = () => [
  {
    name: "Library",
    value: "lib",
  },
  {
    name: "Stories",
    value: "stories",
  },
];

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Creat a React Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the component name?",
        validate: requireField("name"),
      },
      {
        type: "list",
        name: "type",
        message: "What's the component type?",
        choices: componentTypeChoices,
      },
      {
        type: "list",
        name: "isPublic",
        message: "Is this component publicly consumable?",
        choices: yesNoChoices,
        when: ({ type }) => type === "lib",
      },
      {
        type: "list",
        name: "includeStory",
        message: "Does this component need a story?",
        choices: yesNoChoices,
      },
      {
        type: "list",
        name: "storyPath",
        message: "What is the stories path?",
        choices: storyPathChoices,
      },
    ],
    actions: ({ type, includeStory, isPublic }) => {
      const libraryTypeActions = [
        {
          type: "add",
          path: "src/{{type}}/components/{{pascalCase name}}/component.jsx",
          templateFile: "plop-templates/Component/component.jsx.hbs",
        },
        {
          type: "add",
          path:
            "src/{{type}}/components/{{pascalCase name}}/component.test.jsx",
          templateFile: "plop-templates/Component/component.test.jsx.hbs",
        },
        {
          type: "add",
          path: "src/{{type}}/components/{{pascalCase name}}/component.scss",
          templateFile: "plop-templates/Component/component.scss.hbs",
        },
        {
          type: "add",
          path: "src/{{type}}/components/{{pascalCase name}}/index.js",
          templateFile: "plop-templates/Component/index.js.hbs",
        },
        {
          type: "add",
          path: "src/{{type}}/components/index.js",
          templateFile: "plop-templates/injectable-index.js.hbs",
          skipIfExists: true,
        },
        {
          type: "append",
          path: "src/{{type}}/components/index.js",
          pattern: "/* PLOP_INJECT_EXPORT */",
          template: "export * from './{{pascalCase name}}';",
        },
      ];

      const isPublicActions = [
        {
          type: "append",
          path: "src/{{type}}/index.js",
          pattern: "/* PLOP_INJECT_IMPORT */",
          template: "{{pascalCase name}},",
        },
        {
          type: "append",
          path: "src/{{type}}/index.js",
          pattern: "/* PLOP_INJECT_EXPORT */",
          template: "{{pascalCase name}},",
        },
      ];

      const storiesTypeActions = [
        {
          type: "add",
          path: "src/{{type}}/components/{{pascalCase name}}/component.jsx",
          templateFile: "plop-templates/Component/component.jsx.hbs",
        },
        {
          type: "append",
          path: "src/{{type}}/index.js",
          pattern: "/* PLOP_INJECT_EXPORT */",
          template: "export * from './{{pascalCase name}}';",
        },
      ];

      const includeStoryActions = [
        {
          type: "add",
          path:
            "src/stories/pages/{{dashCase name}}/{{pascalCase name}}.story.mdx",
          templateFile: "plop-templates/component.story.mdx.hbs",
        },
        {
          type: "add",
          path: "src/stories/pages/{{dashCase name}}/API.story.jsx",
          templateFile: "plop-templates/api.story.jsx.hbs",
        },
      ];

      return [
        ...(type === "lib" ? libraryTypeActions : []),
        ...(isPublic ? isPublicActions : []),
        ...(type === "stories" ? storiesTypeActions : []),
        ...(includeStory ? includeStoryActions : []),
      ];
    },
  });
};
