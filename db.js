const { Pool, Client } = require('pg')
const pool = new Pool()

async function getEntry(place_id, weekDay) {    
    try {
        const res = await pool.query(`SELECT * FROM opening_hours.opening_hours WHERE id='${place_id}'`)
        const data = JSON.parse(res.rows[0].opening_hours_periods)
        return data.find(e => e.close.day == weekDay)

    } catch (e) {
        console.log(e)
        console.log("SQL SELECT failed.")
    }
}


process.on('SIGINT', () => {
    console.log("Received SIGINT. Closing connection to DB." )
    pool.end();
})

module.exports = getEntry

getEntry('ChIJpcfoAl8dREYRsenKNRsVFVo');