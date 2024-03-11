//1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ and store it within an object. Print the object to the terminal
// 2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object
// 3). Do the same for the following cities:
//  Los Angeles
// Miami
// Charlotte
// Houston
// Seattle
// 4). Add each city to an array
// 5). Print out the city that will be the warmest in 4 hours

let citydata = [
    {
      data: {
        time: "2024-03-08T19:54:00Z",
        values: {
          cloudBase: null,
          cloudCeiling: null,
          cloudCover: 2,
          dewPoint: -5.38,
          freezingRainIntensity: 0,
          humidity: 35,
          precipitationProbability: 0,
          pressureSurfaceLevel: 1022.69,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 55.4,
          temperatureApparent: 13,
          uvHealthConcern: 0,
          uvIndex: 1,
          visibility: 16,
          weatherCode: 1000,
          windDirection: 126.63,
          windGust: 1.69,
          windSpeed: 0.88,
        },
      },
      location: {
        lat: 40.73565673828125,
        lon: -74.17236328125,
        name: "Newark, Essex County, New Jersey, United States",
        type: "administrative",
      },
    },
    {
      data: {
        time: "2024-03-08T19:57:00Z",
        values: {
          cloudBase: null,
          cloudCeiling: null,
          cloudCover: 5,
          dewPoint: 10.88,
          freezingRainIntensity: 0,
          humidity: 64,
          precipitationProbability: 0,
          pressureSurfaceLevel: 1005.55,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 64.1,
          temperatureApparent: 17.88,
          uvHealthConcern: 2,
          uvIndex: 6,
          visibility: 16,
          weatherCode: 1000,
          windDirection: 234.31,
          windGust: 2.19,
          windSpeed: 1.88,
        },
      },
      location: {
        lat: 34.05369186401367,
        lon: -118.24276733398438,
        name: "Los Angeles, California, United States",
        type: "administrative",
      },
    },
    {
      data: {
        time: "2024-03-08T19:57:00Z",
        values: {
          cloudBase: 0.33,
          cloudCeiling: 0.33,
          cloudCover: 88,
          dewPoint: 23.81,
          freezingRainIntensity: 0,
          humidity: 86,
          precipitationProbability: 0,
          pressureSurfaceLevel: 1012.9,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 79.4,
          temperatureApparent: 26.38,
          uvHealthConcern: 1,
          uvIndex: 4,
          visibility: 15.83,
          weatherCode: 1001,
          windDirection: 139,
          windGust: 5.69,
          windSpeed: 1.81,
        },
      },
      location: {
        lat: 25.774173736572266,
        lon: -80.19361877441406,
        name: "Miami, Miami-Dade County, Florida, United States",
        type: "city",
      },
    },
    {
      data: {
        time: "2024-03-08T19:58:00Z",
        values: {
          cloudBase: 0.52,
          cloudCeiling: 0.52,
          cloudCover: 100,
          dewPoint: 12.31,
          freezingRainIntensity: 0,
          humidity: 77,
          precipitationProbability: 0,
          pressureSurfaceLevel: 994.3,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 61.4,
          temperatureApparent: 16.38,
          uvHealthConcern: 0,
          uvIndex: 1,
          visibility: 16,
          weatherCode: 1001,
          windDirection: 115.19,
          windGust: 6,
          windSpeed: 3.5,
        },
      },
      location: {
        lat: 35.22720718383789,
        lon: -80.84308624267578,
        name: "Charlotte, Mecklenburg County, North Carolina, United States",
        type: "administrative",
      },
    },
    {
      data: {
        time: "2024-03-08T19:58:00Z",
        values: {
          cloudBase: 0.74,
          cloudCeiling: 0.74,
          cloudCover: 100,
          dewPoint: 22.5,
          freezingRainIntensity: 0,
          humidity: 71,
          precipitationProbability: 0,
          pressureSurfaceLevel: 1004.39,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 83.5,
          temperatureApparent: 32.09,
          uvHealthConcern: 1,
          uvIndex: 2,
          visibility: 15.97,
          weatherCode: 1001,
          windDirection: 258.69,
          windGust: 5.5,
          windSpeed: 2.31,
        },
      },
      location: {
        lat: 29.75893783569336,
        lon: -95.3676986694336,
        name: "Houston, Harris County, Texas, United States",
        type: "administrative",
      },
    },
    {
      data: {
        time: "2024-03-08T19:58:00Z",
        values: {
          cloudBase: 0.86,
          cloudCeiling: 0.86,
          cloudCover: 100,
          dewPoint: 1.69,
          freezingRainIntensity: 0,
          humidity: 62,
          precipitationProbability: 0,
          pressureSurfaceLevel: 1017.15,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity: 0,
          temperature: 47,
          temperatureApparent: 8.38,
          uvHealthConcern: 1,
          uvIndex: 2,
          visibility: 16,
          weatherCode: 1001,
          windDirection: 214,
          windGust: 2.19,
          windSpeed: 1.63,
        },
      },
      location: {
        lat: 47.60383224487305,
        lon: -122.33006286621094,
        name: "Seattle, King County, Washington, United States",
        type: "administrative",
      },
    },
  ];
  
  let futureTemps = [
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 54.73,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 53.61,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 50.46,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 46.91,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 43.72,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 41.73,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 40.72,
                },
              },
            ],
          },
        ],
      },
    },
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 64.96,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 65.04,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 66,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 64.8,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 63.07,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 61.13,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 58.47,
                },
              },
            ],
          },
        ],
      },
    },
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 79.93,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 82.44,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 81.5,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 79.64,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 77.85,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 77.16,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 76.57,
                },
              },
            ],
          },
        ],
      },
    },
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 62.04,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 63.43,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 62.74,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 61.27,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 58.54,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 57.83,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 56.97,
                },
              },
            ],
          },
        ],
      },
    },
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 82.96,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 75.82,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 75.81,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 75.28,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 72.55,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 70.47,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 68.59,
                },
              },
            ],
          },
        ],
      },
    },
    {
      data: {
        timelines: [
          {
            timestep: "1h",
            endTime: "2024-03-09T02:00:00Z",
            startTime: "2024-03-08T20:00:00Z",
            intervals: [
              {
                startTime: "2024-03-08T20:00:00Z",
                values: {
                  temperature: 47.64,
                },
              },
              {
                startTime: "2024-03-08T21:00:00Z",
                values: {
                  temperature: 48.05,
                },
              },
              {
                startTime: "2024-03-08T22:00:00Z",
                values: {
                  temperature: 48.37,
                },
              },
              {
                startTime: "2024-03-08T23:00:00Z",
                values: {
                  temperature: 49.05,
                },
              },
              {
                startTime: "2024-03-09T00:00:00Z",
                values: {
                  temperature: 48.59,
                },
              },
              {
                startTime: "2024-03-09T01:00:00Z",
                values: {
                  temperature: 48.35,
                },
              },
              {
                startTime: "2024-03-09T02:00:00Z",
                values: {
                  temperature: 47.02,
                },
              },
            ],
          },
        ],
      },
    },
  ];

  let citydatacoll = [];
  let warmesttemp = 0;
  let Warmestcitydata = {};
for (let i=0;i<citydata.length;i++) {
    let newcitys = {
        name:citydata[i].location.name,
        temperature: citydata[i].data.values.temperature,
        uvindex: citydata[i].data.values.uvIndex,
        winddirection: citydata[i].data.values.windDirection,
        windspeed: citydata[i].data.values.windSpeed,
        rainchance: citydata[i].data.values.precipitationProbability,
        fourhourOutlook: futureTemps[i].data.timelines[0].intervals[4].values.temperature

    }
    // I use the array i want to push it in .push to push and newcitys in the perenthisies in order to push newcitys object just created into the usefulstats array
    citydatacoll.push(newcitys)
}

for (let j =0;j<citydatacoll.length;j++){
 if(citydatacoll[j].fourHourOutlook > warmesttemp){
  warmesttemp = citydatacoll[j].fourHourOutlook;
  Warmestcitydata = citydatacoll[j].name
  }
}

console.log(citydatacoll)
console.log(Warmestcitydata)


