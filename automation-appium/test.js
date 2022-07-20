import wdio from 'webdriverio'

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "Android Emulator",
        app: "/media/lucas/ARQUIVOS1/dev/node-estudos/automation-appium/0720.apk",
        //   appPackage: "io.appium.android.apis",
        appActivity: "br.codificar.marketplace.MainActivity",
        automationName: "UiAutomator2"
    }
};

async function main() {
    const driver = await wdio.remote(opts);


    const selector = text => `android=new UiSelector().text("${text}")`

    await driver.$(selector("Usar localização atual")).click()
    await driver.$(selector("Durante o uso do app")).click()
    await driver.$(selector("Entre ou cadastre-se")).click()

    await driver.$(selector("Email")).setValue('lucas@mail.com')
    await driver.$(selector("Senha")).setValue('qweqwe')
    await driver.$(selector("Entrar")).click()

    await driver.$(selector("Categorias")).waitForExist({ timeout: 6000 })

    setTimeout(async() => {

        await driver.swipe(
            await driver.$(selector('Categorias'))[538][][, speed]);


        await driver.touchAction([
            { action: 'press', x: 538, y: 1650 },
            { action: 'moveTo', x: 522, y: 659 },
            'release'
        ]);
    }, 3000)




    setTimeout(async() => {
        await driver.deleteSession();

    }, 30000)
}

main();