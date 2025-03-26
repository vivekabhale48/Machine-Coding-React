import data from './data.json'
import { FileExplorer } from './FileExplorer'
export const FolderStructureSection = () => {


  return (
    <div>
      <FileExplorer data={data}/>
    </div>
  )
}