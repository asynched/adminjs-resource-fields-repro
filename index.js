const { default: AdminJS } = require('adminjs')

const admin = new AdminJS({
  resources: [
    {
      // Typing can't be inferred because of the `any` type
      // [in vscode]: press "(Ctrl/Cmd) + Space" to get the
      // definition
      resource: void 0,
    },
  ],
})
