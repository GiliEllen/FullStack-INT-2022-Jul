const measureKelvin = function () {
    const measurement = {
      type: 'temp',
      unit: 'celsius',
      // C) FIX
    //   value: Number(prompt('Degrees celsius:')),
      value: prompt('Degrees celsius:'),
    //   value: 10,
    };
    // B) FIND
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
  };

  console.log(measureKelvin());