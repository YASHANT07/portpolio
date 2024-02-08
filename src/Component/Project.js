import React from "react";
import { ProjectCart } from "../MicroComponent/ProjectCart";
import chatApp from "../Assect/chat-app.png";
import resumeMaker from "../Assect/resume-maker.png";
import shop from "../Assect/atish-shop.png";
import mindPlus from "../Assect/mind-plus.png";

export const Project = () => {
  return (
    <div className="px-8">
      <p className="text-2xl mb-5">Projects</p>
      <div className="flex flex-wrap gap-5">
        <ProjectCart
          src={chatApp}
          name={"Chat App"}
          title={"Real Time Chat"}
          techStack={"React Js , Node Js , Express Js , MongoDB , Socket.IO"}
        />

        <ProjectCart
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQlbf4E_iI5wtp7UNTYS4uby1e7Hya6swmQ&usqp=CAU"
          }
          name={"Personal Wallet"}
          title={"Real Time Chat"}
          techStack={"React Js , Node Js , Express Js , MongoDB , Socket.IO"}
        />

        <ProjectCart
          src={resumeMaker}
          name={"Resume Maker"}
          title={"Real Time Chat"}
          techStack={"React Js , Node Js , Express Js , MongoDB , Socket.IO"}
        />

        <ProjectCart
          src={shop}
          name={"Chat App"}
          title={"Real Time Chat"}
          techStack={"React Js , Node Js , Express Js , MongoDB , Socket.IO"}
        />

        <ProjectCart
          src={"https://w7.pngwing.com/pngs/363/476/png-transparent-mental-disorder-mental-health-health-care-health-psychology-silhouette-medical-care.png"}
          name={"Chat App"}
          title={"Real Time Chat"}
          techStack={"React Js , Node Js , Express Js , MongoDB , Socket.IO"}
        />
      </div>
    </div>
  );
};
