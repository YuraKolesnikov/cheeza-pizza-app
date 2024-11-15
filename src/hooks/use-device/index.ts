import { useEffect, useState } from 'react'

export function useDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)
  const [browserName, setBrowserName] = useState<string>('')

  useEffect(() => {
    const deviceAgent = navigator.userAgent.toLowerCase()
    setIsTouchDevice(
      Boolean(
        deviceAgent.match(/(iphone|ipod|ipad)/) ||
          deviceAgent.match(/(android)/) ||
          deviceAgent.match(/(iemobile)/) ||
          deviceAgent.match(/iphone/i) ||
          deviceAgent.match(/ipad/i) ||
          deviceAgent.match(/ipod/i) ||
          deviceAgent.match(/blackberry/i) ||
          deviceAgent.match(/bada/i)
      )
    )

    const isChrome: boolean = deviceAgent.indexOf('chrome') > -1

    if (deviceAgent.indexOf('msie') > -1) {
      /* TODO: Move browser names to enum */
      setBrowserName('ie')
    } else if (deviceAgent.indexOf('firefox') > -1) {
      setBrowserName('firefox')
    } else if (!isChrome && deviceAgent.indexOf('safari') > -1) {
      setBrowserName('safari')
    } else if (!isChrome && deviceAgent.indexOf('op') > -1) {
      setBrowserName('opera')
    } else {
      setBrowserName('chrome')
    }
  }, [])

  return {
    isTouchDevice,
    browserName,
  }
}
