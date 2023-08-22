/** @format */

import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Pages/Global/Topbar";
import SideBar from "./Pages/Global/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team";
import Contacts from "./Pages/Contacts";
import Invoices from "./Pages/Invoices";
import Form from "./Pages/Form";
import Calendar from "./Pages/Calendar";
import FAQ from "./Pages/FAQ";
import Bar from "./Pages/Bar";
import Pie from "./Pages/Pie";
import Line from "./Pages/Line";
import Geography from "./Pages/Geography";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <SideBar />
          <Box className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
