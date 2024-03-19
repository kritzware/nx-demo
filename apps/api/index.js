const express = require('express')
const {TerritoryHelper} = require('@curveroyaltysystems/curve-shared-logic')

const app = express()

app.get('/', (req, res) => {
    res.json(TerritoryHelper.allTerritories)
})

app.listen(8081, () => console.log('running api'))