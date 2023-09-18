import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export type VideoCardPropsType = {
    id: {
        videoId: string
    },
    snippet: any
}

export const VideoCard = ({id:{videoId}, snippet}: any) => {
  return (
    <Card sx={{
        width: {
            md: '320px',
            xs: '1005'
        },
        boxShadow: 'none',
        borderRadius: 0
    }}>
        <Link to={videoId ? `/video/${videoId}` : ''}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        sx={{
            width: 358,
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
            <Link to={videoId ? `/video/${videoId}` : ''}>
                <Typography
                variant="subtitle1"
                fontWeight='bold'
                color='#FFF'
                >
                    {snippet?.title.slice(0, 60) || 'demoTitle'}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ''}>
                <Typography
                variant="subtitle2"
                fontWeight='bold'
                color='gray'
                >
                    {snippet?.channelTitle.slice(0, 60) || 'demoTitle'}
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