import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {HiSun, HiOutlineSun} from "react-icons/hi";
import {BsFillDropletFill, BsDroplet} from "react-icons/bs";
import{RiCelsiusLine} from "react-icons/ri";
import "./IconsStyles.scss";
import PlantDifficulty from 'models/PlantDifficulty';
import PlantExposure from 'models/PlantExposure';
import PlantHumidity from 'models/PlantHumidity';

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

const plantExposureOptions = [
  new PlantExposure('dark', 'Full shade', '\u2601'),
  new PlantExposure('shade', 'Partial shade', '\u26C5'),
  new PlantExposure('partsun', 'Light shade', '\u{1F324}'),
  new PlantExposure('fullsun', 'Full sun', '\u2600'),
];

const plantDifficultyOptions = [
  new PlantDifficulty(1, 'Very easy', 1, 'You won\'t be able to kill this plant no matter what'),
  new PlantDifficulty(2, 'Easy', 2, 'Well, to keep this one alive one has to water it once in a while'),
  new PlantDifficulty(3, 'Medium', 3, 'A regular flower with moderate care requirements'),
  new PlantDifficulty(4, 'Hard', 4, 'This plant will require a lot of love and regular care'),
  new PlantDifficulty(5, 'Very hard', 5, 'Damn princess. Will find thousand of reasons to die'),
];

const humidity = {
    "low": <div><BsFillDropletFill className="dropfull"/> <BsDroplet className="dropless"/> <BsDroplet
        className="dropless"/></div>,
    "medium": <div><BsFillDropletFill className="dropfull"/> <BsFillDropletFill className="dropfull"/> <BsDroplet
        className="dropless"/></div>,
    "high": <div><BsFillDropletFill className="dropfull"/> <BsFillDropletFill className="dropfull"/><BsFillDropletFill className="dropfull"/></div>,

}
const plantHumidityOptions = [
  new PlantHumidity('low', 'Dry', 1),
  new PlantHumidity('medium', 'Standard', 2),
  new PlantHumidity('high', 'Moist', 3),
];

const temp = {
  "warm": <div className='temperature'><span style={{color:"red"}}>25 - 35</span> < RiCelsiusLine style={{color:"red"}} className="celsius"/> </div>,
  "cold": <div className='temperature'><span style={{color:"blue"}}>10- 18</span> < RiCelsiusLine style={{color:"blue"}} className="celsius"/> </div>,
  "medium": <div className='temperature'><span style={{color:"orange"}}>18 - 25</span> < RiCelsiusLine style={{color:"orange"}} className="celsius"/> </div>,
}
const plantTemperatureOptions = [
  { id: 'cold', name: 'Cold' },
  { id: 'medium', name: 'Moderate' },
  { id: 'warm', name: 'Warm' },
];

export {difficulties, exposure,humidity,temp, plantDifficultyOptions, plantExposureOptions,plantHumidityOptions, plantTemperatureOptions};
