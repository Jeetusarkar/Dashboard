import React from "react";
import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Teams from "./scenes/team/Team";
import Invoices from "./scenes/invoices/invoices";
import Contacts from "./scenes/contacts/Contact";
import Form from "./scenes/form/form";
import Calendar from "./scenes/calendar/calendar";
import FAQ from "./scenes/faq/faq";
import Bar from "./scenes/bar/bar";
import Pie from "./scenes/pie/pie";
import Line from "./scenes/line/line";
import Geography from "./scenes/geography/geography";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="Content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Teams />} />
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
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
