import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChannelDetail } from "./components/ChannelDetail/ChannelDetail"
import { Feed } from "./components/Feed/Feed"
import { Navbar } from "./components/Navbar/Navbar"
import { SearchFeed } from "./components/SearchFeed/SearchFeed"
import { VideoDetail } from "./components/VideoDetail/VideoDetail"
function App() {

  return (
   <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />}/> 
        <Route path="/video/:id" element={<VideoDetail />}/> 
        <Route path="/channel/:id" element={<ChannelDetail />}/> 
        <Route path="/search/:searchTerm" element={<SearchFeed />}/> 
      </Routes>
    </Box>
   </BrowserRouter>
  )
}

export default App
