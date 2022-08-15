import express from 'express';
import { getCity, getWeather, getForecast, getHistoricalWeather } from '../helpers/helper.js'

const router = express.Router();

router.post('/getweather', async (req, res) => {

  try {
    const cordinates = await getCity(req.body.city)
    console.log("cordinates", cordinates)
    if (!cordinates) throw "ungültige Stadt erfasst"
    const result = await getWeather(cordinates);
    if (!result) throw "keine Wetter-Daten zu dieser Koordinate vorhanden."

    console.log("result", result)
    res.json({
      success: true,
      cordinates: cordinates,
      result: result
    })
  } catch (error) {
    console.log("error aus catch", error)
    res.json({
      success: false,
      errormessage: error
    })
  }
})

router.post('/getforecast', async (req, res) => {

  const cordinates = await getCity(req.body.city)
  const result = await getForecast(cordinates);
  res.json({
    success: true,
    cordinates: cordinates,
    result: result
  })
})


router.get('/getHistoricalWeather', async (req, res) => {

  const result = await getForecast();
  res.json({
    success: true,
    // cordinates: cordinates,
    result: result
  })
})



export default router;