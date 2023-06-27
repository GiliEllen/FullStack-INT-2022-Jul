import { Stack, Box, TextField, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";

const SelectCom = () => {
  const [lesson, setLesson] = useState<string>("");
  const [lessons, setLessons] = useState<string[]>([]);
  const [dates, setDates] = useState([{date: new Date().getDay() +1, times: []}])

  const handlechange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLesson(ev.target.value);
  };
  const handlechangeArray = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setLessons(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    console.log(lessons);
  }, [lessons]);

  return (
    <>
      <Box mt={5} width={"250px"}>
        <TextField
          label="Select Class"
          select
          value={lesson}
          onChange={handlechange}
          fullWidth
        >
          <MenuItem value="PE">Physical education</MenuItem>
          <MenuItem value="MATH">Math</MenuItem>
          <MenuItem value="EN">English</MenuItem>
        </TextField>
      </Box>
      <Box mt={5} width={"250px"}>
        <TextField
          label="Select Classes"
          select
          value={lessons}
          onChange={handlechangeArray}
          fullWidth
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="PE">Physical education</MenuItem>
          <MenuItem value="MATH">Math</MenuItem>
          <MenuItem value="EN">English</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default SelectCom;
