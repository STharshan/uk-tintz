
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {ResidentialTintingData} from "../Data/ResidentialTinting/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const ResidentialTinting = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={ResidentialTintingData} />
            <ClassOverviewSection  data={ResidentialTintingData} />
          
        </div>
    )
}

export default ResidentialTinting
