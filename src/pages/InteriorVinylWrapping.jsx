
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {InteriorVinylWrappingData} from "../Data/InteriorVinylWrapping/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const InteriorVinylWrapping = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={InteriorVinylWrappingData} />
            <ClassOverviewSection  data={InteriorVinylWrappingData} />
          
        </div>
    )
}

export default InteriorVinylWrapping
