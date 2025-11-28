
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {ReverseCameraData} from "../Data/ReverseCamera/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const  ReverseCamera = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={ReverseCameraData} />
            <ClassOverviewSection  data={ReverseCameraData} />
          
        </div>
    )
}

export default  ReverseCamera
