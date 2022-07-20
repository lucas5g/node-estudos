import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click body
  await page.locator('body').click();

  // Go to https://www.youtube.com/
  await page.goto('https://www.youtube.com/');

  // Click [placeholder="Pesquisar"]
  await page.locator('[placeholder="Pesquisar"]').click();

  // Click [placeholder="Pesquisar"]
  await page.locator('[placeholder="Pesquisar"]').click();

  // Fill [placeholder="Pesquisar"]
  await page.locator('[placeholder="Pesquisar"]').fill('sbt ');

  // Press Enter
  await page.locator('[placeholder="Pesquisar"]').press('Enter');
  await expect(page).toHaveURL('https://www.youtube.com/results?search_query=sbt+');

  // Go to https://www.youtube.com/watch?v=14O_VfvEcds
  await page.goto('https://www.youtube.com/watch?v=14O_VfvEcds');

});