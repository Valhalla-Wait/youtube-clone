import { Box, Stack } from "@mui/material"
import { ChannelCard } from "../ChannelCard/ChannelCard"
import { VideoCard, VideoCardPropsType } from "../VideoCard/VideoCard"

type PropsType = {
    videos: any[],
    direction?: 'column'
}

export const Videos = ({videos,direction}:PropsType) => {
  if(!videos?.length) return 'Loading...'
  return (
    <Stack 
    direction={direction || 'row'}
    flexWrap='wrap'
    justifyContent='start'
    gap={2}
    >
        {!!videos.length && videos.map((item, idx) => 
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
