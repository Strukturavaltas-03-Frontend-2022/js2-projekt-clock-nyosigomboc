
const MILLISECONDS_IN_A_SECOND = 1000

const clockDiv = document.querySelector('.clock')

const setText = msg => clockDiv.innerHTML = msg

const getTime = () => new Date().toLocaleTimeString('hu')

const update = () => setText(getTime())

const getMillisUntilNextSecond = () => MILLISECONDS_IN_A_SECOND - (Date.now() % MILLISECONDS_IN_A_SECOND)

const setOurTimeout = () =>
{
    update()
    setTimeout(setOurTimeout, getMillisUntilNextSecond())
}

setOurTimeout()
