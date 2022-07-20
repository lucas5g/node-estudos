import wdio from 'webdriverio'
import path from 'path'

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "Android Emulator",
        app: path.resolve('0720.apk'),
        appPackage: "br.codificar.fomefome",
        appActivity: "br.codificar.marketplace.MainActivity",
        automationName: "UiAutomator2",
        noReset: true,
    }
};

const driver = await wdio.remote(opts);
const selector = text => `android=new UiSelector().text("${text}")`

export async function tap(text, timeout = 10) {

    await driver.$(selector(text)).waitForExist({ timeout: timeout * 1000 })
    await driver.$(selector(text)).click()
    return
}


export async function fill(text, value, timeout = 10) {
    await driver.$(selector(text)).waitForExist({ timeout: timeout * 1000 })
    await driver.$(selector(text)).setValue(value)
}


export async function waitSwipe(timeout = 5) {


    setTimeout(async() => {

            await driver.execute('mobile: scroll', { direction: 'down' });

            // driver.touchAction([
            //     { action: 'press', x: 484, y: 1708 },
            //     { action: 'moveTo', x: 491, y: 277 },
            //     'release'
            // ]);


        }, 5000)
        // }, 10000)
}