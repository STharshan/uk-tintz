
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {HeadlightTaillightTintingData} from "../Data/HeadlightTaillightTinting/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const HeadlightTaillightTinting = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={HeadlightTaillightTintingData} />
            <ClassOverviewSection  data={HeadlightTaillightTintingData} />
          
        </div>
    )
}

export default HeadlightTaillightTinting
