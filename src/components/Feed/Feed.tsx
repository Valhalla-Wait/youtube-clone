import { Box, Stack, Typography } from "@mui/material"
import { Sidebar } from "../Sidebar/Sidebar"
import { Videos } from "../Videos/Videos"
import { useEffect, useState } from "react"
import { fetchVideos } from "@/utils/fetchVideos"

export const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
   <Stack
   sx={{
    flexDirection: {
      sx: 'column',
      md: 'row'
    }
   }}
   >
    <Box
    sx={{
      height: {
        sx: 'auto',
        md: '92vh'
      },
      borderRight: '1px solid #3d3d3d',
      px: {
        sx: 0,
        md: 2
      }
    }}
    >
      <Sidebar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <Typography 
      className="copyright"
      variant="body2"
      sx={{
        mt: 1.5,
        color: '#fff'
      }}
      >
        Copyright 2023 Valhalla-Wait
      </Typography>
    </Box>
    <Box p={2} style={{
      overflowY: 'auto',
      height:'90vh',
      flex: 2
    }}>
    <Typography 
      className="copyright"
      variant="h4"
      mb={2}
      fontWeight='bold'
      sx={{
        color: 'white'
      }}
      >
        {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
      </Typography>

      <Videos videos={videos as []} />

    </Box>
   </Stack>
  )
}
