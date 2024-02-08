import React from "react";
import {Card , CardContent , CardMedia , Typography , Button , CardActions} from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from '@mui/icons-material/Link';

export const ProjectCart = ({src , name , title , techStack}) => {
  return (
    <div>
      <Card className="bg-transparent border" sx={{ maxWidth: 340  , borderRadius: "20px" , backgroundColor: "#1c1b23" , color: "#fff" }}>
        <CardMedia
          sx={{ height: 200 , }}
          image={src}
          title="green iguana"
        />
        <CardContent  sx={{color: "white"}}>
          <Typography className="text-white" gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography className="text-white" variant="body2" color="white">
           {title}
          </Typography>
          <Typography variant="h6" color="white">
           {techStack}
          </Typography>
          <div className="text-white flex justify-between">
          <button
          type="reset"
         
          className="flex items-center sm:gap-3  bg-[#131313] p-3 rounded-md"
        >
          <GitHubIcon />
          <p className="text-xs sm:text-xl">GitHub</p>
        </button>
        <button
          type="reset"
         
          className="flex items-center sm:gap-3  bg-[#291f58] p-3 rounded-md"
        >
          <LinkIcon />
          <p className="text-xs sm:text-xl">Live</p>
        </button>
          </div>
        </CardContent>

      </Card>
    </div>
  );
};
