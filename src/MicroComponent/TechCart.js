import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

export const TechCart = ({ title, src }) => {
  return (
    <div className="h-fit w-[340px] bg-[#1c1b23] border rounded-3xl p-4">
      <p className="text-4xl"> {title} </p>
      <div className="flex flex-wrap gap-4 mt-6 items-center justify-around">
        {src.map((src, index) => {
          return (
            <div key={index}>
              {/* <CardMedia
                sx={{ height: 200 }}
                image={src}
                title="green iguana"
              /> */}
              <img  className="h-[80px] w-[100px] object-contain" src={src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
