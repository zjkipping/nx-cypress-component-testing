# CypressComponentTesting

## Setup for error logs

1. Check out the `main` branch
2. `npm install`
3. `npx nx component-test bar`
4. see error logs matching the below

## Setup for success logs

1. Check out the `working-fix` branch
2. `npm install`
3. `npx nx component-test bar`
4. Should see success logs

## Error Logs

```bash
ERROR in   Error: Child compilation failed:
  Module not found: Error: Can't resolve 'C:\Users\zjkip\Documents\code\web\cypr  ess-component-testing\libs\bar\Users\zjkip\Documents\code\web\cypress-componen  t-testing\libs\bar\cypress\support\component-index.html' in 'C:\Users\zjkip\Do  cuments\code\web\cypress-component-testing'
  ModuleNotFoundError: Module not found: Error: Can't resolve 'C:\Users\zjkip\Do  cuments\code\web\cypress-component-testing\libs\bar\Users\zjkip\Documents\code  \web\cypress-component-testing\libs\bar\cypress\support\component-index.html'   in 'C:\Users\zjkip\Documents\code\web\cypress-component-testing'
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\Compilation.js:2022:28
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:817:13
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:10:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:275:22
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1  )
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:448:22
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:122:11
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:689:25
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:893:8
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:1013:5
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\neo-async\async.js:6883:13
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\webpack\lib\NormalModuleFactory.js:996:45
      at finishWithoutResolve (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\enhanced-resolve\lib\Resolver.js:372:11)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:461:15
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:16:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:27:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\DescriptionFilePlugin.js:89:43
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:16:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:16:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:16:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\Resolver.js:519:5
      at eval (eval at create (C:\Users\zjkip\Documents\code\web\cypress-compone  nt-testing\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:27:  1)
      at C:\Users\zjkip\Documents\code\web\cypress-component-testing\node_module  s\enhanced-resolve\lib\DescriptionFilePlugin.js:89:43

  - Compilation.js:2022
    [cypress-component-testing]/[webpack]/lib/Compilation.js:2022:28

  - NormalModuleFactory.js:817
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:817:13


  - NormalModuleFactory.js:275
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:275:22


  - NormalModuleFactory.js:448
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:448:22

  - NormalModuleFactory.js:122
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:122:11

  - NormalModuleFactory.js:689
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:689:25

  - NormalModuleFactory.js:893
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:893:8

  - NormalModuleFactory.js:1013
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:1013:5

  - async.js:6883
    [cypress-component-testing]/[neo-async]/async.js:6883:13

  - NormalModuleFactory.js:996
    [cypress-component-testing]/[webpack]/lib/NormalModuleFactory.js:996:45

  - Resolver.js:372 finishWithoutResolve
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:372:11

  - Resolver.js:461
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:461:15

  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - DescriptionFilePlugin.js:89
    [cypress-component-testing]/[enhanced-resolve]/lib/DescriptionFilePlugin.js:    89:43

  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - Resolver.js:519
    [cypress-component-testing]/[enhanced-resolve]/lib/Resolver.js:519:5


  - DescriptionFilePlugin.js:89
    [cypress-component-testing]/[enhanced-resolve]/lib/DescriptionFilePlugin.js:    89:43

  - child-compiler.js:169
    [cypress-component-testing]/[html-webpack-plugin]/lib/child-compiler.js:169:    18

  - Compiler.js:551 finalCallback
    [cypress-component-testing]/[webpack]/lib/Compiler.js:551:5

  - Compiler.js:577
    [cypress-component-testing]/[webpack]/lib/Compiler.js:577:11

  - Compiler.js:1200
    [cypress-component-testing]/[webpack]/lib/Compiler.js:1200:17


  - task_queues:95 processTicksAndRejections
    node:internal/process/task_queues:95:5


2023-08-17 16:24:46: webpack compiled in 2205 ms (c15edf4faa78232a)
====================================================================================================
  (Run Starting)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.4                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v18.15.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (bar.component.cy.ts)                                                  │
  │ Searched:       src/**/*.cy.ts, src/**/*.cy.js                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  bar.component.cy.ts                                                             (1 of 1)

  1) custom component should have hello header
  0 passing (351ms)
  1 failing
  1) custom component should have hello header:
     Error: No element found that matches selector [data-cy-root]. Please add a root element with data-cy-root attribute to your "component-index.html" file so that Cypress can attach your component to the DOM.
      at getContainerEl (webpack://angular/./node_modules/cypress/angular/dist/index.js:60:10)
      at CypressTestComponentRenderer.removeAllRootElements (webpack://angular/./node_modules/cypress/angular/dist/index.js:167:8)
      at CypressTestComponentRenderer.insertRootElement (webpack://angular/./node_modules/cypress/angular/dist/index.js:162:13)
      at TestBedImpl.createComponent (webpack://angular/./node_modules/@angular/core/fesm2022/testing.mjs:26895:30)
      at setupFixture (webpack://angular/./node_modules/cypress/angular/dist/index.js:215:33)
      at Context.mount (webpack://angular/./node_modules/cypress/angular/dist/index.js:294:20)
      at wrapped (http://localhost:8080/__cypress/runner/cypress_runner.js:137575:43)
      at <unknown> (http://localhost:8080/__cypress/runner/cypress_runner.js:143461:15)
      at tryCatcher (http://localhost:8080/__cypress/runner/cypress_runner.js:1807:23)
```
