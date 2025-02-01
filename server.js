const express = require('express');
require('dotenv').config()
const axios = require('axios');
const cors = require('cors')
const app = express()

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the AFC Richman Pro Clubs API!");
  });

  app.get("/api/club-info", async (req, res) => {
    try {
      const response = await axios.get(
        "https://proclubs.ea.com/api/fc/clubs/info?platform=common-gen5&clubIds=353675",
        {
          headers: {
            "User-Agent": "Mozilla/5.0", 
            "Accept": "application/json",
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching club data:", error.message);
      res.status(500).json({
        message: "Error getting the club data",
        error: error.message,
      });
    }
  });

  app.get("/api/player-stats", async (req,res)=>{
    try{
        const response = await axios.get(
            "https://proclubs.ea.com/api/fc/members/stats?platform=common-gen5&clubId=353675",{
                headers:{
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json",
            },
  });
  res.json(response.data);
  }catch(error){
    console.error("Error fetching player stats:", error.message);
    res.status(500).json({
        message: "Error getting the player stats",
        error: error.message,
        });
        }
        });

  app.get('/api/overall-stats', async(req,res)=>{
    try{
        const response = await axios.get(
            "https://proclubs.ea.com/api/fc/clubs/overallStats?platform=common-gen5&clubIds=353675",
            {
                headers:{
                    "User-Agent": "Mozilla/5.5",
                    "Accept": "application/json",
                    },
  });
  res.json(response.data);
  }catch(error){
    console.error("Error fetching overall stats:", error.message);
    res.status(500).json({
        message: "Error getting the overall stats",
        error: error.message,
        });
        }
        });

    app.get('/api/playoff-achievements', async(req,res)=>{
        try{
            const response = await axios.get(
                "https://proclubs.ea.com/api/fc/club/playoffAchievements?platform=common-gen5&clubId=353675",
                {
                    headers:{
                        "User-Agent": "Mozilla/5.5",
                        "Accept": "application/json",
                        },
    });
    res.json(response.data);
    }catch(error){
        console.error("Error fetching playoff achievements:", error.message);
        res.status(500).json({
            message: "Error getting the playoff achievements",
            error: error.message,
            });
            }
            });

    app.get('/api/matches', async(req,res)=>{
                try{
                    const response = await axios.get(
                        "https://proclubs.ea.com/api/fc/clubs/matches?platform=common-gen5&clubIds=353675&matchType=leagueMatch&maxResultCount=1",
                        {
                            headers:{
                                "User-Agent": "Mozilla/5.5",
                                "Accept": "application/json",
                                },
            });
            res.json(response.data);
            }catch(error){
                console.error("Error fetching playoff achievements:", error.message);
                res.status(500).json({
                    message: "Error getting the playoff achievements",
                    error: error.message,
                    });
                    }
                    });

    


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})