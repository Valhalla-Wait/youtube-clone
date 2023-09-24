import { fetchData } from "@/utils/fetchVideos";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ChannelCard } from "../ChannelCard/ChannelCard";
import { Videos } from "../Videos/Videos";

export const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState<any | null>(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then(
      (data) => setChannelDetail(data?.items[0])
    )
    fetchData(`search?channelId=${id}&part=snippet&order=data`).then(
      (data) => setVideos(data?.items[0])
    )
  }, [])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: ' linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%);',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{
          mr: {sm: '100px'}
        }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}