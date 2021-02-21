import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {HiSun, HiOutlineSun} from "react-icons/hi";
import {BsFillDropletFill, BsDroplet} from "react-icons/bs";
import{RiCelsiusLine} from "react-icons/ri";
import "./IconsStyles.scss";

const difficulties = {
    1: <div className='stars'>
        <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
    </div>,
    2: <div className='stars'>
        <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
    </div>,
    3: <div className='stars'>
        <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/>
    </div>,
    4: <div className='stars'>
        <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>
    </div>,
    5: <div className='stars'>
        <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
    </div>,

}

const exposure = {
    "partsun": <div><HiSun className='bright'/> <HiOutlineSun className='dark'/> <HiOutlineSun className='dark'/>
        <HiOutlineSun className='dark'/></div>,


    "fullsun":
        <div><HiSun className='bright'/> <HiSun className='bright'/><HiOutlineSun className='dark'/> <HiOutlineSun
            className='dark'/></div>,


    "shade":
        <div><HiSun className='bright'/> <HiSun className='bright'/><HiSun className='bright'/><HiOutlineSun
            className='dark'/></div>,

    "dark":
        <div><HiSun className='bright'/> <HiSun className='bright'/><HiSun className='bright'/><HiSun
            className='bright'/></div>,
}

const humidity = {
    "low": <div><BsFillDropletFill className="dropfull"/> <BsDroplet className="dropless"/> <BsDroplet
        className="dropless"/></div>,
    "medium": <div><BsFillDropletFill className="dropfull"/> <BsFillDropletFill className="dropfull"/> <BsDroplet
        className="dropless"/></div>,
    "high": <div><BsFillDropletFill className="dropfull"/> <BsFillDropletFill className="dropfull"/><BsFillDropletFill className="dropfull"/></div>,

}

const temp = {
  "warm": <div className='temperature'><span style={{color:"red"}}>25 - 35</span> < RiCelsiusLine style={{color:"red"}} className="celsius"/> </div>,
  "cold": <div className='temperature'><span style={{color:"blue"}}>10- 18</span> < RiCelsiusLine style={{color:"blue"}} className="celsius"/> </div>,
  "medium": <div className='temperature'><span style={{color:"orange"}}>18 - 25</span> < RiCelsiusLine style={{color:"orange"}} className="celsius"/> </div>,
}

export {difficulties, exposure,humidity,temp};
