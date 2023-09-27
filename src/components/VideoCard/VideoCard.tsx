import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export type VideoCardPropsType = {
    id: {
        videoId?: string
    },
    snippet: any
}

export const VideoCard = ({video}: any) => {
    debugger
    console.log(video?.id?.videoId)
  return (
    <Card sx={{
        width: {
            xs: '100%',
            sm: '358px',
            md: '320px'
        },
        boxShadow: 'none',
        borderRadius: 0
    }}>
        <Link to={`/video/${video?.id?.videoId}`}>
        <CardMedia 
        image={video?.snippet?.thumbnails?.high?.url} 
        sx={{
            width: {
                xs: '100%',
                sm: '358px',
                md: '320px'
            },
            height: 180
        }}
        />
        </Link>
        <CardContent
        sx={{
            backgroundColor:'#1e1e1e',
            height: '106px'
        }}
        >
            <Link to={`/video/${video?.id?.videoId}`}>
                <Typography
                variant="subtitle1"
                fontWeight='bold'
                color='#FFF'
                >
                    {video?.snippet?.title.slice(0, 60) || 'demoTitle'}
                </Typography>
            </Link>
            <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : ''}>
                <Typography
                variant="subtitle2"
                fontWeight='bold'
                color='gray'
                >
                    {video?.snippet?.channelTitle.slice(0, 60) || 'demoTitle'}
                    <CheckCircle 
                    sx={{
                        fontSize: 12,
                        color: 'gray',
                        ml: '5px'
                    }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}