
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {CommercialWindowData} from "../Data/commercialwindow/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const Commercialwindow = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={CommercialWindowData} />
            <ClassOverviewSection  data={CommercialWindowData} />
          
        </div>
    )
}

export default Commercialwindow
