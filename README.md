# Imba with Vitest and Playwright

This is a template repo that gets you set up with <https://vitest.dev> for unit tests and <https://playwright.dev> for integration tests.

It is recommended to write the unit tests while looking at the test output, so you can get a nice red-green-refactor flow going. 

However, the integration tests are best to record instead of write. That way you can re-record the steps when it breaks, making sure everything works as expected. **You do not need to spend time debugging flaky integration tests - re-record it instead!**

## Setup

`npm i`
`npx playwright install` (you may not need all of these browsers)
`npm test`
`npm start`

## Creating unit tests

_Note: Restart these scripts when you add a new file._

1. Close `npm run build:unit-watch` and `npm run test:unit` if they are running.
2. Create a new Imba file in `app/tests/vitest/` that ends with `.spec.imba`.
3. To continually rebuild, run `npm run build:unit-watch`.
4. To continually re-run tests, run `npm run test:unit`.

Optionally, you can use the vscode snippets `/describe`, `/tfull` and `/tsimple` to quickly scaffold the test structure.

## Creating integration tests

_Note: Don't write integration tests yourself - [record them](https://playwright.dev/docs/codegen) instead!_

1. Start Imba with `npm start`.
2. Open the auto recording Playwright tool with `npm run test:e2e-codegen`.
3. Go through the steps you want to have an integration test for - for example clicking a link, typing into a search field, selecting a result, etc.
4. When you're done, stop the recording.
5. In the upper right corner, make sure the default setting is active in the drop down: `Target: Playwright Test`.
6. Click the copy button next to the record button in the upper left corner, so you copy the entire recorded test.
7. Create a new file ending in `.spec.ts` in `app/tests/playwright/` and paste in the recorded steps.
8. Replace the reference to `page.goto('http://localhost:3000')`) with `page.goto('/')` instead. The setting for what is the "default root path" is configured in `playwright.config.ts`.
9. Run your test with `npm run test:e2e`.
10. Done!
