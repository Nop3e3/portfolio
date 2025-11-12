import React from "react";
import Foldercontent from "../common/Foldercontent";
import MainButton from "../common/MainButton";
import "./Folders.css";
export default function Folders() {
    
  return (
    <div className="folders-section">
<div className=" yellow folder">
    <div className="Name one">Discover</div>
  <div className="content"><Foldercontent   category="Step 01"
        title="Like Going on a First Date, But With Your Users"
        caption="This is where curiosity takes the lead. I dive into understanding users, their goals, and their pain points through research, interviews, and exploration. It’s all about asking the right questions and uncovering insights that guide every design decision ahead" />
<MainButton label="Learn more 🡥" />
</div></div>
<div className=" pink folder">
    <div className="Name two">Define</div>
  <div className="content"><Foldercontent   category="Step 02"
        title="Turning “Aha!” Moments Into a Game Plan"
        caption="After gathering insights, I organize the chaos. Here, I translate findings into clear problem statements, user personas, and experience goals. This stage shapes the project’s direction and turning data into design clarity." />
<MainButton label="Learn more 🡥" />
</div></div>

<div className=" Blue folder">
    <div className="Name three">Define</div>
  <div className="content"><Foldercontent   category="Step 03"
        title="Bringing Ideas to Life (Without the Commitment… Yet)"
        caption="Ideas come to life! I sketch, wireframe, and build interactive prototypes to visualize and test concepts early. It’s a playground for creativity, where I experiment, refine, and bring structure to imagination." />
<MainButton label="Learn more 🡥" />
</div></div>
<div className=" green folder">
    <div className="Name four">Polish</div>
  <div className="content"><Foldercontent   category="Step 04"
        title="From Scribbles to Sparkles"
        caption="I turn rough concepts into refined experiences. Through iteration, feedback, and thoughtful adjustments, I polish ideas into clear, testable designs that bridge imagination and reality. It’s the stage where creativity meets precision." />
<MainButton label="Learn more 🡥" />
</div></div>
    </div>
  );
}