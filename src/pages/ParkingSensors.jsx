
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {ParkingSensorData} from "../Data/Parking Sensors/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const ParkingSensors = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={ParkingSensorData} />
            <ClassOverviewSection  data={ParkingSensorData} />
          
        </div>
    )
}

export default ParkingSensors
