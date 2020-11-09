const express = require('express')
const cors = require('cors')
const app = express()
const port = 1025 + 8

app.use(cors())

const SimpleNodeLogger = require('simple-node-logger')
const opts = {
    logFilePath:'mylogfile.log',
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
}
const log = SimpleNodeLogger.createSimpleLogger( opts );

const dictionary = [
    { key: 'Обцаси', value: 'Каблуки' },
    { key: 'Блават', value: 'волошка' },
    { key: 'Когут', value: 'півень' },
    { key: 'Шитик', value: 'пасок' },
    { key: 'Мешти', value: 'чобітки' },
    { key: 'Філіжанка', value: 'чашка' },
    { key: 'Коліжанка', value: 'подруга' },
    { key: 'Лохачі', value: 'лохина' },
    { key: 'Коцик', value: 'ковдра' },
    { key: 'Канапка', value: 'бутерброд' },
    { key: 'Who', value: '😽 Ангеліна Ленартович, variant 8, Перекладач' },
]

app.get('/terms', (req, res) => {
    const { term } = req.query

    if (!term) {
        res.status(404)
        res.send('Not Found!')
        res.end()
    }

    const response = dictionary.find(el => el.key === term)

    if (!response) {
        res.status(404)
        res.send('Not Found!')
        res.end()
    } else {
        log.log('info', term)
        res.send(response.value)
        res.end()
    }
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})