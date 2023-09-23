import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    // <div className="app">
    //   <BrowserRouter>
    //     {/* <ThemeProvider theme={theme}> */}
    //       {/* <CssBaseline /> */}
    //       <Routes>
    //         <Route path="/" element={<LoginPage />} />
    //         <Route
    //           path="/home"
    //           element={isAuth ? <HomePage /> : <Navigate to="/" />}
    //         />
    //         <Route
    //           path="/profile/:userId"
    //           element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
    //         />
    //       </Routes>
    //     {/* </ThemeProvider> */}
    //   </BrowserRouter>
    // </div>

    /*
      Here I have disabled authentication check for development purpose only
      Above given code has the auth check after the ui works done we can remove below code
      use the above code
    */
    <div className="app">
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={<HomePage />}
            />
            <Route
              path="/profile"
              element={<ProfilePage />}
            />
          </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  )
}

export default App
