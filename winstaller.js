const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('Creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(rootPath, 'Mint-win32-x64'),
    authors: 'MintNetwork',
    version: process.env.MINT_INSTALLER_VERSION,
    noMsi: true,
    iconUrl: 'https://raw.githubusercontent.com/MintNetwork/mint-blockchain-gui/main/src/assets/img/mint.ico',
    outputDirectory: path.join(outPath, 'windows-installer'),
    // certificateFile: 'win_code_sign_cert.p12',
    // certificatePassword: process.env.WIN_CODE_SIGN_PASS,
    exe: 'Mint.exe',
    setupExe: 'MintSetup-' + process.env.MINT_INSTALLER_VERSION + '.exe',
    setupIcon: path.join(rootPath, 'src', 'assets', 'img', 'mint.ico')
  })
}
