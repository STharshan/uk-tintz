
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {SunVisorServiceData} from "../Data/SunVisors/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const SunVisors = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={SunVisorServiceData} />
            <ClassOverviewSection  data={SunVisorServiceData} />
          
        </div>
    )
}

export default SunVisors
