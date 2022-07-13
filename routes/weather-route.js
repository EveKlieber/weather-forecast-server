import express from 'express';
import { getCity, getWeather, getForecast } from '../helpers/helper.js'

const router = express.Router();

router.post('/getweather', async (req, res) => {

  const cordinates = await getCity(req.body.city)
  const result = await getWeather(cordinates);
    res.json({
      success: true,
      cordinates: cordinates,
      result: result
    })
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


export default router;