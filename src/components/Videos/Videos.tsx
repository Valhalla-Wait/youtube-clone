import { Box, Stack } from "@mui/material"
import { ChannelCard } from "../ChannelCard/ChannelCard"
import { VideoCard, VideoCardPropsType } from "../VideoCard/VideoCard"

type PropsType = {
    videos: any[]
}

export const Videos = ({videos}:PropsType) => {
  return (
    <Stack 
    direction='row'
    flexWrap='wrap'
    justifyContent='start'
    gap={2}
    >
        {videos.map((item, idx) => 
            <Box
            key={idx}
            >
                {item.id.videoId && <VideoCard video={item} />}
                 {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ) }
    </Stack>
  )
}
