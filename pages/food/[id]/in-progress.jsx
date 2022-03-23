import { useContext } from "react";
import RecipeInProgress from "../../../components/RecipeInProgress/RecipeInProgress";
import Colors from '../../../styled/colorsStyle/Colors'
function InProgress() { 
const { theme } = useContext
  return (
    <Colors theme={ theme }>
      <div className="body">
      <RecipeInProgress />
      </div>
    </Colors>
  )

}

export default InProgress;
