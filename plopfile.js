const requireField = fieldName => value => (String(value).length === 0 ? `${fieldName} is required` : true);

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

const componentTypeChoices = () => [
  {
    name: "inputs",
    value: "inputs",
  }
];


module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Creat a React Component',
    prompts    : [
      {
        type    : 'input',
        name    : 'name',
        message : 'What\'s the component name?',
        validate: requireField('name')
      },
      {
        type: "list",
        name: "location",
        message: "What's the component type?",
        choices: componentTypeChoices,
      },
    ],
    actions: () => {
      const actions = [
        {
          type        : 'add',
          path        : 'src/{{location}}/{{pascalCase name}}/component.jsx',
          templateFile: 'plop-templates/Component/component.jsx.hbs'
        },
        {
          type        : 'add',
          path        : 'src/{{location}}/{{pascalCase name}}/component.story.jsx',
          templateFile: 'plop-templates/Component/component.story.jsx.hbs'
        },
        {
          type        : 'add',
          path        : 'src/{{location}}/{{pascalCase name}}/component.test.jsx',
          templateFile: 'plop-templates/Component/component.test.jsx.hbs'
        },
        {
          type        : 'add',
          path        : 'src/{{location}}/{{pascalCase name}}/component.css',
          templateFile: 'plop-templates/Component/component.css.hbs'
        },
        {
          type        : 'add',
          path        : 'src/{{location}}/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/Component/index.js.hbs'
        },
        {
          type        : 'add',
          path        : 'src/{{location}}/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true
        },
        {
          type    : 'append',
          path    : 'src/{{location}}/index.js',
          pattern : '/* PLOP_INJECT_EXPORT */',
          template: 'export * from \'./{{pascalCase name}}\';'
        }
      ];

      return actions;
    }
  });
};
