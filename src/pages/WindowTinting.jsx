

import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {WindowTintingData} from "../Data/WindowTinting/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const  WindowTinting = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={WindowTintingData} />
            <ClassOverviewSection  data={WindowTintingData} />
          
        </div>
    )
}

export default  WindowTinting
