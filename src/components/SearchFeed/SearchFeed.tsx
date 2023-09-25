import { fetchData } from "@/utils/fetchVideos"
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Videos } from "../Videos/Videos"

export const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams()

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
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
        Search resultt for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos as any[]} />

    </Box>
  )
}