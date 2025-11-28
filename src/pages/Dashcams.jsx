
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {DashcamData} from "../Data/Dashcams/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const Dashcams = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={DashcamData} />
            <ClassOverviewSection  data={DashcamData} />
          
        </div>
    )
}

export default Dashcams
