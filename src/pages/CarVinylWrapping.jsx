
import ClassOverviewSection from "../components/Common/ClassOverviewSection"

import {CarVinylWrappingData} from "../Data/CarVinylWrapping/InnerBannerData"
import InnerBannerSectionData from "../components/Common/InnerBannerSection"
const CarVinylWrapping = () => {
    return (
        <div>
         
            <InnerBannerSectionData data={CarVinylWrappingData} />
            <ClassOverviewSection  data={ CarVinylWrappingData} />
          
        </div>
    )
}

export default CarVinylWrapping
