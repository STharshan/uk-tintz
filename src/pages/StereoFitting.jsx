
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {StereoFittingData} from "../Data/StereoFitting/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const  StereoFitting = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={StereoFittingData} />
            <ClassOverviewSection  data={StereoFittingData} />
          
        </div>
    )
}

export default  StereoFitting
