import { test, expect,_android } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('/backend/web/login');

    // Fill [placeholder="Informe o seu e-mail"]
    await page.locator('[placeholder="Informe o seu e-mail"]').fill('admin@codificar.com.br');

    // Fill [placeholder="Informe a sua senha"]
    await page.locator('[placeholder="Informe a sua senha"]').fill('qweqwe');

    // Press Enter
    await page.locator('[placeholder="Informe a sua senha"]').press('Enter');
    await expect(page).toHaveURL('/backend/web/admin/site/index');


});

test('android', async () => {
    const [device] = await _android.devices()
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the whole device.
    await device.screenshot({ path: 'device.png' });

    await device.shell('am start br.codificar.fomefome/br.codificar.marketplace.MainActivity');

    await device.tap()
    // await device.shell('am force-stop org.chromium.webview_shell');
    // const webview = await device.webView({ pkg: 'br.codificar.fomefome' });


})